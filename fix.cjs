const fs = require('fs');
let file = fs.readFileSync('src/pages/index.astro', 'utf8');

const replacements = {
  'âš¡': '⚡',
  'âš›ï¸ ': '⚛️',
  'ðŸŽ¨': '🎨',
  'ðŸ›¡ï¸ ': '🛡️',
  'âœ¦': '✦',
  'ðŸ’Ž': '💎',
  'ðŸ“±': '📱',
  'ðŸš€': '🚀',
  'ðŸ›’': '🛒',
  'ðŸ ¥': '🏥',
  'ðŸ ½ï¸ ': '🍽️',
  'ðŸ’¼': '💼',
  'ðŸ“Š': '📊',
  'âœ¨': '✨',
  'â†’': '→',
  'â€”': '—',
  'âš›ï¸': '⚛️',
  'ðŸ›¡ï¸': '🛡️',
  'ðŸ ½ï¸': '🍽️'
};

for (const [bad, good] of Object.entries(replacements)) {
  file = file.split(bad).join(good);
}

fs.writeFileSync('src/pages/index.astro', file, 'utf8');
