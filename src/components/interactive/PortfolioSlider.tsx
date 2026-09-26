import React, { useState, useEffect, useRef } from 'react';

export interface ProjectItem {
  id?: string;
  title: string;
  tag: string;
  category?: string;
  client: string;
  metric: string;
  gradient: string;
  year?: string;
  description?: string;
  deliverables?: string[];
  link?: string;
  accentColor?: string;
  image?: string;
}

export interface PortfolioSliderProps {
  title?: string;
  subtitle?: string;
  projects?: ProjectItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showFilters?: boolean;
  viewAllLink?: string;
}

const defaultProjects: ProjectItem[] = [
  {
    id: 'altitude',
    title: 'Altitude — Global Brand Re-Identity',
    tag: 'Branding & Identity',
    category: 'Branding',
    client: 'Altitude Aerospace',
    metric: '+180% Inbound Inquiries',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #7c2d12 100%)',
    year: '2024',
    description: 'A comprehensive brand transformation across 14 international markets, featuring custom generative typography, cinematic launch films, and an edge-rendered brand guideline hub.',
    deliverables: ['Global Brand Architecture', 'Interactive Web Guidelines', 'Motion Design System', 'Executive Media Kit'],
    accentColor: '#f97316'
  },
  {
    id: 'meridian',
    title: 'Meridian — NextGen Fintech Platform',
    tag: 'Web & Product System',
    category: 'Product',
    client: 'Meridian Capital',
    metric: 'Series B Scaled to $45M',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    year: '2024',
    description: 'Architecting an ultra-low latency wealth management interface with real-time portfolio tracking, micro-interactions, and institution-grade security telemetry.',
    deliverables: ['React Design System', 'Real-Time Telemetry Dashboard', 'Design Tokens Hub', 'Interactive Data Visualizer'],
    accentColor: '#38bdf8'
  },
  {
    id: 'otera',
    title: 'Otera — Regenerative Health App',
    tag: 'Mobile & UX Architecture',
    category: 'Product',
    client: 'Otera Longevity',
    metric: '4.9★ App Store Launch',
    gradient: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
    year: '2023',
    description: 'Bridging cellular biology and consumer wellness with an adaptive biometrics companion, circadian audio synthesizers, and seamless continuous glucose monitoring integrations.',
    deliverables: ['Native iOS & Android Architecture', 'Biometric Data Visualization', 'Haptic Feedback Design', 'Circadian Sound Engine'],
    accentColor: '#fbbf24'
  },
  {
    id: 'crest',
    title: 'Crest — Cinematic Brand Launch',
    tag: 'Motion Design & Film',
    category: 'Motion',
    client: 'Crest Watches',
    metric: '2.4M Organic Video Views',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #831843 100%)',
    year: '2024',
    description: 'Directing a multi-sensory launch campaign for limited edition Swiss horology, integrating photorealistic 3D chronometer renders with spatial audio narrative.',
    deliverables: ['Cinematic 4K Brand Film', '3D Product WebGL Viewer', 'Editorial Packaging', 'Global Social Assets'],
    accentColor: '#f43f5e'
  },
  {
    id: 'nova',
    title: 'Nova — Enterprise AI Orchestrator',
    tag: 'Product Architecture',
    category: 'Product',
    client: 'Nova Intelligence',
    metric: 'Acquired by Snowflake',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)',
    year: '2023',
    description: 'Synthesizing complex multi-agent neural workflows into an intuitive canvas UI, enabling enterprise developers to deploy autonomous data workers with zero friction.',
    deliverables: ['Canvas Node Editor UX', 'Autonomous Agent Dashboards', 'Dark-Mode Theme Palette', 'Interactive Documentation Hub'],
    accentColor: '#818cf8'
  },
  {
    id: 'lune',
    title: 'Lune — Sustainable Luxury Living',
    tag: 'Editorial & Packaging',
    category: 'Branding',
    client: 'Lune Botanical',
    metric: 'Dieline Best in Class 2024',
    gradient: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
    year: '2024',
    description: 'Eco-conscious tactile packaging crafted from cold-pressed mycelium composite paired with a minimalist Parisian editorial e-commerce sanctuary.',
    deliverables: ['Biodegradable Unboxing Experience', 'High-Converting Headless Storefront', 'Art Direction & Photography', 'Custom Editorial Typeface'],
    accentColor: '#34d399'
  },
];

