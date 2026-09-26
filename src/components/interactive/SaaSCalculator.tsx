import { useState } from 'react';

export function SaaSCalculator() {
  const [activeUsers, setActiveUsers] = useState<number>(250000); // 250k MAU
  const [reqPerUser, setReqPerUser] = useState<number>(45);

  const monthlyRequests = (activeUsers * reqPerUser);
  // Traditional legacy cloud pricing approx $0.00045 per dynamic request + container overhead
  const legacyMonthly = Math.round((monthlyRequests * 0.00028) + 850);
  // NexaCloud edge isolate pricing: ~72% cheaper
  const nexaMonthly = Math.round((monthlyRequests * 0.000075) + 99);
  const annualSavings = (legacyMonthly - nexaMonthly) * 12;
  const latencyReduction = '68%';

  const formatNumber = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
    return n.toString();
  };

  return (
    <div className="w-full my-16 p-8 md:p-12 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-indigo-950/40 shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30">
          Interactive ROI Simulator
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
          Calculate Your Edge Infrastructure Savings
        </h3>
        <p className="text-sm text-zinc-400 mt-2">
          Compare real-world legacy cloud container costs against NexaCloud serverless isolates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        {/* Sliders Area */}
        <div className="lg:col-span-6 space-y-6 bg-zinc-950/60 p-6 rounded-2xl border border-zinc-800">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                Monthly Active Users (MAU)
              </label>
              <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded-lg border border-indigo-500/40">
                {formatNumber(activeUsers)} Users
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="2000000"
              step="10000"
              value={activeUsers}
              onChange={(e) => setActiveUsers(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
              <span>10K</span>
              <span>1M</span>
              <span>2M+</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                API Calls / Page Views Per User
              </label>
              <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded-lg border border-indigo-500/40">
                {reqPerUser} requests/mo
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={reqPerUser}
              onChange={(e) => setReqPerUser(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
              <span>10 calls</span>
              <span>100 calls</span>
              <span>200 calls</span>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-850 flex items-center justify-between text-xs text-zinc-400">
            <span>Total Monthly Operations:</span>
            <span className="font-mono font-bold text-white text-sm">
              {(monthlyRequests / 1000000).toFixed(1)}M requests
            </span>
          </div>
        </div>

        {/* Dynamic Comparison Dashboard */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4 shadow-xl">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Legacy Kubernetes / Cloud VPS:</span>
              <span className="font-mono text-zinc-400 line-through">${legacyMonthly.toLocaleString()}/mo</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-sm font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                NexaCloud Edge Isolate Bill:
              </span>
              <span className="text-2xl font-black text-emerald-400 font-mono">
                ${nexaMonthly.toLocaleString()}
                <span className="text-xs font-normal text-zinc-400">/mo</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center">
                <p className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">
                  Annual Net Savings
                </p>
                <p className="text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-0.5">
                  +${annualSavings.toLocaleString()}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-center">
                <p className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider">
                  Global P99 Latency
                </p>
                <p className="text-xl sm:text-2xl font-black text-indigo-300 font-mono mt-0.5">
                  -{latencyReduction}
                </p>
              </div>
            </div>

            <a
              href="#pricing"
              className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg shadow-indigo-600/30"
            >
              Start Free Trial With Your Allocation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
