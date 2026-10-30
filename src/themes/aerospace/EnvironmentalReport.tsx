import React, { useEffect, useState } from 'react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" /></svg>
        </div>
        <a href="/themes/aerospace" className="text-slate-900 font-bold tracking-tight hover:opacity-80">Aero<span className="text-sky-600">Dynamics</span></a>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        <a href="/themes/aerospace" className="hover:text-sky-600 transition-colors">Home</a>
        <a href="#" className="text-emerald-600 transition-colors">Environmental Report</a>
      </div>
      <button className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
        Request Quote
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="pt-24 pb-12 bg-slate-900 text-slate-400 border-t border-slate-800 relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-bold mb-4">
            <div className="w-6 h-6 rounded bg-sky-600 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" /></svg>
            </div>
            AeroDynamics
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-6">Pioneering the next era of global aviation and atmospheric defense.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm">Solutions</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-sky-400">Charter Fleet</a></li>
            <li><a href="#" className="hover:text-sky-400">Defense</a></li>
            <li><a href="#" className="hover:text-sky-400">MRO Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-sky-400">About Us</a></li>
            <li><a href="#" className="hover:text-sky-400">Careers</a></li>
            <li><a href="#" className="hover:text-sky-400">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm">Compliance</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-sky-400">AS9100</a></li>
            <li><a href="#" className="hover:text-sky-400">ISO 9001</a></li>
            <li><a href="#" className="hover:text-sky-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
        <p>&copy; 2026 Astara theme.</p>
        
        {/* Creator Badge */}
        <div className="flex items-center gap-3">
          <span className="text-slate-500">Creator</span>
          <div className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-white font-bold flex items-center gap-2 hover:bg-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <svg className="w-3 h-3 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"/></svg>
            aPLS Web Development
          </div>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>

    </div>
  </footer>
);

export default function EnvironmentalReport() {
  const [isVisible, setIsVisible] = useState(false);
  const [chartProgress, setChartProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setChartProgress(100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-emerald-500/30">
      {/* Ambient Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-[40%] right-[20%] w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,1)] animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-[60%] left-[15%] w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,1)] animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className={`max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="/themes/aerospace" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-emerald-600 transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </a>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">2026 Public Report</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
              Project Emerald: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">Zero Emissions by 2030.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-16">
              As the world's leading aerospace manufacturer, AeroDynamics is committing $4.2 Billion to restructure our global supply chain, convert our fleet to Sustainable Aviation Fuel (SAF), and pioneer the first fully electric short-haul commercial aircraft.
            </p>
          </div>

          {/* Animated Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className={`p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-200 cursor-default transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-4xl font-black text-emerald-600 mb-2">-80%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Carbon Footprint</div>
            </div>
            <div className={`p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-200 cursor-default transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-4xl font-black text-sky-600 mb-2">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">SAF Integration</div>
            </div>
            <div className={`p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-200 cursor-default transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-4xl font-black text-indigo-600 mb-2">2028</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Electric Taxiing</div>
            </div>
          </div>

          {/* Chart Section */}
          <div className={`mb-16 p-8 md:p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full"></div>
            
            <h3 className="text-2xl font-bold mb-2">Emission Reduction Timeline</h3>
            <p className="text-slate-400 text-sm mb-12">Projected CO2 equivalent (Mt) reduction across the global fleet.</p>

            <div className="space-y-6 relative z-10">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  <span>2020 Baseline</span>
                  <span>14.2 Mt</span>
                </div>
                <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-600 rounded-full w-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                  <span>2026 Current</span>
                  <span>8.4 Mt</span>
                </div>
                <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full transition-all duration-1500 ease-out" style={{ width: chartProgress ? '60%' : '0%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">
                  <span>2030 Target</span>
                  <span>2.1 Mt</span>
                </div>
                <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full transition-all duration-1500 delay-500 ease-out" style={{ width: chartProgress ? '15%' : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`prose prose-lg prose-slate max-w-none transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3>A Sustainable Horizon</h3>
            <p>
              Traditional aviation relies heavily on kerosene-based fuels. Our initiative replaces this entirely with <strong>Sustainable Aviation Fuel (SAF)</strong>, which reduces lifecycle emissions by up to 80%.
            </p>
            <p>
              By investing in advanced aerodynamics—like our blended-wing body designs—we've drastically reduced drag and increased fuel efficiency. The skies of tomorrow will be quieter, cleaner, and faster.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
