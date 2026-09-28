const fs = require('fs');
let code = fs.readFileSync('src/pages/index.astro', 'utf8');

// Replace Astara Framework in footer
code = code.replace(/<p>.*?2026 Astara Framework\.<\/p>/, '<p>&copy; 2026 Astara theme for Astro framework.</p>');

fs.writeFileSync('src/pages/index.astro', code, 'utf8');
console.log("Footer text updated.");
