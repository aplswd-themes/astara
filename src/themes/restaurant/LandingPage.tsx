import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const heroImg = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop";
const galleryImages = [
  "https://images.unsplash.com/photo-1544025162-811114cd3543?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
];
const cardImages = [
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000",
];

const Header = () => (
  <motion.header 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white"
  >
    <div className="font-serif text-2xl tracking-widest uppercase">L'Étoile</div>
    <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-light">
      <a href="#menu" className="hover:opacity-60 transition-opacity">Menu</a>
      <a href="#philosophy" className="hover:opacity-60 transition-opacity">Philosophy</a>
      <a href="#reservations" className="hover:opacity-60 transition-opacity">Reservations</a>
    </nav>
    <button className="text-sm uppercase tracking-widest border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
      Book
    </button>
  </motion.header>
);

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950 flex flex-col items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={heroImg} alt="Fine dining" className="w-full h-full object-cover" />
      </motion.div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="overflow-hidden mb-2">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-light tracking-tight"
          >
            Taste the
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-light tracking-tight italic"
          >
            Sublime.
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-zinc-300 font-light tracking-widest uppercase text-sm max-w-md text-center"
        >
          A culinary journey transcending the ordinary.
        </motion.p>
      </div>
    </section>
  );
};

const MenuTree = () => {
  const courses = [
    { name: "Amuse-Bouche", desc: "Oyster emulsion, sea buckthorn, caviar" },
    { name: "First Course", desc: "Heirloom tomato water, basil oil, smoked burrata" },
    { name: "Main", desc: "Aged duck breast, fermented blackberry, endive" },
    { name: "Dessert", desc: "Wild meadow herbs, raw honey, frozen yoghurt" }
  ];

  return (
    <section id="menu" className="py-32 bg-[#0a0a0a] text-white relative">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-4 italic">The Tasting Menu</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-xs">An exploration of terroir</p>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-[50%] md:-translate-x-px flex flex-col gap-16 pb-16">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative pl-8 md:pl-0 md:w-[100%] ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:-ml-[100%]' : 'md:pl-12'}`}
            >
              <div className={`absolute top-1.5 w-3 h-3 rounded-full bg-zinc-300 -left-[6.5px] md:${idx % 2 === 0 ? '-right-[6px] left-auto' : '-left-[6px]'}`} />
              <h3 className="font-serif text-2xl mb-2">{course.name}</h3>
              <p className="text-zinc-400 font-light text-sm">{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryMarquee = () => {
  return (
    <section className="py-20 bg-zinc-950 overflow-hidden">
      <div className="flex gap-4 w-max animate-marquee">
        {[...galleryImages, ...galleryImages].map((img, idx) => (
          <div key={idx} className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] overflow-hidden flex-shrink-0">
            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
};

const PhilosophyBento = () => {
  return (
    <section id="philosophy" className="py-32 bg-zinc-100 text-zinc-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="font-serif text-5xl md:text-7xl">Our Philosophy</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
          <div className="group relative overflow-hidden rounded-sm md:col-span-2">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500 z-10" />
            <img src={cardImages[0]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:blur-sm" alt="Ingredients" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
              <h3 className="font-serif text-3xl mb-2">Pristine Sourcing</h3>
              <p className="font-light max-w-md">We work directly with local foragers and regenerative farms to secure the most exceptional ingredients available.</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-sm bg-zinc-900 text-white flex flex-col justify-center p-8">
             <h3 className="font-serif text-3xl mb-4 italic">Minimal Intervention</h3>
             <p className="text-zinc-400 font-light text-sm">Allowing nature's profound flavors to speak for themselves, guided by technique rather than obscured by it.</p>
          </div>

          <div className="group relative overflow-hidden rounded-sm md:col-span-3 h-[400px]">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-500 z-10" />
            <img src={cardImages[2]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:blur-sm" alt="Atmosphere" />
            <div className="absolute inset-0 z-20 p-12 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="font-serif text-4xl mb-4">An Immersive Atmosphere</h3>
              <p className="font-light max-w-xl">Every detail of the dining room has been curated to remove distraction and heighten the sensory experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChefBio = () => {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto group">
            <div className="absolute inset-0 bg-zinc-800 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1984&auto=format&fit=crop" 
              alt="Executive Chef" 
              className="relative z-10 w-full h-full object-cover grayscale"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-sm font-light tracking-widest uppercase text-zinc-500 mb-6">The Chef</h2>
          <h3 className="font-serif text-5xl md:text-7xl mb-8">Marcus <br/><span className="italic">Lumière</span></h3>
          <p className="text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
            "Cooking is not merely about sustenance; it is the most profound dialogue we can have with nature. Every ingredient carries the memory of the soil, the rain, and the seasons. Our responsibility is simply to listen."
          </p>
          <p className="text-zinc-500 font-light leading-relaxed mb-10 max-w-lg">
            With three Michelin stars and a career spanning the culinary capitals of the world, Chef Lumière brings his uncompromising vision of modern gastronomy to L'Étoile.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Signature_of_Gordon_Ramsay.svg/1280px-Signature_of_Gordon_Ramsay.svg.png" className="w-48 invert opacity-30" alt="Signature" />
        </div>
      </div>
    </section>
  );
};

const Reservations = () => {
  return (
    <section id="reservations" className="py-32 bg-[#0a0a0a] text-white border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-8">Reserve a Table</h2>
        <p className="text-zinc-400 font-light max-w-lg mx-auto mb-16">
          Reservations open exactly 60 days in advance at 10:00 AM EST. Due to our limited seating, we recommend booking promptly.
        </p>
        
        <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onSubmit={e => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Date</label>
            <input type="date" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors rounded-none appearance-none font-light" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Guests</label>
            <select className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors rounded-none appearance-none font-light">
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests (Private Room)</option>
            </select>
          </div>
          <div className="md:col-span-2 flex flex-col gap-2 mt-4">
            <button className="w-full bg-white text-black font-medium tracking-widest uppercase text-sm py-4 hover:bg-zinc-200 transition-colors">
              Find Availability
            </button>
          </div>
        </form>
        
        <p className="text-zinc-600 text-xs mt-8 font-light uppercase tracking-widest">
          For private events, please <a href="#" className="underline hover:text-white transition-colors">contact us directly</a>.
        </p>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black text-white pt-32 pb-12 px-8 overflow-hidden relative">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mb-32 relative z-10">
      <div className="mb-12 md:mb-0">
        <h4 className="uppercase tracking-widest text-xs text-zinc-500 mb-6">Location</h4>
        <p className="font-light text-zinc-300">123 Culinary Ave<br/>New York, NY 10001</p>
      </div>
      <div>
        <h4 className="uppercase tracking-widest text-xs text-zinc-500 mb-6">Contact</h4>
        <p className="font-light text-zinc-300">info@letoile.com<br/>+1 (212) 555-0199</p>
      </div>
      <div className="mt-12 md:mt-0">
        <h4 className="uppercase tracking-widest text-xs text-zinc-500 mb-6">Follow</h4>
        <div className="flex gap-4 font-light text-zinc-300">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Journal</a>
        </div>
      </div>
    </div>
    
    <div className="w-full text-center relative z-10">
      <h1 className="font-serif text-[12vw] leading-none tracking-tighter text-zinc-800 uppercase pointer-events-none select-none">
        L'Étoile
      </h1>
    </div>
    <div className="absolute bottom-6 left-0 w-full flex flex-col md:flex-row justify-between items-center px-8 z-20">
        <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4 md:mb-0 w-full md:w-1/3 text-left">
          &copy; {new Date().getFullYear()} Astara theme.
        </div>
        
        <div className="flex items-center justify-center gap-3 w-full md:w-1/3">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Creator</span>
          <div className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-white text-[11px] font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm uppercase tracking-widest cursor-pointer">
            <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"/></svg>
            aPLS Web Development
          </div>
        </div>
        
        <div className="hidden md:block w-full md:w-1/3 text-right text-[10px] text-zinc-500 uppercase tracking-widest">
          All Rights Reserved
        </div>
      </div>
  </footer>
);

export default function RestaurantLandingPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50 selection:bg-zinc-100 selection:text-zinc-900">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        html { scroll-behavior: smooth; }
      `}} />
      <Header />
      <main>
        <Hero />
        <MenuTree />
        <PhilosophyBento />
        <ChefBio />
        <GalleryMarquee />
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}
