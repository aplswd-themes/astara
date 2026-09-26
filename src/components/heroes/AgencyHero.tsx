import React, { useState } from 'react';
import { MEDIA } from '../../lib/media';
import { MotionHeroBackground } from '../interactive/MotionHeroBackground';

interface CaseStudy {
  id: string;
  client: string;
  title: string;
  tag: string;
  metric: string;
  deliverables: string[];
  image: string;
  year: string;
  color: string;
  summary: string;
}

const FEATURED_CASES: CaseStudy[] = [
  {
    id: 'meridian',
    client: 'Meridian Global',
    title: 'NextGen FinTech Platform',
    tag: 'Web & Product System',
    metric: 'Series B Scaled to $45M',
    deliverables: ['Design System', 'Telemetry UI', 'React 19 Islands'],
    image: MEDIA.agency.meridian,
    year: '2024',
    color: '#f97316',
    summary: 'Engineered an ultra-low latency wealth management platform with fluid real-time trading telemetries.',
  },
  {
    id: 'otera',
    client: 'Otera Longevity',
    title: 'Cellular Longevity Sanctuary',
    tag: 'Biometric Mobile UX',
    metric: '4.9★ App Store Launch',
    deliverables: ['iOS Architecture', 'Haptic Feedback', 'Circadian Audio'],
    image: MEDIA.agency.otera,
    year: '2023',
    color: '#eab308',
    summary: 'A multi-sensory longevity diagnostic interface syncing continuous biomarker telemetry with haptic guidance.',
  },
  {
    id: 'kinetic',
    client: 'Kinetic OS',
    title: 'Spatial 3D OS & Interface',
    tag: 'Motion & Spatial Design',
    metric: '1.2M Organic Impressions',
    deliverables: ['3D WebGL Canvas', 'Brand Manifesto', 'Spatial Ergonomics'],
    image: MEDIA.agency.kinetic,
    year: '2024',
    color: '#6366f1',
    summary: 'Architected the spatial computing design language for a revolutionary gesture-based interface.',
  },
];

export const AgencyHero: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCase = FEATURED_CASES[activeIdx];

  return (
    <section className="relative overflow-hidden min-h-[96vh] flex flex-col justify-between bg-[#fafafa] dark:bg-[#0a0a0c] py-12 lg:py-16 border-b border-stone-200 dark:border-stone-850">
      {/* MotionSites Architectural Kinetic Blueprint & Orbital Rings Background Engine */}
      <MotionHeroBackground variant="agency" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* ── TOP STUDIO ARCHITECTURAL BAR ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-500 mb-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              PARIS 14:30 CET
            </span>
            <span>•</span>
            <span className="font-medium">TOKYO 22:30 JST</span>
            <span>•</span>
            <span className="font-medium hidden sm:inline">SAN FRANCISCO 05:30 PST</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-orange-500/10 text-orange-800 dark:text-orange-300 border border-orange-500/20">
              Q2 CAPACITY: 1 COMMISSION SLOT AVAILABLE
            </span>
            <span className="hidden md:inline text-stone-400">✦ 12 Awwwards SOTD</span>
          </div>
        </div>

        {/* ── MASSIVE FULL-BLEED EDITORIAL TYPOGRAPHIC HEADLINE ── */}
        <div className="max-w-5xl mb-12">
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.98] text-stone-900 dark:text-white mb-6 uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            We build brands that{' '}
            <span className="italic font-serif font-normal lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
              redefine
            </span><br />
            categories.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <p className="md:col-span-8 text-base sm:text-xl text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
              Forma is an independent design & creative technology atelier. We partner with ambitious founders to engineer flagship identities, interactive worlds, and conversion systems.
            </p>

            <div className="md:col-span-4 flex items-center md:justify-end gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold rounded-2xl text-xs uppercase tracking-wider text-white transition-all shadow-xl shadow-orange-600/25 hover:-translate-y-0.5 hover:shadow-orange-600/40 bg-gradient-to-r from-orange-600 to-amber-600 active:scale-95 whitespace-nowrap"
              >
                <span>Initiate Commission</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 font-bold rounded-2xl text-xs uppercase tracking-wider border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 transition-all hover:border-orange-500 bg-white/70 dark:bg-stone-900/70 backdrop-blur-md whitespace-nowrap"
              >
                All Works ↓
              </a>
            </div>
          </div>
        </div>

        {/* ── CASCADING 3D PROJECT DECK (Totally Unique Horizontal Exhibition) ── */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-4 text-xs font-mono text-stone-400 pb-2 border-b border-stone-200 dark:border-stone-800">
            <span>SELECTED CLIENT COMMISSIONS (2023 — 2024)</span>
            <span>CLICK TO INSPECT CASE DECK</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_CASES.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`group cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 border ${
                    isActive
                      ? 'border-orange-500 shadow-2xl shadow-orange-500/10 ring-2 ring-orange-500/20 -translate-y-2 bg-white dark:bg-stone-900'
                      : 'border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 opacity-80 hover:opacity-100 hover:-translate-y-1'
                  }`}
                >
                  {/* Case Study Image Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 text-white backdrop-blur-md">
                        {item.client}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-orange-400 bg-orange-950/70 border border-orange-500/30">
                        {item.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="px-3 py-1 rounded-xl text-xs font-black bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-lg">
                        {item.metric}
                      </span>
                    </div>
                  </div>

                  {/* Case Content */}
                  <div className="p-5">
                    <div className="text-[11px] font-mono uppercase font-bold text-orange-600 dark:text-orange-400 mb-1">
                      {item.tag}
                    </div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-4 line-clamp-2">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100 dark:border-stone-800">
                      {item.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
