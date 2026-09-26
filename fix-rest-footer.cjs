const fs = require('fs');

let code = fs.readFileSync('src/themes/restaurant/LandingPage.tsx', 'utf8');

// Fix the corrupted text
code = code.replace(/L'\?\?toile/g, "L'ÉTOILE");

// Fix the corrupted star
code = code.replace(/<span className="text-emerald-400">\?\?\?<\/span>/g, '<span className="text-emerald-400">✦</span>');

// Replace the entire bottom section to be perfectly centered and positioned correctly
const regex = /<div className="absolute bottom-8 left-0 w-full flex flex-col md:flex-row justify-between items-center px-8 z-10">[\s\S]*?<\/div>\s*<\/footer>/;

const properFooter = `<div className="absolute bottom-6 left-0 w-full flex flex-col md:flex-row justify-between items-center px-8 z-20">
        <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4 md:mb-0 w-full md:w-1/3 text-left">
          &copy; {new Date().getFullYear()} L'ÉTOILE
        </div>
        
        <div className="flex items-center justify-center gap-3 w-full md:w-1/3">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Creator</span>
          <div className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-white text-[11px] font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm uppercase tracking-widest cursor-pointer">
            <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"/></svg>
            aPLS Web Development
          </div>
        </div>
        
        <div className="hidden md:block w-full md:w-1/3 text-right text-[10px] text-zinc-500 uppercase tracking-widest">
          All Rights Reserved
        </div>
      </div>
  </footer>`;

code = code.replace(regex, properFooter);

fs.writeFileSync('src/themes/restaurant/LandingPage.tsx', code, 'utf8');
console.log("Fixed corrupted text and perfectly centered badge.");
