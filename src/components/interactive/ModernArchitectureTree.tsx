import { useState } from 'react';

interface TreeNode {
  id: string;
  parentId?: string;
  name: string;
  category: string;
  badge: string;
  badgeColor: string;
  description: string;
  hydration: 'Zero-JS' | 'client:load' | 'client:visible' | 'CSS Tokens';
  file: string;
  codeSnippet: string;
  href?: string;
  actionLabel?: string;
  icon: string;
}

interface TreeBranch {
  id: string;
  title: string;
  color: string;
  nodes: TreeNode[];
}

const ARCHITECTURE_TREE_DATA: TreeBranch[] = [
  {
    id: 'islands',
    title: 'Astro 5 Islands & Shell',
    color: '#6366f1',
    nodes: [
      {
        id: 'base-layout',
        name: 'BaseLayout.astro',
        category: 'Layout Shell',
        badge: 'Zero-JS',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        description: 'Universal HTML shell with dynamic CSS variable token injection, SEO meta tags, and zero layout shift.',
        hydration: 'Zero-JS',
        file: 'src/layouts/BaseLayout.astro',
        icon: '🏛️',
        codeSnippet: `<BaseLayout title="My SaaS" themeSlug="saas">\n  <Navbar client:load />\n  <Hero />\n  <StatsRow />\n</BaseLayout>`,
        href: '/docs',
        actionLabel: 'Inspect BaseLayout Docs',
      },
      {
        id: 'hero-motion',
        name: 'HeroMotionGraphic.astro',
        category: 'Hero Engine',
        badge: 'Photographic & Motion',
        badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
        description: 'High-res photography paired with background video overlays, glassmorphic telemetry HUDs, and live metric badges.',
        hydration: 'Zero-JS',
        file: 'src/components/sections/HeroMotionGraphic.astro',
        icon: '🎬',
        codeSnippet: `<!-- Zero-JS server rendered with video loop -->\n<HeroMotionGraphic\n  variant="saas"\n  title="Edge Telemetry"\n/>`,
        href: '/themes/saas',
        actionLabel: 'View Live Hero Variant',
      },
      {
        id: 'modern-showcase',
        name: 'ModernVisualShowcase.astro',
        category: 'Feature Visuals',
        badge: 'Multi-Niche',
        badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        description: 'Deep feature showcase utilizing curated CDN photography, interactive benchmarks, and glassmorphic accreditation badges.',
        hydration: 'Zero-JS',
        file: 'src/components/sections/ModernVisualShowcase.astro',
        icon: '💎',
        codeSnippet: `<ModernVisualShowcase\n  variant="ecommerce"\n  title="Material Craft & Precision"\n/>`,
        href: '/themes/ecommerce',
        actionLabel: 'Preview Visual Showcase',
      },
    ],
  },
  {
    id: 'interactive-react',
    title: 'React 19 Hydrated Islands',
    color: '#10b981',
    nodes: [
      {
        id: 'lookbook-canvas',
        name: 'InteractiveLookbook.tsx',
        category: 'eCommerce Island',
        badge: 'client:load',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        description: 'High-fashion editorial canvas with interactive pulsing beacons placed directly over garments for instant inspection and cart addition.',
        hydration: 'client:load',
        file: 'src/components/interactive/InteractiveLookbook.tsx',
        icon: '👗',
        codeSnippet: `<InteractiveLookbook client:load />\n// Interactive pins with pulsing waves\n// State synchronized instant drawer`,
        href: '/themes/ecommerce',
        actionLabel: 'Test Lookbook Canvas',
      },
      {
        id: 'quickview-drawer',
        name: 'ProductQuickView.tsx',
        category: 'eCommerce Island',
        badge: 'client:load',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        description: 'Interactive product browser with zoomable photography, live colorway/size switcher, and slide-over cart drawer.',
        hydration: 'client:load',
        file: 'src/components/interactive/ProductQuickView.tsx',
        icon: '🛍️',
        codeSnippet: `<ProductQuickView client:load />\n// Real product photography preview\n// Active bag calculation state`,
        href: '/themes/ecommerce',
        actionLabel: 'Launch QuickView Drawer',
      },
      {
        id: 'case-study-filter',
        name: 'CaseStudyFilter.tsx',
        category: 'Agency Island',
        badge: 'client:visible',
        badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
        description: 'Categorized portfolio system with real project photography, award tags, impact metrics, and deliverables pills.',
        hydration: 'client:visible',
        file: 'src/components/interactive/CaseStudyFilter.tsx',
        icon: '📂',
        codeSnippet: `<CaseStudyFilter client:visible />\n// Filter tabs: Brand, Web, Motion\n// Photographic zoom-on-hover cards`,
        href: '/themes/agency',
        actionLabel: 'Filter Case Studies',
      },
      {
        id: 'sommelier-guide',
        name: 'WinePairingGuide.tsx',
        category: 'Dining Island',
        badge: 'client:visible',
        badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
        description: 'Course-by-course sommelier pairing advisor with tasting notes, decanting temperatures, and glass profiles.',
        hydration: 'client:visible',
        file: 'src/components/interactive/WinePairingGuide.tsx',
        icon: '🍷',
        codeSnippet: `<WinePairingGuide client:visible />\n// Course selector: Entrée, Wagyu, Soufflé\n// Tasting notes & acidity scores`,
        href: '/themes/restaurant',
        actionLabel: 'Explore Sommelier Guide',
      },
    ],
  },
  {
    id: 'design-tokens',
    title: 'CSS Tokens & Media Engine',
    color: '#f59e0b',
    nodes: [
      {
        id: 'media-registry',
        name: 'media.ts',
        category: 'Media Engine',
        badge: 'Curated Assets',
        badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
        description: 'Centralized registry of verified Unsplash photography and video loops mapped to each business niche.',
        hydration: 'Zero-JS',
        file: 'src/lib/media.ts',
        icon: '📸',
        codeSnippet: `export const MEDIA = {\n  saas: { heroPoster, datacenter, chip },\n  agency: { meridian, otera, kinetic },\n  health: { clinicSanctuary, drElena },\n};`,
        href: '/docs',
        actionLabel: 'Inspect Media Registry',
      },
      {
        id: 'themes-engine',
        name: 'themes.ts',
        category: 'Token System',
        badge: 'CSS Variables',
        badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
        description: 'Single source of truth defining primary, accent, surface colors, fonts, and border radii per niche.',
        hydration: 'CSS Tokens',
        file: 'src/lib/themes.ts',
        icon: '🎨',
        codeSnippet: `export const themes = [\n  { id: 'saas', primary: '#6366f1', radius: '0.75rem' },\n  { id: 'restaurant', primary: '#e11d48' },\n];`,
        href: '/docs',
        actionLabel: 'View Token Hierarchy',
      },
    ],
  },
];

