import React, { useRef, useState } from 'react';
import { MEDIA } from '../../lib/media';

interface TrackItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  metric: string;
  image: string;
}

interface HorizontalScrollTrackProps {
  theme?: 'saas' | 'agency' | 'ecommerce' | 'health' | 'restaurant';
}

const TRACK_ITEMS: Record<string, TrackItem[]> = {
  saas: [
    { id: '1', title: 'Edge Micro-VM Containers', subtitle: 'Ultra-low overhead execution', tag: 'Compute', metric: '<12ms Global', image: MEDIA.saas.datacenter },
    { id: '2', title: 'Multi-Region Secret Vault', subtitle: 'Hardware-backed encryption', tag: 'Security', metric: 'FIPS 140-3', image: MEDIA.saas.chip },
    { id: '3', title: 'Automated Canary Branching', subtitle: 'Zero-downtime routing', tag: 'Deployment', metric: '0s Downtime', image: MEDIA.saas.codeScreen },
    { id: '4', title: 'High-Density Vector Index', subtitle: 'Sub-millisecond semantic search', tag: 'Database', metric: '100k QPS', image: MEDIA.saas.heroPoster },
  ],
  ecommerce: [
    { id: '1', title: 'Aura Cast Brass Lamp', subtitle: 'Solid brushed brass desk luminaire', tag: 'Lighting', metric: '$89 • 4.9★', image: MEDIA.ecommerce.lamp },
    { id: '2', title: 'Tuscan Hand-Welted Derbys', subtitle: 'Vegetable-tanned full-grain leather', tag: 'Footwear', metric: '$349 • 5.0★', image: MEDIA.ecommerce.derbyShoes },
    { id: '3', title: 'Grade 5 Titanium Chronograph', subtitle: 'Machined aerospace case & sapphire', tag: 'Horology', metric: '$245 • 4.8★', image: MEDIA.ecommerce.chronograph },
    { id: '4', title: 'SonicWave ANC Headphones', subtitle: '40mm beryllium acoustic drivers', tag: 'Acoustics', metric: '$189 • 4.9★', image: MEDIA.ecommerce.headphones },
  ],
  agency: [
    { id: '1', title: 'Meridian Global Platform', subtitle: 'Wealth management architecture', tag: 'FinTech', metric: '$45M Series B', image: MEDIA.agency.meridian },
    { id: '2', title: 'Otera Longevity Sanctuary', subtitle: 'Adaptive biometrics iOS system', tag: 'Wellness', metric: '4.9★ Launch', image: MEDIA.agency.otera },
    { id: '3', title: 'Kinetic OS Spatial 3D', subtitle: 'Next-gen WebGL spatial interface', tag: 'Spatial', metric: '1.2M Views', image: MEDIA.agency.kinetic },
    { id: '4', title: 'Lune Botanical Atelier', subtitle: 'Mycelium circular packaging', tag: 'Luxury', metric: 'Dieline Gold', image: MEDIA.agency.lumina },
  ],
  health: [
    { id: '1', title: 'Epigenetic DNA Age Mapping', subtitle: 'Complete cellular methylation analysis', tag: 'Genomics', metric: 'Multi-Omic', image: MEDIA.health.biotechLab },
    { id: '2', title: 'Cardiovascular Echo Telemetry', subtitle: 'Non-invasive arterial scanning', tag: 'Cardiology', metric: 'Real-Time', image: MEDIA.health.drMarcus },
    { id: '3', title: 'Circadian Sleep Optimization', subtitle: 'Neuroplasticity and REM tracking', tag: 'Neuroscience', metric: '98% Recovery', image: MEDIA.health.clinicSanctuary },
    { id: '4', title: 'Pediatric Development Hub', subtitle: 'Proactive family wellness milestone tracking', tag: 'Pediatrics', metric: 'Board Certified', image: MEDIA.health.drChen },
  ],
  restaurant: [
    { id: '1', title: 'Brittany Blue Lobster', subtitle: 'Oscietra caviar & sea samphire emulsion', tag: 'Course I', metric: 'Dom Pérignon 2012', image: MEDIA.restaurant.lobster },
    { id: '2', title: 'A5 Miyazaki Wagyu', subtitle: 'Perigord black truffle & morel jus', tag: 'Course II', metric: 'Château Margaux 2010', image: MEDIA.restaurant.wagyu },
    { id: '3', title: 'Line-Caught Halibut', subtitle: 'Saffron champagne velouté reduction', tag: 'Poisson', metric: 'Meursault 1er Cru', image: MEDIA.restaurant.turbot },
    { id: '4', title: 'Laminated Soufflé d’Or', subtitle: '24k gold leaf & vanilla anglaise', tag: 'Dessert', metric: 'Château d’Yquem', image: MEDIA.restaurant.souffle },
  ],
};

export const HorizontalScrollTrack: React.FC<HorizontalScrollTrackProps> = ({ theme = 'saas' }) => {
  const items = TRACK_ITEMS[theme] || TRACK_ITEMS.saas;
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }
  };

  return (
    <section className="section py-20 bg-[var(--color-bg-subtle)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        
        {/* Header with Nav Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[var(--color-primary)] mb-2 block">
              Horizontal Scroll Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight">
              Swipe & Explore the Catalog
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll Left"
              className="w-11 h-11 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-all flex items-center justify-center shadow-sm active:scale-95"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll Right"
              className="w-11 h-11 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-all flex items-center justify-center shadow-sm active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[var(--color-border)]/40 rounded-full mt-6 overflow-hidden">
          <div
            className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>

      {/* Horizontal Draggable/Scrollable Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-12 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-80 sm:w-96 flex-shrink-0 snap-start rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
          >
            <div className="relative h-60 w-full overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                {item.tag}
              </span>

              <span className="absolute bottom-4 left-4 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                {item.metric}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-[var(--color-text)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--color-border)]/50 flex items-center justify-between text-xs font-bold text-[var(--color-primary)]">
                <span>View Details</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
