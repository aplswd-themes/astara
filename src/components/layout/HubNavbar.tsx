import React, { useState } from 'react';

export const HubNavbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: '5 Niche Themes', href: '#themes', badge: 'New' },
    { label: 'Architecture', href: '#architecture-tree' },
    { label: 'Production Tree', href: '#ecosystem-tree' },
    { label: 'Live Sandbox', href: '#interactive-preview' },
    { label: 'Inner Pages', href: '#pages', badge: '11+' },
    { label: 'Docs', href: '/docs', isLive: true },
  ];

  const themesList = [
    { name: 'NexaCloud SaaS', href: '/themes/saas', icon: '⚡' },
    { name: 'Forma Studio Agency', href: '/themes/agency', icon: '✦' },
    { name: 'Shopfront eCommerce', href: '/themes/ecommerce', icon: '🛒' },
    { name: 'Vitality Health', href: '/themes/health', icon: '🏥' },
    { name: 'Saveur Gastronomy', href: '/themes/restaurant', icon: '🍽️' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-18 flex items-center justify-between gap-4">
        {/* Logo & Version Pill */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <a href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-black text-white text-lg sm:text-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              ⬡
            </span>
            <span className="text-lg sm:text-xl font-black tracking-tight text-white whitespace-nowrap">
              Asta<span className="text-indigo-400">ra</span>
            </span>
          </a>
          <span className="hidden xl:inline-block text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-semibold whitespace-nowrap">
            v2.0 Pro
          </span>
        </div>

        {/* Desktop Navigation Links — Never wrap, clean spacing */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:text-white transition-colors flex items-center gap-1.5 py-1"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 leading-none">
                  {link.badge}
                </span>
              )}
              {link.isLive && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action Group */}
        <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
          <a
            href="/docs"
            className="hidden md:inline-flex text-xs font-semibold px-3 py-2 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-zinc-700 hover:text-white transition-all whitespace-nowrap"
          >
            Component Docs
          </a>
          <a
            href="#themes"
            className="text-xs font-semibold px-3 py-2 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-zinc-700 hover:text-white transition-all whitespace-nowrap"
          >
            Explore Themes
          </a>
          <a
            href="/downloads/themekit-astro-theme.zip"
            download="themekit-astro-theme.zip"
            className="text-xs font-bold px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-95 shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap"
            title="Download complete Astro framework source code"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download</span>
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/downloads/themekit-astro-theme.zip"
            download="themekit-astro-theme.zip"
            className="sm:hidden text-xs font-bold px-2.5 py-1.5 rounded-lg bg-indigo-600 text-white flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>ZIP</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl px-4 py-5 animate-fade-in shadow-2xl">
          <div className="space-y-1 mb-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {link.badge}
                  </span>
                )}
                {link.isLive && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Live
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-850 mb-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">
              Instant Theme Switcher
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {themesList.map((t) => (
                <a
                  key={t.href}
                  href={t.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900/60 border border-zinc-850 hover:border-indigo-500 hover:text-white transition-all"
                >
                  <span>{t.icon}</span>
                  <span>{t.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-850 flex flex-col gap-2.5">
            <a
              href="/downloads/themekit-astro-theme.zip"
              download="themekit-astro-theme.zip"
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Master Bundle ZIP (294 KB)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