export const PortfolioSlider: React.FC<PortfolioSliderProps> = ({
  title = 'Recent Collaborations',
  subtitle = 'Selected Work',
  projects = defaultProjects,
  autoplay = true,
  autoplayInterval = 4500,
  showFilters = true,
  viewAllLink = '/contact',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category || 'Work')))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  // Window resize handler for responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredProjects.length - cardsPerView);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setProgress(0);
  }, [selectedCategory]);

  // Autoplay and progress timer
  useEffect(() => {
    if (!autoplay || isPaused || maxIndex <= 0) return;

    const intervalStep = 50; // update progress every 50ms
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr >= maxIndex ? 0 : curr + 1));
          return 0;
        }
        return prev + (100 / (autoplayInterval / intervalStep));
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [autoplay, isPaused, maxIndex, autoplayInterval]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    setProgress(0);
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      setTouchDeltaX(e.touches[0].clientX - touchStartX);
    }
  };

  const handleTouchEnd = () => {
    if (touchDeltaX > 50) {
      handlePrev();
    } else if (touchDeltaX < -50) {
      handleNext();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
    setIsPaused(false);
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header bar with eyebrow, title, and interactive controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            {subtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-heading, inherit)', color: 'var(--color-text)' }}>
            {title}
          </h2>
        </div>

        {/* Categories / Filter Pills */}
        {showFilters && categories.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    active
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Carousel Arrow Controls & Autoplay indicator */}
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono tracking-widest text-[var(--color-text-muted)]">
            <span className="font-bold text-orange-500">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>{' '}
            / {String(filteredProjects.length).padStart(2, '0')}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-full flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm active:scale-95 group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-full flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm active:scale-95 group"
            >
              <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Line for Autoplay */}
      {autoplay && maxIndex > 0 && (
        <div className="w-full h-1 bg-black/5 dark:bg-white/10 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Slider Carousel Viewport */}
      <div
        className="relative overflow-hidden py-4 -my-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="flex-shrink-0 px-3 transition-all duration-300"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div
                onClick={() => setActiveModalProject(project)}
                className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/40"
              >
                {/* Visual Header with Real Photography & Gradient Mesh */}
                <div
                  className="relative h-64 p-6 flex flex-col justify-between overflow-hidden text-white transition-transform duration-700 bg-zinc-950"
                  style={{ background: project.image ? undefined : project.gradient }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.8]"
                      loading="lazy"
                    />
                  )}
                  {/* Subtle noise / dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/10 shadow-sm">
                      {project.tag}
                    </span>
                    {project.year && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-sm text-white/90 border border-white/10">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Dynamic Metric & Client Bar */}
                  <div className="relative z-10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                      {project.client}
                    </p>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-bold text-xs shadow-inner">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {project.metric}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-[var(--color-bg)]">
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-[var(--color-text)] group-hover:text-orange-500 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed mb-4">
                      {project.description || 'Full creative direction, brand narrative, and technical architecture.'}
                    </p>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-[var(--color-border)]/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-orange-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                      Explore Case Study
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>

                    <span className="text-[11px] font-medium text-[var(--color-text-muted)] bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-md border border-[var(--color-border)]">
                      View details ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Pagination Dots / Indicator Bars */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => {
          const isActive = currentIndex === dotIdx;
          return (
            <button
              key={dotIdx}
              onClick={() => {
                setCurrentIndex(dotIdx);
                setProgress(0);
              }}
              aria-label={`Jump to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-8 bg-orange-500 shadow-sm shadow-orange-500/50'
                  : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
              }`}
            />
          );
        })}
      </div>

      {/* High-End Project Detail Modal Drawer */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-2xl transition-all duration-300 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Graphic */}
            <div
              className="h-44 p-8 flex flex-col justify-between text-white relative overflow-hidden"
              style={{ background: activeModalProject.gradient }}
            >
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
                  {activeModalProject.tag}
                </span>
                {activeModalProject.year && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/20">
                    {activeModalProject.year}
                  </span>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/75">{activeModalProject.client}</p>
                <h3 className="text-2xl font-bold tracking-tight text-white">{activeModalProject.title}</h3>
              </div>
            </div>

            {/* Modal Content Details */}
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-orange-500 mb-2">Project Overview</h4>
                <p className="text-sm leading-relaxed text-[var(--color-text)]">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Key Metric Spotlight */}
              <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase font-semibold text-[var(--color-text-muted)]">Verified Impact Metric</p>
                  <p className="text-xl font-extrabold text-orange-500 mt-0.5">{activeModalProject.metric}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-orange-500 text-white">Audited 2024</span>
                </div>
              </div>

              {/* Deliverables tags */}
              {activeModalProject.deliverables && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-3">Key Deliverables</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-xs px-3 py-1 rounded-lg bg-[var(--color-bg-subtle)] border border-[var(--color-border)] text-[var(--color-text)] font-medium"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  Close Preview
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 flex items-center gap-2"
                >
                  Commission Similar Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioSlider;
