import React from 'react';

interface Variation {
  label: string;
  href?: string;
  path?: string;
}

interface Props {
  variationName: string;
  backHref?: string;
  variations?: Variation[];
}

export const PreviewNavbar: React.FC<Props> = ({ variationName, backHref = "/", variations = [] }) => {
  // If no variations provided, fallback to the About Us variations as a smart default for this specific task
  const defaultVariations = [
    { label: 'About Us (Main)', href: '/about' },
    { label: 'Minimalist v1', href: '/about-v1' },
    { label: 'Creative v2', href: '/about-v2' },
    { label: 'Dark Tech v3', href: '/about-v3' },
    { label: 'Editorial v4', href: '/about-v4' },
  ];
  
  const activeVariations = variations.length > 0 ? variations : defaultVariations;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand & Variation Dropdown */}
        <div className="flex items-center gap-4">
          <a href={backHref} className="text-xl font-black tracking-tight text-zinc-900 flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm shadow-md">⬡</span>
            Nexus
          </a>
          <div className="w-px h-6 bg-zinc-200 hidden sm:block"></div>
          
          <div className="relative group hidden sm:block">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-widest">{variationName}</span>
              <svg className="w-3 h-3 text-indigo-500 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white border border-zinc-200 rounded-xl shadow-xl p-1.5 flex flex-col gap-0.5 relative before:absolute before:inset-x-0 before:-top-4 before:h-4 before:bg-transparent">
                {activeVariations.map(v => (
                  <a key={v.href || v.path} href={v.href || v.path} className="px-3 py-2 text-xs font-bold text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center justify-between">
                    {v.label}
                    {v.label === variationName && (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <a href={backHref} className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
            ? Back to Hub
          </a>
          <a href="/downloads/themekit-astro-theme.zip" className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold shadow-md shadow-zinc-900/10 hover:bg-zinc-800 transition-all flex items-center gap-1.5 hover:-translate-y-0.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Code
          </a>
        </div>
      </div>
    </header>
  );
};

