export const globalNavLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    children: [
      { label: 'About (Main)', href: '/about' },
      { label: 'Minimalist v1', href: '/about-v1' },
      { label: 'Creative v2', href: '/about-v2' },
      { label: 'Dark Tech v3', href: '/about-v3' },
      { label: 'Editorial v4', href: '/about-v4' },
    ]
  },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'Services (Main)', href: '/services' },
      { label: 'Minimalist v1', href: '/services-v1' },
      { label: 'Creative v2', href: '/services-v2' },
      { label: 'Dark Tech v3', href: '/services-v3' },
      { label: 'Editorial v4', href: '/services-v4' },
    ]
  },
  { 
    label: 'Pricing', 
    href: '/pricing',
    children: [
      { label: 'Pricing (Main)', href: '/pricing' },
      { label: 'Minimalist v1', href: '/pricing-v1' },
      { label: 'Creative v2', href: '/pricing-v2' },
      { label: 'Dark Tech v3', href: '/pricing-v3' },
      { label: 'Editorial v4', href: '/pricing-v4' },
    ]
  },
  { label: 'Docs', href: '/docs' },
  { label: 'Contact', href: '/contact' },
];
