import React, { useState } from 'react';
import { MEDIA } from '../../lib/media';
import { MotionHeroBackground } from '../interactive/MotionHeroBackground';

interface ProductItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  rating: string;
  image: string;
  stockLeft: number;
  hotspot: { x: string; y: string; text: string };
  specs: string[];
}

const HERO_PRODUCTS: ProductItem[] = [
  {
    id: 'lamp',
    name: 'Aura Cast Brass Studio Lamp',
    price: '$89',
    originalPrice: '$120',
    category: 'Lighting',
    rating: '4.9 (480 reviews)',
    image: MEDIA.ecommerce.lamp,
    stockLeft: 4,
    hotspot: { x: '58%', y: '42%', text: 'Solid Anodized Brass • 2700K Warm Dimming' },
    specs: ['95+ CRI Warm Dim', 'CNC Milled Brass', 'Touch Capacitive'],
  },
  {
    id: 'derby',
    name: 'Hand-Welted Tuscan Derby Shoes',
    price: '$349',
    category: 'Footwear',
    rating: '5.0 (210 reviews)',
    image: MEDIA.ecommerce.derbyShoes,
    stockLeft: 3,
    hotspot: { x: '52%', y: '60%', text: 'Vegetable-Tanned Italian Leather' },
    specs: ['Goodyear Welted', 'Full-Grain Calfskin', 'Vibram Outsole'],
  },
  {
    id: 'chrono',
    name: 'Grade 5 Titanium Chronograph',
    price: '$245',
    originalPrice: '$295',
    category: 'Horology',
    rating: '4.8 (890 reviews)',
    image: MEDIA.ecommerce.chronograph,
    stockLeft: 7,
    hotspot: { x: '50%', y: '48%', text: 'Aerospace Grade 5 Titanium • Sapphire Glass' },
    specs: ['100m Water Resistant', 'Super-LumiNova', 'Mecca-Quartz Calibre'],
  },
];

const FINISHES = ['Raw Brass', 'Matte Obsidian', 'Brushed Titanium'];

