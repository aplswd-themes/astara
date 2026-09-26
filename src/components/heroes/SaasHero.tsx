import React, { useState, useEffect } from 'react';
import { MotionHeroBackground } from '../interactive/MotionHeroBackground';

interface PopInfo {
  city: string;
  region: string;
  latency: string;
  status: string;
  traffic: string;
}

const POPS: PopInfo[] = [
  { city: 'Frankfurt', region: 'EU-CENTRAL', latency: '0.78ms', status: 'Optimal', traffic: '1.4M req/s' },
  { city: 'Virginia', region: 'US-EAST', latency: '0.65ms', status: 'Optimal', traffic: '2.8M req/s' },
  { city: 'Tokyo', region: 'AP-NORTHEAST', latency: '1.02ms', status: 'Optimal', traffic: '980k req/s' },
  { city: 'Singapore', region: 'AP-SOUTHEAST', latency: '1.14ms', status: 'Optimal', traffic: '820k req/s' },
  { city: 'São Paulo', region: 'SA-EAST', latency: '1.28ms', status: 'Optimal', traffic: '410k req/s' },
];

export const SaasHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'telemetry' | 'security'>('terminal');
  const [selectedPop, setSelectedPop] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '▲ nexacloud deploy --target=edge --region=global',
    '✓ Bundle compiled in 142ms [V8 Isolate Ready]',
    '✓ Deployed to 312 edge PoPs simultaneously',
    '🚀 Cold start latency: 0.74ms | TLS 1.3 handshake: 0.12ms',
    '● Status: Live in production at https://edge.nexacloud.io',
  ]);
  const [isDeploying, setIsDeploying] = useState(false);

  const runCommand = (cmd: string) => {
    setIsDeploying(true);
    if (cmd === 'deploy') {
      setTerminalOutput([
        '▲ nexacloud deploy --prod --atomic',
        '⏳ Building isolated worker container...',
        '✓ Optimized assets: 24.1 KB minified (gzip: 7.2 KB)',
        '✓ Propagating DNS records to 312 PoPs across 6 continents...',
        '🚀 Complete! Atomic cutover finished in 0.82 seconds. Zero downtime.',
      ]);
    } else if (cmd === 'rollback') {
      setTerminalOutput([
        '▲ nexacloud rollback --commit 9a4f2e',
        '⚡ Pinning immutable edge snapshot #149...',
        '✓ Instant pointer redirection executed across all regions',
        '🚀 Rolled back to stable build in 8ms flat. Audit log recorded.',
      ]);
    } else if (cmd === 'metrics') {
      setTerminalOutput([
        '▲ nexacloud telemetry --live --stream',
        '● Ingress traffic: 1,248,900 req/sec | P99 latency: 1.1ms',
        '● CPU utilization: 4.2% | Memory allocated: 18 MB / 128 MB',
        '● DDoS mitigated: 0 threats detected | TLS Certificate: Valid 89d',
      ]);
    }
    setTimeout(() => setIsDeploying(false), 600);
  };

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex flex-col justify-center bg-white text-zinc-900 pt-20 pb-16 lg:py-24 border-b border-zinc-200">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Top Centered Status Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-medium border border-zinc-200 bg-zinc-50 text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>System Status: Operational</span>
            <span className="text-zinc-300">|</span>
            <span className="text-zinc-500">99.99% Uptime</span>
          </div>
        </div>

        {/* Centered High-Impact Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Reliable infrastructure for growing teams.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            NexaCloud provides managed deployment environments that scale with your application. Includes continuous integration, automated backups, and integrated monitoring.
          </p>

          {/* Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg text-sm text-white transition-all bg-zinc-900 hover:bg-zinc-800"
            >
              <span>Get Started</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg text-sm transition-all border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
            >
              <span>Explore Features</span>
            </a>
          </div>
        </div>

        {/* Clean Dashboard/Console Component */}
        <div className="w-full rounded-xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 overflow-hidden mb-12">
          {/* Console Top Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-zinc-100 bg-zinc-50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
              <span className="ml-3 font-mono text-xs text-zinc-500 hidden sm:inline-block">
                production-cluster // us-east
              </span>
            </div>

            {/* Console Navigation Tabs */}
            <div className="flex items-center gap-1 bg-zinc-100 p-0.5 rounded-lg border border-zinc-200">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'terminal'
                    ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200'
                    : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                Logs
              </button>
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'telemetry'
                    ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200'
                    : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                Regions
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'security'
                    ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200'
                    : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                Security
              </button>
            </div>
          </div>

          {/* Console Content Window */}
          <div className="p-6 bg-zinc-950 text-zinc-300">
            {activeTab === 'terminal' && (
              <div>
                {/* Runnable Command Trigger Buttons */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-zinc-500 mr-2">Quick Run:</span>
                  <button
                    onClick={() => runCommand('deploy')}
                    disabled={isDeploying}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs font-medium border border-zinc-800 transition-all hover:border-zinc-500"
                  >
                    deploy --prod
                  </button>
                  <button
                    onClick={() => runCommand('rollback')}
                    disabled={isDeploying}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-amber-300 font-mono text-xs font-semibold border border-zinc-700 transition-all hover:border-amber-500"
                  >
                    rollback --atomic
                  </button>
                  <button
                    onClick={() => runCommand('metrics')}
                    disabled={isDeploying}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-emerald-300 font-mono text-xs font-semibold border border-zinc-700 transition-all hover:border-emerald-500"
                  >
                    telemetry --live
                  </button>
                </div>

                {/* Simulated CLI Terminal Screen */}
                <div className="rounded-xl bg-black/90 p-5 font-mono text-xs sm:text-sm text-zinc-300 border border-zinc-850 space-y-2 shadow-inner">
                  {terminalOutput.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 select-none">&gt;</span>
                      <span className={idx === 0 ? 'text-white font-bold' : idx === terminalOutput.length - 1 ? 'text-emerald-400 font-bold' : 'text-zinc-400'}>
                        {line}
                      </span>
                    </div>
                  ))}
                  {isDeploying && (
                    <div className="text-indigo-400 animate-pulse flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                      <span>Executing across distributed clusters...</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'telemetry' && (
              <div>
                <p className="text-xs text-zinc-400 mb-4 font-medium">
                  Select an edge Point of Presence to view real-time latency and ingress capacity:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {POPS.map((pop, idx) => (
                    <button
                      key={pop.city}
                      onClick={() => setSelectedPop(idx)}
                      className={`p-4 rounded-xl text-left transition-all border ${
                        selectedPop === idx
                          ? 'border-indigo-500 bg-indigo-950/40 shadow-lg shadow-indigo-500/20'
                          : 'border-zinc-800 bg-zinc-950/40 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">{pop.city}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <div className="text-2xl font-mono font-black text-indigo-400">{pop.latency}</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">{pop.traffic}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="text-emerald-400 text-lg font-bold mb-1">SOC 2 Type II</div>
                  <p className="text-xs text-zinc-400">Certified infrastructure with continuous automated compliance audits.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="text-indigo-400 text-lg font-bold mb-1">mTLS 1.3 Strict</div>
                  <p className="text-xs text-zinc-400">Every packet encrypted in transit between edge worker isolates.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="text-purple-400 text-lg font-bold mb-1">DDoS Shield</div>
                  <p className="text-xs text-zinc-400">120 Tbps mitigation capacity absorbing Layer 3, 4, and 7 vector attacks.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Specs Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-850">
          <div className="text-center sm:text-left">
            <div className="text-2xl font-mono font-black text-white">&lt; 0.8ms</div>
            <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Cold-Start Boot</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl font-mono font-black text-emerald-400">312</div>
            <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Global Edge PoPs</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl font-mono font-black text-indigo-400">99.999%</div>
            <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">SLA Guarantee</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl font-mono font-black text-purple-400">1.2B</div>
            <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Requests Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};
