import { useState } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'all' | 'brand' | 'web' | 'motion' | 'product';
  categoryLabel: string;
  award: string;
  metric: string;
  year: string;
  image: string;
  deliverables: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'meridian',
    title: 'Meridian — NextGen Fintech Platform',
    client: 'Meridian Capital',
    category: 'web',
    categoryLabel: 'Web System',
    award: '✦ Awwwards Site of the Day',
    metric: 'Series B Scaled to $45M',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Design System', 'Telemetry UI', 'React 19 Islands', 'Micro-Interactions'],
  },
  {
    id: 'otera',
    title: 'Otera — Regenerative Longevity Studio',
    client: 'Otera Health',
    category: 'brand',
    categoryLabel: 'Brand Identity',
    award: '★ Red Dot Best of the Best',
    metric: '210% Inbound Lead Growth',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Custom Typography', 'Brand Guidelines', 'Packaging', 'Creative Direction'],
  },
  {
    id: 'kinetic',
    title: 'Kinetic OS — Spatial 3D Interface',
    client: 'Kinetic Labs',
    category: 'motion',
    categoryLabel: 'Motion & Film',
    award: '◈ FWA of the Day',
    metric: '1.2M Organic Impressions',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    deliverables: ['3D WebGL Motion', 'Brand Film', 'Sound Design', 'Interactive Canvas'],
  },
  {
    id: 'lumina',
    title: 'Lumina — Sustainable Luxury Atelier',
    client: 'Lumina Paris',
    category: 'product',
    categoryLabel: 'Product Design',
    award: '✦ European Design Gold',
    metric: '4.9★ Customer Rating',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Mobile App UX', 'eCommerce Architecture', 'Cart Flow', 'Fluid Animations'],
  },
  {
    id: 'aether',
    title: 'Aether Cloud — Developer Telemetry',
    client: 'Aether Systems',
    category: 'web',
    categoryLabel: 'Web System',
    award: '★ Fast Company Innovation',
    metric: 'Zero-Config Adoption',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Docs Architecture', 'Terminal Sandbox', 'Dynamic Dark Mode', 'API Playground'],
  },
  {
    id: 'solis',
    title: 'Solis Audio — Audiophile Acoustic Brand',
    client: 'Solis Acoustics',
    category: 'brand',
    categoryLabel: 'Brand Identity',
    award: '✦ D&AD Pencil Winner',
    metric: 'Sold Out in 48 Hours',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Acoustic Identity', 'Custom Wordmark', 'Editorial Lookbook', 'Industrial Packaging'],
  },
];

export function CaseStudyFilter() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'brand' | 'web' | 'motion' | 'product'>('all');

  const filtered = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === activeFilter);

  const filterTabs = [
    { key: 'all', label: 'All Projects' },
    { key: 'brand', label: 'Brand Identity' },
    { key: 'web', label: 'Web Systems' },
    { key: 'motion', label: 'Motion & 3D' },
    { key: 'product', label: 'Product Design' },
  ];

  return (
    <div className="w-full my-16">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Selected Works
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-white mt-1">
            Case Studies & Design Systems
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === tab.key
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((study) => (
          <div
            key={study.id}
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/80 overflow-hidden flex flex-col justify-between hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-950/30 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Visual Photographic Header */}
            <div className="h-60 relative overflow-hidden bg-zinc-950">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30 pointer-events-none" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-black/60 text-white border border-white/20 backdrop-blur-md">
                    {study.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-300 font-semibold bg-black/40 px-2 py-0.5 rounded backdrop-blur-md">
                    {study.year}
                  </span>
                </div>

                <div>
                  <span className="inline-block text-[11px] font-bold text-orange-400 mb-1">
                    {study.award}
                  </span>
                  <h4 className="text-xl font-black text-white group-hover:text-orange-200 transition-colors">
                    {study.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-zinc-950/80">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-850">
                <span className="text-xs text-zinc-400 font-medium">Impact & Metric</span>
                <span className="text-xs font-mono font-bold text-orange-400">{study.metric}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {study.deliverables.map((del) => (
                  <span
                    key={del}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {del}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-orange-300">
                <span>Explore Full Case</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
