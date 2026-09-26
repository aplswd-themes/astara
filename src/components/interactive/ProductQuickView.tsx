import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  badge?: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'wool-coat',
    name: 'Merino Structured Minimalist Coat',
    category: 'Outerwear',
    price: 340,
    rating: 4.9,
    reviews: 128,
    stock: 4,
    colors: [
      { name: 'Oatmeal', hex: '#d6c7b2' },
      { name: 'Charcoal', hex: '#27272a' },
      { name: 'Espresso', hex: '#3f2e21' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Double-faced virgin merino wool with hand-stitched lapels and hidden magnetic closure. Tailored for effortless everyday layering.',
    badge: '★ Best Seller',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'leather-tote',
    name: 'Full-Grain Architectural Leather Tote',
    category: 'Accessories',
    price: 260,
    rating: 4.8,
    reviews: 94,
    stock: 2,
    colors: [
      { name: 'Cognac', hex: '#9a3412' },
      { name: 'Noir', hex: '#18181b' },
      { name: 'Olive', hex: '#365314' },
    ],
    sizes: ['Standard 16"'],
    description: 'Vegetable-tanned Tuscan calfskin with solid brass hardware. Padded laptop sleeve accommodates up to 16" MacBook Pro.',
    badge: 'Limited Stock',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'linen-shirt',
    name: 'Relaxed French Linen Overshirt',
    category: 'Shirting',
    price: 145,
    rating: 4.9,
    reviews: 215,
    stock: 9,
    colors: [
      { name: 'Chalk White', hex: '#fafaf9' },
      { name: 'Faded Indigo', hex: '#1e3a8a' },
      { name: 'Sage', hex: '#84cc16' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Pre-washed Normandy flax with mother-of-pearl buttons. Breathable, durable, and softens with every wear.',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
  },
];

interface CartItem {
  product: Product;
  color: string;
  size: string;
}

export function ProductQuickView() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [activeColor, setActiveColor] = useState<string>(PRODUCTS[0].colors[0].name);
  const [activeSize, setActiveSize] = useState<string>(PRODUCTS[0].sizes[1] || PRODUCTS[0].sizes[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSelectProduct = (p: Product) => {
    setSelectedProduct(p);
    setActiveColor(p.colors[0].name);
    setActiveSize(p.sizes[0]);
  };

  const addToCart = () => {
    setCart((prev) => [
      ...prev,
      { product: selectedProduct, color: activeColor, size: activeSize },
    ]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price, 0);

  return (
    <div className="w-full my-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Interactive Product Suite
          </span>
          <h3 className="text-3xl font-black text-white mt-1">Curated Daily Essentials</h3>
        </div>

        {/* View Cart Pill Trigger */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-bold text-white hover:border-emerald-500 transition-colors shadow-lg self-start md:self-auto"
        >
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>Bag ({cart.length})</span>
          {cart.length > 0 && (
            <span className="text-emerald-400 font-mono">${cartTotal}</span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Product Selector Thumbnails */}
        <div className="lg:col-span-4 space-y-3">
          {PRODUCTS.map((p) => {
            const isSelected = p.id === selectedProduct.id;
            return (
              <div
                key={p.id}
                onClick={() => handleSelectProduct(p)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-950/30 shadow-lg'
                    : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-850 hover:border-zinc-700'
                }`}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-zinc-700 bg-zinc-950">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    {p.category}
                  </span>
                  <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                    {p.name}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs font-mono font-bold text-emerald-400">${p.price}</p>
                    <div className="flex -space-x-1">
                      {p.colors.map((c) => (
                        <span
                          key={c.name}
                          className="w-3 h-3 rounded-full border border-zinc-900 shadow-sm"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Product Interactive Showcase Card */}
        <div className="lg:col-span-8 p-6 md:p-8 rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Visual Photographic Canvas with Glass HUD */}
            <div className="h-88 md:h-96 rounded-2xl relative overflow-hidden shadow-2xl border border-zinc-800 group">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-black/30 pointer-events-none" />

              <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                {selectedProduct.badge && (
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-emerald-600 text-white shadow-md">
                    {selectedProduct.badge}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 ml-auto">
                  {selectedProduct.stock <= 5 ? `⚡ Only ${selectedProduct.stock} Left` : 'In Stock'}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-zinc-300 z-10 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                <span>Color: <strong className="text-emerald-400">{activeColor}</strong></span>
                <span>Size: <strong className="text-white">{activeSize}</strong></span>
              </div>
            </div>

            {/* Config & Buy Panel */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {selectedProduct.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-2xl font-black text-white font-mono">
                    ${selectedProduct.price}
                  </span>
                  <div className="flex items-center text-xs text-amber-400 font-semibold">
                    <span>★ {selectedProduct.rating}</span>
                    <span className="text-zinc-500 ml-1">({selectedProduct.reviews} verified reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Color Selector */}
              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-2">
                  Colorway: <span className="font-normal text-emerald-400">{activeColor}</span>
                </label>
                <div className="flex items-center gap-2">
                  {selectedProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setActiveColor(c.name)}
                      className={`w-7 h-7 rounded-full transition-transform border-2 flex items-center justify-center ${
                        activeColor === c.name ? 'scale-110 border-emerald-400 shadow-md ring-2 ring-emerald-500/40' : 'border-zinc-700 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-2">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveSize(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        activeSize === s
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-750 border border-zinc-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Bag CTA */}
              <button
                onClick={addToCart}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Add To Bag — ${selectedProduct.price}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-over Cart Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md bg-zinc-950 border-l border-zinc-800 h-full p-6 flex flex-col justify-between shadow-2xl animate-fade-in">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h4 className="text-lg font-black text-white">Your Shopping Bag</h4>
                  <span className="text-xs font-mono text-zinc-500">({cart.length})</span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800"
                >
                  ✕
                </button>
              </div>

              <div className="py-6 space-y-4 max-h-[60vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-zinc-500 text-sm">
                    <p className="text-3xl mb-2">🛍️</p>
                    Your shopping bag is currently empty.
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-3"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-zinc-800">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white truncate">{item.product.name}</p>
                        <p className="text-[11px] text-zinc-400">
                          {item.color} / {item.size}
                        </p>
                        <p className="text-xs font-mono font-bold text-emerald-400 mt-0.5">
                          ${item.product.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-xs text-red-400 hover:text-red-300 p-1"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>Subtotal</span>
                  <span className="font-mono text-emerald-400">${cartTotal}</span>
                </div>
                <p className="text-[10px] text-zinc-400">
                  Taxes and express shipping calculated at final checkout step.
                </p>
                <a
                  href="/contact"
                  className="w-full block text-center py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30"
                >
                  Proceed to Secure Checkout →
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
