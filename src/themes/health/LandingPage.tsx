import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// --- Components ---

const GlassHeader = () => {
  return (
    <div className="fixed w-full top-6 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="pointer-events-auto flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-2xl border border-white/40 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-5xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-900 to-teal-500 flex items-center justify-center shadow-inner">
            <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-blue-950">AegisHealth</span>
        </div>
        <nav className="hidden md:flex gap-8 text-[13px] font-semibold uppercase tracking-widest text-blue-950/70">
          <a href="#services" className="hover:text-teal-600 transition-colors">Diagnostics</a>
          <a href="#journey" className="hover:text-teal-600 transition-colors">Care Protocol</a>
          <a href="#technology" className="hover:text-teal-600 transition-colors">Technology</a>
        </nav>
        <button className="px-6 py-2.5 text-[13px] uppercase tracking-wide font-bold text-white bg-blue-950 rounded-full hover:bg-teal-600 transition-colors shadow-md">
          Portal
        </button>
      </motion.header>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-teal-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-900/10 bg-white/50 backdrop-blur-md text-sm font-medium text-blue-900"
        >
          The Future of Preventative Care
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-blue-950 mb-8 leading-[1.1]">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="block"
          >
            Medicine,
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-700"
          >
            Engineered.
          </motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-blue-950/60 mb-10 font-light"
        >
          Advanced biometrics, continuous monitoring, and proactive interventions tailored precisely to your physiology.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-4 text-base font-semibold text-white bg-blue-950 rounded-full hover:bg-blue-900 hover:scale-105 transition-all shadow-[0_10px_40px_rgba(23,37,84,0.2)]">
            Begin Evaluation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = ["Comprehensive Biomarker Analysis", "•", "Continuous Glucose Monitoring", "•", "Genomic Sequencing", "•", "Cardiovascular Profiling", "•", "Neurological Assessments", "•"];
  
  return (
    <div className="py-6 border-y border-blue-900/5 bg-white overflow-hidden flex items-center">
      <motion.div 
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className={`text-sm tracking-widest uppercase font-semibold ${item === "•" ? "text-teal-600" : "text-blue-950/40"}`}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const BentoServices = () => {
  return (
    <section id="services" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-blue-950 mb-4">Precision Services</h2>
          <p className="text-xl text-blue-950/50 font-light max-w-xl">Clinical-grade diagnostics and protocols delivered with unprecedented exactness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Large */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-blue-900/5 p-8 md:p-12 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-bl from-teal-50 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mb-12">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-blue-950 mb-3">Advanced Diagnostics</h3>
                <p className="text-blue-950/60 font-light max-w-md leading-relaxed">High-resolution full-body MRI, multi-cancer early detection, and comprehensive blood panels measuring over 100 specific biomarkers.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-blue-950 p-8 md:p-12 shadow-sm hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-medium text-white mb-3">Genetic Mapping</h3>
              <p className="text-blue-100/70 font-light leading-relaxed text-sm">Whole genome sequencing to identify predispositions and inform preventative strategies.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-blue-900/5 p-8 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500"
          >
             <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-8">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             <h3 className="text-xl font-medium text-blue-950 mb-2">Metabolic Optimization</h3>
             <p className="text-blue-950/60 font-light text-sm">Real-time glucose and activity monitoring synced with clinical insights.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-blue-900/5 p-8 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 flex flex-col md:flex-row items-center gap-8"
          >
             <div className="flex-1">
               <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-8">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               </div>
               <h3 className="text-xl font-medium text-blue-950 mb-2">Tele-Protocol</h3>
               <p className="text-blue-950/60 font-light text-sm max-w-sm">24/7 access to your dedicated care team and instantaneous biometrics transmission via our proprietary app.</p>
             </div>
             <div className="w-full md:w-1/2 h-48 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden relative">
                {/* Abstract UI representation */}
                <div className="absolute inset-0 p-4 flex flex-col gap-3 opacity-60">
                  <div className="w-full h-8 bg-white rounded-lg shadow-sm" />
                  <div className="w-3/4 h-8 bg-white rounded-lg shadow-sm" />
                  <div className="w-full h-20 bg-white rounded-lg shadow-sm mt-auto" />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PatientJourneyTree = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: "Initial Baseline", desc: "A 4-hour comprehensive mapping of your physiological and biochemical state." },
    { title: "Algorithmic Analysis", desc: "Data is processed through our proprietary models to identify micro-variations." },
    { title: "Clinical Synthesis", desc: "Our board-certified longevity physicians interpret findings and design your protocol." },
    { title: "Continuous Integration", desc: "Wearables and quarterly lab updates adapt the protocol in real-time." }
  ];

  return (
    <section id="journey" className="py-32 bg-white" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-blue-950 mb-4">The Protocol</h2>
          <p className="text-xl text-blue-950/50 font-light">A systematic approach to extending healthspan.</p>
        </div>

        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 transform md:-translate-x-1/2" />
          
          {/* Animated active line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-teal-400 to-blue-600 transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(45,212,191,0.5)] origin-top rounded-full"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2" />
                
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-950 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-1 md:mt-0 z-20 shadow-lg" />
                
                <div className={`md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <div className="text-sm font-bold tracking-widest text-teal-600 mb-2">PHASE 0{idx + 1}</div>
                    <h4 className="text-2xl font-medium text-blue-950 mb-3">{step.title}</h4>
                    <p className="text-blue-950/60 font-light leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsMarquee = () => {
  const testimonials = [
    { text: "The level of precision and detail in their analysis is unmatched. It completely changed my approach to health.", author: "Sarah J." },
    { text: "AegisHealth uncovered metabolic markers that my regular doctor missed for years. Truly life-saving.", author: "Michael T." },
    { text: "The app interface combined with elite medical guidance makes optimizing my performance effortless.", author: "David L." },
    { text: "Finally, a healthcare experience that feels like it's from the future. The care team is incredible.", author: "Elena R." },
    { text: "I've never felt more understood as a patient. The data-driven approach removes all the guesswork.", author: "James W." }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-blue-950 mb-4">Patient Outcomes</h2>
      </div>

      <div className="flex w-full">
        <motion.div
          className="flex whitespace-nowrap gap-6 py-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div key={idx} className="w-[28rem] shrink-0 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-blue-900/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex text-teal-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-blue-950/80 font-medium text-lg whitespace-normal mb-6 leading-relaxed">"{testimonial.text}"</p>
              <p className="text-sm font-semibold text-blue-900">— {testimonial.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MembershipBento = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-blue-950 mb-4">Membership Tiers</h2>
          <p className="text-xl text-blue-950/50 font-light max-w-xl mx-auto">Select the protocol that matches your optimization goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Tier 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-slate-50 border border-slate-200 p-10 flex flex-col transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-blue-950 mb-2">Core Protocol</h3>
              <p className="text-blue-950/60 font-light text-sm">Essential biomarker tracking and foundational care.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-blue-950">$299</span>
                <span className="text-blue-950/50 font-light">/month</span>
              </div>
            </div>
            
            <ul className="space-y-4 flex-1 mb-10">
              {['Annual Baseline Blood Panel', 'Quarterly Health Review', 'App-Based Tracking', 'Direct Messaging with Care Team'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-blue-950/70 font-light">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 text-sm font-semibold text-blue-950 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
              Apply Now
            </button>
          </motion.div>

          {/* Tier 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-blue-950 p-10 flex flex-col relative overflow-hidden transition-all duration-300 shadow-2xl shadow-blue-900/20 ring-1 ring-blue-800"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            
            <div className="relative z-10">
              <div className="inline-block mb-6 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-xs font-semibold text-teal-300">
                RECOMMENDED
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-white mb-2">Advanced Protocol</h3>
                <p className="text-blue-100/60 font-light text-sm">Comprehensive longevity mapping and elite optimization.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">$899</span>
                  <span className="text-blue-100/50 font-light">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 flex-1 mb-10">
                {['Full-Body MRI & Cancer Screening', 'Whole Genome Sequencing', 'Continuous Glucose Monitor (CGM)', 'Quarterly Comprehensive Panels', 'Dedicated Performance Physician'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-blue-50/80 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-4 text-sm font-semibold text-blue-950 bg-white rounded-full hover:bg-blue-50 transition-colors">
                Apply for Advanced
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MobileAppShowcase = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative flex justify-center">
             <div className="absolute inset-0 bg-teal-200/30 blur-[80px] rounded-full w-3/4 h-3/4 mx-auto" />
             {/* Phone Mockup */}
             <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative z-10 w-72 h-[600px] bg-white rounded-[3rem] border-[8px] border-slate-900 shadow-2xl flex flex-col overflow-hidden"
             >
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-xl w-32 mx-auto z-20" />
                
                {/* App UI */}
                <div className="flex-1 bg-slate-50 pt-12 px-6 flex flex-col gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-950">Good morning,</h4>
                    <p className="text-sm text-blue-950/60">Your recovery score is optimal.</p>
                  </div>
                  
                  {/* Metric Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-blue-950/50 uppercase tracking-wider">Recovery</span>
                      <span className="text-teal-500 text-sm font-bold">94%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 w-[94%] rounded-full" />
                    </div>
                  </div>

                  {/* List items */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-semibold text-blue-950/50 uppercase tracking-wider mb-3">Today's Protocol</h5>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-4 items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                        <div className="w-10 h-10 rounded-lg bg-blue-50" />
                        <div className="flex-1">
                          <div className="h-3 w-20 bg-slate-200 rounded mb-2" />
                          <div className="h-2 w-32 bg-slate-100 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
             </motion.div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-blue-950 mb-6">Your Clinic,<br/>In Your Pocket.</h2>
            <p className="text-lg text-blue-950/60 font-light mb-10 max-w-lg">
              The AegisHealth App translates complex biomarker data into actionable daily protocols. Access your medical team, review lab results, and track your optimization journey seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-950 text-white rounded-xl hover:bg-blue-900 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.48.06 2.6.72 3.32 1.76-2.92 1.72-2.45 5.56.32 6.78-.66 1.63-1.47 3.23-2.31 4.39zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-[12vw] leading-none font-medium tracking-tighter text-white opacity-90 mix-blend-overlay">Aegis</h2>
          <div className="text-right pb-4 hidden md:block">
            <button className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-blue-950 transition-colors">
              &uarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <p className="text-blue-100/70 font-light max-w-sm text-lg leading-relaxed">
              Operating at the intersection of computational biology, advanced diagnostics, and clinical excellence.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-6 uppercase tracking-widest text-xs text-teal-400">Protocols</h5>
            <ul className="space-y-4 text-blue-100/50 text-sm font-light">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Executive Health</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Longevity Optimization</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Athletic Performance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-6 uppercase tracking-widest text-xs text-teal-400">Company</h5>
            <ul className="space-y-4 text-blue-100/50 text-sm font-light">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Science</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Locations</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-100/30 font-light uppercase tracking-widest">
          <p>© {new Date().getFullYear()} AegisHealth Technologies. All rights reserved.</p>
          {/* Creator Badge */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="text-sm text-gray-500 font-medium">Creator</span>
            <div className="px-3 py-1.5 rounded-full bg-black/90 border border-gray-700 text-white text-sm font-bold flex items-center gap-2 hover:bg-black transition-colors shadow-sm">
              <span className="text-emerald-400">✦</span>
              aPLS Web Development
            </div>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <div className="font-sans bg-slate-50 selection:bg-teal-200 selection:text-teal-900">
      <GlassHeader />
      <Hero />
      <Marquee />
      <BentoServices />
      <PatientJourneyTree />
      <TestimonialsMarquee />
      <MembershipBento />
      <MobileAppShowcase />
      <Footer />
    </div>
  );
};

export default LandingPage;
