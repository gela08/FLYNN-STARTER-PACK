
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'with-coffee' | 'no-coffee' | 'meal';
  image: string;
  hasFlavors?: boolean;
  gradient: string;
}

interface Flavor {
  name: string;
  price: number;
}

interface CartItem {
  id: string;
  productId: string;
  name: string;
  flavor?: string;
  price: number;
  quantity: number;
}

const PRODUCTS: Product[] = [
  // WITH COFFEE
  { id: 'c1', name: "Iced Caramel Macchiato", description: "Espresso, milk, and luscious caramel syrup, served over ice.", price: 39, category: 'with-coffee', image: "iced-caramel-macchiatos-coffee-no-bg.png", gradient: "linear-gradient(to top, #f4f2e2, #eae6be, #dfc28a, #b88331, #a56400, #38220f)" },
  { id: 'c2', name: "Donya Berry With Coffee", description: "Premium Japanese matcha harmonized with milk and bold espresso.", price: 39, category: 'with-coffee', image: "donya-berry-coffee-no-bg.png", gradient: "linear-gradient(to top, #cb5475, #e5a9ba, #f2d4dc, #ece0d1, #967259, #634832, #38220f)" },
  { id: 'c3', name: "Don Matchatos With Coffee", description: "Japanese matcha delicately harmonized with milk and espresso.", price: 39, category: 'with-coffee', image: "don-matchatos-coffee-no-bg.png", gradient: "linear-gradient(to top, #49592a, #658c5e, #c3d4a5, #fff0d6, #dbc1ac, #967259, #634832, #38220f)" },
  { id: 'c4', name: "Don Darko With Coffee", description: "Finest Belgian dark chocolate blended with bold espresso.", price: 39, category: 'with-coffee', image: "don-darko-coffee-no-bg.png", gradient: "linear-gradient(to top, #0c0906, #584b3e, #766257, #bdaaaa, #dbc1ac, #967259, #634832, #38220f)" },
  { id: 'c5', name: "Matcha Berry With Coffee", description: "Antioxidant-rich matcha with strawberry notes and espresso.", price: 39, category: 'with-coffee', image: "matcha-berry-coffee-no-bg.png", gradient: "linear-gradient(to top, #49592a, #5d8b55, #82a742, #c76682, #cc6985, #c76682, #967259, #634832, #38220f)" },
  { id: 'c6', name: "Black Forest With Coffee", description: "Belgian craftmanship meets natural Taiwanese strawberries.", price: 39, category: 'with-coffee', image: "black-forest-coffee-no-bg.png", gradient: "linear-gradient(to top, #000000, #8e0b21, #cb5475, #e5a9ba, #f2d4dc, #d6a684, #967259, #634832, #38220f)" },
  { id: 'c7', name: "Oreo With Coffee", description: "Classic Oreo cookie taste blended into rich coffee.", price: 39, category: 'with-coffee', image: "oreo-coffee-no-bg.png", gradient: "linear-gradient(to top, #000000, #505050, #8a8a8a, #b8b8b8, #cfcfcf, #d6a684, #967259, #634832, #38220f)" },
  { id: 'c8', name: "Brown Spanish Latte", description: "Balanced coffee and creamy milk with brown sugar syrup.", price: 39, category: 'with-coffee', image: "brown-spanish-latte-no-bg.png", gradient: "linear-gradient(to top, #f7ebde, #dbc1ac, #967259, #634832, #38220f)" },
  
  // NO COFFEE
  { id: 'nc1', name: "Don Matchatos", description: "Premium Japanese matcha harmonized with velvety milk.", price: 39, category: 'no-coffee', image: "don-matchatos-no-coffee-no-bg.png", gradient: "linear-gradient(to top, #49592a, #82a742, #b4dc87, #c6e99f, #e4f8ba, #feffe9)" },
  { id: 'nc2', name: "Donya Berry", description: "Succulent Taiwanese strawberries mingled with creamy milk.", price: 39, category: 'no-coffee', image: "donya-berry-no-coffee-no-bg.png", gradient: "linear-gradient(to top, #be2952, #cb5475, #d87f97, #e5a9ba, #f2d4dc, #feffe9)" },
  { id: 'nc3', name: "Don Darko", description: "Finest Belgian dark chocolate blended with creamy milk.", price: 39, category: 'no-coffee', image: "don-darko-coffee-no-bg.png", gradient: "linear-gradient(to top, #0c0906, #291f1f, #5a4646, #725b5b, #b19696, #e0caca, #feffe9)" },
  { id: 'nc4', name: "Matcha Berry", description: "Harmony of Japanese matcha and Taiwanese strawberries.", price: 39, category: 'no-coffee', image: "matcha-berry-no-coffee-no-bg.png", gradient: "linear-gradient(to top, #49592a, #5d8b55, #82a742, #c76682, #cc6985, #c76682)" },
  { id: 'nc5', name: "Black Forest", description: "Belgian craftmanship and sweet Taiwanese strawberries.", price: 39, category: 'no-coffee', image: "black-forest-no-coffee-no-bg.png", gradient: "linear-gradient(to top, #000000, #8e0b21, #cb5475, #e5a9ba, #f2d4dc)" },
  { id: 'nc6', name: "Oreo", description: "Creamy milk blended with classic Oreo cookies.", price: 39, category: 'no-coffee', image: "oreo-no-coffee-no-bg.png", gradient: "linear-gradient(to top, #000000, #505050, #8a8a8a, #b8b8b8, #cfcfcf)" },

  // MEALS
  { id: 'm1', name: "Boneless Chicken RM2", description: "Two (2) pcs juicy Korean boneless fried chicken with steamed rice.", price: 95, category: 'meal', hasFlavors: true, image: "24-chicken-RM2.png", gradient: "linear-gradient(to top, #f97316, #fb923c, #fdba74)" },
  { id: 'm2', name: "Boneless Chicken RM3", description: "Three (3) pcs juicy Korean boneless fried chicken with steamed rice.", price: 130, category: 'meal', hasFlavors: true, image: "24-chicken-RM3.png", gradient: "linear-gradient(to top, #f97316, #fb923c, #fdba74)" },
  { id: 'm3', name: "Kimchi Rice KRM2", description: "Two (2) pcs boneless chicken served with flavorful kimchi rice.", price: 135, category: 'meal', hasFlavors: true, image: "24-chicken-KRM2.png", gradient: "linear-gradient(to top, #ef4444, #f97316, #fb923c)" },
  { id: 'm4', name: "Kimchi Rice KRM3", description: "Three (3) pcs boneless chicken served with flavorful kimchi rice.", price: 170, category: 'meal', hasFlavors: true, image: "24-chicken-KRM3.png", gradient: "linear-gradient(to top, #ef4444, #f97316, #fb923c)" }
];

