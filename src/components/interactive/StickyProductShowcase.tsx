import React, { useState, useEffect } from 'react';
import { MEDIA } from '../../lib/media';

interface Milestone {
  step: string;
  title: string;
  description: string;
  tag: string;
  metric: string;
  badge: string;
  image: string;
}

interface StickyProductShowcaseProps {
  theme?: 'saas' | 'agency' | 'ecommerce' | 'health' | 'restaurant';
}

const THEME_DATA: Record<string, Milestone[]> = {
  saas: [
    {
      step: '01',
      title: 'Global Edge Cloud Mesh',
      description: 'Deploy stateless micro-containers to 300+ edge cities globally with sub-12ms latency.',
      tag: 'Edge Compute',
      metric: '300+ Edge Nodes',
      badge: 'Zero Cold Start',
      image: MEDIA.saas.datacenter,
    },
    {
      step: '02',
      title: 'Autonomous Branch CI/CD',
      description: 'Every git push triggers instant preview deployments with isolated secrets and preview databases.',
      tag: 'Pipeline',
      metric: '8.4s Build Time',
      badge: 'Instant Preview',
      image: MEDIA.saas.chip,
    },
    {
      step: '03',
      title: 'Zero-Trust Telemetry & Observability',
      description: 'Continuous runtime validation, automated secret rotation, and real-time distributed tracing.',
      tag: 'Security',
      metric: '99.999% SLA',
      badge: 'Hardware HSM',
      image: MEDIA.saas.codeScreen,
    },
  ],
  ecommerce: [
    {
      step: '01',
      title: 'Artisanal Material Provenance',
      description: 'Hand-selected aerospace titanium, vegetable-tanned Italian leathers, and raw cast brass.',
      tag: 'Sourcing',
      metric: '100% Traceable',
      badge: 'Ethical Supply',
      image: MEDIA.ecommerce.craftDetail,
    },
    {
      step: '02',
      title: 'Precision Machining & Hand Finish',
      description: 'Each piece undergoes micron-tolerance CNC milling followed by hand-buffing by master craftsmen.',
      tag: 'Craftsmanship',
      metric: '10-Year Lifespan',
      badge: 'Circular Design',
      image: MEDIA.ecommerce.lamp,
    },
    {
      step: '03',
      title: 'Carbon-Neutral Doorstep Transit',
      description: 'Dispatched in 100% bio-compatible mycelium packaging via expedited air courier within 48 hours.',
      tag: 'Logistics',
      metric: '48h Delivery',
      badge: 'Plastic Free',
      image: MEDIA.ecommerce.woolCoat,
    },
  ],
  agency: [
    {
      step: '01',
      title: 'Category Architecture & Manifesto',
      description: 'Excavating unfair market advantages to architect positioning that cannot be commoditized.',
      tag: 'Strategy',
      metric: '4-Week Sprint',
      badge: 'Foundational',
      image: MEDIA.agency.meridian,
    },
    {
      step: '02',
      title: 'Flagship Digital Systems',
      description: 'Engineering responsive interactive worlds with bespoke React 19 islands and kinetic WebGL motion.',
      tag: 'Design & Code',
      metric: 'Awwwards SOTD',
      badge: 'Edge Runtime',
      image: MEDIA.agency.studioSpace,
    },
    {
      step: '03',
      title: 'Inbound Growth Acceleration',
      description: 'Transforming launch momentum into self-sustaining inbound pipelines and market leadership.',
      tag: 'Scale',
      metric: '+210% Inbound',
      badge: 'Proven Impact',
      image: MEDIA.agency.kinetic,
    },
  ],
  health: [
    {
      step: '01',
      title: 'Comprehensive Multi-Omic Intake',
      description: 'Advanced cellular biomarker screening, epigenetic biological age mapping, and baseline telemetry.',
      tag: 'Diagnostic',
      metric: '60+ Biomarkers',
      badge: 'Zero Guesswork',
      image: MEDIA.health.biotechLab,
    },
    {
      step: '02',
      title: 'Physician-Orchestrated Protocol',
      description: 'Customized metabolic, cardiovascular, and hormonal optimization supervised by board-certified MDs.',
      tag: 'Optimization',
      metric: '18 Specialists',
      badge: 'Personalized',
      image: MEDIA.health.drElena,
    },
    {
      step: '03',
      title: 'Continuous Cellular Telemetry',
      description: 'Real-time glucose, heart-rate variability, and restorative sleep tracking via secure patient portal.',
      tag: 'Monitoring',
      metric: '24/7 Portal Sync',
      badge: 'Proactive Care',
      image: MEDIA.health.clinicSanctuary,
    },
  ],
  restaurant: [
    {
      step: '01',
      title: 'Morning Terroir Foraging',
      description: 'Daily selection of heirloom biodynamic harvests, line-caught seafood, and wild forest fungi.',
      tag: 'Terroir',
      metric: '100% Biodynamic',
      badge: 'Farm to Kitchen',
      image: MEDIA.restaurant.turbot,
    },
    {
      step: '02',
      title: 'Culinary Masterwork Execution',
      description: 'Twelve courses balancing French classical precision, smoke, acidity, and delicate emulsions.',
      tag: 'Gastronomy',
      metric: '3 Michelin Stars',
      badge: 'Chef Laurent',
      image: MEDIA.restaurant.wagyu,
    },
    {
      step: '03',
      title: 'Grand Cru Sommelier Pairing',
      description: 'Subterranean cellar library vintages decanted into hand-blown Riedel sommelier glassware.',
      tag: 'Sommelier',
      metric: '450+ Crus',
      badge: 'Rare Vintages',
      image: MEDIA.restaurant.sommelier,
    },
  ],
};

