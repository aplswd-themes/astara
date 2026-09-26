import React, { useState } from 'react';
import { MEDIA } from '../../lib/media';

interface PipelineBranch {
  id: string;
  stage: string;
  title: string;
  subtitle: string;
  deliverables: string[];
  image: string;
  clientStory: string;
  metric: string;
  award: string;
}

const BRANCHES: PipelineBranch[] = [
  {
    id: 'discovery',
    stage: 'Phase 01',
    title: 'Cultural Semiotics & Positioning Moat',
    subtitle: 'Narrative Strategy & Brand Architecture',
    deliverables: [
      'Category Deconstruction & Whitespace Mapping',
      'Archetype Positioning & Verbal Manifesto',
      'Executive Leadership Immersion Workshops',
      'Brand Architecture & Portfolio Naming System',
    ],
    image: MEDIA.agency.studioSpace,
    clientStory: 'How we shifted Altitude Aerospace from an industrial logistics company into an elite commercial flight brand.',
    metric: '+180% Inbound Inquiries',
    award: 'Strat & Narrative Award 2024',
  },
  {
    id: 'identity',
    stage: 'Phase 02',
    title: 'Generative Typography & Design Tokens',
    subtitle: 'Bespoke Visual Foundations & Foundry',
    deliverables: [
      'Proprietary Dual-Axis Variable Typeface',
      'Kinetic Brand Tokens & Color Harmonies',
      'Sub-Pixel Micro-Interaction Library',
      'Interactive Living Guidelines Edge Portal',
    ],
    image: MEDIA.agency.lumina,
    clientStory: 'Crafting Lune Botanicals tactile cold-pressed packaging and custom display serif for Parisian flagship stores.',
    metric: 'Dieline Best in Class',
    award: 'Red Dot: Best of the Best',
  },
  {
    id: 'digital',
    stage: 'Phase 03',
    title: 'Spatial 3D & WebGL Flagship Architecture',
    subtitle: 'Headless Edge Experience Engineering',
    deliverables: [
      'Interactive 3D WebGL Canvas Renderers',
      'Sub-0.5s Headless Astro & Next.js Architecture',
      'Soundscape Spatial Audio Design',
      'Accessible WCAG AAA Compliance Suite',
    ],
    image: MEDIA.agency.meridian,
    clientStory: 'Architecting Meridian Capital institutional wealth dashboard with real-time portfolio telemetry.',
    metric: '$45M Series B Scaled',
    award: 'Awwwards Site of the Month',
  },
  {
    id: 'campaign',
    stage: 'Phase 04',
    title: 'Cinematic Launch Film & Global Rollout',
    subtitle: 'Omnichannel Cultural Resonance',
    deliverables: [
      '4K Cinematic Brand Manifesto Films',
      'Global Out-Of-Home Multi-City Takeovers',
      'Interactive Press & Investor Launch Kits',
      'Continuous Brand Stewardship & Evolution',
    ],
    image: MEDIA.agency.solis,
    clientStory: 'Directing Crest Horology multi-sensory global premiere across New York, Tokyo, and London.',
    metric: '2.4M Organic Views',
    award: 'Cannes Lions Design Shortlist',
  },
];

export const AgencyCreativePipelineTree: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<PipelineBranch>(BRANCHES[1]);

  return (
    <section className="my-32 py-24 px-6 sm:px-12 rounded-[3rem] bg-[#09090b] text-white relative overflow-hidden shadow-2xl border border-zinc-900/50 group/section">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none group-hover/section:bg-orange-600/10 transition-colors duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6 border border-zinc-800 text-zinc-400 bg-zinc-900/50">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            The Atelier Pipeline
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            How we translate vision into <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500">market authority</span>.
          </h2>
          <p className="text-lg text-zinc-500 mt-6 leading-relaxed max-w-2xl font-light">
            Every studio engagement follows our rigorous four-phase creative methodology. Click through each phase to inspect our deliverables and case outcomes.
          </p>
        </div>

        {/* Tree Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left: 4 Stages / Branches */}
          <div className="lg:col-span-6 flex flex-col gap-4 relative">
            {/* Subtle connecting line */}
            <div className="absolute left-8 top-10 bottom-10 w-px bg-zinc-800/50 -z-10 hidden md:block"></div>
            
            {BRANCHES.map((b, idx) => {
              const isSelected = selectedBranch.id === b.id;
              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedBranch(b)}
                  className={`p-6 sm:p-8 rounded-[2rem] transition-all duration-500 cursor-pointer relative overflow-hidden group/item ${
                    isSelected
                      ? 'bg-zinc-900/80 border border-zinc-800 shadow-2xl'
                      : 'bg-transparent border border-transparent hover:bg-zinc-900/30'
                  }`}
                >
                  {/* Selection indicator line */}
                  {isSelected && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-orange-500 rounded-r-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                  )}
                  
                  <div className="flex items-start justify-between gap-6 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${isSelected ? 'text-orange-400' : 'text-zinc-500 group-hover/item:text-zinc-400'} transition-colors`}>
                          {b.stage}
                        </span>
                        <span className="w-4 h-px bg-zinc-700"></span>
                        <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                          {b.subtitle}
                        </span>
                      </div>
                      <h3 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isSelected ? 'text-white' : 'text-zinc-400 group-hover/item:text-zinc-200'}`}>
                        {b.title}
                      </h3>
                    </div>

                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 shrink-0 ${
                        isSelected
                          ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-600 group-hover/item:border-zinc-700'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Micro metric snippet */}
                  <div className={`mt-6 pt-4 border-t transition-all duration-500 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 text-xs ${isSelected ? 'border-zinc-800/80 opacity-100' : 'border-transparent opacity-0 h-0 hidden'}`}>
                    <span className="font-medium text-amber-500/90 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.37L12 6.09l1.71 4.04 4.38.37-3.32 2.88.99 4.28z"/></svg>
                      {b.award}
                    </span>
                    <span className="font-mono text-orange-400 font-bold bg-orange-950/30 px-3 py-1 rounded-full border border-orange-900/30">
                      {b.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Stage Gallery & Deliverable Card */}
          <div className="lg:col-span-6 lg:pl-10 relative">
            <div className="sticky top-32">
              <div className="rounded-[2.5rem] bg-[#0c0c0e] border border-zinc-800/80 overflow-hidden shadow-2xl relative group/card">
                
                {/* Dynamic highlight glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Deliverable Image Preview */}
                <div className="h-72 w-full relative overflow-hidden bg-zinc-950">
                  <img
                    src={selectedBranch.image}
                    alt={selectedBranch.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out transform scale-100 group-hover/card:scale-105 filter brightness-[0.7] group-hover/card:brightness-[0.9]"
                    key={selectedBranch.id}
                  />
                  
                  <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="backdrop-blur-xl bg-black/40 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/90">
                        Deliverable Showcase
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] uppercase font-bold text-orange-400 tracking-widest mb-2">Case Study Highlight</p>
                    <p className="text-sm font-medium text-zinc-200 leading-relaxed">{selectedBranch.clientStory}</p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="p-8 relative z-10">
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500">
                      Phase Assets
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">100% Bespoke</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedBranch.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-[13px] text-zinc-400 font-medium group/item hover:text-zinc-200 transition-colors"
                      >
                        <span className="text-orange-500/70 group-hover/item:text-orange-400 transition-colors mt-0.5">✦</span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-zinc-500 font-medium">Ready to initiate your commission?</span>
                    <a
                      href="/contact"
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-black hover:bg-zinc-200 transition-colors flex items-center gap-2 group/btn"
                    >
                      Schedule Briefing
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
