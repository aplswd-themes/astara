import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      {/* Navbar */}
      <div className="fixed w-full top-6 z-50 px-6 pointer-events-none">
        <nav className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl border border-zinc-200 shadow-xl shadow-zinc-200/50 rounded-full h-16 flex items-center justify-between px-6 pointer-events-auto">
          <a href="/themes/agency" className="text-xl font-black tracking-tight flex items-center gap-2">
            <div className="w-5 h-5 bg-indigo-600 rounded-full"></div>
            Agency.
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-500">
            <a href="/themes/agency#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="/themes/agency#work" className="hover:text-indigo-600 transition-colors">Work</a>
            <a href="/themes/agency#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="/themes/agency#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </div>
          <a 
            href="/themes/agency/contact"
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40">
            Let's Talk
          </a>
        </nav>
      </div>

      {/* Contact Form Section */}
      <section className="flex-1 pt-40 pb-24 px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500/20 to-orange-400/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mt-12">
          
          {/* Text Side */}
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
              Let's create something <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">extraordinary.</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, we're ready to listen.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-zinc-500 text-sm">Mon-Fri from 9am to 6pm EST.</p>
                  <p className="font-semibold mt-1 text-indigo-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-zinc-500 text-sm">We'll get back to you within 24 hours.</p>
                  <p className="font-semibold mt-1 text-purple-600">hello@agency.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Visit Us</h4>
                  <p className="text-zinc-500 text-sm">Coffee is on us at our headquarters.</p>
                  <p className="font-semibold mt-1 text-pink-600">123 Creative Studio, NY 10012</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-900/5 border border-zinc-100">
            <h3 className="text-2xl font-bold tracking-tight mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">First Name</label>
                  <input type="text" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Last Name</label>
                  <input type="text" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                <input type="email" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Details</label>
                <textarea rows={5} required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your goals, budget, and timeline..."></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white rounded-xl px-4 py-4 text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white pt-24 pb-10 px-6 mt-auto">
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
                <li><a href="/themes/agency#about" className="hover:text-indigo-400 transition-colors">About</a></li>
                <li><a href="/themes/agency#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
                <li><a href="/themes/agency#work" className="hover:text-indigo-400 transition-colors">Work</a></li>
                <li><a href="/themes/agency#careers" className="hover:text-indigo-400 transition-colors">Careers</a></li>
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

export default ContactPage;
