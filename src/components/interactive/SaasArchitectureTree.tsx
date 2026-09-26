import React, { useState, useEffect } from 'react';

interface TreeNode {
  id: string;
  name: string;
  category: string;
  status: 'active' | 'synced' | 'standby';
  latency: string;
  detail: string;
  specs: string[];
  icon: string;
}

const NODES: TreeNode[] = [
  {
    id: 'git-origin',
    name: 'Git Origin & Webhooks',
    category: 'Source Control',
    status: 'synced',
    latency: '12ms',
    detail: 'Triggers on git push to main with automatic branch previews, cryptographic commit verification, and monorepo path filters.',
    specs: ['GitHub / GitLab / Bitbucket', 'Instant SHA verification', 'Parallel matrix triggers'],
    icon: '🐙',
  },
  {
    id: 'wasm-compiler',
    name: 'Isolates & WASM Engine',
    category: 'Edge Compilation',
    status: 'active',
    latency: '0.4ms',
    detail: 'Ultra-fast V8 Isolates packaging with Rust and TypeScript tree-shaking. Zero node_modules overhead deployed directly to edge memory.',
    specs: ['Sub-millisecond cold boot', 'Rust & WASM bytecode', 'Memory bounded (128MB)'],
    icon: '⚡',
  },
  {
    id: 'zero-trust',
    name: 'Zero-Trust Shield & RBAC',
    category: 'Security Mesh',
    status: 'synced',
    latency: '1.2ms',
    detail: 'Hardware-level mTLS encryption, edge DDoS scrubbers, SOC 2 Type II compliance policies, and automated secret injection.',
    specs: ['TLS 1.3 Termination', 'Automated Let\'s Encrypt SSL', 'Dynamic token rotation'],
    icon: '🛡️',
  },
  {
    id: 'global-pops',
    name: 'Anycast Edge PoP Network',
    category: 'Global Mesh',
    status: 'active',
    latency: '8ms avg',
    detail: '312 distributed points-of-presence globally connected over private fiber backbones with intelligent BGP geolocation routing.',
    specs: ['Tokyo (NRT) · 4ms', 'Frankfurt (FRA) · 7ms', 'San Jose (SJC) · 2ms', 'London (LHR) · 5ms'],
    icon: '🌐',
  },
  {
    id: 'atomic-rollback',
    name: 'Atomic Rollback Guard',
    category: 'Delivery & Guardrails',
    status: 'standby',
    latency: '&lt; 1s',
    detail: 'Zero-downtime pointer swapping with automatic 5xx error canary detection and automated instantaneous rollback in 800ms.',
    specs: ['Canary traffic split (1-99%)', 'Automatic SLO circuit breaker', 'Instant DNS pointer shift'],
    icon: '🔄',
  },
];

