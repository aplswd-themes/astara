import { useState } from 'react';
import { cn } from '../../lib/utils';

export function FAQ({ title = 'Frequently asked questions', subtitle = 'FAQ', items, dark = false }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section className={cn(
      "py-24 md:py-32 relative z-10",
      dark ? 'bg-zinc-950 text-white' : 'bg-transparent text-zinc-900'
    )}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 flex flex-col items-center">
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                {subtitle}
              </span>
            </div>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8">{title}</h2>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item: any, i: number) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-[24px] border transition-all duration-300 overflow-hidden",
                  isOpen 
                    ? "bg-white border-indigo-200 shadow-xl shadow-indigo-500/5 ring-1 ring-indigo-500/10 scale-[1.01]" 
                    : "bg-white/50 border-zinc-200 hover:border-indigo-300 hover:bg-white"
                )}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-6 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "font-bold text-lg transition-colors",
                    isOpen ? "text-indigo-900" : "text-zinc-800"
                  )}>
                    {item.question}
                  </span>
                  <span className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-indigo-600 text-white rotate-45" : "bg-zinc-100 text-zinc-500 hover:bg-indigo-100 hover:text-indigo-600"
                  )}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden px-6 md:px-8">
                    <p className="text-zinc-600 leading-relaxed font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}