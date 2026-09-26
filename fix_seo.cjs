const fs = require('fs');

// 1. Fix Hub Page (index.astro)
let hub = fs.readFileSync('src/pages/index.astro', 'utf8');
hub = hub.replace('<title>ThemeKit ?" Multi-Purpose Astro & Tailwind Theme System</title>', '<title>ThemeKit — Multi-Purpose Astro & Tailwind Theme System</title>');
hub = hub.replace('<title>ThemeKit â€” Multi-Purpose Astro & Tailwind Theme System</title>', '<title>ThemeKit — Multi-Purpose Astro & Tailwind Theme System</title>');
fs.writeFileSync('src/pages/index.astro', hub, 'utf8');

// 2. Fix Agency Home (src/themes/agency/index.astro)
let agency = fs.readFileSync('src/themes/agency/index.astro', 'utf8');
agency = agency.replace('<title>Agency Landing Page</title>', '<title>Agency — Creative Studio & Portfolio</title>\n    <meta name="description" content="A premium digital agency and portfolio template built with Astro and Tailwind CSS." />');
fs.writeFileSync('src/themes/agency/index.astro', agency, 'utf8');

// 3. Fix Agency Contact (src/pages/themes/agency/contact.astro)
let agencyContact = fs.readFileSync('src/pages/themes/agency/contact.astro', 'utf8');
agencyContact = agencyContact.replace('<title>Agency - Contact Us</title>', '<title>Contact Us — Agency Creative Studio</title>\n    <meta name="description" content="Get in touch with our creative studio for your next big digital project." />');
fs.writeFileSync('src/pages/themes/agency/contact.astro', agencyContact, 'utf8');

// 4. Fix Restaurant Home (src/themes/restaurant/index.astro)
let restaurant = fs.readFileSync('src/themes/restaurant/index.astro', 'utf8');
restaurant = restaurant.replace('<title>LumiA"re - Elegant Dining</title>', '<title>L\'Étoile — Fine Dining & Gastronomy</title>\n    <meta name="description" content="An exquisite Michelin-star style restaurant template featuring reservations and tasting menus." />');
restaurant = restaurant.replace('<title>LumiÃ¨re - Elegant Dining</title>', '<title>L\'Étoile — Fine Dining & Gastronomy</title>\n    <meta name="description" content="An exquisite Michelin-star style restaurant template featuring reservations and tasting menus." />');
fs.writeFileSync('src/themes/restaurant/index.astro', restaurant, 'utf8');
