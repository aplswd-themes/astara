import { useState } from 'react';

interface Pairing {
  courseNumber: number;
  courseName: string;
  courseDesc: string;
  wineName: string;
  vintage: string;
  region: string;
  appellation: string;
  tastingNotes: string;
  servingTemp: string;
  icon: string;
}

const PAIRINGS: Pairing[] = [
  {
    courseNumber: 1,
    courseName: 'Brittany Blue Lobster & Oscietra Caviar',
    courseDesc: 'Gently poached lobster tail in brown butter emulsion, sea urchin velouté, and Oscietra caviar.',
    wineName: 'Dom Pérignon Vintage',
    vintage: '2012',
    region: 'Champagne, France',
    appellation: 'Grand Cru Épernay',
    tastingNotes: 'Crisp brioche, smoky chalk minerality, vibrant salinity that cuts through the caviar richness.',
    servingTemp: '10°C (50°F)',
    icon: '🥂',
  },
  {
    courseNumber: 2,
    courseName: 'Roasted Atlantic Turbot & Chanterelle Fumet',
    courseDesc: 'Pan-seared wild line-caught turbot, wild forest chanterelles, vin jaune reduction.',
    wineName: 'Domaine Leflaive Puligny-Montrachet',
    vintage: '2018',
    region: 'Burgundy, France',
    appellation: 'Premier Cru Les Pucelles',
    tastingNotes: 'White peach, crushed hazelnuts, refined flinty tension with silky layered texture.',
    servingTemp: '12°C (54°F)',
    icon: '🍷',
  },
  {
    courseNumber: 3,
    courseName: 'A5 Miyazaki Wagyu & Périgord Truffle',
    courseDesc: 'Charcoal-grilled Wagyu tenderloin, pomme mousseline, winter black truffle jus.',
    wineName: 'Château Margaux Premier Grand Cru Classé',
    vintage: '2015',
    region: 'Bordeaux, France',
    appellation: 'Margaux AOC',
    tastingNotes: 'Violet petals, cassis, velvety cashmere tannins, cigar box, and profound depth.',
    servingTemp: '17°C (63°F)',
    icon: '🍇',
  },
  {
    courseNumber: 4,
    courseName: 'Guanaja Chocolate Soufflé & Bourbon Vanilla',
    courseDesc: 'Warm 70% dark Valrhona molten soufflé, Tahitian vanilla bean gelato, fleur de sel.',
    wineName: "Château d'Yquem Premier Cru Supérieur",
    vintage: '2009',
    region: 'Sauternes, Bordeaux',
    appellation: 'Sauternes AOC',
    tastingNotes: 'Candied apricot, honeycomb, saffron, marmalade with laser-sharp botrytis acidity.',
    servingTemp: '9°C (48°F)',
    icon: '🍯',
  },
];

export function WinePairingGuide() {
  const [activeCourse, setActiveCourse] = useState<number>(0);

  const current = PAIRINGS[activeCourse];

  return (
    <div className="w-full my-16 p-8 md:p-12 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950/20 shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
          Curated Cellar Pairings
        </span>
        <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-white mt-3">
          Sommelier Course-by-Course Pairing Guide
        </h3>
        <p className="text-sm text-zinc-400 mt-2">
          Explore our cellar archive of over 450 rare vintages harmonized with Chef de Cuisine’s tasting carte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        {/* Course Navigation Column */}
        <div className="lg:col-span-5 space-y-3">
          {PAIRINGS.map((p, idx) => {
            const isActive = idx === activeCourse;
            return (
              <div
                key={p.courseNumber}
                onClick={() => setActiveCourse(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'border-amber-500 bg-amber-950/30 shadow-lg'
                    : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-850'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{p.icon}</span>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block">
                      Course {p.courseNumber}
                    </span>
                    <h4 className={`text-xs font-serif font-bold ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {p.courseName}
                    </h4>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">{p.vintage}</span>
              </div>
            );
          })}
        </div>

        {/* Wine Reveal Showcase Card */}
        <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800 p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                Cellar Selection • Course {current.courseNumber}
              </span>
              <h4 className="text-2xl font-serif font-black text-white mt-1">
                {current.wineName}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xl font-mono font-bold text-amber-400">{current.vintage}</span>
              <p className="text-[10px] text-zinc-400 font-mono">{current.servingTemp}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-zinc-500 block mb-0.5">Region & Terroir</span>
              <span className="font-semibold text-white">{current.region}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-zinc-500 block mb-0.5">Appellation</span>
              <span className="font-semibold text-white">{current.appellation}</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Sommelier Tasting Notes
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed italic bg-zinc-900/40 p-4 rounded-xl border border-zinc-850">
              "{current.tastingNotes}"
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="text-xs text-zinc-400">
              Harmonizes with: <strong className="text-white font-serif">{current.courseName}</strong>
            </div>
            <a
              href="#reserve"
              className="text-xs font-bold text-amber-400 hover:text-white uppercase tracking-wider flex items-center gap-1"
            >
              Reserve With Pairing →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
