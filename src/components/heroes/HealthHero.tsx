import React, { useState } from 'react';
import { MEDIA } from '../../lib/media';
import { MotionHeroBackground } from '../interactive/MotionHeroBackground';

interface CarePillar {
  id: string;
  name: string;
  tagline: string;
  stat: string;
  statLabel: string;
  metrics: { label: string; value: string; trend: string }[];
  highlight: string;
  doctorName?: string;
  doctorTitle?: string;
  doctorImage?: string;
}

const CARE_PILLARS: CarePillar[] = [
  {
    id: 'diagnostics',
    name: 'Biomarker Longevity Scan',
    tagline: '120+ clinical blood markers, biological age estimation, and continuous metabolic telemetry.',
    stat: '98/100',
    statLabel: 'Metabolic Optimization Score',
    metrics: [
      { label: 'Cardio HRV', value: '68 ms', trend: '+14% optimal' },
      { label: 'Biological Age', value: '-4.2 Yrs', trend: 'Reversed' },
      { label: 'Resting Pulse', value: '54 BPM', trend: 'Athletic baseline' },
      { label: 'Inflammation hs-CRP', value: '0.4 mg/L', trend: 'Low risk' },
    ],
    highlight: 'Includes whole-genome sequencing, epigenetic methylation age, and multi-organ ultrasound.',
  },
  {
    id: 'physician',
    name: 'Private Physician Access',
    tagline: 'Direct, unhurried consultations with board-certified longevity physicians. Zero waiting room.',
    stat: '2:30 PM',
    statLabel: 'Next Same-Day Consultation Slot',
    doctorName: 'Dr. Elena Rostova, MD',
    doctorTitle: 'Chief of Preventive & Longevity Medicine • Stanford Fellow',
    doctorImage: MEDIA.health.drElena,
    metrics: [
      { label: 'Consult Duration', value: '60 Min', trend: 'Unhurried' },
      { label: 'Chat Access', value: '24/7 Direct', trend: 'Encrypted' },
      { label: 'Patient Cap', value: '150 Max', trend: 'Per Physician' },
      { label: 'Care Model', value: 'Integrative', trend: 'Preventive' },
    ],
    highlight: 'Dedicated physician direct phone line and encrypted portal for immediate prescription & lab reviews.',
  },
  {
    id: 'protocol',
    name: 'Restorative Care Protocols',
    tagline: 'Personalized cellular renewal: NAD+ therapy, circadian sleep architecture, and peptide regimens.',
    stat: '99.4%',
    statLabel: 'Patient Biomarker Improvement',
    metrics: [
      { label: 'Deep Sleep Cycle', value: '+35%', trend: 'Avg Increase' },
      { label: 'VO2 Max Boost', value: '+18%', trend: '90-Day Delta' },
      { label: 'Cellular Repair', value: 'NAD+ IV', trend: 'Optimized' },
      { label: 'Nutrition Plan', value: 'Genomic', trend: 'Tailored' },
    ],
    highlight: 'Continuous physician oversight with bi-monthly biomarker recalibration and at-home kit delivery.',
  },
];

