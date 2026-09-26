import { useState } from 'react';

interface Hotspot {
  id: string;
  name: string;
  category: string;
  price: number;
  x: number; // percentage
  y: number; // percentage
  details: string;
  tag: string;
  image: string;
}

const LOOKBOOK_HOTSPOTS: Hotspot[] = [
  {
    id: 'fedora',
    name: 'Brushed Beaver Felt Fedora',
    category: 'Headwear',
    price: 180,
    x: 48,
    y: 16,
    details: 'Water-resistant hand-blocked felt with silk lining and grosgrain ribbon.',
    tag: 'Handcrafted',
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'knitwear',
    name: 'Chunky Ribbed Cashmere Turtleneck',
    category: 'Knitwear',
    price: 290,
    x: 52,
    y: 38,
    details: 'Grade-A 4-ply Mongolian cashmere. Cloud-soft warmth with zero itch.',
    tag: 'Sustainable',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'trousers',
    name: 'Pleated Wool Wide-Leg Trousers',
    category: 'Trousers',
    price: 220,
    x: 46,
    y: 66,
    details: 'Italian tropical wool with high rise, double front pleats, and horn buttons.',
    tag: 'Tailored',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'oxfords',
    name: 'Blake-Stitched Calfskin Derby',
    category: 'Footwear',
    price: 380,
    x: 54,
    y: 88,
    details: 'Full-grain French box calf with Vibram rubber half-sole for all-weather grip.',
    tag: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=400&q=80',
  },
];

export function InteractiveLookbook() {
  const [activePin, setActivePin] = useState<Hotspot>(LOOKBOOK_HOTSPOTS[1]);
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddToCart = () => {
    setNotification(`Added "${activePin.name}" ($${activePin.price}) to bag!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="w-full my-16 p-8 md:p-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
          Editorial Lookbook
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
          Interactive "Shop The Look" Canvas
        </h3>
        <p className="text-sm text-zinc-400 mt-2">
          Click any glowing beacon on the live editorial photo below to inspect fabrics, craftsmanship, and specs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        {/* Interactive Visual Canvas with Real Model Photography & Pulsing Hotspot Pins */}
        <div className="lg:col-span-7 h-[460px] rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden flex items-center justify-center shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
            alt="Editorial Lookbook Model"
            className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Hotspot Pins */}
          {LOOKBOOK_HOTSPOTS.map((pin) => {
            const isActive = activePin.id === pin.id;
            return (
              <button
                key={pin.id}
                onClick={() => setActivePin(pin)}
                style={{ top: `${pin.y}%`, left: `${pin.x}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group flex items-center justify-center transition-all ${
                  isActive ? 'scale-125' : 'hover:scale-110'
                }`}
                title={pin.name}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-xl transition-all ${
                    isActive
                      ? 'bg-emerald-400 text-black ring-4 ring-emerald-500/50 scale-110'
                      : 'bg-white text-zinc-950 hover:bg-emerald-300 ring-2 ring-black/40'
                  }`}
                >
                  +
                </div>
                {/* Ping wave */}
                <span className="absolute inset-0 rounded-full bg-emerald-400/60 animate-ping pointer-events-none" />
              </button>
            );
          })}

          <div className="absolute bottom-4 left-4 text-xs font-semibold text-zinc-200 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Tap any pulsing (+) pin to inspect garment
          </div>
        </div>

        {/* Selected Hotspot Item Details Card */}
        <div className="lg:col-span-5 bg-zinc-950/95 border border-zinc-800 p-6 rounded-2xl space-y-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800/40">
              {activePin.tag}
            </span>
            <span className="text-xs font-mono text-zinc-400">{activePin.category}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-zinc-700 bg-zinc-900">
              <img src={activePin.image} alt={activePin.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">{activePin.name}</h4>
              <p className="text-2xl font-black text-emerald-400 font-mono mt-0.5">
                ${activePin.price}
              </p>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            {activePin.details}
          </p>

          <div className="pt-2 border-t border-zinc-850 space-y-2 text-xs text-zinc-400">
            <div className="flex items-center justify-between">
              <span>Free Express Delivery</span>
              <span className="text-emerald-400 font-semibold">Included Worldwide</span>
            </div>
            <div className="flex items-center justify-between">
              <span>30-Day Home Trial</span>
              <span className="text-emerald-400 font-semibold">Guaranteed</span>
            </div>
          </div>

          {notification && (
            <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500 text-xs font-bold text-emerald-300 text-center animate-fade-in">
              ✓ {notification}
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/30"
          >
            Add Selected Item to Bag →
          </button>
        </div>
      </div>
    </div>
  );
}
