import { useState } from 'react';
import { cn } from '../../lib/utils';

export function AnimatedFAQ({ items, variant = 'split' }: { items: any[], variant?: 'split' | 'grid' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div 
            key={i}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <h3 className="text-xl font-bold text-white mb-4">{item.question}</h3>
            <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    );
  }

  // Split variant
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={cn(
              "rounded-2xl border transition-all duration-300 overflow-hidden animate-fade-in-up",
              isOpen ? "bg-zinc-900 border-zinc-900 text-white shadow-xl" : "bg-white border-zinc-200 hover:border-zinc-400"
            )}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-6 text-left"
              onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
            >
              <span className={cn("font-bold text-lg", isOpen ? "text-white" : "text-zinc-900")}>
                {item.question}
              </span>
              <span 
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  isOpen ? "bg-white/20 text-white rotate-45" : "bg-zinc-100 text-zinc-600 rotate-0"
                )}
              >
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
                <p className={cn("leading-relaxed font-medium", isOpen ? "text-zinc-300" : "text-zinc-600")}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
