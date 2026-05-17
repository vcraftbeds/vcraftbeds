
const FABRIC_COLLECTIONS = {
  teddy: {
    key: 'teddy',
    name: 'Teddy',
    shortName: 'Teddy',
    finish: 'Soft textured bouclé feel',
    description: 'A cosy, tactile fabric family for softer, warmer bedroom styling.',
    surcharge: 20,
    colors: [
      { name: 'Beige', hex: '#d6c6b8' },
      { name: 'Biscuit', hex: '#cbb39a' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Brown', hex: '#5a4636' },
      { name: 'Cream', hex: '#f2e9dc' },
      { name: 'Duck Egg', hex: '#c7d6d3' },
      { name: 'Grey', hex: '#8a8a8a' },
      { name: 'Ivory', hex: '#f6f4ef' },
      { name: 'Mink', hex: '#9b8b7a' },
      { name: 'Natural', hex: '#e3d7c9' },
      { name: 'Pink', hex: '#e8c7c8' },
      { name: 'Silver', hex: '#cfcfcf' },
      { name: 'Stone', hex: '#b7a89a' },
      { name: 'White', hex: '#ffffff' }
    ]
  },

  coniston: {
    key: 'coniston',
    name: 'Coniston',
    shortName: 'Coniston',
    finish: 'Woven fabric with a tailored look',
    description: 'A refined woven upholstery finish with a clean, structured appearance.',
    surcharge: 20,
    colors: [
      { name: 'Beige', hex: '#d8c7b1' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Blue', hex: '#4a6a8a' },
      { name: 'Brown', hex: '#5a4636' },
      { name: 'Charcoal', hex: '#3a3a3a' },
      { name: 'Cream', hex: '#f1e6d6' },
      { name: 'Dark Grey', hex: '#4b4b4b' },
      { name: 'Light Grey', hex: '#bfbfbf' },
      { name: 'Mink', hex: '#8f7c6e' },
      { name: 'Natural', hex: '#e0d5c4' },
      { name: 'Sand', hex: '#d8c7b1' },
      { name: 'Silver', hex: '#c9c9c9' },
      { name: 'Slate', hex: '#6b6f76' },
      { name: 'Stone', hex: '#a89c8e' },
      { name: 'Taupe', hex: '#9c8f82' },
      { name: 'White', hex: '#ffffff' }
    ]
  },

  'plush-velvet': {
    key: 'plush-velvet',
    name: 'Plush Velvet',
    shortName: 'Plush Velvet',
    finish: 'Smooth velvet with a rich sheen',
    description: 'A more polished velvet finish for a dressier, hotel-style look.',
    surcharge: 0,
    colors: [
      { name: 'Beige', hex: '#d8c6a5' },
      { name: 'Black', hex: '#0f0f0f' },
      { name: 'Blue', hex: '#3f5f8a' },
      { name: 'Blush Pink', hex: '#e6b7b8' },
      { name: 'Bottle Green', hex: '#1f3d2b' },
      { name: 'Champagne', hex: '#e6d3a3' },
      { name: 'Charcoal', hex: '#2e2e2e' },
      { name: 'Cream', hex: '#f4ead7' },
      { name: 'Duck Egg', hex: '#bcd3d0' },
      { name: 'Emerald', hex: '#046a38' },
      { name: 'Gold', hex: '#c9a646' },
      { name: 'Grey', hex: '#7a7a7a' },
      { name: 'Ivory', hex: '#f8f4ec' },
      { name: 'Mink', hex: '#8b7d6b' },
      { name: 'Mustard', hex: '#d4a017' },
      { name: 'Navy', hex: '#1c2c5b' },
      { name: 'Pink', hex: '#e3a1a8' },
      { name: 'Purple', hex: '#6a4b8a' },
      { name: 'Red', hex: '#8a1f1f' },
      { name: 'Silver', hex: '#c0c0c0' },
      { name: 'Teal', hex: '#2f6f73' },
      { name: 'White', hex: '#ffffff' }
    ]
  },

  'crushed-velvet': {
    key: 'crushed-velvet',
    name: 'Crushed Velvet',
    shortName: 'Crushed Velvet',
    finish: 'Light-catching velvet texture',
    description: 'A statement velvet family with a more reflective, glamorous finish.',
    surcharge: 0,
    colors: [
      { name: 'Beige', hex: '#d6c3a3' },
      { name: 'Black', hex: '#111111' },
      { name: 'Blue', hex: '#3a5a8a' },
      { name: 'Blush Pink', hex: '#e3b6b8' },
      { name: 'Champagne', hex: '#e2cfa4' },
      { name: 'Charcoal', hex: '#2b2b2b' },
      { name: 'Cream', hex: '#f3e6d4' },
      { name: 'Gold', hex: '#c9a646' },
      { name: 'Grey', hex: '#808080' },
      { name: 'Ivory', hex: '#f5f0e6' },
      { name: 'Mink', hex: '#8c7a6b' },
      { name: 'Navy', hex: '#1b2a55' },
      { name: 'Pink', hex: '#e1a4ac' },
      { name: 'Purple', hex: '#5e3c7a' },
      { name: 'Red', hex: '#7a1c1c' },
      { name: 'Silver', hex: '#d0d0d0' },
      { name: 'Steel', hex: '#6f7b85' },
      { name: 'White', hex: '#ffffff' }
    ]
  }
};

const DEFAULT_FABRICS = ['teddy', 'coniston', 'plush-velvet', 'crushed-velvet'];
const PRODUCT_DATA = {
  bed1: {
    id: 'bed1',
    category: 'beds',
    name: 'Florida Wing Bed',
    subtitle: 'Statement headboard with plush silhouette',
    image: 'images/bed 1.jpg',
    images: ['images/bed 1.jpg'],
    pricePrefix: 'From',
    prices: { 'Single 3ft': 250 },
    tags: ['Hand upholstered', 'Statement wing design', 'Custom sizes'],
    description: 'A sculpted winged bed designed to anchor the room with hotel-style presence and a soft upholstered finish.',
    fabrics: DEFAULT_FABRICS
  },
  bed2: {
    id: 'bed2', category: 'beds', name: 'Monaco Panel Bed', subtitle: 'Clean vertical lines and tailored comfort', image: 'images/bed 2.jpg', images: ['images/bed 2.jpg'], pricePrefix: 'From', prices: { 'Double 4ft': 300, 'King 5ft': 310, 'Super 6ft': 330 }, tags: ['Deep padding', 'Modern panel headboard', 'Made to order'], description: 'A refined upholstered frame with a sleek panelled headboard for a clean, contemporary bedroom.'
  },
  bed3: { id:'bed3', category:'beds', name:'Savoy Luxe Bed', subtitle:'Minimal profile with premium finish', image:'images/bed 3.jpg', images:['images/bed 3.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 240, 'Double 4ft': 260, 'King 5ft': 270, 'Super 6ft': 290 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Soft-touch fabric','Premium craftsmanship','Elegant profile'], description:'The Savoy pairs understated lines with a luxury finish for a calm, elevated sleeping space.' },
  bed4: { id:'bed4', category:'beds', name:'Chelsea Curve Bed', subtitle:'Curved headboard with boutique appeal', image:'images/bed 4.jpg', images:['images/bed 4.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 550, 'King 5ft': 580, 'Super 6ft': 600 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Curved silhouette','Soft upholstery','Boutique style'], description:'A curving headboard and generous upholstery give this bed a soft, expensive look.' },
  bed5: { id:'bed5', category:'beds', name:'Tina Bed', subtitle:'Hidden storage with luxury proportions', image:'images/bed 5.jpg', images:['images/bed 5.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 360, 'King 5ft': 380, 'Super 6ft': 400 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Storage ready','Smooth lift design','Family favourite'], description:'A premium ottoman style designed for elegant bedrooms that still need practical storage.' },
  bed7: { id:'bed7', category:'beds', name:'Belgravia Tall Bed', subtitle:'Tall statement headboard and plush depth', image:'images/bed 7.jpg', images:['images/bed 7.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 340, 'King 5ft': 360, 'Super 6ft': 380 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Tall headboard','Luxury scale','Custom finish'], description:'This tall-profile bed brings drama and softness together for a standout centrepiece.' },
  bed9: { id:'bed9', category:'beds', name:' Slaithwaite Bed', subtitle:'Luxury statement headboard and plush depth', image:'images/bed 9.jpg', images:['images/bed 9.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 280, 'King 5ft': 310, 'Super 6ft': 340 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Luxury headboard','Luxury scale','Custom finish'], description:'This tall-profile bed brings drama and softness together for a standout centrepiece.' },
  bed14: { id:'bed14', category:'beds', name:'Regency Plush Bed', subtitle:'Deep upholstery and premium detail', image:'images/bed 14.jpg', images:['images/bed 14.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 300, 'King 5ft': 330, 'Super 6ft': 360 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Deep cushioning','Luxury styling','Made to order'], description:'Rich upholstery and a sculpted headboard bring softness, comfort, and presence.' },
  bed15: { id:'bed15', category:'beds', name:'Soho Frame Bed', subtitle:'Contemporary form with refined detail', image:'images/bed 15.jpg', images:['images/bed 15.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 240, 'Double 4ft': 260, 'King 5ft': 270, 'Super 6ft': 290 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Contemporary shape','Refined finish','Boutique feel'], description:'The Soho is designed for interiors that want modern simplicity without losing warmth.' },
  bed16: { id:'bed16', category:'beds', name:'Park Lane Bed', subtitle:'Luxury structure with soft modern lines', image:'images/bed 16.jpg', images:['images/bed 16.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 240, 'Double 4ft': 260, 'King 5ft': 270, 'Super 6ft': 290 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Soft modern lines','Luxury scale','Made to order'], description:'A generous upholstered frame with premium comfort and balanced proportions.' },
  bed17: { id:'bed17', category:'beds', name:'Knightsbridge Bed', subtitle:'Statement design with polished finish', image:'images/bed 17.jpg', images:['images/bed 17.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 360, 'King 5ft': 380, 'Super 6ft': 400 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Statement look','Premium detailing','Tailored finish'], description:'Knightsbridge is a polished statement piece built for premium bedrooms.' },
  bed22: { id:'bed22', category:'beds', name:'Verona Bed', subtitle:'Tailored structure with a refined finish', image:'images/bed 22.jpg', images:['images/bed 22.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 550, 'King 5ft': 580, 'Super 6ft': 600 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Refined structure','Hand finished','Premium room feel'], description:'A tailored upholstered bed made to elevate the whole room.' },
  bed23: { id:'bed23', category:'beds', name:'Lorenzo Bed', subtitle:'Layered upholstery and boutique styling', image:'images/bed 23.jpg', images:['images/bed 23.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 360, 'King 5ft': 380, 'Super 6ft': 400 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Layered upholstery','Boutique styling','Luxury comfort'], description:'A boutique-inspired design with layered softness and a confident presence.' },
  bed24: { id:'bed24', category:'beds', name:'Royal Crest Bed', subtitle:'Premium statement frame for luxury homes', image:'images/bed 24.jpg', images:['images/bed 24.jpg'], pricePrefix:'From', prices:{ 'Double 4ft': 280, 'King 5ft': 310, 'Super 6ft': 340 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Premium statement','Luxury home ready','Made to order'], description:'A regal bed crafted for clients who want scale, softness, and standout design.' },
  mattress1: { id:'mattress1', category:'mattresses', name:'Cloud Comfort Mattress', subtitle:'Balanced support with plush top comfort', image:'images/mattress 1.jpg', images:['images/mattress 1.jpg','images/mattress 1-2.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 480, 'Double 4ft': 510, 'King 5ft': 595, 'Super 6ft': 660 }, tags:['Medium comfort','Everyday support','Great value'], description:'A comfortable entry mattress with balanced support and a soft-touch finish.' },
  mattress2: { id:'mattress2', category:'mattresses', name:'Signature Support Mattress', subtitle:'Structured support for daily comfort', image:'images/mattress 2.jpg', images:['images/mattress 2.jpg','images/mattress 2-2.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 250, 'Double 4ft': 330, 'King 5ft': 400, 'Super 6ft': 499 }, tags:['Supportive feel','Durable design','Popular choice'], description:'A supportive mattress designed for reliable everyday comfort.' },
  mattress3: { id:'mattress3', category:'mattresses', name:'Luxury Sleep Mattress', subtitle:'Cushioned feel with deeper support layers', image:'images/mattress 3.jpg', images:['images/mattress 3.jpg','images/mattress 3-2.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 200, 'Double 4ft': 220, 'King 5ft': 250, 'Super 6ft': 280 }, tags:['Cushioned top','Enhanced comfort','Premium finish'], description:'A deeper comfort mattress with a plush feel and stable support underneath.' },
  mattress4: { id:'mattress4', category:'mattresses', name:'Orthopedic Comfort Mattress', subtitle:'Firm support for a stable sleep surface', image:'images/mattress 4.jpg', images:['images/mattress 4.jpg','images/mattress 4-2.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 405, 'Double 4ft': 420, 'King 5ft': 515, 'Super 6ft': 555 }, tags:['Firm support','Orthopedic feel','Stable sleep'], description:'A firmer option for customers wanting a more supported sleeping surface.' },
  mattress5: { id:'mattress5', category:'mattresses', name:'Hotel Collection Mattress', subtitle:'Premium comfort inspired by boutique stays', image:'images/mattress 5.jpg', images:['images/mattress 5.jpg','images/mattress 5-2.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 480, 'Double 4ft': 585, 'King 5ft': 635, 'Super 6ft': 695 }, tags:['Hotel-inspired','Plush comfort','Luxury feel'], description:'A hotel-inspired mattress designed to bring a more indulgent finish to the bedroom.' },
  divan1: { id:'divan1', category:'divan', name:'Classic Divan Base', subtitle:'Clean upholstered base with discreet chrome feet', image:'images/divan-1.jpg', images:['images/divan-1.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 255, 'Double 4ft': 265, 'King 5ft': 280, 'Super 6ft': 300 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Divan base','Upholstered finish','Made to order'], description:'A streamlined divan base designed for a clean, premium bedroom finish with everyday practicality.' },
  divan2: { id:'divan2', category:'divan', name:'Luxury Divan Base', subtitle:'Soft tailored finish for a more refined bedroom look', image:'images/divan-2.jpg', images:['images/divan-2.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 255, 'Double 4ft': 265, 'King 5ft': 280, 'Super 6ft': 300 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Divan base','Tailored fabric','Premium finish'], description:'A tailored upholstered divan base with a softer luxury look that works beautifully in modern interiors.' },
  divan3: { id:'divan3', category:'divan', name:'Drawer Divan Base', subtitle:'Built-in side drawers for discreet bedroom storage', image:'images/divan-3.jpg', images:['images/divan-3.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 255, 'Double 4ft': 265, 'King 5ft': 280, 'Super 6ft': 300 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Integrated drawers','Storage friendly','Made to order'], description:'A practical divan base with integrated drawers to keep bedroom essentials neatly tucked away.' },
  divan4: { id:'divan4', category:'divan', name:'Premium Storage Divan Base', subtitle:'Refined upholstered base with drawer storage', image:'images/divan-4.jpg', images:['images/divan-4.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 255, 'Double 4ft': 265, 'King 5ft': 280, 'Super 6ft': 300 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Drawer storage','Premium upholstery','Everyday practicality'], description:'A premium storage divan base combining a clean silhouette with easy-access drawer storage.' },
  ottoman1: { id:'ottoman1', category:'ottoman', name:'Ottoman Storage Bed', subtitle:'Lift-up storage bed with a clean tailored profile', image:'images/ottoman-1.jpg', images:['images/ottoman-1.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 250, 'Double 4ft': 320, 'King 5ft': 340, 'Super 6ft': 360 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Ottoman storage','Includes MDF boards','Made to order'], description:'A smooth lift-up ottoman bed designed to maximise hidden storage. All ottoman beds include MDF boards as standard.' },
  ottoman2: { id:'ottoman2', category:'ottoman', name:'Side-Lift Ottoman Bed', subtitle:'Easy-access storage with a premium upholstered finish', image:'images/ottoman-2.jpg', images:['images/ottoman-2.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 250, 'Double 4ft': 320, 'King 5ft': 340, 'Super 6ft': 360 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Lift-up storage','Includes MDF boards','Luxury finish'], description:'A premium upholstered ottoman with easy-access underbed storage. All ottoman beds include MDF boards as standard.' },
  ottoman3: { id:'ottoman3', category:'ottoman', name:'Premium Ottoman Storage Bed', subtitle:'Large hidden storage space with supportive gas-lift opening', image:'images/ottoman-3.jpg', images:['images/ottoman-3.jpg'], pricePrefix:'From', prices:{ 'Single 3ft': 250, 'Double 4ft': 320, 'King 5ft': 340, 'Super 6ft': 360 }, fabrics:['teddy','coniston','plush-velvet','crushed-velvet'], tags:['Gas-lift storage','Includes MDF boards','Premium upholstery'], description:'A practical premium ottoman bed with spacious hidden storage beneath the sleeping platform. All ottoman beds include MDF boards as standard.' }
};

function formatPrice(value) { return `£${Number(value).toLocaleString('en-GB')}`; }

const CATEGORY_META = {
  beds: { label: 'Luxury bed frame', orderNote: 'made to order' },
  mattresses: { label: 'Premium mattress', orderNote: 'made to order' },
  divan: { label: 'Premium divan base', orderNote: 'made to order' },
  ottoman: { label: 'Ottoman storage bed', orderNote: 'includes MDF boards' }
};
function getCategoryMeta(category) {
  return CATEGORY_META[category] || { label: 'Premium product', orderNote: 'made to order' };
}

const CART_KEY = 'vcraft-cart';

function getProductsByCategory(category) { return Object.values(PRODUCT_DATA).filter(p => p.category === category); }
function getDefaultSize(product) { return Object.keys(product.prices)[0]; }
function getProductPrice(product, size) { return Number(product.prices[size]); }
function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (_error) {
    return [];
  }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function cartItemKey(productId, size, fabric = '') { return `${productId}::${size}::${fabric || 'standard'}`; }
function normaliseCartItem(item) {
  return {
    key: cartItemKey(item.productId, item.size, item.fabric),
    productId: item.productId,
    name: item.name,
    size: item.size,
    price: Number(item.price),
    quantity: Math.max(1, Number(item.quantity) || 1),
    image: item.image || '',
    category: item.category || '',
    fabric: item.fabric || ''
  };
}
function addToCart(productId, size = null, quantity = 1, fabric = '') {
  const product = PRODUCT_DATA[productId];
  if (!product) return;
  const selectedSize = size || getDefaultSize(product);
  const price = getProductPrice(product, selectedSize);
  const cart = getCart();
  const key = cartItemKey(productId, selectedSize, fabric);
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.quantity += Math.max(1, Number(quantity) || 1);
  } else {
    cart.push(normaliseCartItem({
      productId,
      name: product.name,
      size: selectedSize,
      price,
      quantity,
      image: product.image,
      category: product.category,
      fabric
    }));
  }
  saveCart(cart);
  showCartToast(`${product.name} added to cart`);
}
function removeFromCart(key) {
  saveCart(getCart().filter(item => item.key !== key));
}
function updateCartItemQuantity(key, quantity) {
  const cart = getCart();
  const item = cart.find(entry => entry.key === key);
  if (!item) return;
  item.quantity = Math.max(1, Number(quantity) || 1);
  saveCart(cart);
}
function getCartTotals() {
  const cart = getCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return { itemCount, subtotal };
}
function updateCartCount() {
  const { itemCount } = getCartTotals();
  document.querySelectorAll('[data-cart-count]').forEach(node => {
    node.textContent = String(itemCount);
    node.hidden = itemCount === 0;
  });
  document.querySelectorAll('[data-cart-count-label]').forEach(node => {
    node.textContent = itemCount ? `${itemCount} item${itemCount === 1 ? '' : 's'}` : 'Cart';
  });
}
function ensureCartNav() {
  const navbar = document.querySelector('.navbar');
  if (!navbar || navbar.querySelector('.cart-pill')) return;
  const cartLink = document.createElement('a');
  cartLink.href = 'cart.html';
  cartLink.className = 'cart-pill';
  cartLink.innerHTML = '<span class="cart-pill-label" data-cart-count-label>Cart</span><span class="cart-pill-count" data-cart-count hidden>0</span>';
  const supportBtn = navbar.querySelector('.nav-cta');
  if (supportBtn) {
    supportBtn.insertAdjacentElement('beforebegin', cartLink);
  } else {
    navbar.appendChild(cartLink);
  }
}
function showCartToast(message) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.className = 'cart-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('active');
  clearTimeout(showCartToast.timeoutId);
  showCartToast.timeoutId = setTimeout(() => toast.classList.remove('active'), 2200);
}

function renderProductGrid(target, items, category, { enableFilters = false } = {}) {
  if (!target) return;
  const meta = getCategoryMeta(category);
  const render = (list) => {
    target.innerHTML = list.map(product => {
      const firstPrice = Object.values(product.prices)[0];
      return `
        <article class="product-card" data-name="${product.name.toLowerCase()}">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-card-body">
            <div class="card-topline"><span>${meta.label}</span><span>${product.tags[0]}</span></div>
            <div>
              <h3>${product.name}</h3>
              <p>${product.subtitle}</p>
            </div>
            <div class="price-row"><strong>${product.pricePrefix} ${formatPrice(firstPrice)}</strong><span>${meta.orderNote}</span></div>
            <div class="tag-row">${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            <div class="card-actions">
              <a class="pay-btn" href="product.html?id=${product.id}">View details</a>
              <button class="secondary-btn" type="button" data-quick-view="${product.id}">Quick view</button>
              <button class="secondary-btn cart-action" type="button" data-add-to-cart="${product.id}">Add to cart</button>
            </div>
          </div>
        </article>`;
    }).join('');
    bindQuickView();
  };

  if (!enableFilters) {
    render(items);
    return;
  }

  const search = document.getElementById('searchInput');
  const filter = document.getElementById('sortSelect');
  const apply = () => {
    let filtered = [...items];
    const q = (search?.value || '').trim().toLowerCase();
    if (q) filtered = filtered.filter(item => (`${item.name} ${item.subtitle} ${item.tags.join(' ')} ${item.description}`).toLowerCase().includes(q));
    switch (filter?.value) {
      case 'price-asc': filtered.sort((a,b) => Object.values(a.prices)[0] - Object.values(b.prices)[0]); break;
      case 'price-desc': filtered.sort((a,b) => Object.values(b.prices)[0] - Object.values(a.prices)[0]); break;
      case 'name': filtered.sort((a,b) => a.name.localeCompare(b.name)); break;
    }
    render(filtered);
  };
  search?.addEventListener('input', apply);
  filter?.addEventListener('change', apply);
  apply();
}

function renderCatalog(category) {
  const grid = document.querySelector(`[data-product-grid="${category}"]`);
  if (!grid) return;
  renderProductGrid(grid, getProductsByCategory(category), category, { enableFilters: true });
}
function bindQuickView() {
  document.querySelectorAll('[data-quick-view]').forEach(btn => {
    btn.onclick = () => openImageModal(btn.getAttribute('data-quick-view'));
  });
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.onclick = () => addToCart(btn.getAttribute('data-add-to-cart'));
  });
}

let activeModalImages = []; let activeModalIndex = 0;
function openImageModal(productId) {
  const product = PRODUCT_DATA[productId];
  const modal = document.getElementById('imageModal');
  if (!modal || !product) return;
  activeModalImages = product.images;
  activeModalIndex = 0;
  modal.querySelector('[data-modal-title]').textContent = product.name;
  updateImageModal();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function updateImageModal() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;
  const image = modal.querySelector('[data-modal-image]');
  const thumbs = modal.querySelector('[data-modal-thumbs]');
  image.src = activeModalImages[activeModalIndex];
  thumbs.innerHTML = activeModalImages.map((src, i) => `<button class="${i===activeModalIndex?'active':''}" type="button" data-modal-thumb="${i}"><img src="${src}" alt="Preview ${i+1}"></button>`).join('');
  thumbs.querySelectorAll('[data-modal-thumb]').forEach(btn => btn.onclick = () => { activeModalIndex = Number(btn.getAttribute('data-modal-thumb')); updateImageModal(); });
}
function closeImageModal() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
function stepImageModal(direction) {
  if (!activeModalImages.length) return;
  activeModalIndex = (activeModalIndex + direction + activeModalImages.length) % activeModalImages.length;
  updateImageModal();
}


function renderFabricSelector(product, selectedFabric = '') {
  const panel = document.getElementById('fabricPanel');
  const grid = document.getElementById('fabricGrid');
  const copy = document.getElementById('selectedFabricCopy');
  if (!panel || !grid || !copy) {
    return {
      getSelectedFabric: () => '',
      getSelectedSurcharge: () => 0,
      onChange: () => {}
    };
  }

  const fabrics = (product.fabrics || []).map(key => FABRIC_COLLECTIONS[key]).filter(Boolean);
  if (!fabrics.length || product.category === 'mattresses') {
    panel.hidden = true;
    copy.textContent = '';
    return {
      getSelectedFabric: () => '',
      getSelectedSurcharge: () => 0,
      onChange: () => {}
    };
  }

  panel.hidden = false;
  let activeKey = fabrics.some(f => f.name === selectedFabric || selectedFabric.startsWith(`${f.name} • `))
    ? fabrics.find(f => f.name === selectedFabric || selectedFabric.startsWith(`${f.name} • `)).key
    : fabrics[0].key;
  let activeColorName = (() => {
    const current = fabrics.find(f => f.key === activeKey);
    const fromSelected = selectedFabric.includes(' • ') ? selectedFabric.split(' • ')[1] : '';
    return current?.colors.some(color => color.name === fromSelected) ? fromSelected : (current?.colors[0]?.name || '');
  })();
  let changeHandler = () => {};

  const syncCopy = () => {
    const fabric = FABRIC_COLLECTIONS[activeKey];
    if (!fabric) {
      copy.textContent = '';
      return;
    }
    const surcharge = fabric.surcharge ? ` (+£${fabric.surcharge})` : '';
    copy.textContent = ` • ${fabric.name} • ${activeColorName}${surcharge}`;
  };

  const paint = () => {
    grid.innerHTML = `
      <div class="fabric-family-row">
        ${fabrics.map(fabric => `
          <button class="fabric-pill ${fabric.key === activeKey ? 'active' : ''}" type="button" data-fabric-key="${fabric.key}">
            <span>${fabric.name}</span>
            ${fabric.surcharge ? `<small>+£${fabric.surcharge}</small>` : ''}
          </button>
        `).join('')}
      </div>
      <div class="fabric-meta-card">
        <strong>${FABRIC_COLLECTIONS[activeKey].name}</strong>
        <p>${FABRIC_COLLECTIONS[activeKey].finish}</p>
      </div>
      <div class="fabric-color-row">
        ${FABRIC_COLLECTIONS[activeKey].colors.map(color => `
          <button
            class="fabric-color-chip ${color.name === activeColorName ? 'active' : ''}"
            type="button"
            data-fabric-color="${color.name}"
            aria-label="${FABRIC_COLLECTIONS[activeKey].name} ${color.name}"
            title="${color.name}"
          >
            <span class="fabric-color-dot" style="background:${color.hex}"></span>
            <span class="fabric-color-label">${color.name}</span>
          </button>
        `).join('')}
      </div>
    `;

    syncCopy();

    grid.querySelectorAll('[data-fabric-key]').forEach(btn => {
      btn.onclick = () => {
        activeKey = btn.getAttribute('data-fabric-key');
        activeColorName = FABRIC_COLLECTIONS[activeKey].colors[0]?.name || '';
        paint();
        changeHandler();
      };
    });

    grid.querySelectorAll('[data-fabric-color]').forEach(btn => {
      btn.onclick = () => {
        activeColorName = btn.getAttribute('data-fabric-color');
        syncCopy();
        grid.querySelectorAll('[data-fabric-color]').forEach(node => node.classList.toggle('active', node === btn));
        changeHandler();
      };
    });
  };

  paint();

  return {
    getSelectedFabric: () => {
      const fabric = FABRIC_COLLECTIONS[activeKey];
      return fabric ? `${fabric.name} • ${activeColorName}` : '';
    },
    getSelectedSurcharge: () => FABRIC_COLLECTIONS[activeKey]?.surcharge || 0,
    onChange: (fn) => { changeHandler = typeof fn === 'function' ? fn : () => {}; }
  };
}

function initImageModal() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;
  modal.querySelector('[data-close-modal]').onclick = closeImageModal;
  modal.onclick = (e) => { if (e.target === modal) closeImageModal(); };
  modal.querySelector('[data-prev-modal]').onclick = () => stepImageModal(-1);
  modal.querySelector('[data-next-modal]').onclick = () => stepImageModal(1);
  window.addEventListener('keydown', e => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeImageModal();
    if (e.key === 'ArrowLeft') stepImageModal(-1);
    if (e.key === 'ArrowRight') stepImageModal(1);
  });
}

async function initProductPage() {
  const page = document.querySelector('[data-product-page]');
  if (!page) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const product = PRODUCT_DATA[id];
  if (!product) {
    page.innerHTML = '<div class="center-empty">Product not found.</div>';
    return;
  }
  document.title = `${product.name} – V Craft Beds`;
  document.getElementById('productCategoryLabel').textContent = getCategoryMeta(product.category).label;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productSubtitle').textContent = product.subtitle;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('deliveryLabel').textContent =
    product.category === 'mattresses'
      ? 'Fast delivery available nationwide.'
      : product.category === 'ottoman'
        ? 'Delivery arranged after order confirmation. All ottoman beds include MDF boards as standard.'
        : 'White-glove delivery arranged after order confirmation.';
  const badgeWrap = document.getElementById('productTags');
  badgeWrap.innerHTML = product.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

  const gallery = document.getElementById('productGalleryThumbs');
  const mainImage = document.getElementById('productMainImage');
  let galleryIndex = 0;
  const renderGallery = () => {
    mainImage.src = product.images[galleryIndex];
    mainImage.alt = product.name;
    gallery.innerHTML = product.images.map((src, i) => `<button class="thumb-btn ${i===galleryIndex?'active':''}" type="button" data-gallery-index="${i}"><img src="${src}" alt="${product.name} ${i+1}"></button>`).join('');
    gallery.querySelectorAll('[data-gallery-index]').forEach(btn => btn.onclick = () => { galleryIndex = Number(btn.getAttribute('data-gallery-index')); renderGallery(); });
  };
  renderGallery();

  const sizeSelect = document.getElementById('sizeSelect');
  sizeSelect.innerHTML = Object.entries(product.prices).map(([size, price]) => `<option value="${price}">${size} — ${formatPrice(price)}</option>`).join('');
  const fabricSelector = renderFabricSelector(product);
  const priceEl = document.getElementById('productPrice');
  const updatePrice = () => {
    const basePrice = Number(sizeSelect.value);
    const totalPrice = basePrice + Number(fabricSelector.getSelectedSurcharge() || 0);
    priceEl.textContent = formatPrice(totalPrice);
    document.getElementById('selectedSizeCopy').textContent = sizeSelect.options[sizeSelect.selectedIndex].textContent;
  };
  sizeSelect.addEventListener('change', updatePrice);
  fabricSelector.onChange(updatePrice);
  updatePrice();

  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn?.addEventListener('click', () => {
    const quantity = Math.max(1, Number(document.getElementById('qtyInput').value || 1));
    const sizeName = sizeSelect.options[sizeSelect.selectedIndex].textContent.split(' — ')[0];
    addToCart(product.id, sizeName, quantity, fabricSelector.getSelectedFabric());
  });

  let publishableKey = '';
  try {
    const configRes = await fetch('/config');
    if (configRes.ok) {
      const config = await configRes.json();
      publishableKey = config.stripePublishableKey || '';
    }
  } catch (e) { console.warn('Config fetch failed', e); }
  const stripe = publishableKey ? Stripe(publishableKey) : null;
  const checkoutBtn = document.getElementById('stripeBtn');
  checkoutBtn.addEventListener('click', async () => {
    const quantity = Math.max(1, Number(document.getElementById('qtyInput').value || 1));
    checkoutBtn.disabled = true;
    checkoutBtn.textContent = 'Preparing secure checkout…';
    try {
      if (!stripe) throw new Error('Stripe is not configured yet. Add your publishable key in the environment settings.');
      const response = await fetch('/create-checkout-session', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ name: `${product.name} — ${sizeSelect.options[sizeSelect.selectedIndex].textContent.split(' — ')[0]}${fabricSelector.getSelectedFabric() ? ` • ${fabricSelector.getSelectedFabric()}` : ''}`, price: Number(sizeSelect.value) + Number(fabricSelector.getSelectedSurcharge() || 0), quantity }]
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to start checkout.');
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      alert(error.message || 'Something went wrong starting checkout.');
    } finally {
      checkoutBtn.disabled = false;
      checkoutBtn.textContent = 'Pay with Card / Apple Pay';
    }
  });

  const helpBtn = document.getElementById('payLaterLink');
  helpBtn.href = `help.html?product=${encodeURIComponent(product.name)}`;
}


async function checkoutCart(button) {
  const cart = getCart();
  if (!cart.length) {
    showCartToast('Your cart is empty');
    return;
  }
  let publishableKey = '';
  try {
    const configRes = await fetch('/config');
    if (configRes.ok) {
      const config = await configRes.json();
      publishableKey = config.stripePublishableKey || '';
    }
  } catch (_error) {}
  if (!publishableKey) {
    alert('Stripe is not configured yet. Add your publishable key before taking payments.');
    return;
  }
  const stripe = Stripe(publishableKey);
  button.disabled = true;
  const originalLabel = button.textContent;
  button.textContent = 'Preparing secure checkout…';
  try {
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cart.map(item => ({
          name: `${item.name} — ${item.size}${item.fabric ? ` • ${item.fabric}` : ''}`,
          price: Number(item.price),
          quantity: Number(item.quantity)
        }))
      })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to start checkout.');
    sessionStorage.setItem('vcraft-clear-cart-on-success', '1');
    await stripe.redirectToCheckout({ sessionId: data.id });
  } catch (error) {
    alert(error.message || 'Something went wrong starting checkout.');
    button.disabled = false;
    button.textContent = originalLabel;
  }
}
function renderCartPage() {
  const page = document.querySelector('[data-cart-page]');
  if (!page) return;
  const cart = getCart();
  const cartItems = document.getElementById('cartItems');
  const emptyState = document.getElementById('cartEmpty');
  const summary = document.getElementById('cartSummary');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  const countEl = document.getElementById('cartItemCount');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  if (!cart.length) {
    cartItems.innerHTML = '';
    emptyState.hidden = false;
    summary.classList.add('is-disabled');
    subtotalEl.textContent = formatPrice(0);
    totalEl.textContent = formatPrice(0);
    countEl.textContent = '0 items';
    checkoutBtn.disabled = true;
    return;
  }

  emptyState.hidden = true;
  summary.classList.remove('is-disabled');
  const totals = getCartTotals();
  subtotalEl.textContent = formatPrice(totals.subtotal);
  totalEl.textContent = formatPrice(totals.subtotal);
  countEl.textContent = `${totals.itemCount} item${totals.itemCount === 1 ? '' : 's'}`;

  cartItems.innerHTML = cart.map(item => `
    <article class="cart-item" data-cart-key="${item.key}">
      <a class="cart-item-image" href="product.html?id=${item.productId}">
        <img src="${item.image}" alt="${item.name}">
      </a>
      <div class="cart-item-copy">
        <div class="cart-item-top">
          <div>
            <span class="cart-category">${item.category === 'beds' ? 'Luxury bed frame' : item.category === 'divan' ? 'Premium divan base' : item.category === 'ottoman' ? 'Ottoman storage bed' : 'Premium mattress'}</span>
            <h3>${item.name}</h3>
            <p>${item.size}${item.fabric ? ` • ${item.fabric}` : ''}</p>
          </div>
          <strong>${formatPrice(item.price * item.quantity)}</strong>
        </div>
        <div class="cart-item-actions">
          <div class="qty-stepper">
            <button type="button" data-cart-minus="${item.key}">−</button>
            <input type="number" min="1" value="${item.quantity}" data-cart-qty="${item.key}">
            <button type="button" data-cart-plus="${item.key}">+</button>
          </div>
          <button class="cart-remove" type="button" data-cart-remove="${item.key}">Remove</button>
        </div>
      </div>
    </article>
  `).join('');

  cartItems.querySelectorAll('[data-cart-minus]').forEach(btn => {
    btn.onclick = () => {
      const key = btn.getAttribute('data-cart-minus');
      const item = getCart().find(entry => entry.key === key);
      if (!item) return;
      if (item.quantity <= 1) {
        removeFromCart(key);
      } else {
        updateCartItemQuantity(key, item.quantity - 1);
      }
      renderCartPage();
    };
  });
  cartItems.querySelectorAll('[data-cart-plus]').forEach(btn => {
    btn.onclick = () => {
      const key = btn.getAttribute('data-cart-plus');
      const item = getCart().find(entry => entry.key === key);
      if (!item) return;
      updateCartItemQuantity(key, item.quantity + 1);
      renderCartPage();
    };
  });
  cartItems.querySelectorAll('[data-cart-qty]').forEach(input => {
    input.onchange = () => {
      updateCartItemQuantity(input.getAttribute('data-cart-qty'), input.value);
      renderCartPage();
    };
  });
  cartItems.querySelectorAll('[data-cart-remove]').forEach(btn => {
    btn.onclick = () => {
      removeFromCart(btn.getAttribute('data-cart-remove'));
      renderCartPage();
    };
  });

  checkoutBtn.disabled = false;
  checkoutBtn.onclick = () => checkoutCart(checkoutBtn);
}
function clearCartOnSuccess() {
  if (!document.body.classList.contains('success-page')) return;
  if (sessionStorage.getItem('vcraft-clear-cart-on-success') !== '1') return;
  localStorage.removeItem(CART_KEY);
  sessionStorage.removeItem('vcraft-clear-cart-on-success');
  updateCartCount();
}

function initOfferPopup() {
  const popup = document.getElementById('offerPopup');
  if (!popup) return;
  if (sessionStorage.getItem('vcraft-offer-dismissed') === '1') return;
  setTimeout(() => popup.style.display = 'flex', 1800);
}
function closeOffer() {
  const popup = document.getElementById('offerPopup');
  if (!popup) return;
  popup.style.display = 'none';
  sessionStorage.setItem('vcraft-offer-dismissed', '1');
}
window.closeOffer = closeOffer;

function initSupportPrefill() {
  const field = document.getElementById('supportProduct');
  if (!field) return;
  const product = new URLSearchParams(window.location.search).get('product');
  if (product) field.value = product;
}

document.addEventListener('DOMContentLoaded', () => {
  ensureCartNav();
  updateCartCount();
  clearCartOnSuccess();
  initOfferPopup();
  initImageModal();
  document.querySelectorAll('[data-product-grid]').forEach(grid => {
    const category = grid.getAttribute('data-product-grid');
    const enableFilters = grid.hasAttribute('data-primary-grid');
    renderProductGrid(grid, getProductsByCategory(category), category, { enableFilters });
  });
  initProductPage();
  renderCartPage();
  initSupportPrefill();
});
const supabaseUrl = "YOUR_SUPABASE_PROJECT_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";

const db = supabase.createClient(supabaseUrl, supabaseKey);

const reviewForm = document.getElementById("review-form");
const reviewsList = document.getElementById("reviews-list");

async function loadReviews() {
  const { data, error } = await db
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  reviewsList.innerHTML = data.map(review => `
    <div class="review-card">
      <h4>${review.customer_name}</h4>
      <p>${"★".repeat(review.rating)}</p>
      <p>${review.comment}</p>
    </div>
  `).join("");
}

reviewForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const review = {
    product_name: form.product_name.value,
    customer_name: form.customer_name.value,
    rating: Number(form.rating.value),
    comment: form.comment.value
  };

  const { error } = await db
    .from("reviews")
    .insert(review);

  if (error) {
    alert("Review could not be submitted.");
    console.error(error);
    return;
  }

  alert("Thank you for your review!");
  form.reset();
  loadReviews();
});

loadReviews();