export const HealthHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSpecialty, setSelectedSpecialty] = useState('Longevity Biomarkers');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const pillar = CARE_PILLARS[activeTab];

  const handleBook = () => {
    setBookingConfirmed(true);
    setTimeout(() => setBookingConfirmed(false), 3500);
  };

  return (
    <section className="relative overflow-hidden min-h-[96vh] flex flex-col justify-center bg-gradient-to-b from-cyan-50/60 via-white to-white dark:from-cyan-950/20 dark:via-stone-950 dark:to-stone-950 py-16 lg:py-24 border-b border-stone-200 dark:border-stone-850">
      {/* MotionSites Biometric Waveforms & Cellular Breathing Background Engine */}
      <MotionHeroBackground variant="health" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Top Centered Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold border border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold">ACCEPTING NEW PATIENTS</span>
            <span className="text-stone-400">|</span>
            <span>Same-Day Physician Consultations Available</span>
          </div>
        </div>

        {/* Emotionally Resonant Centered Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-stone-900 dark:text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Healthcare designed around your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600">
              biology
            </span>
            ,<br />
            not the clinic clock.
          </h1>
          <p className="text-base sm:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Vitality is an integrative clinic combining whole-genome diagnostics, restorative cellular therapies, and direct access to dedicated specialists with zero wait times.
          </p>
        </div>

        {/* ── 3-PILLAR INTERACTIVE CARE CONSOLE (Totally Unique Centered Stage) ── */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-950/10 dark:shadow-black/60 overflow-hidden mb-8">
          {/* Pillar Navigation Tabs */}
          <div className="grid grid-cols-3 border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40">
            {CARE_PILLARS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`py-3.5 px-2 sm:px-4 text-center transition-all flex flex-col items-center gap-1 border-b-2 ${
                  activeTab === idx
                    ? 'border-cyan-500 bg-white dark:bg-stone-900 text-cyan-700 dark:text-cyan-300 font-bold shadow-sm'
                    : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
                }`}
              >
                <span className="text-xs sm:text-sm font-bold truncate max-w-full">{p.name}</span>
                <span className="text-[10px] text-stone-400 hidden sm:inline truncate max-w-full font-normal">
                  {idx === 0 ? 'Diagnostic Scan' : idx === 1 ? 'Direct Physician' : 'Restorative Protocol'}
                </span>
              </button>
            ))}
          </div>

          {/* Active Pillar Details Pane */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Explanation & Highlight */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 mb-3">
                  <span>Pillar 0{activeTab + 1}</span>
                  <span>•</span>
                  <span>Clinical Standard</span>
                </div>

                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">
                  {pillar.name}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                  {pillar.tagline}
                </p>

                {pillar.doctorName && (
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-200/60 dark:border-cyan-800/60 mb-6">
                    <img
                      src={pillar.doctorImage}
                      alt={pillar.doctorName}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <div className="text-sm font-bold text-stone-900 dark:text-white">{pillar.doctorName}</div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400">{pillar.doctorTitle}</div>
                    </div>
                  </div>
                )}

                <div className="p-3.5 rounded-2xl bg-stone-100/70 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 mr-1.5">✦ Protocol Feature:</span>
                  {pillar.highlight}
                </div>
              </div>

              {/* Right Side: Telemetry Metrics Grid & Main Score */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                  <div className="text-4xl font-mono font-black text-cyan-600 dark:text-cyan-400">
                    {pillar.stat}
                  </div>
                  <div className="text-xs font-bold text-stone-700 dark:text-stone-300 mt-1">
                    {pillar.statLabel}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {pillar.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800"
                    >
                      <div className="text-[10px] uppercase font-bold text-stone-400 truncate">{m.label}</div>
                      <div className="text-base font-mono font-bold text-stone-900 dark:text-white mt-0.5">{m.value}</div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{m.trend}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── INTERACTIVE SAME-DAY BOOKING BAR (Direct Action in Hero) ── */}
        <div className="p-4 rounded-2xl bg-white/90 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            <div className="sm:col-span-4">
              <label className="block text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">
                Select Specialty
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full text-xs font-bold p-2.5 rounded-xl border border-stone-200 dark:border-stone-750 bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option>Longevity Biomarkers</option>
                <option>Cardiovascular Telemetry</option>
                <option>Restorative Sleep Medicine</option>
                <option>Hormone & Metabolic Protocol</option>
              </select>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">
                Consultation Slot
              </label>
              <div className="w-full text-xs font-bold p-2.5 rounded-xl border border-stone-200 dark:border-stone-750 bg-stone-50 dark:bg-stone-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                <span>Today, 2:30 PM (Direct)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            <div className="sm:col-span-4 pt-1 sm:pt-4">
              <button
                onClick={handleBook}
                className="w-full py-3 px-6 font-bold rounded-xl text-xs uppercase tracking-wider text-white transition-all shadow-lg shadow-cyan-600/25 hover:-translate-y-0.5 hover:shadow-cyan-600/40 bg-gradient-to-r from-cyan-600 to-teal-600 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{bookingConfirmed ? '✓ Consultation Hold Confirmed' : 'Book Consultation Slot →'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
