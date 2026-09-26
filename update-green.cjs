const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

const regex = /const GreenAviation = \(\) => \([\s\S]*?<\/section>\n\);/;

const newComponent = `const GreenAviation = () => (
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
);`;

code = code.replace(regex, newComponent);
fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Green Aviation section updated successfully.");
