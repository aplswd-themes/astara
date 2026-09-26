import { useState } from 'react';

export default function Page() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-100">

      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 rounded-md"></div>
            <a href="#" className="text-lg font-bold tracking-tight">NexaCloud</a>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-sm font-medium text-zinc-600 hover:text-zinc-900">Sign in</a>
            <a href="#" className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 mb-8 border border-zinc-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          NexaCloud 2.0 is now generally available
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-zinc-900 leading-[1.1]">
          Deploy infrastructure<br />
          <span className="text-zinc-500">without the complexity.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-600 mb-10 leading-relaxed">
          A fully managed platform for modern software teams. Connect your repository, and we'll handle the continuous integration, global deployment, and scaling automatically.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="rounded-lg bg-zinc-900 px-8 py-3.5 font-medium text-white hover:bg-zinc-800 transition-all shadow-sm">
            Start Deploying Free
          </a>
          <a href="#" className="rounded-lg border border-zinc-200 bg-white px-8 py-3.5 font-medium text-zinc-700 hover:bg-zinc-50 transition-all shadow-sm">
            Talk to Sales
          </a>
        </div>
      </section>

      {/* LOGO CLOUD */}
      <section className="py-10 border-y border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-wider">Trusted by engineering teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Placeholder for logos */}
            <span className="text-xl font-bold font-serif">Acme Corp</span>
            <span className="text-xl font-bold font-mono">Quantum</span>
            <span className="text-xl font-bold italic">Globex</span>
            <span className="text-xl font-bold tracking-widest">SOYUZ</span>
            <span className="text-xl font-bold">Initech</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">Everything you need to scale</h2>
          <p className="text-lg text-zinc-600">Built for teams who prioritize reliability, speed, and standard enterprise compliance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🌐', title: 'Global Edge Network', desc: 'Deploy to 35+ regions worldwide automatically.' },
            { icon: '🛡️', title: 'Enterprise Security', desc: 'SOC 2 Type II certified with automatic DDoS mitigation.' },
            { icon: '🔄', title: 'Automated CI/CD', desc: 'Zero-configuration deployments on every git push.' },
            { icon: '📊', title: 'Integrated Observability', desc: 'Real-time metrics, logs, and alerting built-in.' },
            { icon: '👥', title: 'Team Collaboration', desc: 'Granular RBAC, audit logs, and SSO support.' },
            { icon: '⚙️', title: 'Infrastructure as Code', desc: 'Manage your resources through Terraform or our API.' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-4 bg-zinc-50 w-12 h-12 flex items-center justify-center rounded-lg border border-zinc-100">{f.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">{f.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-white border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">Transparent Pricing</h2>
            <p className="text-lg text-zinc-600 mb-8">Simple, predictable pricing for teams of all sizes.</p>
            
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${!annual ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200' : 'text-zinc-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${annual ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200' : 'text-zinc-500'}`}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Starter', desc: 'For hobbyists and side projects.', m: 0, a: 0, features: ['1 User', '3 Projects', 'Community Support', 'Deploy from Git'] },
              { name: 'Professional', desc: 'For growing teams and startups.', m: 49, a: 39, features: ['Up to 10 Users', 'Unlimited Projects', 'Priority Email Support', 'Custom Domains'], popular: true },
              { name: 'Enterprise', desc: 'For large organizations.', m: 'Custom', a: 'Custom', features: ['Unlimited Users', 'Dedicated Infrastructure', '24/7 Phone Support', 'SSO & Advanced RBAC'] },
            ].map((p) => {
              const price = annual ? p.a : p.m;
              return (
                <div key={p.name} className={`rounded-2xl border p-8 bg-white relative ${p.popular ? 'border-zinc-900 shadow-lg ring-1 ring-zinc-900' : 'border-zinc-200 shadow-sm'}`}>
                  {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 text-white text-xs font-semibold rounded-full tracking-wide uppercase">Most Popular</span>}
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-zinc-500 mb-6">{p.desc}</p>
                  <div className="mb-8">
                    {typeof price === 'number' ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-zinc-900">${price}</span>
                        <span className="text-zinc-500 font-medium">/month</span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-zinc-900">Custom</span>
                    )}
                  </div>
                  <button className={`w-full rounded-lg py-3 font-medium mb-8 transition-colors ${p.popular ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}>
                    {typeof price === 'number' ? 'Get Started' : 'Contact Sales'}
                  </button>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What forms of payment do you accept?', a: 'We accept all major credit cards including Visa, Mastercard, and American Express. For Enterprise plans, we can issue invoices payable by wire transfer.' },
            { q: 'Can I change my plan later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges or credits will be automatically applied to your account.' },
            { q: 'Is there a service level agreement (SLA)?', a: 'Yes. We guarantee 99.99% uptime on our Professional and Enterprise plans. Refer to our legal documentation for detailed SLA terms.' },
            { q: 'Do you offer SOC 2 compliance?', a: 'Yes, our platform is SOC 2 Type II certified. Security and compliance reports are available upon request for Enterprise customers.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left bg-white hover:bg-zinc-50 transition-colors"
              >
                <span className="font-semibold text-zinc-900">{item.q}</span>
                <span className={`text-zinc-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-900 p-12 md:p-16 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Ready to streamline your deployments?</h2>
          <p className="text-zinc-400 mb-8 text-lg max-w-2xl mx-auto">Join thousands of engineering teams building and shipping faster with NexaCloud.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="rounded-lg bg-white px-8 py-3.5 font-medium text-zinc-900 hover:bg-zinc-100 transition-all shadow-sm">
              Create an Account
            </a>
            <a href="#" className="rounded-lg border border-zinc-700 bg-zinc-800 px-8 py-3.5 font-medium text-white hover:bg-zinc-700 transition-all shadow-sm">
              Read the Docs
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-zinc-900 rounded-sm"></div>
            <span className="font-bold tracking-tight text-zinc-900">NexaCloud</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">System Status</a>
          </div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} NexaCloud Inc. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}