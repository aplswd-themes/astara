const fs = require('fs');
let code = fs.readFileSync('src/themes/aerospace/LandingPage.tsx', 'utf8');

code = code.replace(/\\`/g, '`');
code = code.replace(/\\\$/g, '$');

fs.writeFileSync('src/themes/aerospace/LandingPage.tsx', code);
console.log("Syntax fixed");
