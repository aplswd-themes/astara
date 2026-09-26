const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

const fleetRegex = /const FleetSlider = \(\) => \{[\s\S]*?    <\/section>\n  \);\n\};/;

const newFleet = `const FleetSlider = () => {
  const jets = [
    { name: 'Gulfstream G650', type: 'Ultra Long Range', range: '7,000 nm', speed: 'Mach 0.925', cap: '19 Pax' },
    { name: 'Bombardier Global 7500', type: 'Ultra Long Range', range: '7,700 nm', speed: 'Mach 0.925', cap: '19 Pax' },
    { name: 'Citation Longitude', type: 'Super Midsize', range: '3,500 nm', speed: 'Mach 0.84', cap: '12 Pax' },
    { name: 'Embraer Praetor 600', type: 'Super Midsize', range: '4,018 nm', speed: 'Mach 0.83', cap: '12 Pax' },
    { name: 'Airbus ACJ319neo', type: 'VIP Airliner', range: '6,750 nm', speed: 'Mach 0.82', cap: '25 Pax' }
  ];

  return (
    <section className="py-32 bg-slate-900 relative z-10 border-t border-slate-800 overflow-hidden" id="fleet">
      {/* Decorative Flying Plane Animation that crosses the dark section */}
      <div className="absolute top-[20%] -left-[100px] animate-[flyRight_25s_linear_infinite] opacity-30 z-0 pointer-events-none">
        <div className="relative">
           <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-600 rotate-90">
             <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
           </svg>
           <div className="absolute top-[48%] -left-12 w-24 h-[1px] bg-gradient-to-r from-transparent to-sky-500/50"></div>
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
      <div className="flex overflow-x-auto pb-12 px-6 gap-6 snap-x snap-mandatory hide-scrollbar relative z-10">
        <div className="min-w-[5vw] sm:min-w-[10vw] flex-shrink-0"></div>
        
        {jets.map((jet, i) => (
          <div key={i} className="min-w-[340px] sm:min-w-[450px] flex-shrink-0 snap-center bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-2xl cursor-pointer group border border-slate-700/50 hover:border-sky-500/30">
            
            {/* Visual Plane Blueprint Representation */}
            <div className="h-56 rounded-xl bg-slate-900 border border-slate-700 mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-sky-500/50 transition-colors shadow-inner">
               {/* Grid Background */}
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               {/* Blueprint SVG Side Profile */}
               <svg viewBox="0 0 400 150" className="w-full h-auto px-4 text-sky-400/80 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)] group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-700 z-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                 {/* Main Fuselage */}
                 <path d="M 40 80 Q 80 55, 180 55 L 300 55 Q 360 55, 380 70 Q 390 80, 360 85 L 180 90 Q 60 90, 40 80 Z" />
                 {/* Nose cone measurement line */}
                 <line x1="10" y1="80" x2="40" y2="80" strokeDasharray="2 2" strokeWidth="1" opacity="0.5"/>
                 {/* Cockpit Window */}
                 <path d="M 80 67 L 100 59 L 115 59 L 105 69 Z" fill="currentColor" opacity="0.2" />
                 {/* Tail */}
                 <path d="M 320 55 L 350 15 L 370 15 L 360 60 Z" />
                 {/* Engine */}
                 <rect x="280" y="65" width="50" height="15" rx="5" />
                 {/* Wing perspective */}
                 <path d="M 180 85 L 260 115 L 290 115 L 220 85 Z" fill="currentColor" opacity="0.1" strokeDasharray="2 2" />
                 {/* Engine Thrust Glow */}
                 <path d="M 330 72 L 360 68 L 360 76 Z" fill="#38bdf8" stroke="none" className="animate-pulse opacity-0 group-hover:opacity-80 transition-opacity" />
               </svg>
               
               {/* Measurement nodes overlay */}
               <div className="absolute top-4 left-4 text-[8px] font-mono text-sky-400/50">LEN: 99.4FT</div>
               <div className="absolute bottom-4 right-4 text-[8px] font-mono text-sky-400/50">WINGSPAN: 99.7FT</div>
            </div>
            
            <div className="mb-6">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1 block">{jet.type}</span>
              <h3 className="text-2xl font-black text-white">{jet.name}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                  <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Max Range
                </span>
                <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">{jet.range}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                  <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Top Speed
                </span>
                <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">{jet.speed}</span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                  <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Passenger Cap
                </span>
                <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">{jet.cap}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="min-w-[10vw] flex-shrink-0"></div>
      </div>
    </section>
  );
};`;

code = code.replace(fleetRegex, newFleet);
code = code.replace(/\\`/g, '\`');
code = code.replace(/\\\$/g, '\$');

fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("FleetSlider completely redesigned");
