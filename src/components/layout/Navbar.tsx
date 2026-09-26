import { useState } from 'react';
import { cn } from '../../lib/utils';

/**
 * Navbar component
 * ─────────────────
 * Sticky top navigation with logo, nav links, CTA button, and mobile hamburger.
 * Adapts to light/dark themes via CSS custom properties.
 *
 * Props:
 * @prop logo      - Site name or logo text
 * @prop links     - Array of { label, href } navigation items
 * @prop ctaLabel  - CTA button label (optional)
 * @prop ctaHref   - CTA button href (optional)
 * @prop dark      - Use dark background navbar (for dark-theme pages)
 *
 * @example
 * <Navbar
 *   logo="NexaCloud"
 *   links={[{ label: 'Features', href: '#features' }, { label: 'Pricing', href: '#pricing' }]}
 *   ctaLabel="Start Free Trial"
 *   ctaHref="#signup"
 *   dark
 * />
 */

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; }[];
}

interface NavbarProps {
  logo?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  dark?: boolean;
  logoHref?: string;
  downloadHref?: string;
  downloadLabel?: string;
}

export function Navbar({
  logo = 'Brand',
  links = [],
  ctaLabel,
  ctaHref = '#',
  dark = false,
  logoHref = '/',
  downloadHref = '/downloads/themekit-astro-theme.zip',
  downloadLabel = 'Download Code',
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b backdrop-blur-md',
        dark
          ? 'border-[var(--color-border)] bg-[var(--color-bg)]/90'
          : 'border-[var(--color-border)] bg-white/90',
      )}
    >
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href={logoHref}
          className="text-xl font-bold text-[var(--color-text)] tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-[var(--color-primary)]">{logo.slice(0, 1)}</span>
          {logo.slice(1)}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <li key={link.href} className={link.children ? "relative group" : ""}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-[var(--radius-md)] text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)] transition-colors whitespace-nowrap inline-flex items-center gap-1"
              >
                {link.label}
                {link.children && (
                  <svg className="w-3 h-3 text-[var(--color-text-muted)] group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              
              {/* Dropdown Menu */}
              {link.children && (
                <div className="absolute top-full left-0 mt-1 w-48 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl shadow-black/5 p-1.5 flex flex-col gap-0.5 relative before:absolute before:inset-x-0 before:-top-4 before:h-4 before:bg-transparent">
                    {link.children.map(child => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors block"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
          {ctaLabel && (
            <a
              href={ctaHref}
              className="px-4 py-2 text-xs font-bold rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-dark)] transition-colors shadow-md whitespace-nowrap"
            >
              {ctaLabel}
            </a>
          )}
          <a
            href={downloadHref}
            download={downloadHref.split('/').pop()}
            className="group px-4 py-2 text-xs font-semibold rounded-full bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center gap-2 shadow-sm ring-1 ring-black/5 whitespace-nowrap"
            title={`${downloadLabel} (.ZIP)`}
          >
            <svg className="w-3.5 h-3.5 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{downloadLabel}</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-muted)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 pb-4 h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map(link => (
              <li key={link.href} className="flex flex-col">
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (!link.children) setOpen(false);
                  }}
                  className="block px-4 py-2.5 rounded-[var(--radius-md)] text-sm font-bold text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)] transition-colors"
                >
                  {link.label}
                </a>
                {link.children && (
                  <ul className="flex flex-col pl-6 pr-4 pb-2 gap-1 border-l-2 border-[var(--color-border)] ml-6 mt-1">
                    {link.children.map(child => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)] transition-colors"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {ctaLabel && (
              <li className="mt-4">
                <a
                  href={ctaHref}
                  className="block text-center px-5 py-3 text-sm font-bold rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  {ctaLabel}
                </a>
              </li>
            )}
            <li className="mt-2">
              <a
                href={downloadHref}
                download={downloadHref.split('/').pop()}
                className="group w-full text-center px-5 py-3 text-sm font-bold rounded-full bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 shadow-sm ring-1 ring-black/5"
              >
                <svg className="w-4 h-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{downloadLabel}</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
