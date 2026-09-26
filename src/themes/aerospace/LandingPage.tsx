import React from 'react';

const AviationBackground = () => (
  <div className="fixed inset-0 z-0 bg-slate-50 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-sky-100/50 via-slate-50 to-white"></div>
    <div className="absolute top-[10%] left-0 w-full h-[200px] opacity-30 animate-[slideRight_60s_linear_infinite]">
      <div className="absolute top-10 left-[10%] w-32 h-10 bg-white rounded-full blur-xl"></div>
      <div className="absolute top-20 left-[40%] w-48 h-12 bg-white rounded-full blur-xl"></div>
      <div className="absolute top-5 left-[70%] w-40 h-10 bg-white rounded-full blur-xl"></div>
    </div>
    <div className="absolute top-[40%] left-0 w-full h-[200px] opacity-20 animate-[slideRight_80s_linear_infinite_reverse]">
      <div className="absolute top-10 left-[20%] w-40 h-12 bg-white rounded-full blur-xl"></div>
      <div className="absolute top-2 left-[60%] w-56 h-16 bg-white rounded-full blur-xl"></div>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" /></svg>
        </div>
        <span className="text-slate-900 font-bold tracking-tight">Aero<span className="text-sky-600">Dynamics</span></span>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        <a href="#about" className="hover:text-sky-600 transition-colors">Mission</a>
        <a href="#fleet" className="hover:text-sky-600 transition-colors">Fleet Specs</a>
        <a href="#radar" className="hover:text-sky-600 transition-colors">Live Radar</a>
        <a href="#sustainability" className="hover:text-sky-600 transition-colors">Green Aviation</a>
      </div>
      <button className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
        Request Quote
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
          <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest">Global Flight Network</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
          Beyond <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Boundaries.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-lg">
          Precision aerospace engineering, global logistics, and ultra-luxury private charters. Connecting the world's primary hubs at supersonic speeds.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-4 rounded-full bg-sky-600 text-white font-bold tracking-wide hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-500/20 transition-all">
            Explore Routes
          </button>
          <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold tracking-wide hover:border-slate-300 hover:bg-slate-50 hover:shadow-md transition-all">
            Request a Charter
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] flex items-center justify-center">
        <div className="absolute w-[350px] h-[350px] rounded-full border-[1px] border-sky-200 bg-sky-50/30 shadow-[inset_-20px_-20px_40px_rgba(14,165,233,0.1)] flex items-center justify-center">
           <div className="absolute w-[350px] h-[100px] border border-sky-200/50 rounded-[100%]"></div>
           <div className="absolute w-[100px] h-[350px] border border-sky-200/50 rounded-[100%]"></div>
        </div>
        <div className="absolute w-[450px] h-[450px] rounded-full border border-sky-200/50 border-dashed rotate-12 animate-[spin_20s_linear_infinite]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-sky-500 rotate-90 drop-shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>
          </div>
        </div>
        <div className="absolute w-[550px] h-[300px] rounded-[100%] border-2 border-sky-300/30 -rotate-45 animate-[spin_25s_linear_infinite_reverse]">
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-blue-600 drop-shadow-md">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>
          </div>
        </div>
        <div className="absolute w-[250px] h-[450px] rounded-[100%] border border-blue-200/60 rotate-45 animate-[spin_15s_linear_infinite]">
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-sky-400 rotate-[270deg] drop-shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>
          </div>
        </div>
        <div className="absolute top-[30%] left-[20%] w-16 h-4 bg-white/80 rounded-full blur-[1px] animate-[flyRight_15s_linear_infinite]"></div>
        <div className="absolute top-[60%] right-[20%] w-20 h-5 bg-white/80 rounded-full blur-[2px] animate-[flyLeft_20s_linear_infinite]"></div>
        <div className="absolute top-[40%] right-[35%] w-3 h-3 bg-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,1)]"></div>
        <div className="absolute top-[60%] left-[30%] w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
        <div className="absolute top-[25%] left-[45%] w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 600 600">
          <path d="M180,360 L270,150 L390,240" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3"/>
        </svg>
      </div>
    </div>
  </section>
);

