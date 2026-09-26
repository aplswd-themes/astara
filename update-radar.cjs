const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

const regex = /const LiveRadar = \(\) => \([\s\S]*?<\/section>\n\);/;

const replacement = `const LiveRadar = () => (
  <section className="py-32 bg-white relative z-10 border-t border-slate-200 overflow-hidden" id="radar">
    <div className="max-w-7xl mx-auto px-6">
      
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Live Global Tracking</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Fleet Command Center</h2>
        <p className="text-slate-500 mt-4 text-lg">Our proprietary logistics algorithm tracks over 400 private and commercial aircraft in real-time across major oceanic and continental corridors.</p>
      </div>
      
      {/* High-End Dark Radar UI */}
      <div className="relative w-full h-[500px] sm:h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.3)] overflow-hidden flex items-center justify-center">
        
        {/* Background Technical Grid */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Radar Concentric Rings */}
        <div className="absolute w-[800px] h-[800px] rounded-full border border-slate-700/50"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-slate-700/80"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-sky-900"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-sky-500/30 border-dashed"></div>
        <div className="absolute w-[50px] h-[50px] rounded-full bg-sky-500/20 animate-pulse"></div>
        
        {/* Radar Crosshairs */}
        <div className="absolute w-[120%] h-[1px] bg-slate-800/80"></div>
        <div className="absolute h-[120%] w-[1px] bg-slate-800/80"></div>

        {/* Sweeping Radar Cone */}
        <div className="absolute w-[800px] h-[800px] rounded-full animate-[spin_4s_linear_infinite] origin-center opacity-70 pointer-events-none" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(14,165,233,0.1) 90%, rgba(14,165,233,0.5) 100%)' }}>
           {/* Leading edge line */}
           <div className="absolute top-0 left-1/2 w-[2px] h-[400px] bg-sky-400"></div>
        </div>

        {/* Flight Path Arcs (Static) */}
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
           <path d="M200 500 Q 500 100, 800 400" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
           <path d="M100 200 Q 400 300, 700 100" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 6" />
        </svg>

        {/* Moving Planes on Radar (Blips) */}
        {/* Flight 1 */}
        <div className="absolute top-[30%] left-[20%] animate-[flyRight_25s_linear_infinite] group cursor-crosshair">
          {/* Radar Blip */}
          <div className="w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_20px_rgba(56,189,248,1)] relative z-10 group-hover:scale-150 transition-transform"></div>
          {/* Plane Icon on Hover */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity rotate-45 z-20" viewBox="0 0 24 24" fill="currentColor"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>
          {/* Telemetry Tooltip */}
          <div className="absolute top-6 left-6 bg-slate-800/90 backdrop-blur border border-slate-600 text-sky-400 text-[10px] font-mono p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 shadow-xl">
            <span className="text-white font-bold block mb-1">ID: G650-ALPHA</span>
            ALT: 41,000 FT<br/>SPD: MACH 0.92<br/>DEST: DXB
          </div>
        </div>

        {/* Flight 2 */}
        <div className="absolute top-[60%] left-[70%] animate-[flyLeft_35s_linear_infinite] group cursor-crosshair">
          <div className="w-3 h-3 bg-red-400 rounded-full shadow-[0_0_15px_rgba(248,113,113,1)] relative z-10 group-hover:scale-150 transition-transform"></div>
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 z-20" viewBox="0 0 24 24" fill="currentColor"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>
          <div className="absolute top-4 left-4 bg-slate-800/90 backdrop-blur border border-slate-600 text-red-400 text-[10px] font-mono p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 shadow-xl">
            <span className="text-white font-bold block mb-1">ID: B750-BETA</span>
            ALT: 38,000 FT<br/>SPD: MACH 0.85<br/>DEST: LHR
          </div>
        </div>

        {/* Flight 3 */}
        <div className="absolute top-[20%] right-[30%] animate-[flyRight_40s_linear_infinite_reverse] group cursor-crosshair">
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,1)] relative z-10 group-hover:scale-150 transition-transform"></div>
          <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur border border-slate-600 text-emerald-400 text-[10px] font-mono p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 shadow-xl">
            <span className="text-white font-bold block mb-1">ID: C350-GAMMA</span>
            DESCENDING<br/>ALT: 12,000 FT
          </div>
        </div>

        {/* UI Overlay Panel (Left) */}
        <div className="absolute top-6 left-6 w-56 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl p-5 hidden sm:block shadow-2xl">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-800 pb-3 flex items-center justify-between">
            Active Corridors
            <span className="text-sky-500 font-mono text-[8px] animate-pulse">LIVE</span>
          </h3>
          <div className="space-y-4">
             <div className="flex justify-between items-center group cursor-default">
               <span className="text-[11px] text-slate-300 font-mono group-hover:text-white transition-colors">JFK <span className="text-sky-500">&rarr;</span> LHR</span>
               <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_5px_#0ea5e9]"></span>
             </div>
             <div className="flex justify-between items-center group cursor-default">
               <span className="text-[11px] text-slate-300 font-mono group-hover:text-white transition-colors">HND <span className="text-emerald-500">&rarr;</span> SIN</span>
               <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
             </div>
             <div className="flex justify-between items-center group cursor-default">
               <span className="text-[11px] text-slate-300 font-mono group-hover:text-white transition-colors">DXB <span className="text-red-500">&rarr;</span> CDG</span>
               <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_#ef4444]"></span>
             </div>
          </div>
        </div>

        {/* Live Data Stream (Bottom Right) */}
        <div className="absolute bottom-6 right-6 flex items-end flex-col gap-1.5 opacity-60">
           <div className="text-[9px] font-mono text-sky-400 tracking-wider">SYS.ONLINE ... <span className="text-emerald-400">OK</span></div>
           <div className="text-[9px] font-mono text-sky-400 tracking-wider">SAT.LINK ... <span className="text-emerald-400">STABLE</span></div>
           <div className="text-[9px] font-mono text-sky-400 tracking-wider">TRK.NODES ... 402/402</div>
        </div>
      </div>
    </div>
  </section>
);`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Radar redesigned successfully");
