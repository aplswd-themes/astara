import React, { useState } from 'react';
import { MEDIA } from '../../lib/media';

interface ClinicalStage {
  id: string;
  step: string;
  title: string;
  leadSpecialist: string;
  specialistTitle: string;
  specialistImg: string;
  clinicalOutcome: string;
  description: string;
  biomarkers: string[];
}

const STAGES: ClinicalStage[] = [
  {
    id: 'biomarkers',
    step: 'Phase 01',
    title: 'Multi-Omic Biomarker Diagnostic Screen',
    leadSpecialist: 'Dr. Elena Rostova, MD',
    specialistTitle: 'Chief of Preventative Longevity',
    specialistImg: MEDIA.health.drElena,
    clinicalOutcome: '120+ Biomarkers Analyzed',
    description: 'We go beyond superficial checkups. Comprehensive whole-genome mapping, DNA methylation biological age clock, ApoB particle counting, and continuous metabolic monitoring.',
    biomarkers: ['Epigenetic Horvath Clock', 'Advanced Lipid Subfractions', 'Continuous Glucose Telemetry', 'Heavy Metal & Hormone Panels'],
  },
  {
    id: 'consortium',
    step: 'Phase 02',
    title: 'Multidisciplinary Clinical Consortium',
    leadSpecialist: 'Dr. Marcus Thorne, MD',
    specialistTitle: 'Cardiovascular Surgery & Diagnostics',
    specialistImg: MEDIA.health.drMarcus,
    clinicalOutcome: '3-Specialist Unified Review',
    description: 'Rather than visiting siloed clinics, your data is evaluated by our integrated board of cardiologists, neuropsychologists, and metabolic endocrinologists to synthesize a single holistic plan.',
    biomarkers: ['Cardiovascular Strain Index', 'VO2 Max Kinetic Assessment', 'Autonomic Nervous HRV Scan', 'Coronary Calcium Score (CAC)'],
  },
  {
    id: 'intervention',
    step: 'Phase 03',
    title: 'Targeted Longevity Protocol Deployment',
    leadSpecialist: 'Dr. Sarah Al-Mansoor, MD',
    specialistTitle: 'Clinical Neuropsychology & Restorative Care',
    specialistImg: MEDIA.health.drSarah,
    clinicalOutcome: '-3.8 Yr Epigenetic Reversal',
    description: 'Tailored biological intervention including medical-grade micronutrient IV infusions, hyperbaric oxygen chambers, circadian phototherapy, and peptide therapeutics.',
    biomarkers: ['Mitochondrial ATP Efficiency', 'Systemic hs-CRP Inflammation', 'Deep Sleep REM Optimization', 'Telomere Length Preservation'],
  },
  {
    id: 'telemetry',
    step: 'Phase 04',
    title: 'Continuous Remote Telemetry & Concierge App',
    leadSpecialist: 'Dr. David Chen, MD',
    specialistTitle: 'Preventative Care & Telemetry Lead',
    specialistImg: MEDIA.health.drChen,
    clinicalOutcome: '24/7 Encrypted Care Sync',
    description: 'Your wearable biometrics and glucose curves stream live to our clinical dashboard. Receive instant automated micro-adjustments and direct encrypted chat with your care team.',
    biomarkers: ['Real-Time Glucose Alarms', 'Circadian Core Temp Variation', 'Resting Pulse Recovery Rate', 'Daily Readiness Score'],
  },
];

export const HealthCarePathwayTree: React.FC = () => {
  const [activeStage, setActiveStage] = useState<ClinicalStage>(STAGES[0]);

  return (
    <section className="my-24 py-20 px-4 rounded-3xl border border-cyan-500/20 bg-zinc-950 text-white relative overflow-hidden shadow-2xl">
      {/* Background glow effects */}
      <div className="absolute -top-32 left-10 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-32 right-10 w-[450px] h-[450px] bg-teal-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 border border-cyan-500/30 bg-cyan-950/50 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>🧬 INTEGRATIVE PATIENT LONGEVITY PATHWAY TREE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            A scientifically orchestrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">pathway to lifelong vitality</span>.
          </h2>
          <p className="text-base text-zinc-400 mt-4 leading-relaxed font-sans">
            Healthcare should be proactive, not reactionary. Explore the continuous clinical pathway designed to optimize your cellular longevity and physical performance.
          </p>
        </div>

        {/* Pathway Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 4 Clinical Pathway Steps */}
          <div className="lg:col-span-6 space-y-4">
            {STAGES.map((stage, idx) => {
              const isSelected = activeStage.id === stage.id;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(stage)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? 'bg-zinc-900 border-cyan-500 shadow-xl shadow-cyan-950/50 ring-1 ring-cyan-500/40 -translate-y-0.5'
                      : 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                          {stage.step}
                        </span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-xs text-zinc-400 font-sans">
                          {stage.leadSpecialist}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                        {stage.title}
                      </h3>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono font-bold transition-all shrink-0 ${
                        isSelected
                          ? 'bg-cyan-600 border-white text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-850 flex items-center justify-between text-xs">
                    <span className="text-cyan-400 font-mono text-[11px] font-semibold">
                      Target: {stage.clinicalOutcome}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <span>● In-Clinic & Telehealth</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Stage Details & Physician Dossier */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="rounded-3xl border border-cyan-500/30 bg-zinc-900/90 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Physician Lead Header */}
              <div className="p-6 sm:p-7 border-b border-zinc-800 bg-zinc-950/60 flex items-center gap-4">
                <img
                  src={activeStage.specialistImg}
                  alt={activeStage.leadSpecialist}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400 shadow-lg shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                      Supervising Physician
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">● Accepting Patients</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1 font-sans">{activeStage.leadSpecialist}</h4>
                  <p className="text-xs text-zinc-400 font-sans">{activeStage.specialistTitle}</p>
                </div>
              </div>

              {/* Protocol Details */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Clinical Objective
                  </span>
                  <h3 className="text-xl font-bold text-white font-sans">{activeStage.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-2 font-sans">
                    {activeStage.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-zinc-800">
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-400 tracking-wider">
                    Targeted Biological Biomarkers
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeStage.biomarkers.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 font-sans">
                        <span className="text-cyan-400 font-bold">🧬</span>
                        <span className="truncate">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-500 block">Expected Outcome</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{activeStage.clinicalOutcome}</span>
                  </div>
                  <a
                    href="#appointment"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white transition-all hover:scale-105 shadow-md shadow-cyan-600/30"
                  >
                    Schedule Assessment →
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
