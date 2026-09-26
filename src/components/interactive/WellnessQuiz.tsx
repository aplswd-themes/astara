import { useState } from 'react';

interface QuizResult {
  title: string;
  focusArea: string;
  biomarkers: string[];
  protocol: string;
  doctor: string;
}

export function WellnessQuiz() {
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('energy');
  const [sleep, setSleep] = useState<string>('6-7');
  const [exercise, setExercise] = useState<string>('moderate');
  const [result, setResult] = useState<QuizResult | null>(null);

  const calculateProtocol = () => {
    if (goal === 'energy') {
      setResult({
        title: 'Mitochondrial Cellular Renewal Protocol',
        focusArea: 'NAD+ Optimization & Cortisol Regulation',
        biomarkers: ['Fasting Insulin', 'Free Testosterone / DHEA', 'hs-CRP Inflammation', 'Intracellular Magnesium'],
        protocol: 'Integrative peptide therapy combined with red light photobiomodulation and targeted micronutrient replenishment.',
        doctor: 'Dr. Elena Vance, MD (Epigenetics Lead)',
      });
    } else if (goal === 'sleep') {
      setResult({
        title: 'Circadian Architecture & Neuro-Restoration',
        focusArea: 'REM & Deep Sleep Wave Amplification',
        biomarkers: ['Salivary Cortisol Curve', 'Melatonin Rhythm Index', 'HRV Recovery Scores'],
        protocol: 'Personalized chronotherapy, glycine + magnesium threonate neuro-priming, and temperature regulation mapping.',
        doctor: 'Dr. David Chen, MD, PhD (Sleep Architecture)',
      });
    } else {
      setResult({
        title: 'Metabolic Flexibility & Vascular Health',
        focusArea: 'ApoB Reduction & Insulin Sensitivity',
        biomarkers: ['ApoB & Lp(a)', 'CAC Calcium Score', 'Continuous Glucose Metrics (CGM)', 'VO2 Max'],
        protocol: 'Zone 2 cardiovascular conditioning protocol, time-restricted feeding schedule, and microvascular endothelium support.',
        doctor: 'Dr. Marcus Thorne, MD (Cardiovascular Lead)',
      });
    }
  };

  const handleFinish = () => {
    calculateProtocol();
  };

  return (
    <div className="w-full my-16 p-8 md:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-950/20 shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          Personalized Longevity Engine
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
          Interactive Longevity Biomarker Assessment
        </h3>
        <p className="text-sm text-zinc-400 mt-2">
          Answer 3 quick physiological indicators to receive an instant physician-designed clinical protocol.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {result ? (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                ● Clinical Recommendation
              </span>
              <button
                onClick={() => setResult(null)}
                className="text-xs text-zinc-400 hover:text-white underline"
              >
                Retake Assessment
              </button>
            </div>

            <div>
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                {result.focusArea}
              </span>
              <h4 className="text-2xl font-black text-white mt-2">{result.title}</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{result.protocol}</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-300 block mb-2">
                Recommended Precision Diagnostic Panel:
              </span>
              <div className="flex flex-wrap gap-2">
                {result.biomarkers.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800 text-cyan-300 border border-zinc-700"
                  >
                    ✦ {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-zinc-400">
                Matched Clinical Lead: <strong className="text-white">{result.doctor}</strong>
              </span>
              <a
                href="#appointment"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-cyan-600/30 text-center"
              >
                Book Intake For This Protocol →
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Step 1: Goal */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Step 1 of 3: Primary Health Objective
                </span>
                <h4 className="text-lg font-bold text-white">What is your primary clinical focus?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'energy', label: 'Cellular Energy & NAD+', icon: '⚡' },
                    { id: 'sleep', label: 'Deep Sleep Architecture', icon: '🌙' },
                    { id: 'metabolic', label: 'Cardiometabolic Longevity', icon: '🫀' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setGoal(opt.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        goal === opt.id
                          ? 'border-cyan-500 bg-cyan-950/30 shadow-md'
                          : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-850'
                      }`}
                    >
                      <span className="text-2xl block mb-2">{opt.icon}</span>
                      <span className="text-xs font-bold text-white block">{opt.label}</span>
                    </button>
                  ))}
                </div>
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Next Question →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Sleep */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Step 2 of 3: Daily Rest & Recovery
                </span>
                <h4 className="text-lg font-bold text-white">
                  How many hours of uninterrupted sleep do you average?
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: '<6', label: 'Under 6 Hours' },
                    { id: '6-7', label: '6 to 7 Hours' },
                    { id: '8+', label: '8+ Hours' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSleep(opt.id)}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        sleep === opt.id
                          ? 'border-cyan-500 bg-cyan-950/30 text-white'
                          : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold">{opt.label}</span>
                    </button>
                  ))}
                </div>
                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Next Question →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Exercise */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Step 3 of 3: Physical Conditioning
                </span>
                <h4 className="text-lg font-bold text-white">
                  What is your weekly physical activity level?
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'sedentary', label: '1-2 Days / Light' },
                    { id: 'moderate', label: '3-4 Days / Moderate' },
                    { id: 'intense', label: '5+ Days / High Performance' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setExercise(opt.id)}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        exercise === opt.id
                          ? 'border-cyan-500 bg-cyan-950/30 text-white'
                          : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold">{opt.label}</span>
                    </button>
                  ))}
                </div>
                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleFinish}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-600/30"
                  >
                    Generate Protocol Now →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
