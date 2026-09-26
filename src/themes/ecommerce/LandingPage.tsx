import React, { useState } from 'react';

const products = [
  { id: 1, name: 'The Classic Trench', price: '$850', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000' },
  { id: 2, name: 'Structured Leather Tote', price: '$1,200', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=1000' },
  { id: 3, name: 'Silk Evening Blouse', price: '$450', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000' },
  { id: 4, name: 'Minimalist Timepiece', price: '$2,100', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000' },
];

const categories = [
  { name: 'Ready To Wear', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Leather Goods', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200' },
];

const faqs = [
  { q: 'What is your return policy?', a: 'Complimentary returns are available within 30 days of receipt, provided items are returned in their original condition and packaging.' },
  { q: 'Do you offer international shipping?', a: 'Yes, we provide express global shipping. Delivery estimates are provided at checkout based on your destination.' },
  { q: 'How can I track my order?', a: 'A tracking link will be sent via email the moment your pieces are dispatched from our atelier.' },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#Fdfdfd] text-[#111111] font-sans selection:bg-[#EAEAEA]">
      {/* Modern Floating Pill Navigation */}
      <div className="fixed w-full top-6 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 md:px-8 h-16 flex items-center justify-between gap-12 shadow-2xl w-full max-w-5xl text-white">
          <div className="flex-1 flex gap-8 text-[12px] font-semibold tracking-widest uppercase">
            <a href="#" className="hover:text-gray-400 transition-colors">Shop</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Lookbook</a>
            <a href="#" className="hidden md:block hover:text-gray-400 transition-colors">Maison</a>
          </div>
          <div className="flex-shrink-0 text-xl font-bold tracking-[0.2em] uppercase text-center">
            Aura
          </div>
          <div className="flex-1 flex justify-end gap-6 text-[12px] font-semibold tracking-widest uppercase">
            <button className="hover:text-gray-400 transition-colors hidden md:block">Search</button>
            <button className="hover:text-gray-400 transition-colors">Account</button>
            <button className="hover:text-gray-400 transition-colors">Cart (0)</button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] mt-20 bg-[#F5F5F5] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-90 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            The New Classic
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-lg mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
            Redefining elegance for the modern era. Discover the Fall/Winter Collection.
          </p>
          <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <button className="bg-white text-black px-10 py-4 text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-all duration-500">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Trust / Benefits Marquee */}
      <section className="py-6 border-b border-[#EAEAEA] bg-white overflow-hidden">
        <div className="flex space-x-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap text-[11px] font-medium tracking-[0.2em] uppercase text-gray-500">
          <span>Complimentary Global Shipping</span>
          <span className="text-gray-300">•</span>
          <span>Artisan Crafted</span>
          <span className="text-gray-300">•</span>
          <span>Sustainable Materials</span>
          <span className="text-gray-300">•</span>
          <span>30-Day Returns</span>
          <span className="text-gray-300">•</span>
          <span>Complimentary Global Shipping</span>
          <span className="text-gray-300">•</span>
          <span>Artisan Crafted</span>
          <span className="text-gray-300">•</span>
          <span>Sustainable Materials</span>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Curated Categories</h2>
          <a href="#" className="text-[13px] font-medium tracking-[0.1em] uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((c, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden aspect-[3/4]">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-white text-2xl font-light tracking-wide">{c.name}</h3>
                <div className="h-[1px] w-0 bg-white mt-4 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection (Asymmetrical Grid) */}
      <section className="py-32 px-6 bg-[#F9F9F9]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Featured Pieces</h2>
            <p className="text-gray-500 font-light max-w-md mx-auto">Meticulously crafted objects that balance form and function.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 items-center">
            {/* Product 1 - Large */}
            <div className="md:col-span-7 group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-gray-100 relative">
                <img src={products[0].image} alt={products[0].name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-center px-2">
                <h3 className="text-lg font-light">{products[0].name}</h3>
                <span className="text-sm font-medium tracking-wide">{products[0].price}</span>
              </div>
            </div>
            
            {/* Product 2 - Small */}
            <div className="md:col-span-5 group cursor-pointer md:pt-32">
              <div className="aspect-square overflow-hidden mb-6 bg-gray-100 relative">
                <img src={products[1].image} alt={products[1].name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-center px-2">
                <h3 className="text-lg font-light">{products[1].name}</h3>
                <span className="text-sm font-medium tracking-wide">{products[1].price}</span>
              </div>
            </div>

            {/* Product 3 - Medium */}
            <div className="md:col-span-5 group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-100 relative">
                <img src={products[2].image} alt={products[2].name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-center px-2">
                <h3 className="text-lg font-light">{products[2].name}</h3>
                <span className="text-sm font-medium tracking-wide">{products[2].price}</span>
              </div>
            </div>

            {/* Product 4 - Large */}
            <div className="md:col-span-7 group cursor-pointer md:-mt-20">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-gray-100 relative">
                <img src={products[3].image} alt={products[3].name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-center px-2">
                <h3 className="text-lg font-light">{products[3].name}</h3>
                <span className="text-sm font-medium tracking-wide">{products[3].price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story / Lookbook */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 w-full aspect-[3/4] md:aspect-square relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200" alt="Brand Story" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 space-y-10 md:pr-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
            The Philosophy of <br/> Uncompromising Quality.
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            At Aura, we believe that true luxury lies in the details. Every thread, every texture, and every silhouette is conceived with an unwavering dedication to excellence. We partner with heritage artisans to create pieces that transcend seasons.
          </p>
          <button className="border border-black px-10 py-4 text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-all duration-300">
            Read Our Story
          </button>
        </div>
      </section>

      {/* Social / Instagram Gallery */}
      <section className="py-32 px-6 bg-[#Fdfdfd]">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-light tracking-tight mb-3">Join the World of Aura</h2>
          <p className="text-[13px] font-medium uppercase tracking-widest text-gray-500">@Aura_Maison</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-[1400px] mx-auto">
          {[
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1434389678232-04ce6ec4c356?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&q=80&w=600'
          ].map((src, i) => (
            <div key={i} className="aspect-square bg-gray-100 group relative overflow-hidden cursor-pointer">
              <img src={src} alt={`Instagram ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

            {/* Atelier Section - Modern Full Width Split */}
      <section className="py-24 md:py-32 bg-[#131313] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden group w-full max-w-lg mx-auto lg:mx-0">
            <img src="https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&q=80&w=1000" alt="Atelier Craftsmanship" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out opacity-90" />
            <div className="absolute inset-0 border-[0.75rem] border-[#131313] scale-95 group-hover:scale-100 transition-transform duration-[2s] ease-out pointer-events-none"></div>
          </div>
          <div className="max-w-xl mx-auto text-center lg:text-left">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">The Atelier</div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-[1.1]">Meticulous craftsmanship,<br/>redefined.</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg">
              Every garment is a testament to our dedication to the art of tailoring. We source only the finest sustainable materials, ensuring each piece not only looks exquisite but endures the test of time and trends.
            </p>
            <a href="#" className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase border-b border-gray-600 pb-2 hover:border-white hover:text-white transition-colors">Discover Our Process</a>
          </div>
        </div>
      </section>

      {/* Campaign Video/Banner Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?auto=format&fit=crop&q=80&w=2000" alt="Campaign" className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white flex flex-col items-center px-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.2em] uppercase mb-8 drop-shadow-2xl">Fall / Winter</h2>
          <div className="w-[1px] h-16 md:h-24 bg-white/50 mb-8"></div>
          <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md group">
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </section>

      {/* FAQ & Newsletter */}
      <section className="py-32 px-6 bg-[#111] text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-12">Client Care</h2>
            <div className="space-y-6 border-t border-gray-800 pt-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-800 pb-6">
                  <button 
                    className="w-full text-left flex justify-between items-center focus:outline-none group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium tracking-wide text-lg group-hover:text-gray-300 transition-colors">{faq.q}</span>
                    <span className="text-2xl font-light text-gray-500">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 font-light leading-relaxed text-sm pr-8">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-6">The Newsletter</h2>
            <p className="text-gray-400 font-light mb-10 max-w-md">Subscribe to receive updates on new arrivals, exclusive invitations, and curated editorial content.</p>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-gray-700 px-0 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600 font-light"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="self-start mt-4 px-10 py-4 bg-white text-black text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-20 pb-10 px-6 border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-light mb-24">
          <div className="col-span-1">
            <div className="text-2xl font-normal tracking-[0.2em] uppercase mb-8">Aura</div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              A modern fashion house dedicated to creating enduring objects of desire.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-[0.15em] text-[11px] text-gray-500">Boutique</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ready To Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leather Goods</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-[0.15em] text-[11px] text-gray-500">Maison</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-[0.15em] text-[11px] text-gray-500">Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-gray-500 uppercase tracking-widest border-t border-gray-800 pt-10">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Aura Maison. All rights reserved.</p>
          {/* Creator Badge */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="text-sm text-gray-500 font-medium">Creator</span>
            <div className="px-3 py-1.5 rounded-full bg-black/90 border border-gray-700 text-white text-sm font-bold flex items-center gap-2 hover:bg-black transition-colors shadow-sm">
              <span className="text-emerald-400">✦</span>
              aPLS Web Development
            </div>
          </div>
        </div>
      </footer>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