const TEMPLATES_TREE_DATA: TreeBranch[] = [
  {
    id: 'saas-archetype',
    title: 'NexaCloud SaaS Theme',
    color: '#6366f1',
    nodes: [
      {
        id: 'saas-hero',
        name: 'Edge Telemetry Hero',
        category: 'SaaS Component',
        badge: 'Video + HUD',
        badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
        description: 'Server cluster photography with live MP4 stream, 11ms Anycast metric HUD, and active PoP indicator.',
        hydration: 'Zero-JS',
        file: 'src/themes/saas/index.astro',
        icon: '⚡',
        codeSnippet: `<HeroMotionGraphic variant="saas" />\n// Ping indicators & 312 PoPs counter\n// 48.2k req/s dynamic badge`,
        href: '/themes/saas',
        actionLabel: 'Launch SaaS Template',
      },
      {
        id: 'saas-calc',
        name: 'SaaSCalculator.tsx',
        category: 'Interactive Island',
        badge: 'ROI Modeler',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        description: 'Interactive compute hours and team seat slider calculating estimated monthly savings in real time.',
        hydration: 'client:load',
        file: 'src/components/interactive/SaaSCalculator.tsx',
        icon: '🧮',
        codeSnippet: `<SaaSCalculator client:load />\n// Team slider: 1 - 250 engineers\n// Dynamic tier: Starter vs Enterprise`,
        href: '/themes/saas',
        actionLabel: 'Try SaaS Calculator',
      },
      {
        id: 'saas-terminal',
        name: 'LiveCodeTerminal.tsx',
        category: 'Developer Experience',
        badge: 'Multi-Tab CLI',
        badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        description: 'Interactive command line terminal with tab switching (Deploy, Telemetry, Edge) and instant copy button.',
        hydration: 'client:visible',
        file: 'src/components/interactive/LiveCodeTerminal.tsx',
        icon: '💻',
        codeSnippet: `<LiveCodeTerminal client:visible />\n// npx astro add tailwind react\n// Real terminal typing animation`,
        href: '/themes/saas',
        actionLabel: 'Test Live Terminal',
      },
    ],
  },
  {
    id: 'lifestyle-archetype',
    title: 'eCommerce & Agency Themes',
    color: '#10b981',
    nodes: [
      {
        id: 'ecom-bag',
        name: 'Shopfront QuickView Bag',
        category: 'Retail Flow',
        badge: 'Instant Cart',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        description: 'Curated daily essentials with photographic quick view, color variants, size selector, and slide drawer.',
        hydration: 'client:load',
        file: 'src/themes/ecommerce/index.astro',
        icon: '🧥',
        codeSnippet: `<ProductQuickView client:load />\n// Real wool coat, leather tote photography\n// Instant cart drawer checkout trigger`,
        href: '/themes/ecommerce',
        actionLabel: 'Explore eCommerce Store',
      },
      {
        id: 'agency-portfolio',
        name: 'Forma Studio Filter',
        category: 'Creative Portfolio',
        badge: 'Award Grid',
        badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
        description: 'Editorial grid showcasing case studies with high-res photography, Awwwards badges, and impact metrics.',
        hydration: 'client:visible',
        file: 'src/themes/agency/index.astro',
        icon: '🎨',
        codeSnippet: `<CaseStudyFilter client:visible />\n// Meridian, Otera, Kinetic, Lumina\n// Multi-category tag switching`,
        href: '/themes/agency',
        actionLabel: 'Launch Agency Studio',
      },
    ],
  },
  {
    id: 'health-dining-archetype',
    title: 'Health & Fine Dining Themes',
    color: '#e11d48',
    nodes: [
      {
        id: 'health-intake',
        name: 'Vitality Interactive Booking',
        category: 'Clinical Intake',
        badge: 'Real-Time Slots',
        badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
        description: 'Multi-step clinical appointment scheduler with calendar selection, specialist choice, and instant intake.',
        hydration: 'client:load',
        file: 'src/components/interactive/InteractiveBooking.tsx',
        icon: '🏥',
        codeSnippet: `<InteractiveBooking client:load />\n// Specialist selection & time slots\n// Instant intake submission`,
        href: '/themes/health',
        actionLabel: 'Launch Health Clinic',
      },
      {
        id: 'restaurant-reserve',
        name: 'Saveur Table Reservation',
        category: 'Michelin Booking',
        badge: 'Salon Privé',
        badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
        description: 'Michelin 3-star reservation modal with tasting menu selection, guest counts, and sommelier cellar pairing options.',
        hydration: 'client:load',
        file: 'src/components/interactive/TableReservationModal.tsx',
        icon: '🍽️',
        codeSnippet: `<TableReservationModal client:load />\n// Course selection & wine pairing options\n// Guest party size & date picker`,
        href: '/themes/restaurant',
        actionLabel: 'Launch Restaurant Experience',
      },
    ],
  },
];

