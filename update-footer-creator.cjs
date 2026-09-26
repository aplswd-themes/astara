const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

const regex = /<p>© 2026 AeroDynamics Inc\. All rights reserved\.<\/p>/;
const replacement = `<p>© 2026 AeroDynamics Inc. All rights reserved.</p>
        
        {/* Creator Badge */}
        <div className="flex items-center gap-3">
          <span className="text-slate-500">Creator</span>
          <div className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-white font-bold flex items-center gap-2 hover:bg-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <svg className="w-3 h-3 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"/></svg>
            aPLS Web Development
          </div>
        </div>`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Added aPLS web development to footer");
