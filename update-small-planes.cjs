const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

const regex = /\{\/\* Architectural Blueprint Planes in Background \*\/\}[\s\S]*?<\/div>\n      <\/div>/;

const replacement = `{/* Small Fleet Flying in Background (Like Hero Section) */}
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
      </div>`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Replaced large blueprint planes with small solid planes.");
