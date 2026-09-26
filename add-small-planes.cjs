const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

// The regex to match the large decorative plane in FleetSlider
const fleetPlaneRegex = /\{\/\* Decorative Flying Plane Animation that crosses the dark section \*\/\}[\s\S]*?<\/div>\n      <\/div>/;

const newSmallPlanes = `{/* Subtle small background planes flying across the section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[10%] -left-[5%] animate-[flyRight_30s_linear_infinite]">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-600 rotate-90">
             <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
           </svg>
        </div>
        <div className="absolute top-[35%] -right-[10%] animate-[flyLeft_45s_linear_infinite_reverse]">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-sky-900 -rotate-90">
             <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
           </svg>
        </div>
        <div className="absolute top-[65%] -left-[10%] animate-[flyRight_25s_linear_infinite_10s]">
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-700 rotate-[75deg]">
             <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
           </svg>
        </div>
        <div className="absolute top-[85%] -right-[5%] animate-[flyLeft_35s_linear_infinite_5s]">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-800 -rotate-[110deg]">
             <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
           </svg>
        </div>
        <div className="absolute top-[50%] -left-[15%] animate-[flyRight_50s_linear_infinite_2s]">
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-sky-800 rotate-[105deg]">
             <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
           </svg>
        </div>
      </div>`;

code = code.replace(fleetPlaneRegex, newSmallPlanes);

// Also add a few more to the AviationBackground
const aviationRegex = /<div className="absolute top-\[60%\] -right-\[100px\] animate-\[flyLeft_35s_linear_infinite\] opacity-10">[\s\S]*?<\/div>/;

const moreAviationPlanes = `<div className="absolute top-[60%] -right-[100px] animate-[flyLeft_35s_linear_infinite] opacity-10">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="-rotate-135">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5l-8.2-1.8c-1.5-.3-2.8.5-3.3 2-.5 1.5.5 2.8 2 3.3l4 1.5 2 2-2 3.5c-.5 1-1 2.5-1 4 0 0 1.5-.5 2.5-1l4-2 3.5 2c1.5.5 2.8-.5 3.3-2 .5-1.5-.3-2.8-1.8-3.3z" />
      </svg>
    </div>
    {/* Additional small planes */}
    <div className="absolute top-[25%] -right-[50px] animate-[flyLeft_45s_linear_infinite_5s] opacity-20">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" className="-rotate-135">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5l-8.2-1.8c-1.5-.3-2.8.5-3.3 2-.5 1.5.5 2.8 2 3.3l4 1.5 2 2-2 3.5c-.5 1-1 2.5-1 4 0 0 1.5-.5 2.5-1l4-2 3.5 2c1.5.5 2.8-.5 3.3-2 .5-1.5-.3-2.8-1.8-3.3z" />
      </svg>
    </div>
    <div className="absolute top-[75%] -left-[50px] animate-[flyRight_55s_linear_infinite_10s] opacity-15">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" className="rotate-45">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5l-8.2-1.8c-1.5-.3-2.8.5-3.3 2-.5 1.5.5 2.8 2 3.3l4 1.5 2 2-2 3.5c-.5 1-1 2.5-1 4 0 0 1.5-.5 2.5-1l4-2 3.5 2c1.5.5 2.8-.5 3.3-2 .5-1.5-.3-2.8-1.8-3.3z" />
      </svg>
    </div>
    <div className="absolute top-[45%] -left-[80px] animate-[flyRight_30s_linear_infinite_2s] opacity-10">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1" className="rotate-[60deg]">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5l-8.2-1.8c-1.5-.3-2.8.5-3.3 2-.5 1.5.5 2.8 2 3.3l4 1.5 2 2-2 3.5c-.5 1-1 2.5-1 4 0 0 1.5-.5 2.5-1l4-2 3.5 2c1.5.5 2.8-.5 3.3-2 .5-1.5-.3-2.8-1.8-3.3z" />
      </svg>
    </div>`;

code = code.replace(aviationRegex, moreAviationPlanes);

fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Added multiple small background planes");
