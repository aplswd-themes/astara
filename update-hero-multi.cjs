const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

// Replace the Hero component entirely
const heroRegex = /const Hero = \(\) => \([\s\S]*?<\/section>\n\);/;

const newHero = `const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12">
      
      {/* Text Content */}
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

      {/* Global Flight Network - Multiple Planes */}
      <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] flex items-center justify-center">
        
        {/* Abstract Globe Base */}
        <div className="absolute w-[350px] h-[350px] rounded-full border-[1px] border-sky-200 bg-sky-50/30 shadow-[inset_-20px_-20px_40px_rgba(14,165,233,0.1)] flex items-center justify-center">
           {/* Latitude/Longitude lines */}
           <div className="absolute w-[350px] h-[100px] border border-sky-200/50 rounded-[100%]"></div>
           <div className="absolute w-[100px] h-[350px] border border-sky-200/50 rounded-[100%]"></div>
        </div>

        {/* Orbit Path 1 with Plane */}
        <div className="absolute w-[450px] h-[450px] rounded-full border border-sky-200/50 border-dashed rotate-12 animate-[spin_20s_linear_infinite]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-sky-500 rotate-90 drop-shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>
          </div>
        </div>

        {/* Orbit Path 2 with Plane */}
        <div className="absolute w-[550px] h-[300px] rounded-[100%] border-2 border-sky-300/30 -rotate-45 animate-[spin_25s_linear_infinite_reverse]">
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-blue-600 drop-shadow-md">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>
          </div>
        </div>

        {/* Orbit Path 3 with Plane */}
        <div className="absolute w-[250px] h-[450px] rounded-[100%] border border-blue-200/60 rotate-45 animate-[spin_15s_linear_infinite]">
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-sky-400 rotate-[270deg] drop-shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>
          </div>
        </div>

        {/* Floating Clouds over Globe */}
        <div className="absolute top-[30%] left-[20%] w-16 h-4 bg-white/80 rounded-full blur-[1px] animate-[flyRight_15s_linear_infinite]"></div>
        <div className="absolute top-[60%] right-[20%] w-20 h-5 bg-white/80 rounded-full blur-[2px] animate-[flyLeft_20s_linear_infinite]"></div>

        {/* Network Nodes */}
        <div className="absolute top-[40%] right-[35%] w-3 h-3 bg-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,1)]"></div>
        <div className="absolute top-[60%] left-[30%] w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
        <div className="absolute top-[25%] left-[45%] w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
        
        {/* Connecting Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 600 600">
          <path d="M180,360 L270,150 L390,240" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3"/>
        </svg>

      </div>
    </div>
  </section>
);`;

code = code.replace(heroRegex, newHero);
code = code.replace(/\\`/g, '\`');
code = code.replace(/\\\$/g, '\$');

fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Replaced with multiple planes around a globe");
