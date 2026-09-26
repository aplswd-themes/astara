import { useState, useEffect } from 'react';

export function FlashSaleBar() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="w-full bg-gradient-to-r from-emerald-900 via-zinc-950 to-teal-900 text-white text-xs py-2.5 px-4 border-b border-emerald-500/30 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-extrabold uppercase tracking-widest text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
            Limited Release
          </span>
          <span className="text-zinc-300 font-medium hidden sm:inline">
            Spring Archive Drop — 20% off all curated apparel with code
          </span>
          <code className="text-emerald-300 font-bold bg-white/10 px-2 py-0.5 rounded border border-white/10">
            SPRING20
          </code>
        </div>

        {/* Live Countdown Display */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase font-bold text-zinc-400">Offer Closes In:</span>
          <div className="flex items-center gap-1 font-mono font-bold text-emerald-300">
            <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-750">
              {format(timeLeft.hours)}h
            </span>
            <span>:</span>
            <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-750">
              {format(timeLeft.minutes)}m
            </span>
            <span>:</span>
            <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-750">
              {format(timeLeft.seconds)}s
            </span>
          </div>
          <a
            href="#shop"
            className="text-[11px] font-bold text-emerald-300 hover:text-white underline ml-1"
          >
            Shop Now →
          </a>
        </div>
      </div>
    </div>
  );
}
