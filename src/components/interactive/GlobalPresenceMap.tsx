import React, { useState } from 'react';

interface StudioLocation {
  id: string;
  city: string;
  country: string;
  role: string;
  coords: string;
  address: string;
  localTime: string;
  team: string;
  xPercent: number; // percentage on map
  yPercent: number;
}

const LOCATIONS: StudioLocation[] = [
  {
    id: 'sf',
    city: 'San Francisco',
    country: 'United States',
    role: 'Global Headquarters & Systems Lab',
    coords: '37.7749° N, 122.4194° W',
    address: '123 Innovation Drive, Ste 400, SF, CA 94102',
    localTime: '05:25 PST',
    team: '28 Engineers & Architects',
    xPercent: 18,
    yPercent: 38,
  },
  {
    id: 'london',
    country: 'United Kingdom',
    city: 'London',
    role: 'Creative Direction & Brand Atelier',
    coords: '51.5074° N, 0.1278° W',
    address: '42 Shoreditch High St, London E1 6JJ',
    localTime: '13:25 GMT',
    team: '16 Designers & Writers',
    xPercent: 48,
    yPercent: 28,
  },
  {
    id: 'tokyo',
    country: 'Japan',
    city: 'Tokyo',
    role: 'Spatial Computing & Edge Ops',
    coords: '35.6762° N, 139.6503° E',
    address: 'Minato-ku, Roppongi Hills Mori Tower 24F',
    localTime: '22:25 JST',
    team: '12 Spatial Researchers',
    xPercent: 82,
    yPercent: 42,
  },
];

export const GlobalPresenceMap: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState<StudioLocation>(LOCATIONS[0]);

  return (
    <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      {/* Background World Grid Coordinates */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800/80">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
            Worldwide Studio Network
          </span>
          <h3 className="text-xl font-bold text-white mt-0.5">
            Distributed Across 3 Continents
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLoc(loc)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                activeLoc.id === loc.id
                  ? 'border-indigo-500 bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white'
              }`}
            >
              {loc.city}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Map Visual Stage */}
      <div className="relative w-full aspect-[21/9] min-h-[260px] bg-zinc-900/40 rounded-2xl border border-zinc-850/80 overflow-hidden mb-6 flex items-center justify-center">
        {/* Subtle SVG World Dots Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70" />

        {/* Global Connection Laser Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-indigo-500/30" strokeWidth="1.5" strokeDasharray="4 6">
          <line x1="18%" y1="38%" x2="48%" y2="28%" />
          <line x1="48%" y1="28%" x2="82%" y2="42%" />
        </svg>

        {/* Location Pulsing Beacons */}
        {LOCATIONS.map((loc) => {
          const isSelected = activeLoc.id === loc.id;
          return (
            <div
              key={loc.id}
              onClick={() => setActiveLoc(loc)}
              className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 z-20 group"
              style={{ left: `${loc.xPercent}%`, top: `${loc.yPercent}%` }}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute w-10 h-10 rounded-full animate-ping ${
                    isSelected ? 'bg-indigo-400/40' : 'bg-zinc-500/20'
                  }`}
                />
                <span
                  className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                    isSelected
                      ? 'bg-indigo-500 border-white scale-125 shadow-lg shadow-indigo-500/50'
                      : 'bg-zinc-800 border-zinc-500 group-hover:scale-110'
                  }`}
                />
              </div>

              {/* Pin Label */}
              <div
                className={`mt-2 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold whitespace-nowrap transition-all shadow-md ${
                  isSelected
                    ? 'bg-indigo-600 text-white border border-indigo-400'
                    : 'bg-zinc-900/90 text-zinc-400 border border-zinc-800 group-hover:text-white'
                }`}
              >
                {loc.city} • {loc.localTime}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Studio Hub Detail Strip */}
      <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
            Studio Location
          </span>
          <div className="text-sm font-bold text-white mt-0.5">{activeLoc.city}, {activeLoc.country}</div>
          <div className="text-xs text-zinc-400 mt-0.5">{activeLoc.address}</div>
        </div>

        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
            Hub Specialty & Capacity
          </span>
          <div className="text-sm font-bold text-indigo-400 mt-0.5">{activeLoc.role}</div>
          <div className="text-xs text-zinc-400 mt-0.5">{activeLoc.team}</div>
        </div>

        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
            Local Time & Coordinates
          </span>
          <div className="text-sm font-mono font-bold text-emerald-400 mt-0.5">
            ● Active // {activeLoc.localTime}
          </div>
          <div className="text-xs font-mono text-zinc-500 mt-0.5">{activeLoc.coords}</div>
        </div>
      </div>
    </div>
  );
};