export const SaasArchitectureTree: React.FC = () => {
  const [activeNode, setActiveNode] = useState<TreeNode>(NODES[1]);
  const [isDeploying, setIsDeploying] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const triggerDeploySimulation = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setActiveStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < NODES.length) {
        setActiveStep(step);
        setActiveNode(NODES[step]);
      } else {
        clearInterval(interval);
        setIsDeploying(false);
      }
    }, 900);
  };

  return (
    <div className="w-full my-32 py-24 rounded-[3rem] bg-white border border-zinc-200/80 shadow-[0_40px_100px_-20px_rgba(99,102,241,0.1)] relative overflow-hidden group/saas">
      {/* Ambient glowing mesh background */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none group-hover/saas:bg-indigo-500/15 transition-colors duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest mb-4 border border-indigo-200 bg-indigo-50 text-indigo-600">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <span>Global Architecture</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 font-sans">
              Deployment Pipeline
            </h2>
            <p className="text-lg text-zinc-500 mt-4 max-w-xl font-medium">
              Inspect how code propagates through our global infrastructure automatically upon commit.
            </p>
          </div>

          <button
            onClick={triggerDeploySimulation}
            disabled={isDeploying}
            className={`px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-3 relative overflow-hidden group/btn ${
              isDeploying
                ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed border border-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-0.5'
            }`}
          >
            {isDeploying && <div className="absolute inset-0 bg-zinc-900/5 animate-pulse"></div>}
            <span className="relative z-10">{isDeploying ? `Deploying Step ${activeStep + 1}/5...` : 'Simulate Pipeline'}</span>
            {!isDeploying && <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
          </button>
        </div>

        {/* Tree Pipeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          {/* Left: Tree Flow Chart with Branch Connectors */}
          <div className="lg:col-span-6 space-y-4 relative">
            {/* Visual Connecting Line Behind Nodes */}
            <div className="absolute left-[2.25rem] top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-zinc-200 hidden sm:block"></div>

            {NODES.map((node, index) => {
              const isSelected = activeNode.id === node.id;
              const isCurrentSimStep = isDeploying && activeStep === index;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`group relative p-6 rounded-[1.5rem] border transition-all duration-500 cursor-pointer sm:ml-[4.5rem] overflow-hidden ${
                    isSelected
                      ? 'bg-white border-indigo-200 shadow-[0_20px_40px_-10px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/10'
                      : 'bg-zinc-50/50 border-zinc-200/80 hover:bg-white hover:border-zinc-300 hover:shadow-lg'
                  }`}
                >
                  {/* Subtle active highlight inside card */}
                  {isSelected && <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-transparent pointer-events-none"></div>}

                  {/* Circular Node Anchor on Connector Line */}
                  <div
                    className={`absolute -left-[4.5rem] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border hidden sm:flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                      isSelected || isCurrentSimStep
                        ? 'bg-indigo-500 border-indigo-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] scale-110'
                        : 'bg-white border-zinc-300 text-zinc-400'
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div className="flex items-center justify-between gap-4 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className={`text-2xl p-3 rounded-xl border transition-colors ${isSelected ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-zinc-100 border-zinc-200 text-zinc-500'}`}>
                        {node.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] uppercase font-bold tracking-widest ${isSelected ? 'text-indigo-600' : 'text-zinc-500'}`}>
                            {node.category}
                          </span>
                          {isCurrentSimStep && (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 animate-pulse">
                              Processing
                            </span>
                          )}
                        </div>
                        <h4 className={`text-lg font-bold transition-colors ${isSelected ? 'text-zinc-900' : 'text-zinc-700 group-hover:text-zinc-900'}`}>
                          {node.name}
                        </h4>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border block ${isSelected ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 'bg-zinc-100 text-zinc-500 border-zinc-200'}`}>
                        {node.latency}
                      </span>
                      <span className="text-[9px] font-bold text-zinc-400 mt-1.5 block uppercase tracking-widest">
                        {node.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Live Node Telemetry HUD Inspector */}
          <div className="lg:col-span-6 lg:pl-8 sticky top-24">
            <div className="rounded-[2rem] border border-zinc-200 bg-white/80 backdrop-blur-3xl overflow-hidden shadow-2xl shadow-indigo-900/5 relative">
              {/* Top Bar MacOS style */}
              <div className="flex items-center gap-2 px-6 py-4 bg-zinc-50/80 border-b border-zinc-200">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
                  <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
                  <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
                </div>
                <div className="mx-auto flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  SECURE_TELEMETRY_LINK
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-[0_10px_20px_-10px_rgba(99,102,241,0.2)]">
                      {activeNode.icon}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-zinc-400 block mb-1">
                        Component Details
                      </span>
                      <h3 className="text-2xl font-black text-zinc-900 tracking-tight">
                        {activeNode.name}
                      </h3>
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></span>
                </div>

                {/* Node Detailed Description */}
                <div className="py-8 border-b border-zinc-100">
                  <p className="text-[15px] text-zinc-600 leading-relaxed font-medium">
                    {activeNode.detail}
                  </p>
                </div>

                {/* Node Technical Specs */}
                <div className="py-8 space-y-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                    Key Capabilities
                  </span>
                  <div className="space-y-3">
                    {activeNode.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-zinc-700 font-medium bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-200">
                        <span className="text-indigo-500">✦</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Terminal Output for Node - Kept Dark for Authenticity */}
                <div className="p-5 rounded-xl bg-[#09090b] font-mono text-xs text-zinc-400 border border-zinc-800 shadow-2xl mt-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 border-b border-zinc-800 pb-2 mb-3 tracking-widest">
                    <span>RUNTIME_LOGS</span>
                    <span className="text-emerald-500 font-bold">HEALTHY</span>
                  </div>
                  <div className="space-y-1.5">
                    <p><span className="text-zinc-500">trace_id:</span> <span className="text-indigo-400">{activeNode.id}-89f2a0</span></p>
                    <p><span className="text-zinc-500">latency_p99:</span> <span className="text-emerald-400">{activeNode.latency}</span></p>
                    <p><span className="text-zinc-500">process_status:</span> <span className="text-emerald-400">OK</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