export const StickyProductShowcase: React.FC<StickyProductShowcaseProps> = ({ theme = 'saas' }) => {
  const milestones = THEME_DATA[theme] || THEME_DATA.saas;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section relative py-20 bg-[var(--color-bg)] border-y border-[var(--color-border)] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[var(--color-primary)] mb-2 block">
            Sticky Interactive Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            Engineered from ground up.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Scrolling Milestone Chapters */}
          <div className="lg:col-span-6 space-y-8">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  activeStep === idx
                    ? 'border-[var(--color-primary)] bg-[var(--color-bg-subtle)] shadow-xl shadow-[var(--color-primary)]/10 scale-[1.02]'
                    : 'border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-border-hover,#a1a1aa)] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
                    PHASE {m.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-subtle)]">
                    {m.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3">
                  {m.title}
                </h3>

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {m.description}
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border)]/50">
                  <span className="text-xs font-mono font-bold text-[var(--color-primary)]">
                    {m.metric}
                  </span>
                  <span className="text-stone-300 dark:text-stone-700">•</span>
                  <span className="text-xs font-semibold text-[var(--color-text-muted)]">
                    {m.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Pinned Sticky Visual Canvas */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-4 sm:p-6 shadow-2xl overflow-hidden relative group">
              
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-black">
                <img
                  src={milestones[activeStep].image}
                  alt={milestones[activeStep].title}
                  className="w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                {/* Live Step Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--color-primary)] text-white shadow-md">
                    Phase {milestones[activeStep].step}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 text-white backdrop-blur-md border border-white/20">
                    {milestones[activeStep].tag}
                  </span>
                </div>

                {/* Metric Overlay Toast */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/70">Verified Benchmark</p>
                    <p className="text-sm font-bold text-white">{milestones[activeStep].metric}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                    {milestones[activeStep].badge}
                  </span>
                </div>
              </div>

              {/* Sticky Progress Indicators */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[var(--color-text-muted)] font-medium">
                  Sticky Interactive State:
                </span>
                <div className="flex items-center gap-2">
                  {milestones.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeStep === idx
                          ? 'w-8 bg-[var(--color-primary)] shadow-sm'
                          : 'w-2 bg-[var(--color-border)] hover:bg-[var(--color-primary)]/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
