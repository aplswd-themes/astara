const fs = require('fs');
let file = fs.readFileSync('src/pages/index.astro', 'utf8');

// Replace the specific line directly by finding the substring
const badLine = 'Created with <span class="text-red-500 animate-pulse text-sm">â ¤ï¸ </span> by <a href="#" class="text-zinc-900 font-bold hover:text-indigo-600 transition-colors">Apls Web Development</a>';
const goodLine = 'Created with <span class="text-red-500 animate-pulse text-sm">❤️</span> by <a href="#" class="text-zinc-900 font-bold hover:text-indigo-600 transition-colors">Apls Web Development</a>';

if (file.includes(badLine)) {
  file = file.replace(badLine, goodLine);
} else {
  // If exact match fails, let's use regex to find "Created with" and replace the garbled part
  file = file.replace(/Created with <span class="text-red-500 animate-pulse text-sm">.*?<\/span> by/g, 'Created with <span class="text-red-500 animate-pulse text-sm">❤️</span> by');
}

fs.writeFileSync('src/pages/index.astro', file, 'utf8');
