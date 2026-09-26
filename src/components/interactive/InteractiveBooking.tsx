import { useState } from 'react';

const SPECIALTIES = [
  { id: 'longevity', name: 'Longevity & Cellular Health', icon: '🧬', wait: '3 days' },
  { id: 'cardio', name: 'Integrative Cardiology', icon: '🫀', wait: 'Tomorrow' },
  { id: 'metabolic', name: 'Metabolic & Hormone Optimization', icon: '⚡', wait: 'Today' },
  { id: 'neuro', name: 'Cognitive Health & Sleep Medicine', icon: '🧠', wait: '2 days' },
];

const DOCTORS = [
  { id: 'elena', name: 'Dr. Elena Vance, MD', specialty: 'longevity', role: 'Head of Longevity & Epigenetics', grad: 'Stanford Medicine', slots: ['09:30 AM', '11:15 AM', '02:00 PM', '04:30 PM'] },
  { id: 'marcus', name: 'Dr. Marcus Thorne, MD, FACC', specialty: 'cardio', role: 'Cardiologist & Vascular Specialist', grad: 'Johns Hopkins', slots: ['10:00 AM', '01:30 PM', '03:45 PM'] },
  { id: 'sarah', name: 'Dr. Sarah Al-Mansoor, MD', specialty: 'metabolic', role: 'Endocrinologist & Metabolism Lead', grad: 'Harvard Medical', slots: ['08:45 AM', '11:00 AM', '02:15 PM', '05:00 PM'] },
  { id: 'chen', name: 'Dr. David Chen, MD, PhD', specialty: 'neuro', role: 'Neurology & Sleep Architecture', grad: 'Columbia University', slots: ['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM'] },
];

export function InteractiveBooking() {
  const [step, setStep] = useState<number>(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('longevity');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('elena');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 10:00 AM');
  const [selectedSlot, setSelectedSlot] = useState<string>('09:30 AM');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  const activeDoc = DOCTORS.find((d) => d.id === selectedDoctor) || DOCTORS[0];

  const handleConfirm = () => {
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setStep(1);
  };

  return (
    <div id="appointment" className="w-full my-16 p-8 md:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-950/30 shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          Direct Specialist Access
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
          Schedule Your Clinical Consultation
        </h3>
        <p className="text-sm text-zinc-400 mt-2">
          Real-time patient intake. Direct appointments with world-class integrative physicians with zero waitlists.
        </p>
      </div>

      {isBooked ? (
        <div className="max-w-md mx-auto text-center p-8 rounded-2xl bg-zinc-950 border border-cyan-500/50 shadow-2xl animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 text-3xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/40">
            ✓
          </div>
          <h4 className="text-xl font-black text-white">Consultation Confirmed</h4>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
            Your appointment with <strong className="text-cyan-300">{activeDoc.name}</strong> has been secured for{' '}
            <strong className="text-white">{selectedSlot}</strong>.
          </p>
          <div className="my-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-zinc-500">Department:</span>
              <span className="text-zinc-200 font-semibold">{activeDoc.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Session Type:</span>
              <span className="text-emerald-400 font-semibold">Comprehensive Telehealth / In-Clinic</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Intake Form:</span>
              <span className="text-cyan-400 font-semibold">Sent to your email</span>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-cyan-600/30"
          >
            Book Another Consultation
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Step Progress Pills */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-850">
            {[
              { num: 1, label: 'Specialty' },
              { num: 2, label: 'Physician' },
              { num: 3, label: 'Time & Confirm' },
            ].map((s) => (
              <div
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`flex items-center gap-2 cursor-pointer transition-all ${
                  step >= s.num ? 'text-cyan-400 font-bold' : 'text-zinc-500 font-medium'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full text-xs flex items-center justify-center border font-mono ${
                    step === s.num
                      ? 'bg-cyan-600 text-white border-cyan-400 shadow-md'
                      : step > s.num
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-700'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-500'
                  }`}
                >
                  {s.num}
                </span>
                <span className="text-xs hidden sm:inline">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Step 1: Specialty */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-4">
                1. Select Medical Discipline
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SPECIALTIES.map((spec) => {
                  const isSelected = selectedSpecialty === spec.id;
                  return (
                    <div
                      key={spec.id}
                      onClick={() => {
                        setSelectedSpecialty(spec.id);
                        const matched = DOCTORS.find((d) => d.specialty === spec.id);
                        if (matched) setSelectedDoctor(matched.id);
                      }}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-950/25 shadow-lg'
                          : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-850 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-2xl">{spec.icon}</span>
                        <div>
                          <p className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                            {spec.name}
                          </p>
                          <span className="text-[11px] text-zinc-400">Available: {spec.wait}</span>
                        </div>
                      </div>
                      <span className="text-cyan-400 font-bold text-xs">
                        {isSelected ? '●' : '○'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Continue to Select Doctor →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Doctor */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-4">
                2. Choose Your Attending Physician
              </h4>
              <div className="space-y-3">
                {DOCTORS.filter(
                  (d) => selectedSpecialty === 'all' || d.specialty === selectedSpecialty
                ).map((doc) => {
                  const isSelected = selectedDoctor === doc.id;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDoctor(doc.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-950/30 shadow-lg'
                          : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-850'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-cyan-900/40 text-cyan-300 font-bold flex items-center justify-center border border-cyan-500/30">
                          {doc.name.split(' ')[1]?.[0] || 'D'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-white">{doc.name}</p>
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.2 rounded border border-cyan-800/40">
                              {doc.grad}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-0.5">{doc.role}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-semibold hidden sm:inline">
                        {doc.slots.length} slots available
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Select Time Slot →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Slots & Confirm */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400">Chosen Physician</span>
                  <p className="text-sm font-bold text-white mt-0.5">{activeDoc.name}</p>
                  <p className="text-xs text-zinc-400">{activeDoc.role}</p>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-cyan-400 hover:underline"
                >
                  Change
                </button>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-3">
                  Available Time Slots Today / Tomorrow
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeDoc.slots.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3 rounded-xl border text-xs font-mono font-bold transition-all ${
                          isSelected
                            ? 'bg-cyan-600 border-cyan-400 text-white shadow-md scale-105'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-850 flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold"
                >
                  ← Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-cyan-600/30 transition-all"
                >
                  Confirm Appointment ({selectedSlot}) →
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
