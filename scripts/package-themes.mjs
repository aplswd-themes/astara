import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import os from 'node:os';

const root = process.cwd();
const downloadsDir = path.join(root, 'public', 'downloads');

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Create Full Multi-Theme Bundle
console.log('Packaging Full Multi-Theme System...');
const fullTemp = fs.mkdtempSync(path.join(os.tmpdir(), 'themekit-full-'));
copyDir(path.join(root, 'src'), path.join(fullTemp, 'src'));
fs.mkdirSync(path.join(fullTemp, 'public'), { recursive: true });

for (const item of fs.readdirSync(path.join(root, 'public'))) {
  if (item !== 'downloads') {
    const itemPath = path.join(root, 'public', item);
    if (fs.statSync(itemPath).isDirectory()) {
      copyDir(itemPath, path.join(fullTemp, 'public', item));
    } else {
      fs.copyFileSync(itemPath, path.join(fullTemp, 'public', item));
    }
  }
}

const rootFiles = ['astro.config.mjs', 'package.json', 'package-lock.json', 'tsconfig.json', 'README.md', '.gitignore'];
for (const file of rootFiles) {
  const fPath = path.join(root, file);
  if (fs.existsSync(fPath)) {
    fs.copyFileSync(fPath, path.join(fullTemp, file));
  }
}

const fullZip = path.join(downloadsDir, 'themekit-astro-theme.zip');
if (fs.existsSync(fullZip)) fs.unlinkSync(fullZip);
execSync(`tar -a -cf "${fullZip}" *`, { cwd: fullTemp });
fs.rmSync(fullTemp, { recursive: true, force: true });
console.log(`✓ Full Bundle: themekit-astro-theme.zip (${(fs.statSync(fullZip).size / 1024).toFixed(1)} KB)`);

// 2. Create Standalone Packages for Each Individual Theme
const themes = [
  {
    slug: 'saas',
    name: 'NexaCloud SaaS Theme',
    desc: 'Modern edge-native SaaS and tech startup landing page with pricing, features, and dark hero.'
  },
  {
    slug: 'agency',
    name: 'Forma Studio Agency Theme',
    desc: 'Award-winning creative agency and studio landing page with editorial layout and portfolio slider.'
  },
  {
    slug: 'ecommerce',
    name: 'Shopfront eCommerce Theme',
    desc: 'High-converting eCommerce and curated lifestyle store landing page with product grid and trust signals.'
  },
  {
    slug: 'health',
    name: 'Vitality Health Theme',
    desc: 'Modern healthcare, longevity clinic, and wellness practice landing page with specialties matrix.'
  },
  {
    slug: 'restaurant',
    name: 'Saveur Gastronomy Theme',
    desc: 'Michelin 3-star fine dining and gastronomy landing page with tasting menu and private salon booking.'
  }
];

const basePkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

for (const t of themes) {
  console.log(`Packaging standalone ${t.name}...`);
  const themeTemp = fs.mkdtempSync(path.join(os.tmpdir(), `themekit-${t.slug}-`));

  // Copy shared code
  const srcDir = path.join(themeTemp, 'src');
  fs.mkdirSync(srcDir, { recursive: true });
  copyDir(path.join(root, 'src', 'components'), path.join(srcDir, 'components'));
  copyDir(path.join(root, 'src', 'layouts'), path.join(srcDir, 'layouts'));
  copyDir(path.join(root, 'src', 'lib'), path.join(srcDir, 'lib'));
  copyDir(path.join(root, 'src', 'styles'), path.join(srcDir, 'styles'));

  // Copy public assets (exclude downloads)
  const pubDir = path.join(themeTemp, 'public');
  fs.mkdirSync(pubDir, { recursive: true });
  for (const item of fs.readdirSync(path.join(root, 'public'))) {
    if (item !== 'downloads') {
      const itemPath = path.join(root, 'public', item);
      if (fs.statSync(itemPath).isDirectory()) {
        copyDir(itemPath, path.join(pubDir, item));
      } else {
        fs.copyFileSync(itemPath, path.join(pubDir, item));
      }
    }
  }

  // Setup src/pages
  const pagesDir = path.join(srcDir, 'pages');
  fs.mkdirSync(pagesDir, { recursive: true });

  // Read the theme index file and convert relative imports: ../../ -> ../
  const themeSourceFile = path.join(root, 'src', 'themes', t.slug, 'index.astro');
  let themeContent = fs.readFileSync(themeSourceFile, 'utf8');
  themeContent = themeContent
    .replaceAll('../../layouts/', '../layouts/')
    .replaceAll('../../components/', '../components/')
    .replaceAll('../../lib/', '../lib/')
    .replaceAll('../../styles/', '../styles/');

  fs.writeFileSync(path.join(pagesDir, 'index.astro'), themeContent, 'utf8');

  // Copy supporting inner pages (about, contact, pricing, blog, docs, etc.)
  const innerPages = ['about.astro', 'contact.astro', 'pricing.astro', 'blog.astro', 'services.astro', 'faq.astro', 'privacy.astro', 'terms.astro', '404.astro', 'docs.astro'];
  for (const page of innerPages) {
    const pPath = path.join(root, 'src', 'pages', page);
    if (fs.existsSync(pPath)) {
      fs.copyFileSync(pPath, path.join(pagesDir, page));
    }
  }
  const blogDir = path.join(root, 'src', 'pages', 'blog');
  if (fs.existsSync(blogDir)) {
    copyDir(blogDir, path.join(pagesDir, 'blog'));
  }

  // Config files
  fs.copyFileSync(path.join(root, 'astro.config.mjs'), path.join(themeTemp, 'astro.config.mjs'));
  fs.copyFileSync(path.join(root, 'tsconfig.json'), path.join(themeTemp, 'tsconfig.json'));
  fs.copyFileSync(path.join(root, '.gitignore'), path.join(themeTemp, '.gitignore'));

  // Dedicated package.json
  const themePkg = {
    ...basePkg,
    name: `themekit-${t.slug}-theme`,
    description: `${t.name} — Standalone Astro Framework Theme`,
  };
  fs.writeFileSync(path.join(themeTemp, 'package.json'), JSON.stringify(themePkg, null, 2), 'utf8');

  // Dedicated README.md
  const readme = `# ${t.name} (Astro Framework)

${t.desc}

This is the standalone **${t.name}** theme codebase built with **Astro 5+**, **React 19**, and **Tailwind CSS v4**.

## 🚀 Quick Start

1. **Install dependencies**:
\`\`\`bash
npm install
\`\`\`

2. **Start the local development server**:
\`\`\`bash
npm run dev
\`\`\`

3. **Open in browser**:
Navigate to [http://localhost:4321](http://localhost:4321). Your **${t.name}** homepage is ready out of the box!

## 📦 Production Build
\`\`\`bash
npm run build
npm run preview
\`\`\`
`;
  fs.writeFileSync(path.join(themeTemp, 'README.md'), readme, 'utf8');

  // Create zip
  const zipName = `themekit-${t.slug}-theme.zip`;
  const zipPath = path.join(downloadsDir, zipName);
  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
  execSync(`tar -a -cf "${zipPath}" *`, { cwd: themeTemp });
  fs.rmSync(themeTemp, { recursive: true, force: true });
  console.log(`✓ Standalone Theme: ${zipName} (${(fs.statSync(zipPath).size / 1024).toFixed(1)} KB)`);
}

console.log('\nAll individual theme archives and full bundle generated successfully in public/downloads!');
