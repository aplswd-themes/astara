import { useState } from 'react';

const SEATING_AREAS = [
  { id: 'main', name: 'Grand Dining Room', desc: 'Center of culinary salon under Austrian crystal chandeliers', fee: '$285 / guest' },
  { id: 'counter', name: "Chef's Counter (Open Kitchen)", desc: 'Front-row 8-seat counter facing Chef de Cuisine', fee: '$360 / guest' },
  { id: 'salon', name: 'Private Salon Bellevue', desc: 'Secluded salon with fireplace and dedicated maître d’', fee: '$450 / guest' },
];

export function TableReservationModal() {
  const [guests, setGuests] = useState<number>(2);
  const [seating, setSeating] = useState<string>('main');
  const [timeSlot, setTimeSlot] = useState<string>('08:00 PM');
  const [winePairing, setWinePairing] = useState<boolean>(true);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const selectedSeating = SEATING_AREAS.find((s) => s.id === seating) || SEATING_AREAS[0];

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
  };

  return (
    <div id="reserve" className="w-full my-16 p-8 md:p-12 rounded-3xl border border-red-500/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950/20 shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
          Michelin Three Stars
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
          Reserve Your Gastronomy Salon Experience
        </h3>
        <p className="text-sm text-zinc-400 mt-2">
          Intimate seasonal dining. Reservations open 30 days in advance with live maître d' table assignment.
        </p>
      </div>

      {isConfirmed ? (
        <div className="max-w-md mx-auto text-center p-8 rounded-2xl bg-zinc-950 border border-amber-500/50 shadow-2xl animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 text-3xl flex items-center justify-center mx-auto mb-4 border border-amber-500/40 font-serif">
            ◈
          </div>
          <h4 className="text-xl font-serif font-black text-white">Table Confirmed</h4>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
            Your reservation for <strong className="text-amber-300">{guests} Guests</strong> in the{' '}
            <strong className="text-white">{selectedSeating.name}</strong> has been secured for{' '}
            <strong className="text-amber-300">{timeSlot}</strong>.
          </p>

          <div className="my-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-zinc-500">Curated Menu:</span>
              <span className="text-zinc-200 font-semibold">9-Course Seasonal Degustation</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Sommelier Pairing:</span>
              <span className={winePairing ? 'text-amber-400 font-semibold' : 'text-zinc-400'}>
                {winePairing ? 'Grand Cru Cellar Included' : 'A la Carte Selection'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Dress Code:</span>
              <span className="text-zinc-300 font-medium">Elegant Formal Attire</span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30"
          >
            Modify or Book Another Table
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Seating Salon Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-3">
              1. Select Dining Salon & Ambience
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SEATING_AREAS.map((area) => {
                const isSelected = seating === area.id;
                return (
                  <div
                    key={area.id}
                    onClick={() => setSeating(area.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-amber-500 bg-amber-950/20 shadow-lg'
                        : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-850'
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-serif font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                        {area.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{area.desc}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 mt-3 block">
                      {area.fee}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Guests & Times */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                Party Size: <span className="text-amber-400 font-mono">{guests} Guests</span>
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 4, 6, 8].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGuests(g)}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                      guests === g
                        ? 'bg-amber-600 text-black border-amber-400 shadow-md scale-105'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                Seating Service
              </label>
              <div className="flex items-center gap-2">
                {['06:00 PM', '07:30 PM', '08:30 PM', '09:15 PM'].map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                      timeSlot === slot
                        ? 'bg-amber-600 text-black border-amber-400 shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sommelier Pairing Addon */}
          <div
            onClick={() => setWinePairing(!winePairing)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
              winePairing
                ? 'border-amber-500/60 bg-amber-950/20'
                : 'border-zinc-800 bg-zinc-900/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🍷</span>
              <div>
                <p className="text-xs font-bold text-white">Grand Cru Sommelier Pairing Experience</p>
                <p className="text-[11px] text-zinc-400">
                  Curated vintage wine matched with each of the 9 courses by Head Sommelier.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400">
              {winePairing ? '✓ Included' : '+ Select'}
            </span>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              <span>Experience: </span>
              <strong className="text-white">{guests} Guests</strong> at{' '}
              <strong className="text-amber-400">{timeSlot}</strong>
            </div>
            <button
              onClick={handleConfirm}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-red-600/30 transition-all"
            >
              Complete Reservation →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