export const EcommerceHero: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedFinish, setSelectedFinish] = useState('Raw Brass');
  const [showHotspotModal, setShowHotspotModal] = useState(false);

  const current = HERO_PRODUCTS[activeIdx];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2400);
  };

  return (
    <section className="relative overflow-hidden min-h-[94vh] flex items-center bg-stone-50 dark:bg-stone-950 py-12 lg:py-16 border-b border-stone-200 dark:border-stone-850">
      {/* MotionSites Luxury Stardust & Fluidity Background Engine */}
      <MotionHeroBackground variant="ecommerce" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Asymmetric 3-Column Luxury Lookbook Grid (Totally Unique Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ── COLUMN 1 (4 Cols): Curator's Manifesto, Swatches & Purchase ── */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 w-max backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>COLLECTION // 04</span>
              <span className="text-stone-400">|</span>
              <span>Limited Batch</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] text-stone-900 dark:text-white mb-4">
              Precision design for your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
                daily sanctuary
              </span>.
            </h1>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
              Meticulously engineered lighting, hand-welted leather goods, and aerospace chronographs. Built with circular materials designed to outlast trends.
            </p>

            {/* Interactive Material / Finish Swatch Selector */}
            <div className="mb-6 p-3.5 rounded-2xl bg-white/80 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700 dark:text-stone-300 mb-2">
                <span>Selected Finish:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">{selectedFinish}</span>
              </div>
              <div className="flex items-center gap-2">
                {FINISHES.map((fin) => (
                  <button
                    key={fin}
                    onClick={() => setSelectedFinish(fin)}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all border ${
                      selectedFinish === fin
                        ? 'border-emerald-500 bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 shadow-sm'
                        : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400'
                    }`}
                  >
                    {fin}
                  </button>
                ))}
              </div>
            </div>

            {/* Scarcity Bar & Live Stock */}
            <div className="mb-6 p-3.5 rounded-2xl bg-white/80 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span className="text-stone-700 dark:text-stone-300 font-bold truncate max-w-[180px]">
                  {current.name}
                </span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                  {current.price} • Only {current.stockLeft} left
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                  style={{ width: `${100 - current.stockLeft * 10}%` }}
                />
              </div>
            </div>

            {/* Instant Buy CTA */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 px-6 font-bold rounded-2xl text-xs uppercase tracking-wider text-white transition-all shadow-xl shadow-emerald-600/25 hover:-translate-y-0.5 hover:shadow-emerald-600/40 bg-gradient-to-r from-emerald-600 to-teal-600 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{addedToCart ? '✓ Added to Shopping Bag' : `Instant Buy — ${current.price}`}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 font-medium pt-1">
                <span>✓ 48h Global Express</span>
                <span>•</span>
                <span>✓ 30-Day In-Home Trial</span>
              </div>
            </div>
          </div>

          {/* ── COLUMN 2 (5 Cols): The Hero Product Showcase Stage ── */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-2xl group">
              {/* Product Image */}
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-stone-900/80 text-white backdrop-blur-md">
                  {current.category}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white shadow-md">
                  ★ {current.rating.slice(0, 3)}
                </span>
              </div>

              {/* Interactive Hotspot Marker with Pulsing Ring */}
              <div
                className="absolute z-30 cursor-pointer -translate-x-1/2 -translate-y-1/2"
                style={{ top: current.hotspot.y, left: current.hotspot.x }}
                onClick={() => setShowHotspotModal(!showHotspotModal)}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-8 h-8 rounded-full bg-emerald-400/40 animate-ping" />
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center shadow-lg border-2 border-white">
                    +
                  </span>
                </div>
                {/* Hotspot callout tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-48 p-2.5 rounded-xl bg-stone-900/90 text-white text-[11px] font-medium leading-snug shadow-xl backdrop-blur-md border border-stone-750 pointer-events-none transition-all">
                  {current.hotspot.text}
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between p-3 rounded-2xl bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-stone-200/60 dark:border-stone-800/80">
                <div className="flex items-center gap-2">
                  {current.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-stone-200/60 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── COLUMN 3 (3 Cols): Live Capsule Reel & Verified Patron Review ── */}
          <div className="lg:col-span-3 order-3 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-500 pb-1 border-b border-stone-200 dark:border-stone-800">
              <span>Capsule Items</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">3 Objects</span>
            </div>

            {/* Quick Capsule Switcher Thumbnails */}
            <div className="space-y-2.5">
              {HERO_PRODUCTS.map((prod, pIdx) => (
                <button
                  key={prod.id}
                  onClick={() => {
                    setActiveIdx(pIdx);
                    setShowHotspotModal(false);
                  }}
                  className={`w-full p-2.5 rounded-2xl text-left transition-all flex items-center gap-3 border ${
                    activeIdx === pIdx
                      ? 'border-emerald-500 bg-white dark:bg-stone-900 shadow-md shadow-emerald-500/10'
                      : 'border-stone-200 dark:border-stone-800/80 bg-white/50 dark:bg-stone-900/40 hover:border-stone-300'
                  }`}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-stone-900 dark:text-white truncate">{prod.name}</p>
                    <p className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {prod.price} <span className="text-stone-400 font-normal">({prod.category})</span>
                    </p>
                  </div>
                  {activeIdx === pIdx && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Verified Patron Review Card */}
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 backdrop-blur-md">
              <div className="flex items-center gap-1 text-amber-400 text-xs mb-2">
                <span>★★★★★</span>
                <span className="text-stone-400 text-[10px] ml-1">Verified Patron</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 italic leading-relaxed mb-3">
                &ldquo;The machining tolerances and tactile dimming rival Swiss horology. An absolute centerpiece on my oak desk.&rdquo;
              </p>
              <div className="text-[11px] font-bold text-stone-800 dark:text-stone-200">
                — Marcus K., Architect
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