const PartnerMarquee = () => (
  <section className="py-8 bg-sky-900 border-y border-sky-800 relative z-10 overflow-hidden flex items-center">
    <div className="absolute inset-0 w-[200vw] animate-[slideLeft_20s_linear_infinite] flex items-center opacity-70">
      <div className="flex w-[100vw] justify-around shrink-0 items-center text-sky-200/50 font-black text-2xl tracking-widest uppercase">
        <span>FAA Certified</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
        <span>EASA Standard</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
        <span>Boeing Partner</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
        <span>Airbus Tier 1</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
        <span>ISO 9001</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
      </div>
      <div className="flex w-[100vw] justify-around shrink-0 items-center text-sky-200/50 font-black text-2xl tracking-widest uppercase">
        <span>FAA Certified</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
        <span>EASA Standard</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
        <span>Boeing Partner</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
        <span>Airbus Tier 1</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
        <span>ISO 9001</span><span><span className="w-1.5 h-1.5 bg-sky-400 rounded-full inline-block mb-1 mx-4"></span></span>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-16 lg:py-24 bg-slate-900 relative z-10 text-white border-y border-slate-800 overflow-hidden">
    {/* Abstract Technical Background */}
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <div className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-sky-900/40 to-transparent rounded-full blur-3xl -top-[400px] -left-[200px]"></div>
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-blue-900/40 to-transparent rounded-full blur-3xl -bottom-[300px] -right-[100px]"></div>
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-slate-700/60">
        {[
          { label: 'Total Flight Hours', value: '1.2M+', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
          { label: 'Global Hubs', value: '42', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
          { label: 'Safety Record', value: '100%', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
          { label: 'Years Active', value: '15', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' }
        ].map((s,i) => (
          <div key={i} className="flex flex-col items-center text-center px-4 py-6 group hover:-translate-y-2 transition-transform duration-500 cursor-default relative">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/0 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-xl pointer-events-none"></div>
            
            {/* Icon Container */}
            <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:border-sky-400/50 group-hover:text-sky-300 transition-all duration-500 shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={s.icon}/></svg>
            </div>
            
            {/* Stat Value */}
            <span className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-3 drop-shadow-lg group-hover:from-white group-hover:to-sky-200 transition-all duration-300">{s.value}</span>
            
            {/* Stat Label */}
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400/80 group-hover:text-sky-400 transition-colors">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LiveRadar = () => (
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
);

const FleetSlider = () => {
  const jets = [
    { name: 'Gulfstream G650', type: 'Ultra Long Range', range: '7,000 nm', speed: 'Mach 0.925', cap: '19 Pax' },
    { name: 'Bombardier Global 7500', type: 'Ultra Long Range', range: '7,700 nm', speed: 'Mach 0.925', cap: '19 Pax' },
    { name: 'Citation Longitude', type: 'Super Midsize', range: '3,500 nm', speed: 'Mach 0.84', cap: '12 Pax' },
    { name: 'Embraer Praetor 600', type: 'Super Midsize', range: '4,018 nm', speed: 'Mach 0.83', cap: '12 Pax' },
    { name: 'Airbus ACJ319neo', type: 'VIP Airliner', range: '6,750 nm', speed: 'Mach 0.82', cap: '25 Pax' }
  ];

  return (
    <section className="py-32 bg-slate-900 relative z-10 border-t border-slate-800 overflow-hidden" id="fleet">
      {/* Small Fleet Flying in Background (Like Hero Section) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
        
        {/* Plane 1: Flying Right */}
        <div className="absolute top-[15%] -left-[10%] animate-[flyRight_30s_linear_infinite]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-sky-400 rotate-90 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">
            <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
          </svg>
          <div className="absolute top-1/2 right-[120%] w-32 h-[1px] bg-gradient-to-r from-transparent to-sky-400/50"></div>
        </div>
        
        {/* Plane 2: Flying Left */}
        <div className="absolute top-[75%] -right-[10%] animate-[flyLeft_40s_linear_infinite_5s]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 -rotate-90 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
            <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
          </svg>
          <div className="absolute top-1/2 left-[120%] w-48 h-[1px] bg-gradient-to-l from-transparent to-blue-500/50"></div>
        </div>
        
        {/* Plane 3: Angled Right */}
        <div className="absolute top-[40%] -left-[10%] animate-[flyRight_50s_linear_infinite_15s]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-400 rotate-[75deg] drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]">
            <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
          </svg>
          <div className="absolute top-1/2 right-[120%] w-24 h-[1px] bg-gradient-to-r from-transparent to-indigo-400/50 rotate-[-15deg] origin-right"></div>
        </div>
        
        {/* Plane 4: Angled Right */}
        <div className="absolute top-[60%] -left-[10%] animate-[flyRight_35s_linear_infinite_2s]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-sky-300 rotate-[105deg] drop-shadow-[0_0_8px_rgba(125,211,252,0.8)]">
            <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
          </svg>
        </div>

        {/* Plane 5: Fast High Altitude */}
        <div className="absolute top-[5%] -right-[10%] animate-[flyLeft_25s_linear_infinite_12s]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 -rotate-90">
            <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
          Our Hangar
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">Interactive Fleet Specifications</h2>
        <p className="text-slate-400 max-w-xl leading-relaxed">Swipe horizontally to explore our curated selection of aircraft. Each vessel represents the absolute pinnacle of aerodynamic engineering and luxury.</p>
      </div>
      
      {/* Interactive Horizontal CSS Slider */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory hide-scrollbar">
          {jets.map((jet, i) => (
            <div key={i} className="w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 hover:-translate-y-2 transition-transform duration-500 shadow-2xl cursor-pointer group border border-slate-700/50 hover:border-sky-500/30">
              
              {/* Visual Plane Blueprint Representation */}
              <div className="h-48 lg:h-56 rounded-xl bg-slate-900 border border-slate-700 mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-sky-500/50 transition-colors shadow-inner">
                 {/* Grid Background */}
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 
                 {/* Blueprint SVG Side Profile */}
                 <svg viewBox="0 0 400 150" className="w-full h-auto px-4 text-sky-400/80 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)] group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-700 z-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <path d="M 40 80 Q 80 55, 180 55 L 300 55 Q 360 55, 380 70 Q 390 80, 360 85 L 180 90 Q 60 90, 40 80 Z" />
                   <line x1="10" y1="80" x2="40" y2="80" strokeDasharray="2 2" strokeWidth="1" opacity="0.5"/>
                   <path d="M 80 67 L 100 59 L 115 59 L 105 69 Z" fill="currentColor" opacity="0.2" />
                   <path d="M 320 55 L 350 15 L 370 15 L 360 60 Z" />
                   <rect x="280" y="65" width="50" height="15" rx="5" />
                   <path d="M 180 85 L 260 115 L 290 115 L 220 85 Z" fill="currentColor" opacity="0.1" strokeDasharray="2 2" />
                   <path d="M 330 72 L 360 68 L 360 76 Z" fill="#38bdf8" stroke="none" className="animate-pulse opacity-0 group-hover:opacity-80 transition-opacity" />
                 </svg>
                 
                 {/* Measurement nodes overlay */}
                 <div className="absolute top-4 left-4 text-[8px] font-mono text-sky-400/50">LEN: 99.4FT</div>
                 <div className="absolute bottom-4 right-4 text-[8px] font-mono text-sky-400/50">WINGSPAN: 99.7FT</div>
              </div>
              
              <div className="mb-6">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1 block">{jet.type}</span>
                <h3 className="text-xl lg:text-2xl font-black text-white">{jet.name}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                    <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Range
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">{jet.range}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                    <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Speed
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">{jet.speed}</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                    <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Capacity
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">{jet.cap}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GreenAviation = () => (
  <section className="py-32 bg-sky-50 relative z-10 border-t border-sky-100 overflow-hidden" id="sustainability">
    {/* Animated background wind lines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-emerald-400 animate-[slideRight_10s_linear_infinite]"></div>
      <div className="absolute top-[50%] left-0 w-full h-[1px] bg-emerald-300 animate-[slideRight_15s_linear_infinite]"></div>
      <div className="absolute top-[80%] left-0 w-full h-[1px] bg-emerald-500 animate-[slideRight_12s_linear_infinite]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
      <div className="w-full lg:w-1/2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Project Emerald</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">Sustainable Aviation Fuel (SAF)</h2>
        
        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
          The future of aerospace must be green. By 2030, our entire global fleet will operate on 100% Sustainable Aviation Fuel, reducing carbon emissions by up to 80% compared to traditional jet fuel. We are pioneering electric taxiing systems and revolutionary aerodynamic blended-wing bodies.
        </p>
        
        {/* Sustainability Metrics */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm border-l-4 border-l-emerald-400 hover:shadow-md transition-shadow group">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mb-1 group-hover:scale-105 transition-transform origin-left">-80%</div>
            <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Carbon Emissions</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm border-l-4 border-l-emerald-400 hover:shadow-md transition-shadow group">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mb-1 group-hover:scale-105 transition-transform origin-left">100%</div>
            <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Electric Taxiing</div>
          </div>
        </div>

        <button className="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold tracking-wide hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center gap-2">
          Read Environmental Report
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
      
      {/* Visualizer Right Side */}
      <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-2xl overflow-hidden flex items-center justify-center group">
         
         {/* Green Abstract Ambient Glow */}
         <div className="absolute w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[80px] animate-pulse"></div>
         
         {/* Technical Grid inside dark box */}
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

         {/* Spinning Turbine/Wind Tunnel Background */}
         <div className="absolute w-[350px] h-[350px] border-[2px] border-emerald-800/40 rounded-full flex items-center justify-center">
            <div className="absolute w-full h-full border-[3px] border-emerald-400/30 border-dashed rounded-full animate-[spin_12s_linear_infinite]"></div>
            <div className="absolute w-[250px] h-[250px] border border-emerald-300/40 rounded-full animate-[spin_8s_linear_infinite_reverse]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
            </div>
            <div className="absolute w-[150px] h-[150px] border border-emerald-200/20 rounded-full"></div>
         </div>

         {/* Animated Futuristic Blended-Wing Plane SVG */}
         <div className="relative z-10 animate-floatPlane drop-shadow-[0_20px_30px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform duration-700 -translate-y-4">
           {/* Detailed top-down blended wing B2-style/futuristic plane */}
           <svg viewBox="0 0 200 200" className="w-64 h-64 text-emerald-50" fill="currentColor">
              {/* Main Fuselage */}
              <path d="M100 20 C100 20, 120 60, 180 140 C185 147, 180 155, 170 150 C140 135, 110 130, 100 130 C90 130, 60 135, 30 150 C20 155, 15 147, 20 140 C80 60, 100 20, 100 20 Z" />
              {/* Inner detail panels */}
              <path d="M100 35 C100 35, 115 65, 160 135 C135 125, 110 120, 100 120 C90 120, 65 125, 40 135 C85 65, 100 35, 100 35 Z" fill="#d1fae5" />
              {/* Cockpit Glass */}
              <path d="M100 45 C105 45, 110 55, 105 60 C100 62, 100 62, 95 60 C90 55, 95 45, 100 45 Z" fill="#047857" />
              {/* Green Energy Veins */}
              <path d="M100 75 L100 115 M80 90 L60 115 M120 90 L140 115" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" className="animate-pulse" />
              {/* Electric Engines */}
              <rect x="75" y="125" width="12" height="15" rx="4" fill="#064e3b" />
              <rect x="113" y="125" width="12" height="15" rx="4" fill="#064e3b" />
           </svg>
           
           {/* Engine Glows (SAF Fuel Simulation) */}
           <div className="absolute bottom-[42px] left-[76px] w-5 h-8 bg-gradient-to-t from-transparent to-emerald-400 rounded-full blur-[4px] animate-[pulse_1s_ease-in-out_infinite]"></div>
           <div className="absolute bottom-[42px] right-[76px] w-5 h-8 bg-gradient-to-t from-transparent to-emerald-400 rounded-full blur-[4px] animate-[pulse_1.2s_ease-in-out_infinite]"></div>
         </div>
         
         {/* UI HUD Overlay */}
         <div className="absolute bottom-8 left-8 bg-slate-900/80 backdrop-blur border border-emerald-500/30 p-3 rounded-xl hidden sm:block">
            <div className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
              Propulsion Status
            </div>
            <div className="text-xs font-mono text-emerald-50 font-semibold">SAF MIX: 100%</div>
            <div className="text-xs font-mono text-emerald-50 font-semibold">EMISSIONS: 0.0g</div>
         </div>

      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-slate-50 relative z-10 border-t border-slate-200 overflow-hidden">
    {/* Global background graphics */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-slate-900 animate-[slideRight_15s_linear_infinite]"></div>
      <div className="absolute top-[60%] left-0 w-full h-[1px] bg-slate-900 animate-[slideRight_25s_linear_infinite]"></div>
      <svg viewBox="0 0 400 150" className="absolute top-[30%] -right-[100px] w-[600px] text-slate-900 animate-[flyLeft_60s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="2">
         <path d="M 360 80 Q 320 55, 220 55 L 100 55 Q 40 55, 20 70 Q 10 80, 40 85 L 220 90 Q 340 90, 360 80 Z" />
         <path d="M 80 55 L 50 15 L 30 15 L 40 60 Z" />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 relative z-10">
      
      {/* Left Text Block */}
      <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">Client Manifest</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">Flight Logs & Endorsements</h2>
        <p className="text-slate-600 leading-relaxed text-lg mb-8">
          Don't just take our word for it. Review the flight logs and debriefs from our top enterprise partners, defense contractors, and luxury charter clients. 
        </p>
        <div className="hidden lg:block w-32 h-32 border-4 border-slate-100 rounded-full flex items-center justify-center relative">
           <div className="absolute inset-0 border-[4px] border-sky-400 border-dashed rounded-full animate-[spin_10s_linear_infinite]"></div>
           <svg className="w-12 h-12 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
           </svg>
        </div>
      </div>

      {/* Right Boarding Passes */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {[
          { q: "AeroDynamics reduced our global logistics delays by 40%. Their fleet is impeccably maintained and always ready for immediate deployment.", author: "Sarah Jenkins", role: "VP Supply Chain", co: "TechGlobal", class: "Logistics Contract", flt: "FLT-8820" },
          { q: "The level of engineering precision in their avionics upgrades is unmatched. Truly the gold standard for atmospheric defense networks.", author: "Cmdr. David Ross", role: "Director of Ops", co: "Defense Contractor", class: "Classified", flt: "MIL-401" },
          { q: "Flying private with their charter service feels like stepping into the future. Absolute perfection from takeoff to touchdown.", author: "Elena Rostova", role: "CEO", co: "LuxCorp", class: "First Class Charter", flt: "VIP-001" }
        ].map((t, i) => (
          <div key={i} className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-900/10 transition-all duration-500 group relative">
            
            {/* Left Side (Main Quote) */}
            <div className="p-8 lg:p-10 md:w-2/3 relative bg-white">
              <div className="absolute top-0 left-0 w-2 h-full bg-sky-500"></div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-sky-50 text-sky-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-sky-100">{t.class}</div>
                  <div className="text-[10px] font-bold text-slate-400 font-mono tracking-widest">{t.flt}</div>
                </div>
                {/* Airplane icon flying right */}
                <svg className="w-6 h-6 text-sky-200 group-hover:translate-x-3 group-hover:text-sky-500 transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" className="rotate-90 origin-center" />
                </svg>
              </div>

              <p className="text-slate-700 font-medium leading-relaxed text-lg sm:text-xl">"{t.q}"</p>
            </div>
            
            {/* Divider (Perforation) */}
            <div className="w-px border-l-[3px] border-dashed border-slate-200 relative hidden md:block bg-slate-50">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-slate-50 border-b border-slate-200 shadow-inner"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-slate-50 border-t border-slate-200 shadow-inner"></div>
            </div>
            
            {/* Right Side (Author / Stub) */}
            <div className="p-8 lg:p-10 md:w-1/3 bg-slate-50 flex flex-col justify-center relative overflow-hidden border-t md:border-t-0 border-slate-200">
              {/* Abstract plane graphic in stub */}
              <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-slate-200 -rotate-45 opacity-40 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
              </svg>
              
              <div className="relative z-10">
                <p className="font-black text-slate-900 text-xl">{t.author}</p>
                <p className="text-[10px] text-sky-600 uppercase tracking-widest font-bold mb-1 mt-1">{t.role}</p>
                <p className="text-xs text-slate-500 font-medium mb-6">{t.co}</p>
                
                {/* Fake barcode */}
                <div className="flex gap-[3px] h-8 items-end opacity-30 mix-blend-multiply group-hover:opacity-50 transition-opacity">
                  <div className="w-1 h-full bg-slate-800"></div>
                  <div className="w-2 h-full bg-slate-800"></div>
                  <div className="w-1 h-5 bg-slate-800"></div>
                  <div className="w-3 h-full bg-slate-800"></div>
                  <div className="w-1 h-6 bg-slate-800"></div>
                  <div className="w-1.5 h-full bg-slate-800"></div>
                  <div className="w-2 h-5 bg-slate-800"></div>
                  <div className="w-1 h-full bg-slate-800"></div>
                  <div className="w-1 h-7 bg-slate-800"></div>
                  <div className="w-2.5 h-full bg-slate-800"></div>
                  <div className="w-1 h-6 bg-slate-800"></div>
                  <div className="w-1.5 h-full bg-slate-800"></div>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-24 pb-12 bg-slate-900 text-slate-400 border-t border-slate-800 relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-bold mb-4">
            <div className="w-6 h-6 rounded bg-sky-600 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" /></svg>
            </div>
            AeroDynamics
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-6">Pioneering the next era of global aviation and atmospheric defense.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm">Solutions</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-sky-400">Charter Fleet</a></li>
            <li><a href="#" className="hover:text-sky-400">Defense</a></li>
            <li><a href="#" className="hover:text-sky-400">MRO Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-sky-400">About Us</a></li>
            <li><a href="#" className="hover:text-sky-400">Careers</a></li>
            <li><a href="#" className="hover:text-sky-400">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm">Compliance</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-sky-400">AS9100</a></li>
            <li><a href="#" className="hover:text-sky-400">ISO 9001</a></li>
            <li><a href="#" className="hover:text-sky-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
        <p>© 2026 AeroDynamics Inc. All rights reserved.</p>
        
        {/* Creator Badge */}
        <div className="flex items-center gap-3">
          <span className="text-slate-500">Creator</span>
          <div className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-white font-bold flex items-center gap-2 hover:bg-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <svg className="w-3 h-3 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"/></svg>
            aPLS Web Development
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function AerospaceLanding() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideRight {
          from { transform: translateX(-10%); }
          to { transform: translateX(110%); }
        }
        @keyframes slideLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes flyRight {
          from { transform: translateX(-20vw) translateY(0); }
          to { transform: translateX(120vw) translateY(-50vh); }
        }
        @keyframes flyLeft {
          from { transform: translateX(120vw) translateY(0); }
          to { transform: translateX(-20vw) translateY(-30vh); }
        }
        @keyframes floatPlane {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-10deg); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html { scroll-behavior: smooth; }
      `}} />
      <AviationBackground />
      <Navbar />
      <Hero />
      <PartnerMarquee />
      <Stats />
      <LiveRadar />
      <FleetSlider />
      <GreenAviation />
      <Testimonials />
      <Footer />
    </div>
  );
}
