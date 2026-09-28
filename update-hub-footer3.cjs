const fs = require('fs');
let code = fs.readFileSync('src/pages/index.astro', 'utf8');

// Replace the previous text with just "Astara theme"
code = code.replace(/<p>&copy; 2026 Astara theme for Astro framework\.<\/p>/, '<p>&copy; 2026 Astara theme.</p>');

fs.writeFileSync('src/pages/index.astro', code, 'utf8');
console.log("Footer text updated to Astara theme.");
