import React, { useState, useRef, useEffect } from 'react';

export interface AutoCardItem {
  id: string;
  title: string;
  description: string;
  iconType: 'automation' | 'generative' | 'chatbot' | 'analytics' | 'security' | 'cloud';
  badge?: string;
  color?: string;
}

export interface AutoCardSliderProps {
  title?: string;
  subtitle?: string;
  items?: AutoCardItem[];
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
}

const defaultCards: AutoCardItem[] = [
  {
    id: '1',
    title: 'Automation Intelligence',
    description: 'Automate routine workflows to enhance efficiency, eliminate repetitive tasks, and reduce human operational error.',
    iconType: 'automation',
    badge: 'Core Engine',
    color: '#3b82f6',
  },
  {
    id: '2',
    title: 'Generative AI Systems',
    description: 'Use generative models to synthesize creative content, dynamic UI designs, and adaptive marketing strategies in real time.',
    iconType: 'generative',
    badge: 'NextGen',
    color: '#8b5cf6',
  },
  {
    id: '3',
    title: 'Smart Conversational Agents',
    description: 'Autonomous multi-modal chatbots that provide 24/7 contextual customer support and dynamically adapt to user intent.',
    iconType: 'chatbot',
    badge: 'Interactive',
    color: '#06b6d4',
  },
  {
    id: '4',
    title: 'Predictive Analytics Engine',
    description: 'Anticipate customer demands, forecast revenue spikes, and surface deep pattern recognition using telemetry AI.',
    iconType: 'analytics',
    badge: 'Insights',
    color: '#10b981',
  },
  {
    id: '5',
    title: 'Autonomous Data Workflows',
    description: 'Zero-latency edge ingestion pipelines that process multi-source data streams with sub-millisecond execution.',
    iconType: 'cloud',
    badge: 'Scale',
    color: '#f59e0b',
  },
  {
    id: '6',
    title: 'Enterprise Security Mesh',
    description: 'Institutional-grade cryptographic identity verification and automated compliance audits for global operations.',
    iconType: 'security',
    badge: 'SOC-2 Ready',
    color: '#ef4444',
  },
];

// SVG illustration renderers matching the circular badges in apls.ai screenshot
const renderCardIcon = (type: string, color: string) => {
  switch (type) {
    case 'automation':
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg" style={{ background: 'radial-gradient(circle at 35% 35%, #60a5fa, #1e40af)' }}>
          <div className="absolute inset-0 bg-blue-500/20 blur-sm"></div>
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      );
    case 'generative':
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg" style={{ background: 'radial-gradient(circle at 35% 35%, #c084fc, #6b21a8)' }}>
          <div className="absolute inset-0 bg-purple-500/20 blur-sm"></div>
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      );
    case 'chatbot':
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg" style={{ background: 'radial-gradient(circle at 35% 35%, #22d3ee, #0e7490)' }}>
          <div className="absolute inset-0 bg-cyan-500/20 blur-sm"></div>
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      );
    case 'analytics':
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg" style={{ background: 'radial-gradient(circle at 35% 35%, #34d399, #065f46)' }}>
          <div className="absolute inset-0 bg-emerald-500/20 blur-sm"></div>
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      );
    case 'cloud':
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg" style={{ background: 'radial-gradient(circle at 35% 35%, #fbbf24, #b45309)' }}>
          <div className="absolute inset-0 bg-amber-500/20 blur-sm"></div>
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg" style={{ background: 'radial-gradient(circle at 35% 35%, #f87171, #991b1b)' }}>
          <div className="absolute inset-0 bg-red-500/20 blur-sm"></div>
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      );
  }
};

export const AutoCardSlider: React.FC<AutoCardSliderProps> = ({
  title = 'Unlock the Power of Intelligent Systems',
  subtitle = 'Discover how modern AI transforms your business with automation, analytics, and intelligent design.',
  items = defaultCards,
  speed = 28,
  pauseOnHover = true,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate items twice for seamless infinite continuous scroll
  const displayItems = [...items, ...items, ...items];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[var(--color-bg)] relative overflow-hidden">
      {/* Header text matching apls.ai */}
      <div className="container mx-auto px-4 text-center max-w-3xl mb-14">
        {title && (
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight mb-4 font-heading">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-subtle)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-3 py-1 rounded-full text-xs font-semibold border border-[var(--color-border)] bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            {isPaused ? '▶ Play Auto-Scroll' : '⏸ Pause'}
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-subtle)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>

      {/* Auto-sliding continuous track */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-hidden py-4 -my-4 relative select-none"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        {/* Soft edge gradient fades for seamless modern aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 w-max"
          style={{
            animation: `marqueeScroll ${speed}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {displayItems.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="w-[280px] sm:w-[310px] flex-shrink-0 p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Top circular icon with glowing badge */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {renderCardIcon(card.iconType, card.color || '#3b82f6')}
              </div>

              {card.badge && (
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] mb-3">
                  {card.badge}
                </span>
              )}

              <h3 className="text-lg font-extrabold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoCardSlider;
