const fs = require('fs');

const replacements = [
  {
    file: 'src/themes/aerospace/LandingPage.tsx',
    regex: /<p>c 2026 AeroDynamics Inc\. All rights reserved\.<\/p>/g,
    replacement: '<p>&copy; 2026 Astara theme.</p>'
  },
  {
    file: 'src/themes/agency/LandingPage.tsx',
    regex: /<p>&copy; \{new Date\(\)\.getFullYear\(\)\} aPLS Web Development\. All rights reserved\.<\/p>/g,
    replacement: '<p>&copy; {new Date().getFullYear()} Astara theme.</p>'
  },
  {
    file: 'src/themes/ecommerce/LandingPage.tsx',
    regex: /<p>&copy; \{new Date\(\)\.getFullYear\(\)\} Aura Maison\. All rights reserved\.<\/p>/g,
    replacement: '<p>&copy; {new Date().getFullYear()} Astara theme.</p>'
  },
  {
    file: 'src/themes/health/LandingPage.tsx',
    regex: /<p>c \{new Date\(\)\.getFullYear\(\)\} AegisHealth Technologies\. All rights reserved\.<\/p>/g,
    replacement: '<p>&copy; {new Date().getFullYear()} Astara theme.</p>'
  },
  {
    file: 'src/themes/restaurant/LandingPage.tsx',
    regex: /&copy; \{new Date\(\)\.getFullYear\(\)\} L'ÉTOILE/g,
    replacement: '&copy; {new Date().getFullYear()} Astara theme.'
  },
  {
    file: 'src/themes/saas/LandingPage.tsx',
    regex: /c \{new Date\(\)\.getFullYear\(\)\} NexaCloud Inc\. All rights reserved\./g,
    replacement: '&copy; {new Date().getFullYear()} Astara theme.'
  }
];

replacements.forEach(({ file, regex, replacement }) => {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf8');
    code = code.replace(regex, replacement);
    fs.writeFileSync(file, code, 'utf8');
    console.log(`Updated ${file}`);
  }
});
