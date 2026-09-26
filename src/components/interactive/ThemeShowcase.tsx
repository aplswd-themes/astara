import { useState, useEffect, useRef } from 'react';

interface ThemePreview {
  id: string;
  name: string;
  niche: string;
  color: string;
  accent: string;
  bgDark: string;
  tagline: string;
  badge: string;
  ribbon: string;
  ribbonClass: string;
  headline: string;
  stats: { label: string; val: string }[];
  codeSnippet: string;
  path: string;
}

const themesData: ThemePreview[] = [
  {
    id: 'agency',
    name: 'Forma Studio',
    niche: 'Creative Agency & Studio',
    color: '#f97316',
    accent: '#ea580c',
    bgDark: '#fffbf7',
    tagline: 'Editorial brand systems and high-converting web experiences.',
    badge: 'Award-Winning Studio 2024',
    ribbon: '✦ LUXURY EDITORIAL',
    ribbonClass: 'ribbon-agency',
    headline: 'We make ambitious brands impossible to ignore.',
    stats: [
      { label: 'Global Awards', val: '14' },
      { label: 'Client Growth', val: '+210%' },
      { label: 'Retention', val: '98%' },
    ],
    codeSnippet: `// theme.config.ts\nexport const agencyTheme = {\n  slug: 'agency',\n  tokens: { primary: '#f97316', heading: 'Playfair Display' },\n  editorial: true,\n};`,
    path: '/themes/agency',
  },
  {
    id: 'ecommerce',
    name: 'Shopfront',
    niche: 'eCommerce & Curated Retail',
    color: '#10b981',
    accent: '#059669',
    bgDark: '#ffffff',
    tagline: 'Streamlined checkout, product grids, and instant conversions.',
    badge: 'Spring 2024 Collection',
    ribbon: '🔥 BEST CONVERTING',
    ribbonClass: 'ribbon-ecommerce',
    headline: 'Curated lifestyle essentials designed for longevity.',
    stats: [
      { label: 'Customers', val: '2M+' },
      { label: 'Satisfaction', val: '4.9/5' },
      { label: 'Transit Days', val: '1-2' },
    ],
    codeSnippet: `// theme.config.ts\nexport const ecommerceTheme = {\n  slug: 'ecommerce',\n  tokens: { primary: '#10b981', accent: '#f59e0b' },\n  cart: true,\n};`,
    path: '/themes/ecommerce',
  },
  {
    id: 'health',
    name: 'Vitality',
    niche: 'Health & Integrative Medicine',
    color: '#0891b2',
    accent: '#06b6d4',
    bgDark: '#f0fdfa',
    tagline: 'Patient-first scheduling, specialist doctors, and digital portal.',
    badge: 'Accepting New Patients',
    ribbon: '★ CLINICAL GRADE',
    ribbonClass: 'ribbon-health',
    headline: 'Proactive healthcare designed around your daily wellness.',
    stats: [
      { label: 'Doctors', val: '18 MDs' },
      { label: 'Wait Time', val: '<10 min' },
      { label: 'Care Rating', val: '99.2%' },
    ],
    codeSnippet: `// theme.config.ts\nexport const healthTheme = {\n  slug: 'health',\n  tokens: { primary: '#0891b2', font: 'DM Sans' },\n  telehealth: true,\n};`,
    path: '/themes/health',
  },
  {
    id: 'restaurant',
    name: 'Saveur',
    niche: 'Fine Dining Gastronomy',
    color: '#dc2626',
    accent: '#d97706',
    bgDark: '#0c0a09',
    tagline: 'Seasonal Michelin carte, sommelier pairings, and private salon.',
    badge: 'Michelin Three Stars',
    ribbon: '◈ MICHELIN 3-STAR',
    ribbonClass: 'ribbon-restaurant',
    headline: 'Classical culinary heritage meets seasonal terroir.',
    stats: [
      { label: 'Michelin Stars', val: '3' },
      { label: 'Cellar Vintages', val: '450+' },
      { label: 'Established', val: '2009' },
    ],
    codeSnippet: `// theme.config.ts\nexport const restaurantTheme = {\n  slug: 'restaurant',\n  tokens: { primary: '#dc2626', accent: '#d97706' },\n  reservations: true,\n};`,
    path: '/themes/restaurant',
  },
];

const renderThemeIconSvg = (id: string) => {
  switch (id) {
    case 'saas':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      );
    case 'agency':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case 'ecommerce':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case 'health':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'restaurant':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v2m-8 9a8 8 0 0116 0H4zm-1 3h18a1 1 0 011 1v1H2v-1a1 1 0 011-1z" />
        </svg>
      );
    default:
      return null;
  }
};