export function ModernArchitectureTree() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'templates'>('architecture');
  const branches = activeTab === 'architecture' ? ARCHITECTURE_TREE_DATA : TEMPLATES_TREE_DATA;
  const [selectedNode, setSelectedNode] = useState<TreeNode>(branches[0].nodes[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  return (
    <div className="w-full my-12">
      {/* View Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Interactive Tree Navigator
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 mt-0.5">
            Component & Template Tree Architecture
          </h3>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-zinc-200 self-start sm:self-auto">
          <button
            onClick={() => {
              setActiveTab('architecture');
              setSelectedNode(ARCHITECTURE_TREE_DATA[0].nodes[0]);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'bg-indigo-600 text-zinc-900 shadow-lg shadow-indigo-600/30'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <span>⬡</span>
            <span>Astro Islands Tree</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('templates');
              setSelectedNode(TEMPLATES_TREE_DATA[0].nodes[0]);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'templates'
                ? 'bg-indigo-600 text-zinc-900 shadow-lg shadow-indigo-600/30'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <span>⚡</span>
            <span>5 Niche Templates Tree</span>
          </button>
        </div>
      </div>

      {/* Main Tree Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Visual Tree Hierarchy Graph */}
        <div className="lg:col-span-7 space-y-6">
          {/* Central Root Node */}
          <div className="p-5 rounded-2xl border border-indigo-500/40 bg-gradient-to-r from-indigo-950/80 via-zinc-900 to-purple-950/80 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-zinc-900 text-lg shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                  {activeTab === 'architecture' ? '⬡' : '★'}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-black text-zinc-900 text-base">
                      {activeTab === 'architecture' ? 'Astara Astro Core Engine' : '5 Niche Verticals Ecosystem'}
                    </h4>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <p className="text-xs text-zinc-600">
                    {activeTab === 'architecture'
                      ? 'Astro 5 Islands · React 19 Hydration · Tailwind v4'
                      : 'SaaS · Agency · eCommerce · Health · Restaurant'}
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                100% Tree Linked
              </span>
            </div>
          </div>

          {/* SVG Animated Connector Line */}
          <div className="w-full flex justify-center py-1">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" className="text-indigo-500/60">
              <path
                d="M20 0 V28"
                stroke="currentColor"
                strokeWidth="2.5"
                className="tree-branch-active"
              />
            </svg>
          </div>

          {/* Tree Branches */}
          <div className="space-y-6">
            {branches.map((branch, bIdx) => (
              <div
                key={branch.id}
                className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 relative shadow-xl hover:border-zinc-200 transition-all"
              >
                {/* Branch Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-200">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: branch.color }}
                    />
                    <h5 className="font-extrabold text-sm text-zinc-900">
                      {branch.title}
                    </h5>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {branch.nodes.length} connected components
                  </span>
                </div>

                {/* Branch Children Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {branch.nodes.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    const isHovered = hoveredNodeId === node.id;

                    return (
                      <div
                        key={node.id}
                        onClick={() => setSelectedNode(node)}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between interactive-hover-lift ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-950/40 shadow-xl shadow-indigo-950/40 ring-2 ring-indigo-500/30'
                            : 'border-zinc-200 bg-white shadow-sm hover:shadow-lg hover:bg-zinc-850 hover:border-zinc-200'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xl">{node.icon}</span>
                            <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${node.badgeColor}`}>
                              {node.badge}
                            </span>
                          </div>

                          <h6 className={`text-xs font-bold ${isSelected ? 'text-zinc-900' : 'text-zinc-700'}`}>
                            {node.name}
                          </h6>
                          <p className="text-[11px] text-zinc-600 mt-1 line-clamp-2">
                            {node.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-zinc-200 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                          <span>{node.hydration}</span>
                          <span className={`${isSelected ? 'text-indigo-400 font-bold' : 'text-zinc-600'}`}>
                            Inspect Tree Node →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Live Interactive Node Inspector HUD */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="rounded-3xl border border-indigo-500/30 bg-white p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            {/* Ambient Background Aura */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Inspector Status */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">
                  Node Inspector HUD
                </span>
              </div>
              <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border ${selectedNode.badgeColor}`}>
                {selectedNode.badge}
              </span>
            </div>

            {/* Selected Node Details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-3xl shadow-lg shrink-0">
                  {selectedNode.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                    {selectedNode.category}
                  </span>
                  <h4 className="text-xl font-black text-zinc-900 mt-0.5">
                    {selectedNode.name}
                  </h4>
                  <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
                    {selectedNode.file}
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-700 leading-relaxed bg-white shadow-sm hover:shadow-lg p-4 rounded-xl border border-zinc-200">
                {selectedNode.description}
              </p>

              {/* Performance & Hydration Telemetry Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 block">Hydration Mode</span>
                  <span className="font-mono font-bold text-emerald-400 text-xs mt-0.5 block">
                    {selectedNode.hydration}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 block">Compilation Target</span>
                  <span className="font-mono font-bold text-indigo-400 text-xs mt-0.5 block">
                    Astro 5 Island
                  </span>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div>
                <div className="flex items-center justify-between pb-2 text-[10px] font-mono text-zinc-600">
                  <span>Component Integration Snippet</span>
                  <span className="text-indigo-400">Astro / TSX</span>
                </div>
                <pre className="p-4 rounded-xl bg-white border border-zinc-200 font-mono text-[11px] text-zinc-700 overflow-x-auto leading-relaxed shadow-inner">
                  <code>{selectedNode.codeSnippet}</code>
                </pre>
              </div>

              {/* Action Trigger */}
              {selectedNode.href && (
                <a
                  href={selectedNode.href}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-zinc-900 font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{selectedNode.actionLabel || 'Launch Component Node'}</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
