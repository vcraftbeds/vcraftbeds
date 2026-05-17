require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const SITE_URL = (process.env.SITE_URL || '').trim();
const STRIPE_SECRET_KEY = (process.env.STRIPE_SECRET_KEY || '').trim();
const STRIPE_PUBLISHABLE_KEY = (process.env.STRIPE_PUBLISHABLE_KEY || '').trim();
const stripe = STRIPE_SECRET_KEY ? Stripe(STRIPE_SECRET_KEY) : null;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/config', (_req, res) => {
  res.json({ stripePublishableKey: STRIPE_PUBLISHABLE_KEY, siteUrl: SITE_URL });
});

app.post('/create-checkout-session', async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({ error: 'Stripe is not configured yet.' });
    }
    if (!SITE_URL) {
      return res.status(500).json({ error: 'SITE_URL is missing.' });
    }
    const items = Array.isArray(req.body.items) ? req.body.items : [];
    if (!items.length) {
      return res.status(400).json({ error: 'Your cart is empty.' });
    }
    const line_items = items.map(item => {
      const amount = Math.round(Number(item.price) * 100);
      const quantity = Math.max(1, Number(item.quantity) || 1);
      if (!item.name || !Number.isFinite(amount) || amount <= 0) {
        throw new Error('Invalid item in checkout request.');
      }
      return {
        price_data: {
          currency: 'gbp',
          product_data: { name: item.name },
          unit_amount: amount,
        },
        quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB'],
      },
      customer_creation: 'always',
      phone_number_collection: { enabled: true },
      line_items,
      success_url: `${SITE_URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/cancel.html`,
      metadata: { store: 'V Craft Beds' },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Stripe session creation failed:', error);
    res.status(500).json({ error: error.message || 'Unable to start checkout.' });
  }
});

app.get('*', (req, res, next) => {
  if (path.extname(req.path)) {
    return next();
  }
  if (req.path === '/' || req.path === '') {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }
  return next();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
