
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from './constants';
import { Product, CartItem, Flavor } from './types';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { FlavorModal } from './components/FlavorModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Button } from './components/Button';

type CategoryFilter = 'all' | 'coffee' | 'meal';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [flavoringProduct, setFlavoringProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const cartItemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleAddToCart = (product: Product) => {
    if (product.hasFlavors) {
      setFlavoringProduct(product);
    } else {
      addToCartState(product);
      setIsCartOpen(true);
    }
  };

  const addToCartState = (product: Product, flavor?: Flavor) => {
    setCart(prevCart => {
      const itemId = flavor ? `${product.id}-${flavor.name}` : product.id;
      const existingItem = prevCart.find(item => item.id === itemId);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      return [
        ...prevCart,
        {
          id: itemId,
          productId: product.id,
          name: product.name,
          price: product.price + (flavor?.price || 0),
          flavor: flavor?.name,
          quantity: 1,
        }
      ];
    });
  };

  const handleFlavorSelect = (flavor: Flavor) => {
    if (flavoringProduct) {
      addToCartState(flavoringProduct, flavor);
      setFlavoringProduct(null);
      setIsCartOpen(true);
    }
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === itemId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const handleOpenCheckoutModal = () => {
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleFinalConfirm = () => {
    alert("🦖 Rawr! Order placed successfully! Your cave cravings are being prepared.");
    setCart([]);
    setIsCheckoutModalOpen(false);
  };

  return (
    <div className="min-h-screen pb-20 bg-[#fdf8f4]">
      {/* Dynamic Navbar */}
      <header className="sticky top-0 z-[1000] bg-white/70 backdrop-blur-xl border-b border-orange-100/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-200 -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              <i className="fas fa-dragon text-2xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-none italic uppercase">Cave Crave</h1>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-[10px] text-orange-600 uppercase font-black tracking-[0.2em]">Open & Cooking</p>
              </div>
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            className="relative rounded-2xl h-12 w-12 flex items-center justify-center bg-gray-900 text-white hover:bg-black"
            onClick={() => setIsCartOpen(true)}
          >
            <i className="fas fa-shopping-basket text-lg"></i>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-4 border-white animate-bounce">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </header>

      {/* Modern Hero Section */}
      <section className="px-6 pt-8 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-gradient-to-br from-orange-600 to-amber-500 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl shadow-orange-200">
            <div className="relative z-10">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 mb-6">
                <i className="fas fa-fire-alt"></i> Trending Now
              </span>
              <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-[1.05] drop-shadow-sm">The Primal Taste.</h2>
              <p className="text-orange-50 text-xl mb-10 opacity-90 max-w-lg leading-relaxed font-medium">
                Premium roasted beans meet authentic Korean fried chicken. One bite, and you'll crave the cave.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-orange-50 rounded-[1.5rem] px-10 h-16 text-lg font-black shadow-xl"
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Order Now <i className="fas fa-bolt ml-3 text-orange-500"></i>
                </Button>
              </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -bottom-20 -right-20 transform rotate-12 opacity-10 pointer-events-none">
               <i className="fas fa-drumstick-bite text-[400px] text-white"></i>
            </div>
          </div>

          <div className="lg:col-span-4 bg-gray-900 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-black mb-4">Iced Caramel Special</h3>
              <p className="text-gray-400 font-medium">Our most popular brew. Layered perfection at just ₱39.</p>
            </div>
            <div className="relative z-10 flex justify-between items-center mt-12">
              <span className="text-white text-4xl font-black">₱39</span>
              <Button 
                variant="primary" 
                className="rounded-2xl h-14 w-14 bg-orange-600 group-hover:scale-110 transition-transform"
                onClick={() => handleAddToCart(PRODUCTS[0])}
              >
                <i className="fas fa-plus"></i>
              </Button>
            </div>
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center mix-blend-luminosity"></div>
          </div>
        </div>
      </section>

      {/* Menu Navigation & Grid */}
      <main id="menu" className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-8 border-b border-gray-100 pb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">The Cravings Menu</h2>
            <p className="text-gray-500 font-medium mt-1 italic">Pick your poison (The good kind)</p>
          </div>
          
          <div className="flex bg-gray-100/80 p-1.5 rounded-2xl gap-1">
            {(['all', 'coffee', 'meal'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-[1.2rem] text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-white text-orange-600 shadow-lg shadow-orange-100' 
                  : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {cat === 'all' ? 'Everything' : cat === 'coffee' ? 'Brews' : 'Bites'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </main>

      {/* Fun Footer */}
      <footer className="mt-32 bg-gray-900 pt-20 pb-10 px-6 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-gray-800 pb-20">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white">
                  <i className="fas fa-dragon text-2xl"></i>
                </div>
                <h2 className="text-3xl font-black text-white italic uppercase">Cave Crave</h2>
              </div>
              <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
                The ultimate fusion of high-caffeine brews and crispy Korean chicken. Crafted for the primitive hunger.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-white hover:bg-orange-600 transition-colors text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-white hover:bg-orange-600 transition-colors text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-white hover:bg-orange-600 transition-colors text-xl">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">© 2024 Dino's Cave Crave</p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Drawer & Modals */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onCheckout={handleOpenCheckoutModal}
      />

      <FlavorModal 
        isOpen={!!flavoringProduct}
        product={flavoringProduct}
        onClose={() => setFlavoringProduct(null)}
        onSelect={handleFlavorSelect}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onConfirm={handleFinalConfirm}
        items={cart}
      />
    </div>
  );
};

export default App;
