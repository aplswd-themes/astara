import React, { useState } from 'react';
import { MEDIA } from '../../lib/media';

interface TerroirNode {
  id: string;
  course: string;
  dishName: string;
  provenance: string;
  winePairing: string;
  tastingNotes: string;
  image: string;
  techniques: string[];
}

const NODES: TerroirNode[] = [
  {
    id: 'course-1',
    course: 'Course I · Amuse-Bouche',
    dishName: 'Brittany Blue Lobster & Finger Lime Caviar',
    provenance: 'Line-caught off the rocky reefs of Saint-Malo, Brittany',
    winePairing: '2014 Dom Pérignon Vintage Brut Champagne',
    tastingNotes: 'Crisp oceanic salinity tempered by aromatic citrus pearls and cold-pressed emulsion.',
    image: MEDIA.restaurant.lobster,
    techniques: ['Gentle butter poach at 54°C', 'Finger lime caviar extraction', 'Kelp crisp tuile'],
  },
  {
    id: 'course-2',
    course: 'Course IV · Entrée',
    dishName: 'Perigord Black Winter Truffle & Carnaroli',
    provenance: 'Foraged in the oak groves of Sarlat, Périgord',
    winePairing: '2018 Domaine Dujac Morey-Saint-Denis Premier Cru',
    tastingNotes: 'Deep earthy aroma, velvety 36-month Parmigiano Reggiano, and rich saffron butter broth.',
    image: MEDIA.restaurant.wagyu,
    techniques: ['Slow 48-hr mushroom stock reduction', 'Table-side truffle shaving', 'Bone marrow aeration'],
  },
  {
    id: 'course-3',
    course: 'Course VII · Plat Principal',
    dishName: 'A5 Miyazaki Wagyu Ribeye & Foraged Morels',
    provenance: 'Miyazaki Prefecture, Japan & French Alpine Foothills',
    winePairing: '2012 Château Pontet-Canet Grand Cru Pauillac',
    tastingNotes: 'Incredible marble score 12 tenderness, smoky binchotan char, and glazed alpine morels.',
    image: MEDIA.restaurant.turbot,
    techniques: ['Japanese Binchotan charcoal grill', 'Robuchon potato mousseline', 'Fermented black garlic glaze'],
  },
  {
    id: 'course-4',
    course: 'Course XI · Finale',
    dishName: 'Grand Cru Guayaquil Chocolate & Bourbon Soufflé',
    provenance: 'Single-origin wild heirloom cacao, Ecuador',
    winePairing: '1997 Château d\'Yquem Premier Cru Supérieur Sauternes',
    tastingNotes: 'Airy warmth with a molten bittersweet core, paired with Madagascar Bourbon vanilla bean gelato.',
    image: MEDIA.restaurant.souffle,
    techniques: ['French copper mold baking', 'Molten core injection at table', 'Gold leaf dusting'],
  },
];

export const RestaurantTerroirTree: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<TerroirNode>(NODES[0]);

  return (
    <section className="my-24 py-20 px-4 rounded-3xl border border-amber-500/25 bg-stone-950 text-stone-200 relative overflow-hidden shadow-2xl">
      {/* Candlelit amber glow background */}
      <div className="absolute -top-32 left-10 w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-32 right-10 w-[450px] h-[450px] bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-serif font-semibold mb-4 border border-amber-500/30 bg-amber-950/50 text-amber-400">
            <span>◈ THE HAUTE TERROIR & DEGUSTATION PROVENANCE TREE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
            Twelve courses of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">culinary poetry & terroir</span>.
          </h2>
          <p className="text-base text-stone-400 mt-4 leading-relaxed font-sans">
            Every dish honors the origin of its ingredients. Trace our four signature courses from coastal Brittany waters to the tables of Salon Privé.
          </p>
        </div>

        {/* Tree Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 4 Courses / Tasting Steps */}
          <div className="lg:col-span-6 space-y-4">
            {NODES.map((node, index) => {
              const isSelected = activeCourse.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveCourse(node)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? 'bg-stone-900 border-amber-500 shadow-xl shadow-amber-950/50 ring-1 ring-amber-500/40 -translate-y-0.5'
                      : 'bg-stone-900/40 border-stone-800 hover:bg-stone-900/80 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-serif font-bold text-amber-400 uppercase tracking-widest block mb-1">
                        {node.course}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {node.dishName}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1 font-sans">
                        📍 {node.provenance}
                      </p>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-serif font-bold transition-all shrink-0 ${
                        isSelected
                          ? 'bg-amber-500 border-white text-stone-950 shadow-md'
                          : 'bg-stone-950 border-stone-800 text-stone-500'
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-850 flex items-center justify-between text-xs">
                    <span className="text-amber-300/90 font-serif text-[11px] flex items-center gap-1.5">
                      <span>🍷</span>
                      <span>{node.winePairing}</span>
                    </span>
                    <span className="text-[10px] uppercase font-bold text-stone-400 font-sans tracking-wider">
                      Chef Selection
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Dish Showcase */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="rounded-3xl border border-amber-500/30 bg-stone-900/95 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-black">
                <img
                  src={activeCourse.image}
                  alt={activeCourse.dishName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-serif font-bold tracking-widest px-3 py-1 rounded-full bg-black/70 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                    {activeCourse.course}
                  </span>
                  <span className="text-xs font-serif font-bold px-3 py-1 rounded-full bg-amber-500 text-stone-950 shadow-md">
                    Three Michelin Stars
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-0.5">Cellar Sommelier Harmony</span>
                  <p className="text-xs sm:text-sm font-serif text-stone-200">{activeCourse.winePairing}</p>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">{activeCourse.dishName}</h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans italic">
                    "{activeCourse.tastingNotes}"
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-stone-800">
                  <span className="text-[10px] font-mono uppercase font-bold text-stone-400 tracking-wider">
                    Culinary Method & Technical Mastery
                  </span>
                  <div className="space-y-1.5">
                    {activeCourse.techniques.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-300 font-sans">
                        <span className="text-amber-400">◈</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-sans">Intimate seating for tonight</span>
                  <a
                    href="#reserve"
                    className="px-5 py-2.5 rounded-xl text-xs font-serif font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 transition-all hover:scale-105 shadow-md shadow-amber-500/20"
                  >
                    Reserve Table →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
