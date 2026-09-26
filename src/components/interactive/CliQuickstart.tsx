import React, { useState } from 'react';

const PACKAGE_MANAGERS = [
  { name: 'npm', cmd: 'npm create @nexacloud/edge-app@latest' },
  { name: 'pnpm', cmd: 'pnpm create @nexacloud/edge-app' },
  { name: 'bun', cmd: 'bun create @nexacloud/edge-app' },
  { name: 'curl', cmd: 'curl -fsSL https://nexacloud.dev/install.sh | bash' },
];

export const CliQuickstart: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState(PACKAGE_MANAGERS[0]);
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard?.writeText(selectedPkg.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl border border-indigo-500/30 bg-zinc-950 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400">
              DEVELOPER QUICKSTART · CLI V4.2
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Bootstrap an edge microservice in seconds.
          </h3>
        </div>

        {/* Package Manager Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start md:self-auto">
          {PACKAGE_MANAGERS.map(pkg => (
            <button
              key={pkg.name}
              onClick={() => setSelectedPkg(pkg)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                selectedPkg.name === pkg.name
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Code Box with Copy Button */}
      <div className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-black/90 border border-zinc-800 font-mono text-xs sm:text-sm">
        <div className="flex items-center gap-3 overflow-x-auto py-1">
          <span className="text-indigo-400 font-bold select-none">$</span>
          <span className="text-zinc-200 whitespace-nowrap">{selectedPkg.cmd}</span>
        </div>

        <button
          onClick={copyCommand}
          className="shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-all flex items-center gap-1.5 border border-zinc-700 active:scale-95"
        >
          {copied ? (
            <>
              <span className="text-emerald-400">✔</span>
              <span className="text-emerald-300">Copied</span>
            </>
          ) : (
            <>
              <span>📋</span>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-zinc-500 font-mono gap-3">
        <div className="flex items-center gap-4">
          <span>✔ Zero dependencies</span>
          <span>✔ Automated TypeScript & Rust types</span>
          <span>✔ Auto git init & remote link</span>
        </div>
        <a href="/docs" className="text-indigo-400 hover:text-indigo-300 hover:underline">
          Read CLI Documentation →
        </a>
      </div>
    </div>
  );
};
