import { useState } from 'react';
import { cn } from '../../lib/utils';

export function PricingTable({
  title = 'Choose your plan',
  subtitle = 'Pricing',
  plans = [],
  showToggle = true,
}: any) {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
      
      <div className="mb-20 text-center flex flex-col items-center">
        {subtitle && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">
              {subtitle}
            </span>
          </div>
        )}
        {title && (
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8">
            {title}
          </h2>
        )}

        {showToggle && (
          <div className="inline-flex items-center p-1 rounded-full border border-zinc-200 bg-white shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-bold transition-all',
                !annual
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'text-zinc-500 hover:text-zinc-900'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2',
                annual
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'text-zinc-500 hover:text-zinc-900'
              )}
            >
              Annual
              <span className={cn(
                "text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-black",
                annual ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-100 text-emerald-700"
              )}>
                Save 20%
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan: any, i: number) => {
          // Normalize mismatched props passed by different themes
          const isPopular = plan.popular || plan.isPopular;
          const displayPrice = plan.price || (annual ? plan.annualPrice : plan.monthlyPrice);
          const ctaLabel = plan.cta || plan.ctaText || 'Get Started';
          const period = plan.period || (displayPrice !== 'Custom' ? (annual ? '/yr' : '/mo') : '');

          return (
            <div
              key={plan.name}
              className={cn(
                "group relative flex flex-col p-8 sm:p-10 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 z-10 bg-white",
                isPopular
                  ? "border-2 border-indigo-500 shadow-xl shadow-indigo-500/20"
                  : "border border-zinc-200 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10"
              )}
              style={{ animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both`, animationDelay: `${i * 100}ms` }}
            >
              {isPopular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              )}
              {isPopular && (
                <div className="absolute top-6 right-6 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black text-zinc-900 tracking-tight mb-2">{plan.name}</h3>
                {plan.description && <p className="text-sm font-medium text-zinc-500">{plan.description}</p>}
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tighter text-zinc-900">
                  {typeof displayPrice === 'number' ? `$${displayPrice}` : displayPrice}
                </span>
                {period && <span className="text-zinc-500 font-bold">{period}</span>}
              </div>

              <div className="flex-1">
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features?.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-700 font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.ctaHref || '#'}
                className={cn(
                  "block w-full py-4 px-6 rounded-2xl text-center text-sm font-black transition-all",
                  isPopular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                )}
              >
                {ctaLabel}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}