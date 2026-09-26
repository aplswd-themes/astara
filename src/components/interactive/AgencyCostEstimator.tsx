import { useState } from 'react';

interface ServiceOption {
  id: string;
  name: string;
  desc: string;
  weeks: number;
  badge: string;
}

const SERVICES: ServiceOption[] = [
  { id: 'brand', name: 'Brand Strategy & Identity', desc: 'Custom wordmark, design system, tokens, typography, guidelines', weeks: 3, badge: 'Foundational' },
  { id: 'web', name: 'Editorial Web Design & Dev', desc: 'Astro 5 + React 19 interactive website with CMS and animations', weeks: 4, badge: 'Core Flagship' },
  { id: 'motion', name: '3D WebGL & Motion Film', desc: 'Interactive 3D canvas, brand launch teaser, micro-interactions', weeks: 2, badge: 'Immersive' },
  { id: 'system', name: 'Design Tokens & UI Library', desc: 'Multi-brand Figma library mapped 1:1 to strict Tailwind v4 tokens', weeks: 2, badge: 'Scale' },
];

export function AgencyCostEstimator() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['brand', 'web']);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'sprint'>('standard');

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalRawWeeks = selectedServices.reduce((sum, id) => {
    const s = SERVICES.find((item) => item.id === id);
    return sum + (s ? s.weeks : 0);
  }, 0);

  // Parallel overlapping sprint reduces total sequential duration
  const adjustedWeeks = Math.max(3, Math.ceil(totalRawWeeks * (timelineSpeed === 'sprint' ? 0.65 : 0.85)));

  return (
    <div className="w-full my-16 p-8 md:p-12 rounded-3xl border border-orange-500/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950/30 shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30">
          Interactive Scope Planner
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
          Configure Your Agency Engagement
        </h3>
        <p className="text-sm text-zinc-400 mt-2">
          Select your required deliverables to calculate real-world sprint velocity and team structure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Service Options Checklist */}
        <div className="lg:col-span-7 space-y-3">
          {SERVICES.map((s) => {
            const isSelected = selectedServices.includes(s.id);
            return (
              <div
                key={s.id}
                onClick={() => toggleService(s.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'border-orange-500/60 bg-orange-950/20 shadow-md'
                    : 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-orange-600 border-orange-500 text-white'
                        : 'border-zinc-700 bg-zinc-800 text-transparent'
                    }`}
                  >
                    ✓
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors">
                        {s.name}
                      </p>
                      <span className="text-[9px] font-extrabold uppercase px-2 py-0.2 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                        {s.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">{s.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-zinc-400 shrink-0 ml-2">
                  +{s.weeks} wks
                </span>
              </div>
            );
          })}

          {/* Velocity Switcher */}
          <div className="pt-3 flex items-center justify-between bg-zinc-950/70 p-4 rounded-xl border border-zinc-800">
            <span className="text-xs font-bold text-zinc-300">Delivery Velocity:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTimelineSpeed('standard')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  timelineSpeed === 'standard'
                    ? 'bg-zinc-800 text-white border border-zinc-650'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                Standard Flow
              </button>
              <button
                onClick={() => setTimelineSpeed('sprint')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  timelineSpeed === 'sprint'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                ⚡ Dedicated Sprint
              </button>
            </div>
          </div>
        </div>

        {/* Calculation Summary Card */}
        <div className="lg:col-span-5 bg-zinc-950/90 border border-zinc-800 p-6 rounded-2xl space-y-5 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-850">
            <span className="text-xs text-zinc-400">Selected Modules:</span>
            <span className="text-xs font-mono font-bold text-white">
              {selectedServices.length} of {SERVICES.length}
            </span>
          </div>

          <div>
            <span className="text-xs text-zinc-400 block mb-1">Estimated Turnaround:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-orange-400 font-mono">
                {adjustedWeeks}
              </span>
              <span className="text-sm font-semibold text-zinc-300">Weeks to Production Launch</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-zinc-300 block">Dedicated Pod Allocation:</span>
            <div className="space-y-1.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Lead Creative Director & Brand Strategist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Senior Interaction & Spatial 3D Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Full-Stack Edge & Astro Systems Architect</span>
              </div>
            </div>
          </div>

          <a
            href="/contact"
            className="w-full block text-center py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-orange-600/30"
          >
            Request Bespoke Studio Proposal →
          </a>
        </div>
      </div>
    </div>
  );
}
