import React from 'react';

interface MarqueeItem {
  text: string;
  icon?: string;
  badge?: string;
}

interface MotionVelocityMarqueeProps {
  items: MarqueeItem[];
  speed?: number; // duration in seconds
  reverse?: boolean;
  className?: string;
}

export const MotionVelocityMarquee: React.FC<MotionVelocityMarqueeProps> = ({
  items,
  speed = 25,
  reverse = false,
  className = '',
}) => {
  // Quadruple items to ensure seamless infinite looping on any viewport width (including 4K)
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden w-full py-4 select-none ${className}`}>
      {/* Edge gradient fade masks using inline CSS for 100% theme background adaptability */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 z-10"
        style={{
          background: 'linear-gradient(to right, var(--color-bg, #ffffff), transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 z-10"
        style={{
          background: 'linear-gradient(to left, var(--color-bg, #ffffff), transparent)',
        }}
      />

      {/* Continuously moving infinite scale marquee track */}
      <div
        className="flex items-center gap-4 w-max group hover:[animation-play-state:paused]"
        style={{
          animation: `marqueeScroll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-white/95 dark:bg-stone-900/90 shadow-sm hover:shadow-md hover:border-orange-500/50 dark:hover:border-orange-400/50 transition-all text-stone-900 dark:text-stone-100 shrink-0">
              {item.icon && (
                <span className="text-base shrink-0 leading-none" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <span className="text-xs sm:text-sm font-bold tracking-tight">
                {item.text}
              </span>
              {item.badge && (
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/25">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Precision scale tick mark between items */}
            <span
              className="text-stone-300 dark:text-stone-700 font-mono text-[11px] select-none shrink-0"
              aria-hidden="true"
            >
              ❙
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
