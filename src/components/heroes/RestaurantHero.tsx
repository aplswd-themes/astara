import React, { useState } from 'react';
import { MEDIA } from '../../lib/media';
import { MotionHeroBackground } from '../interactive/MotionHeroBackground';

interface TastingCourse {
  number: string;
  frenchTitle: string;
  name: string;
  description: string;
  pairing: string;
  pairingVintage: string;
  image: string;
}

const TASTING_COURSES: TastingCourse[] = [
  {
    number: 'Course I',
    frenchTitle: 'Entrée Signature',
    name: 'Brittany Blue Lobster & Oscietra Caviar',
    description: 'Saffron champagne velouté, sea samphire, braised baby leeks, Hokkaido sea urchin emulsion.',
    pairing: 'Dom Pérignon Brut Vintage',
    pairingVintage: 'Épernay 2012',
    image: MEDIA.restaurant.lobster,
  },
  {
    number: 'Course II',
    frenchTitle: 'Plat Principal',
    name: 'A5 Miyazaki Wagyu & Périgord Truffle',
    description: '28-day dry aged ribeye, Robuchon pomme mousseline, foraged autumn morels, marrow reduction jus.',
    pairing: 'Château Margaux Premier Grand Cru',
    pairingVintage: 'Bordeaux 2010',
    image: MEDIA.restaurant.wagyu,
  },
  {
    number: 'Course III',
    frenchTitle: 'Dessert d’Or',
    name: 'Grand Marnier Laminated Soufflé',
    description: 'Madagascan vanilla bean pod anglaise, 24k gold leaf tuile, crystallized blood orange zest.',
    pairing: 'Château d’Yquem Sauternes',
    pairingVintage: 'Graves 2008',
    image: MEDIA.restaurant.souffle,
  },
];

export const RestaurantHero: React.FC = () => {
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const [partySize, setPartySize] = useState('2 Guests');
  const [seatingTime, setSeatingTime] = useState('8:00 PM (Prime Tasting)');
  const [reservationHeld, setReservationHeld] = useState(false);

  const course = TASTING_COURSES[activeCourseIdx];

  const handleHoldTable = () => {
    setReservationHeld(true);
    setTimeout(() => setReservationHeld(false), 3800);
  };

  return (
    <section className="relative overflow-hidden min-h-[96vh] flex flex-col justify-center bg-[#090807] text-stone-200 py-16 lg:py-24 border-b border-stone-850">
      {/* MotionSites 24k Gold Embers, Champagne Turbulence & Guilloché Mandala Background Engine */}
      <MotionHeroBackground variant="restaurant" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* ── GRAND GOLD THREE-STAR CREST ── */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-xs font-semibold border border-amber-500/40 bg-amber-950/40 text-amber-300 backdrop-blur-md shadow-lg shadow-amber-950/40">
            <span className="text-amber-400 text-sm tracking-widest">★★★</span>
            <span className="font-serif tracking-widest uppercase font-bold text-[11px]">
              Three Michelin Stars • Guide 2024
            </span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400 text-[11px]">Paris & Tokyo</span>
          </div>
        </div>

        {/* ── GRAND ROMANESQUE DIDOT TYPOGRAPHY ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Gastronomic artistry in{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
              every course
            </span>.
          </h1>
          <p className="text-base sm:text-lg text-stone-400 leading-relaxed font-light max-w-2xl mx-auto">
            Saveur is an intimate culinary sanctuary where rare seasonal terroir converges with classical French technique and Japanese precision.
          </p>
        </div>

        {/* ── 3-COURSE DÉGUSTATION INTERACTIVE STAGE (Symmetrical Gastronomy Theater) ── */}
        <div className="rounded-3xl border border-amber-500/30 bg-stone-900/80 backdrop-blur-xl shadow-2xl shadow-black overflow-hidden mb-8">
          {/* Course Stepper Nav */}
          <div className="grid grid-cols-3 border-b border-stone-800 bg-black/60">
            {TASTING_COURSES.map((c, idx) => (
              <button
                key={c.number}
                onClick={() => setActiveCourseIdx(idx)}
                className={`py-3.5 px-2 sm:px-4 text-center transition-all flex flex-col items-center gap-0.5 border-b-2 ${
                  activeCourseIdx === idx
                    ? 'border-amber-400 bg-amber-950/30 text-amber-300 font-bold'
                    : 'border-transparent text-stone-500 hover:text-stone-300'
                }`}
              >
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/80">{c.number}</span>
                <span className="text-xs sm:text-sm font-serif truncate max-w-full">{c.frenchTitle}</span>
              </button>
            ))}
          </div>

          {/* Active Course Presentation */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Gastronomic Description & Cellar Pairing */}
              <div className="md:col-span-7">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-2">
                  {course.number} — {course.frenchTitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                  {course.name}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed mb-6 font-light">
                  {course.description}
                </p>

                {/* Sommelier Cellar Pairing Note */}
                <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/25 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 text-sm">
                    🍷
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-amber-400/90 font-bold">
                      Sommelier Grand Cru Pairing
                    </div>
                    <div className="text-sm font-serif font-bold text-white mt-0.5">
                      {course.pairing}
                    </div>
                    <div className="text-xs text-stone-400">
                      Cellar Vintage: {course.pairingVintage} • Hand-Decanted
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Culinary Presentation Visual with Gold Frame */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-amber-950/30 group">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300 font-bold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                      Plated by Chef de Cuisine
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── INSTANT TABLE HOLD CONSOLE (Direct Action in Hero) ── */}
        <div className="p-4 rounded-2xl bg-stone-900/90 border border-amber-500/30 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            <div className="sm:col-span-3">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-1">
                Party Size
              </label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                className="w-full text-xs font-bold p-2.5 rounded-xl border border-stone-800 bg-black text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option>2 Guests (Intimate)</option>
                <option>4 Guests (Salon Table)</option>
                <option>6 Guests (Private Atelier)</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-1">
                Seating Date
              </label>
              <div className="w-full text-xs font-bold p-2.5 rounded-xl border border-stone-800 bg-black text-amber-300">
                Tonight, September 23
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-1">
                Service Time
              </label>
              <select
                value={seatingTime}
                onChange={(e) => setSeatingTime(e.target.value)}
                className="w-full text-xs font-bold p-2.5 rounded-xl border border-stone-800 bg-black text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option>6:30 PM (Early Dégustation)</option>
                <option>8:00 PM (Prime Tasting)</option>
                <option>9:30 PM (Late Salon)</option>
              </select>
            </div>

            <div className="sm:col-span-3 pt-1 sm:pt-4">
              <button
                onClick={handleHoldTable}
                className="w-full py-3 px-5 font-bold rounded-xl text-xs uppercase tracking-wider text-black transition-all shadow-xl shadow-amber-500/20 hover:-translate-y-0.5 hover:shadow-amber-500/40 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 active:scale-95 flex items-center justify-center gap-1.5"
              >
                <span>{reservationHeld ? '✓ Table Held (24h)' : 'Hold Table ✦'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
