import React, { useState } from 'react';
import { MEDIA } from '../../lib/media';

interface ProvenanceNode {
  id: string;
  step: string;
  title: string;
  location: string;
  certification: string;
  co2Offset: string;
  description: string;
  image: string;
  materials: string[];
}

const NODES: ProvenanceNode[] = [
  {
    id: 'raw-materials',
    step: 'Origin 01',
    title: 'Certified Ethical Provenance',
    location: 'Tuscany, Italy & Aegean Coast',
    certification: 'Leather Working Group Gold / GOTS Organic',
    co2Offset: '-6.4 kg CO2e / item',
    description: 'We exclusively source traceable full-grain hides tanned with chestnut tannins, and long-staple Aegean organic cotton grown without synthetic pesticides.',
    image: MEDIA.ecommerce.craftDetail,
    materials: ['Natural vegetable extracts', 'Zero hexavalent chromium', 'Non-GMO rain-fed fiber'],
  },
  {
    id: 'atelier',
    step: 'Craft 02',
    title: 'Zero-Waste Precision Atelier',
    location: 'Porto, Portugal',
    certification: 'Fair Wage Guild & ISO 14001',
    co2Offset: '98.5% Material Efficiency',
    description: 'Master artisans combine computer-guided laser cutting with double-needle saddle stitching. Scrap offcuts are repurposed into acoustic desk pads and key fobs.',
    image: MEDIA.ecommerce.derbyShoes,
    materials: ['Goodyear welted soles', 'Solid brass hand-cast buckles', 'Edge-burnished beeswax'],
  },
  {
    id: 'fulfillment',
    step: 'Packaging 03',
    title: 'Solar Clean Fulfillment Hub',
    location: 'Utrecht, Netherlands',
    certification: '100% Plastic-Free / B-Corp Certified',
    co2Offset: '100% Solar Self-Powered',
    description: 'Orders are dispatched in cold-pressed mycelium mushroom foam and water-activated algae ink paper boxes. Biodegrades safely in household soil in 45 days.',
    image: MEDIA.ecommerce.lamp,
    materials: ['Mycelium mushroom packaging', 'Unbleached kraft paper', 'Non-toxic cornstarch tape'],
  },
  {
    id: 'transit',
    step: 'Delivery 04',
    title: 'Carbon-Neutral Electric Transit',
    location: 'Global Hubs (EU, US, APAC)',
    certification: 'Climate Neutral Certified 2024',
    co2Offset: '0 Net Transit Emissions',
    description: 'Last-mile urban delivery handled by 100% electric delivery vans. Long-haul freight is balanced with verified reforestation investments in the Scottish Highlands.',
    image: MEDIA.ecommerce.chronograph,
    materials: ['48-hour express route', 'Live GPS tracking beacon', 'Signature courier drop-off'],
  },
  {
    id: 'circular',
    step: 'Longevity 05',
    title: 'Circular Lifetime Restoration',
    location: 'In-House Studio Workshop',
    certification: 'Guaranteed For Life Program',
    co2Offset: '+10 Year Product Lifespan',
    description: 'Should your piece ever require resoling, conditioning, or structural hardware repair, send it back to our atelier anytime. We fix it free for the first 3 years.',
    image: MEDIA.ecommerce.headphones,
    materials: ['Complimentary resoling', 'Hardware replacement pool', 'Trade-in store credit up to 40%'],
  },
];

export const EcommerceProvenanceTree: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ProvenanceNode>(NODES[0]);

  return (
    <section className="my-24 py-20 px-4 rounded-3xl border border-emerald-500/20 bg-zinc-950 text-white relative overflow-hidden shadow-2xl">
      {/* Ambient background glows */}
      <div className="absolute -top-32 left-10 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-32 right-10 w-[450px] h-[450px] bg-teal-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 border border-emerald-500/30 bg-emerald-950/50 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>🌱 SEED-TO-DOOR PROVENANCE & CRAFTSMANSHIP TREE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Radical transparency from <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">raw soil to your doorstep</span>.
          </h2>
          <p className="text-base text-zinc-400 mt-4 leading-relaxed font-sans">
            Every product we make has a story you can verify. Trace the materials, certifications, and carbon-neutral supply pipeline behind every Shopfront piece.
          </p>
        </div>

        {/* Interactive Tree Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 5 Provenance Stages */}
          <div className="lg:col-span-6 space-y-3.5">
            {NODES.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? 'bg-zinc-900 border-emerald-500 shadow-xl shadow-emerald-950/50 ring-1 ring-emerald-500/40 -translate-y-0.5'
                      : 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          {node.step}
                        </span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-xs text-zinc-400 font-mono">
                          📍 {node.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-sans">
                        {node.title}
                      </h3>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-mono font-bold transition-all shrink-0 ${
                        isSelected
                          ? 'bg-emerald-600 border-white text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-zinc-850 flex items-center justify-between text-xs">
                    <span className="text-emerald-400/90 font-mono text-[11px]">
                      ✔ {node.certification}
                    </span>
                    <span className="font-mono text-emerald-300 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                      {node.co2Offset}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Node Card */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="rounded-3xl border border-emerald-500/30 bg-zinc-900/90 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-black">
                <img
                  src={selectedNode.image}
                  alt={selectedNode.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold px-3 py-1 rounded-full bg-black/70 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                    {selectedNode.step} VERIFIED DOSSIER
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-600 text-white shadow-md">
                    {selectedNode.location}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 font-mono block mb-0.5">Ecological Impact Metric</span>
                  <p className="text-sm font-bold text-white font-mono">{selectedNode.co2Offset}</p>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 font-sans">{selectedNode.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">{selectedNode.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-800">
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-400 tracking-wider">Verified Material Standards</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.materials.map((m, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 font-mono">
                        🌿 {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Discover zero-compromise goods</span>
                  <a
                    href="#shop"
                    className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition-all hover:scale-105 shadow-md shadow-emerald-600/30"
                  >
                    Shop Verified Collection →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
