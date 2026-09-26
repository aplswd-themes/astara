import React from 'react';

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <div className="fixed w-full top-6 z-50 px-6 pointer-events-none">
        <nav className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl border border-zinc-200 shadow-xl shadow-zinc-200/50 rounded-full h-16 flex items-center justify-between px-6 pointer-events-auto">
          <div className="text-xl font-black tracking-tight flex items-center gap-2">
            <div className="w-5 h-5 bg-indigo-600 rounded-full"></div>
            Agency.
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-500">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-indigo-600 transition-colors">Work</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </div>
          <a 
            href="/themes/agency/contact"
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40">
            Let's Talk
          </a>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-pink-500/20 to-orange-400/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8">
            Crafting digital experiences <br className="hidden md:block" /> that <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">define the future.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are a strategic design agency building premium brands, websites, and digital products for forward-thinking companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40">
              Start a project
            </button>
            <button className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full text-sm font-medium hover:border-indigo-200 hover:text-indigo-600 transition-colors">
              View our work
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-indigo-600 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee inline-block text-white font-extrabold text-3xl md:text-4xl tracking-widest uppercase">
          STRATEGY — DESIGN — DEVELOPMENT — MARKETING — STRATEGY — DESIGN — DEVELOPMENT — MARKETING — STRATEGY — DESIGN — DEVELOPMENT — MARKETING — 
        </div>
        <div className="inline-block text-white font-extrabold text-3xl md:text-4xl tracking-widest uppercase ml-4" aria-hidden="true">
          STRATEGY — DESIGN — DEVELOPMENT — MARKETING — STRATEGY — DESIGN — DEVELOPMENT — MARKETING — 
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              We believe in <span className="text-indigo-400">design</span> that makes a difference.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Our philosophy is rooted in the belief that great design is not just about aesthetics, but about solving real problems. We merge creativity with technical excellence to build products that resonate with users and drive business growth.
            </p>
            <div className="w-16 h-1 bg-indigo-600 rounded-full"></div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-xl"></div>
            <div className="relative bg-zinc-800 p-10 rounded-3xl border border-zinc-700 shadow-2xl">
              <div className="text-6xl text-indigo-500 mb-6">"</div>
              <p className="text-2xl font-medium leading-snug mb-6">
                Innovation happens at the intersection of bold creativity and meticulous engineering.
              </p>
              <div className="font-bold text-indigo-400">The Agency Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-100">
            {[
              { label: 'Projects Completed', value: '150+' },
              { label: 'Revenue Generated', value: '$500M+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Industry Awards', value: '25+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Expertise</h2>
            <p className="text-zinc-600 max-w-xl">Comprehensive digital solutions tailored to elevate your brand and drive meaningful growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Brand Strategy', desc: 'Positioning, messaging, and visual identity that resonates with your target audience.' },
              { title: 'Digital Design', desc: 'Beautiful, intuitive user interfaces and experiences for web and mobile applications.' },
              { title: 'Development', desc: 'Robust, scalable, and performant technical solutions built with modern frameworks.' }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
                <div className="w-12 h-12 rounded-full bg-indigo-100 mb-6 flex items-center justify-center">
                  <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Process</h2>
            <p className="text-zinc-600 max-w-xl">A proven methodology that transforms complex challenges into elegant solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Discovery', desc: 'We immerse ourselves in your business, understanding your goals, audience, and market.' },
              { step: '02', title: 'Design', desc: 'Translating insights into intuitive user experiences and striking visual identities.' },
              { step: '03', title: 'Development', desc: 'Building robust, scalable solutions using cutting-edge technologies.' },
              { step: '04', title: 'Launch', desc: 'Rigorous testing, smooth deployment, and continuous optimization.' }
            ].map((phase, i) => (
              <div key={i} className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600 mb-6 shadow-sm">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
            <div className="hidden md:block absolute top-8 left-8 right-8 h-[1px] bg-zinc-200 z-0"></div>
          </div>
        </div>
      </section>

      {/* Modern Bento Grid Capabilities Section */}
      <section className="py-32 px-6 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-400 mb-4">Core Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Built for scale, designed to convert.</h3>
            <p className="text-lg text-zinc-400">Our multidisciplinary approach combines behavioral science with cutting-edge engineering.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento Item 1 */}
            <div className="md:col-span-2 relative rounded-[2.5rem] bg-zinc-900 border border-zinc-800 p-10 overflow-hidden group hover:border-indigo-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-4">Enterprise Architecture</h4>
                  <p className="text-zinc-400 max-w-md">We architect systems that handle millions of users effortlessly, focusing on security, latency, and absolute reliability.</p>
                </div>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="relative rounded-[2.5rem] bg-zinc-900 border border-zinc-800 p-10 overflow-hidden group hover:border-purple-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Global Reach</h4>
                  <p className="text-zinc-400">Edge-network deployment for instant load times anywhere.</p>
                </div>
              </div>
            </div>

            {/* Bento Item 3 */}
            <div className="relative rounded-[2.5rem] bg-indigo-600 p-10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2)_0,transparent_60%)]"></div>
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <h4 className="text-3xl font-bold leading-tight">Ready to transform your digital presence?</h4>
                <a href="#contact" className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                  Let's Discuss <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Bento Item 4 */}
            <div className="md:col-span-2 relative rounded-[2.5rem] bg-zinc-900 border border-zinc-800 p-10 overflow-hidden group hover:border-pink-500/50 transition-colors">
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full group-hover:bg-pink-500/20 transition-all duration-700"></div>
              <div className="relative z-10 h-full flex flex-col justify-between md:flex-row md:items-end gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Data-Driven Design</h4>
                  <p className="text-zinc-400 max-w-md">Every pixel is informed by user behavior, analytics, and A/B testing to ensure maximum conversion rates.</p>
                </div>
                <div className="flex -space-x-4">
                   <img src="https://i.pravatar.cc/150?u=a" alt="Team member 1" className="w-12 h-12 rounded-full border-2 border-zinc-900" />
                   <img src="https://i.pravatar.cc/150?u=b" alt="Team member 2" className="w-12 h-12 rounded-full border-2 border-zinc-900" />
                   <img src="https://i.pravatar.cc/150?u=c" alt="Team member 3" className="w-12 h-12 rounded-full border-2 border-zinc-900" />
                   <div className="w-12 h-12 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs font-bold">+12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Portfolio Section */}
      <section id="work" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-600 mb-4">Selected Work</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 leading-none">
                Pioneering digital <br/>products that matter.
              </h3>
            </div>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-indigo-600/30">
              Explore All Case Studies
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="space-y-16 md:space-y-32">
            {/* Case Study 1 */}
            <div className="group flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-3/5 order-2 md:order-1">
                <div className="relative rounded-[2rem] overflow-hidden bg-zinc-100 aspect-[4/3] shadow-2xl shadow-zinc-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Fintech Dashboard" />
                </div>
              </div>
              <div className="w-full md:w-2/5 order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-600">Fintech</span>
                  <span className="text-sm text-zinc-400">2026</span>
                </div>
                <h4 className="text-4xl md:text-5xl font-extrabold mb-6 group-hover:text-indigo-600 transition-colors tracking-tight">Nexa Financial</h4>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">A complete reimagining of the modern banking dashboard, focusing on institutional-grade security wrapped in consumer-grade UX.</p>
                <ul className="space-y-3 mb-10 text-sm font-medium text-zinc-500">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span> User Research & Strategy</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span> UI/UX Design System</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span> Next.js Development</li>
                </ul>
                <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all uppercase tracking-wider text-sm">
                  View Case Study <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-2/5">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-600">Healthcare</span>
                  <span className="text-sm text-zinc-400">2025</span>
                </div>
                <h4 className="text-4xl md:text-5xl font-extrabold mb-6 group-hover:text-teal-600 transition-colors tracking-tight">Vital Health</h4>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">Telemedicine platform that connects patients with specialists instantly, featuring real-time diagnostics and secure messaging.</p>
                <ul className="space-y-3 mb-10 text-sm font-medium text-zinc-500">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Brand Identity</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Mobile App Design</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> WebRTC Integration</li>
                </ul>
                <a href="#" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-4 transition-all uppercase tracking-wider text-sm">
                  View Case Study <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
              <div className="w-full md:w-3/5">
                <div className="relative rounded-[2rem] overflow-hidden bg-zinc-100 aspect-[4/3] shadow-2xl shadow-zinc-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Healthcare App" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-12">Powered By Next-Gen Tech</h2>
        </div>
        <div className="relative flex w-full">
          <div className="animate-marquee flex gap-16 md:gap-24 items-center opacity-70 grayscale whitespace-nowrap px-8">
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                {['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind', 'Figma', 'Framer Motion', 'Vercel'].map((tech, i) => (
                  <div key={tech + i} className="text-2xl md:text-3xl font-black text-zinc-800 tracking-tighter">
                    {tech}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Leadership Team</h2>
            <p className="text-zinc-600 max-w-xl mx-auto text-lg">The visionaries driving our creative and technical excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Rivera', role: 'Design Director', color: 'from-indigo-600 to-purple-600', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' },
              { name: 'Jordan Lee', role: 'Technical Lead', color: 'from-emerald-500 to-teal-600', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
              { name: 'Taylor Swift', role: 'Head of Strategy', color: 'from-orange-500 to-pink-600', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop' }
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-zinc-200/50">
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-40 mix-blend-multiply group-hover:opacity-60 transition-opacity duration-700`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-black mb-1 tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{member.name}</h3>
                  <p className="text-white/80 font-medium tracking-widest uppercase text-xs translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-20 text-center text-zinc-900">Client Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "The team delivered beyond our expectations. Their strategic approach to our brand overhaul was transformative.", author: "Sarah Jenkins", role: "CMO, TechFlow", rotation: "-rotate-2", color: "bg-zinc-950", image: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
              { quote: "Outstanding attention to detail and a seamless process from start to finish. Highly recommended.", author: "Marcus Chen", role: "Founder, Innovate", rotation: "rotate-2 translate-y-4 md:translate-y-8", color: "bg-indigo-600", image: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
              { quote: "They didn't just build a website; they created a scalable digital platform that powers our business.", author: "Elena Rodriguez", role: "CEO, Nexa", rotation: "-rotate-1 md:translate-y-4", color: "bg-zinc-900", image: "https://i.pravatar.cc/150?u=a04258a2462d826712d" }
            ].map((testimonial, i) => (
              <div key={i} className={`p-10 rounded-3xl ${testimonial.color} text-white shadow-2xl shadow-zinc-900/20 transform transition-transform hover:scale-105 ${testimonial.rotation}`}>
                <div className="text-white/20 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>
                <p className="text-xl md:text-2xl font-medium leading-snug mb-10 text-white/90">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
                  <div>
                    <div className="font-bold text-lg">{testimonial.author}</div>
                    <div className="text-sm font-medium text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
          <p className="text-zinc-600">Flexible engagements designed to fit your project needs.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-white border border-zinc-200">
            <h3 className="text-2xl font-bold mb-2">Project Based</h3>
            <p className="text-zinc-500 mb-6">Perfect for defined scopes and clear deliverables.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">Custom</span>
            </div>
            <ul className="space-y-4 mb-10">
              {['Fixed timeline', 'Dedicated team', 'Weekly progress updates', 'Post-launch support'].map((feature, i) => (
                <li key={i} className="flex items-center text-zinc-700">
                  <span className="mr-3 text-zinc-900">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white border border-zinc-200 text-zinc-900 py-3 rounded-xl font-medium hover:bg-zinc-50 transition-colors">
              Get an estimate
            </button>
          </div>
          <div className="p-10 rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-white text-indigo-600 text-xs font-bold px-4 py-1 rounded-bl-xl">POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Retainer</h3>
            <p className="text-indigo-200 mb-6">Continuous design and development partnership.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">From $5k</span>
              <span className="text-indigo-200">/mo</span>
            </div>
            <ul className="space-y-4 mb-10">
              {['Flexible priorities', 'Fast turnaround', 'Pause or cancel anytime', 'Direct Slack channel'].map((feature, i) => (
                <li key={i} className="flex items-center text-indigo-100">
                  <span className="mr-3 text-white">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-medium hover:bg-indigo-50 transition-colors shadow-lg">
              Book a call
            </button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-12">Recognized By</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            {['Awwwards', 'CSS Design Awards', 'Webby Awards', 'Fast Company', 'Wired'].map((award, i) => (
              <div key={i} className="text-2xl md:text-3xl font-extrabold text-zinc-800 tracking-tight">
                {award}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long does a typical project take?', a: 'Depending on the scope, most web projects take between 4 to 8 weeks from kickoff to launch.' },
              { q: 'Do you work with startups?', a: 'Absolutely. We love partnering with early-stage companies to help them establish their brand and build their initial products.' },
              { q: 'What technologies do you use?', a: 'We specialize in modern stacks like React, Next.js, Astro, Tailwind CSS, and various headless CMS platforms.' },
              { q: 'Can you help with post-launch maintenance?', a: 'Yes, we offer retainer packages for ongoing support, feature additions, and optimization.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200">
                <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
                <p className="text-zinc-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Insights</h2>
              <p className="text-zinc-600 max-w-xl">Thoughts on design, technology, and building digital products.</p>
            </div>
            <a href="#" className="hidden md:block text-sm font-medium hover:text-zinc-600 transition-colors">Read all articles &rarr;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'The Future of AI in Product Design', category: 'Design', date: 'Oct 12, 2026', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
              { title: 'Why Astro is the Ultimate Choice for Content Sites', category: 'Engineering', date: 'Sep 28, 2026', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
              { title: 'Building a Brand that Scales with Your Business', category: 'Strategy', date: 'Sep 15, 2026', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop' }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] rounded-3xl bg-zinc-100 mb-6 overflow-hidden relative shadow-lg shadow-zinc-200/50">
                  <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-500 mb-3">
                  <span className="font-bold tracking-widest uppercase text-indigo-600 text-[11px] bg-indigo-50 px-2 py-1 rounded-md">{post.category}</span>
                  <span>&bull;</span>
                  <span className="font-medium text-zinc-400">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 leading-snug group-hover:text-indigo-600 transition-colors">{post.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-indigo-600 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Ready to build something extraordinary?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Our team is ready to tackle your next big challenge.
          </p>
          <a 
            href="/themes/agency/contact"
            className="inline-block bg-white text-indigo-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20 hover:shadow-indigo-900/40">
            Start Your Project Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white pt-24 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-black tracking-tighter mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-indigo-500 inline-block"></span>
                Agency.
              </div>
              <p className="text-zinc-400 max-w-sm mb-8 text-lg leading-relaxed">
                Creating digital products and brand experiences that empower forward-thinking companies.
              </p>
              <div className="flex gap-4">
                 {/* Social Circles */}
                 {['Tw', 'In', 'Ig', 'Dr'].map((social, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 font-medium hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all">
                      {social}
                    </a>
                 ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-indigo-400 transition-colors">Work</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">hello@agency.com</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">+1 (555) 123-4567</a></li>
                <li className="pt-2">123 Creative Studio<br/>New York, NY 10012</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 font-medium">
            <p>&copy; {new Date().getFullYear()} aPLS Web Development. All rights reserved.</p>
          {/* Creator Badge */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="text-sm text-gray-500 font-medium">Creator</span>
            <div className="px-3 py-1.5 rounded-full bg-black/90 border border-gray-700 text-white text-sm font-bold flex items-center gap-2 hover:bg-black transition-colors shadow-sm">
              <span className="text-emerald-400">✦</span>
              aPLS Web Development
            </div>
          </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