const FLAVORS: Flavor[] = [
  { name: "Original", price: 0 },
  { name: "Garlic", price: 5 },
  { name: "Jack Daniels", price: 5 },
  { name: "Yangnyeom", price: 5 },
  { name: "Yangnyeom X2", price: 5 },
  { name: "Spicy BBQ", price: 5 },
  { name: "Lemon Glaze", price: 5 },
  { name: "Yangnyeom W Garlic", price: 10 },
  { name: "24 Cheddar", price: 10 },
  { name: "Snow Cheese", price: 10 },
  { name: "Yangnyeom X2 W Garlic", price: 10 },
  { name: "Dark Truffle", price: 10 },
];

class CaveCraveApp {
  private cart: CartItem[] = [];
  private currentFilter: 'all' | 'with-coffee' | 'no-coffee' | 'meal' = 'all';
  private productForFlavor: Product | null = null;

  constructor() {
    this.init();
  }

  private init() {
    this.renderProducts();
    this.renderCart();
    this.setupEventListeners();
  }

  private setupEventListeners() {
    document.getElementById('cartBtn')?.addEventListener('click', () => this.toggleCart(true));
    document.getElementById('cartBackdrop')?.addEventListener('click', () => this.toggleCart(false));
  }

  public setFilter(filter: 'all' | 'with-coffee' | 'no-coffee' | 'meal') {
    this.currentFilter = filter;
    
    // Update Active UI
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active-filter'));
    const btnMap: any = { 'all': 'All Items', 'with-coffee': 'With Coffee', 'no-coffee': 'No Coffee', 'meal': 'Meals' };
    document.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.textContent === btnMap[filter]) btn.classList.add('active-filter');
    });

    this.renderProducts();
  }

  public addToOrder(productId: string) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    if (product.hasFlavors) {
      this.openFlavorModal(product);
    } else {
      this.addToCartState(product);
      this.toggleCart(true);
    }
  }

  private openFlavorModal(product: Product) {
    this.productForFlavor = product;
    const modal = document.getElementById('flavorModal');
    const grid = document.getElementById('flavorGrid');
    const prodName = document.getElementById('flavorModalProduct');
    if (!modal || !grid || !prodName) return;

    prodName.textContent = product.name;
    grid.innerHTML = FLAVORS.map(flavor => `
      <button onclick="app.selectFlavor('${flavor.name}')" class="group p-4 rounded-3xl border-2 border-orange-50 hover:border-orange-500 hover:bg-orange-50 transition-all text-left relative overflow-hidden active:scale-95">
        <div class="relative z-10">
          <h4 class="font-bold text-gray-800 group-hover:text-orange-700">${flavor.name}</h4>
          <p class="text-sm text-gray-500 font-medium">${flavor.price > 0 ? `+₱${flavor.price}` : 'Free'}</p>
        </div>
        <div class="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-opacity">
          <i class="fas fa-drumstick-bite text-4xl transform -rotate-12"></i>
        </div>
      </button>
    `).join('');

    modal.classList.replace('modal-hidden', 'modal-visible');
  }

  public closeFlavorModal() {
    document.getElementById('flavorModal')?.classList.replace('modal-visible', 'modal-hidden');
    this.productForFlavor = null;
  }

  public selectFlavor(flavorName: string) {
    const flavor = FLAVORS.find(f => f.name === flavorName);
    if (this.productForFlavor && flavor) {
      this.addToCartState(this.productForFlavor, flavor);
      this.closeFlavorModal();
      this.toggleCart(true);
    }
  }

  private addToCartState(product: Product, flavor?: Flavor) {
    const itemId = flavor ? `${product.id}-${flavor.name}` : product.id;
    const existing = this.cart.find(i => i.id === itemId);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        id: itemId,
        productId: product.id,
        name: product.name,
        price: product.price + (flavor?.price || 0),
        flavor: flavor?.name,
        quantity: 1
      });
    }
    this.renderCart();
  }

  public updateQty(itemId: string, delta: number) {
    const item = this.cart.find(i => i.id === itemId);
    if (item) {
      item.quantity = Math.max(1, item.quantity + delta);
      this.renderCart();
    }
  }

  public removeItem(itemId: string) {
    this.cart = this.cart.filter(i => i.id !== itemId);
    this.renderCart();
  }

  private toggleCart(open: boolean) {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    if (open) {
      drawer?.classList.replace('drawer-closed', 'drawer-open');
      backdrop?.classList.remove('hidden');
    } else {
      drawer?.classList.replace('drawer-open', 'drawer-closed');
      backdrop?.classList.add('hidden');
    }
  }

  public closeCart() { this.toggleCart(false); }

  private renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const filtered = this.currentFilter === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === this.currentFilter);

    grid.innerHTML = filtered.map(p => `
      <div class="group relative bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,107,0,0.1)] transition-all duration-500 overflow-hidden border border-orange-100/30 flex flex-col h-full transform hover:-translate-y-2">
        <div class="h-64 relative overflow-hidden p-4" style="background: ${p.gradient}">
          <div class="w-full h-full relative overflow-hidden rounded-[2rem] shadow-inner">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 opacity-90 drop-shadow-2xl" />
          </div>
          <div class="absolute top-8 right-8 bg-gray-900/90 backdrop-blur-md text-white px-4 py-1.5 rounded-2xl font-black text-sm shadow-xl border border-white/10">
            ₱${p.price}
          </div>
        </div>
        <div class="px-6 py-6 flex flex-col flex-grow">
          <div class="flex-grow">
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 mb-1 block">
              ${p.category.includes('coffee') ? 'Premium Selection' : 'Classic Meal'}
            </span>
            <h3 class="text-lg font-black text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors uppercase italic">
              ${p.name}
            </h3>
            <p class="text-gray-500 text-xs font-medium leading-relaxed line-clamp-3">
              ${p.description}
            </p>
          </div>
          <div class="mt-8">
            <button onclick="app.addToOrder('${p.id}')" class="w-full bg-orange-600 text-white rounded-2xl h-14 text-sm font-black uppercase tracking-wider shadow-lg shadow-orange-100 transition-all active:scale-95 hover:bg-orange-700">
              Add To Order <i class="fas fa-plus ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  private renderCart() {
    const list = document.getElementById('cartList');
    const badge = document.getElementById('cartBadge');
    const totalEl = document.getElementById('cartTotal');
    const footer = document.getElementById('cartFooter');
    if (!list || !badge || !totalEl || !footer) return;

    const itemCount = this.cart.reduce((s, i) => s + i.quantity, 0);
    const total = this.cart.reduce((s, i) => s + i.price * i.quantity, 0);

    if (itemCount > 0) {
      badge.textContent = itemCount.toString();
      badge.classList.remove('hidden');
      footer.classList.remove('hidden');
      
      list.innerHTML = this.cart.map(item => `
        <div class="flex gap-4 p-4 rounded-3xl bg-orange-50/40 border border-orange-100/50">
          <div class="flex-grow">
            <h4 class="font-bold text-gray-900 line-clamp-1 leading-tight uppercase text-sm italic">${item.name}</h4>
            ${item.flavor ? `<span class="text-[9px] font-black uppercase px-2 py-0.5 bg-orange-200 text-orange-800 rounded-full mt-1 inline-block">${item.flavor}</span>` : ''}
            <p class="text-sm font-black text-orange-600 mt-2">₱${item.price * item.quantity}</p>
            <div class="flex items-center gap-4 mt-3">
              <div class="flex items-center bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button onclick="app.updateQty('${item.id}', -1)" class="px-3 py-1.5 text-gray-400 hover:text-gray-900"><i class="fas fa-minus text-[10px]"></i></button>
                <span class="px-2 font-black text-gray-900 text-sm min-w-[24px] text-center">${item.quantity}</span>
                <button onclick="app.updateQty('${item.id}', 1)" class="px-3 py-1.5 text-gray-400 hover:text-gray-900"><i class="fas fa-plus text-[10px]"></i></button>
              </div>
              <button onclick="app.removeItem('${item.id}')" class="text-[10px] font-black uppercase tracking-wider text-red-400 hover:text-red-600 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      `).join('');
    } else {
      badge.classList.add('hidden');
      footer.classList.add('hidden');
      list.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center p-10 opacity-30">
          <i class="fas fa-dragon text-6xl mb-4"></i>
          <h3 class="text-xl font-black uppercase italic">Empty Nest</h3>
          <p class="text-xs font-medium mt-2">Start adding some cave cravings!</p>
        </div>
      `;
    }

    totalEl.textContent = `₱${total}`;
  }

  public checkout() {
    alert("🦖 Rawr! Order placed. Our prehistoric chefs are now cooking your feast!");
    this.cart = [];
    this.renderCart();
    this.toggleCart(false);
  }
}

// Global exposure for HTML onclicks
(window as any).app = new CaveCraveApp();
