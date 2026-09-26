import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface Variant {
  label: string;
  path: string;
}

interface Props {
  currentPath: string;
  variants: Variant[];
}

export function PageVariantSwitcher({ currentPath, variants }: Props) {
  const [mounted, setMounted] = useState(false);
  
  // Hydrate safely on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-8 fade-in duration-500">
      <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-zinc-200/80 shadow-2xl shadow-black/15 ring-1 ring-black/5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-3 py-2 hidden sm:block">
          Layout Variant:
        </span>
        {variants.map(v => {
          // Normalize paths for comparison (e.g., /services vs /services/)
          const normalizedCurrent = currentPath.replace(/\/$/, '');
          const normalizedTarget = v.path.replace(/\/$/, '');
          const isActive = normalizedCurrent === normalizedTarget;
          
          return (
            <a
              key={v.path}
              href={v.path}
              className={cn(
                "px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all duration-300",
                isActive 
                  ? "bg-zinc-900 text-white shadow-md scale-105 pointer-events-none" 
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              )}
            >
              {v.label}
            </a>
          )
        })}
      </div>
    </div>
  );
}
