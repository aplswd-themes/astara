/**
 * Theme registry — single source of truth for all available themes.
 * Add a new entry here to register a new theme in the gallery.
 */

export interface ThemeMeta {
  /** URL-safe slug, matches folder name under src/themes/ */
  slug: string;
  /** Display name shown in gallery */
  name: string;
  /** Short description for gallery card */
  description: string;
  /** Niche category tag */
  niche: string;
  /** Accent color shown in gallery card (hex) */
  previewColor: string;
  /** Emoji icon for quick visual identification */
  icon: string;
  /** Tags for filtering */
  tags: string[];
}

export const themes: ThemeMeta[] = [
  {
    slug: 'agency',
    name: 'Forma Studio',
    description: 'Bold creative agency homepage with portfolio grid, services, and team section.',
    niche: 'Agency / Creative',
    previewColor: '#f97316',
    icon: '🎨',
    tags: ['agency', 'creative', 'portfolio', 'bold', 'studio'],
  },
  {
    slug: 'ecommerce',
    name: 'Shopfront',
    description: 'Clean eCommerce homepage with product hero, best sellers, and trust signals.',
    niche: 'eCommerce / Store',
    previewColor: '#10b981',
    icon: '🛒',
    tags: ['ecommerce', 'store', 'product', 'shop', 'retail'],
  },
  {
    slug: 'health',
    name: 'Vitality',
    description: 'Calm health & wellness homepage with services, team, and appointment CTA.',
    niche: 'Health & Wellness',
    previewColor: '#06b6d4',
    icon: '💊',
    tags: ['health', 'wellness', 'clinic', 'medical', 'spa'],
  },
  {
    slug: 'restaurant',
    name: 'Saveur',
    description: 'Elegant restaurant homepage with food hero, menu highlights, and reservation.',
    niche: 'Restaurant / Food',
    previewColor: '#dc2626',
    icon: '🍽️',
    tags: ['restaurant', 'food', 'cafe', 'dining', 'menu'],
  },
  {
    slug: 'aerospace',
    name: 'AstroSpace',
    description: 'Next-generation aerospace technology theme featuring orbital telemetry, launch capabilities, and futuristic bento grids.',
    niche: 'Aerospace / Deep Tech',
    previewColor: '#06b6d4',
    icon: '🚀',
    tags: ['aerospace', 'tech', 'science', 'space', 'defense'],
  }
];

export function getTheme(slug: string): ThemeMeta | undefined {
  return themes.find(t => t.slug === slug);
}
