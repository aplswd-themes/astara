const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

const regex = /\{\/\* Subtle small background planes flying across the section \*\/\}[\s\S]*?<\/div>\n      <\/div>/;

const replacement = `{/* Architectural Blueprint Planes in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Plane 1: Flying Right */}
        <div className="absolute top-[10%] -left-[200px] w-64 md:w-96 animate-[flyRight_40s_linear_infinite]">
          <svg viewBox="0 0 400 150" className="w-full h-auto text-slate-700/40" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M 40 80 Q 80 55, 180 55 L 300 55 Q 360 55, 380 70 Q 390 80, 360 85 L 180 90 Q 60 90, 40 80 Z" />
            <line x1="10" y1="80" x2="40" y2="80" strokeDasharray="2 2" strokeWidth="1" opacity="0.5"/>
            <path d="M 320 55 L 350 15 L 370 15 L 360 60 Z" />
            <path d="M 180 85 L 260 115 L 290 115 L 220 85 Z" fill="currentColor" opacity="0.1" strokeDasharray="2 2" />
          </svg>
        </div>
        
        {/* Plane 2: Flying Left (Flipped horizontally in SVG) */}
        <div className="absolute top-[65%] -right-[300px] w-80 md:w-[500px] animate-[flyLeft_50s_linear_infinite_10s]">
          <svg viewBox="0 0 400 150" className="w-full h-auto text-sky-800/20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M 360 80 Q 320 55, 220 55 L 100 55 Q 40 55, 20 70 Q 10 80, 40 85 L 220 90 Q 340 90, 360 80 Z" />
            <line x1="390" y1="80" x2="360" y2="80" strokeDasharray="2 2" strokeWidth="1" opacity="0.5"/>
            <path d="M 80 55 L 50 15 L 30 15 L 40 60 Z" />
            <path d="M 220 85 L 140 115 L 110 115 L 180 85 Z" fill="currentColor" opacity="0.1" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Small distant plane */}
        <div className="absolute top-[40%] -left-[100px] w-32 animate-[flyRight_35s_linear_infinite_5s]">
          <svg viewBox="0 0 400 150" className="w-full h-auto text-slate-800/60" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M 40 80 Q 80 55, 180 55 L 300 55 Q 360 55, 380 70 Q 390 80, 360 85 L 180 90 Q 60 90, 40 80 Z" />
            <path d="M 320 55 L 350 15 L 370 15 L 360 60 Z" />
          </svg>
        </div>
      </div>`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Added prominent blueprint planes in background");
