const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

const regex = /const Testimonials = \(\) => \([\s\S]*?<\/section>\n\);/;

const replacement = `const Testimonials = () => (
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
);`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Testimonials replaced with Boarding Pass design");