export function InteractiveThemeShowcase() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const current = themesData[activeIdx];
  const slideDuration = 4500; // 4.5 seconds per slide
  const stepMs = 50;

  // Auto Slider Effect
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((curr) => (curr + 1) % themesData.length);
          return 0;
        }
        return prev + (100 / (slideDuration / stepMs));
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, activeIdx]);

  const handleSelect = (index: number) => {
    setActiveIdx(index);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % themesData.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + themesData.length) % themesData.length);
    setProgress(0);
  };

  return (
    <div
      className="w-full rounded-3xl border border-zinc-200 bg-white shadow-sm p-6 md:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative colored ambient glow matching active theme */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700"
        style={{ background: current.color }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none transition-all duration-700"
        style={{ background: current.accent }}
      />

      {/* Top Slider Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200 relative z-10">
        <div className="flex items-center gap-3">
          <span
            className="w-2.5 h-2.5 rounded-full animate-ping"
            style={{ backgroundColor: current.color }}
          />
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-700">
              Auto-Playing Live Showcase
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-600 border border-zinc-200">
              0{activeIdx + 1} / 0{themesData.length}
            </span>
          </div>
        </div>

        {/* Carousel Play/Pause & Arrow Navigation */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-medium text-zinc-700 hover:text-zinc-900 hover:border-zinc-200 transition-colors"
            title={isAutoPlay ? 'Pause auto-slider' : 'Play auto-slider'}
          >
            {isAutoPlay ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                <span className="text-[11px]">Auto Playing</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-[11px]">Paused</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous Theme"
            className="w-8 h-8 rounded-lg border border-zinc-200 bg-white flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-200 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Theme"
            className="w-8 h-8 rounded-lg border border-zinc-200 bg-white flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-200 transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {/* Auto-slider progress line */}
      <div className="w-full h-1 bg-white rounded-full mb-6 overflow-hidden relative z-10">
        <div
          className="h-full transition-all duration-75 ease-linear rounded-full"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${current.color}, ${current.accent})`,
          }}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch relative z-10">
        {/* Left selector panel */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Test Any Niche in Real-Time
            </h3>
            <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
              Slides automatically every few seconds. Click any niche below to instantly pause and inspect its design architecture and typography.
            </p>
          </div>

          {/* Theme selector tabs with modern ribbon pills */}
          <div className="space-y-2.5">
            {themesData.map((theme, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'border-zinc-200 bg-white shadow-xl'
                      : 'border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-200'
                  }`}
                >
                  {/* Active highlight line on left */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: theme.color }}
                    />
                  )}

                  <div className="flex items-center gap-3 pl-1">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                      style={{
                        backgroundColor: `${theme.color}22`,
                        borderColor: `${theme.color}55`,
                        color: theme.color,
                      }}
                    >
                      {renderThemeIconSvg(theme.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className={`text-sm font-bold ${isActive ? 'text-zinc-900' : 'text-zinc-700 group-hover:text-zinc-900'}`}>
                          {theme.name}
                        </p>
                        {/* Modern micro ribbon chip */}
                        <span
                          className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md text-zinc-900 shadow-sm"
                          style={{ backgroundColor: theme.color }}
                        >
                          {theme.niche.split('/')[0].trim()}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-0.5">{theme.niche}</p>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-all ${
                      isActive ? 'bg-white/10 text-zinc-900' : 'text-zinc-500 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {isActive ? 'Active' : 'Preview'}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href={current.path}
              className="flex-1 text-center py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-900 shadow-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 flex items-center justify-center gap-1.5"
              style={{ backgroundColor: current.color }}
            >
              <span>Launch {current.name}</span> <span>→</span>
            </a>
            <a
              href={`/downloads/themekit-${current.id}-theme.zip`}
              download={`themekit-${current.id}-theme.zip`}
              className="download-btn py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-900 border border-zinc-200 bg-white hover:bg-zinc-800 hover:border-zinc-500 hover:text-zinc-900 transition-all flex items-center justify-center gap-1.5 shadow-md group/dl"
              title={`Download ${current.name} Astro Source Code (.ZIP)`}
              data-theme-name={current.name}
            >
              <svg className="w-3.5 h-3.5 text-indigo-400 group-hover/dl:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Code</span>
            </a>
          </div>
        </div>

        {/* Right live preview card with modern diagonal corner ribbon */}
        <div className="w-full lg:w-7/12 rounded-3xl border border-zinc-200 bg-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          {/* Modern Diagonal Corner Ribbon Banner */}
          <div className="ribbon-corner-wrap">
            <div className={`ribbon-corner ${current.ribbonClass}`}>
              {current.ribbon}
            </div>
          </div>

          {/* Top Bar inside mockup */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200 pr-16">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center ml-2 border"
                style={{
                  backgroundColor: `${current.color}25`,
                  borderColor: `${current.color}60`,
                  color: current.color,
                }}
              >
                {renderThemeIconSvg(current.id)}
              </div>
              <span className="text-[11px] font-mono text-zinc-700">
                localhost:4321{current.path}
              </span>
            </div>
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border shadow-sm"
              style={{
                color: current.color,
                borderColor: `${current.color}40`,
                backgroundColor: `${current.color}15`,
              }}
            >
              {current.badge}
            </span>
          </div>

          {/* Center Stage Preview content */}
          <div className="py-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md text-zinc-900"
                  style={{ backgroundColor: current.color }}
                >
                  {current.niche}
                </span>
                <span className="text-xs text-zinc-500 font-mono">Theme Ready</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-snug">
                {current.headline}
              </h4>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                {current.tagline}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {current.stats.map((s) => (
                <div key={s.label} className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-center relative overflow-hidden group/stat">
                  <div
                    className="absolute inset-0 opacity-0 group-hover/stat:opacity-10 transition-opacity"
                    style={{ backgroundColor: current.color }}
                  />
                  <p className="text-xl font-black" style={{ color: current.color }}>
                    {s.val}
                  </p>
                  <p className="text-[10px] uppercase font-semibold text-zinc-600 tracking-wider mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Code Integration Preview with Ribbon Accent */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs text-zinc-600 relative overflow-hidden">
            <div className="flex items-center justify-between text-zinc-500 text-[10px] pb-2 mb-2 border-b border-zinc-200">
              <span className="flex items-center gap-1.5 text-zinc-700">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: current.color }} />
                Instant CSS Variable Tokens
              </span>
              <span className="text-emerald-400 font-semibold">● 100% Zero AI Slop</span>
            </div>
            <pre className="text-zinc-700 overflow-x-auto text-[11px] leading-relaxed">
              <code>{current.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InteractiveThemeShowcase;
