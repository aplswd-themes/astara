import fs from 'node:fs';
import path from 'node:path';

const themes = {
  saas: {
    features: `const features = [
  { icon: '⚡', title: 'Fast Deployments',   description: 'Deploy your applications to our global network in seconds.' },
  { icon: '🔒', title: 'Secure by Default',        description: 'Built-in SSL, DDoS protection, and automated daily backups.' },
  { icon: '🔄', title: 'Automated CI/CD',       description: 'Connect your repository and we handle the build and deployment process.' },
  { icon: '📊', title: 'Performance Metrics',     description: 'Track bandwidth, CPU usage, and response times from a single dashboard.' },
  { icon: '🧩', title: 'Third-Party Integrations',          description: 'Easily connect to databases, logging providers, and analytics platforms.' },
  { icon: '🛠️', title: 'Expert Support',                 description: 'Our engineering team is available 24/7 to help you scale.' },
];`,
    testimonials: `const testimonials = [
  { quote: 'We moved our infrastructure over last year and haven\\'t looked back. Reliability is fantastic.', name: 'Sarah Jenkins', role: 'Engineering Lead, DataFlow', rating: 5 },
  { quote: 'The deployment process is straightforward and the pricing is completely transparent. Highly recommended.', name: 'Michael Chen', role: 'CTO, RetailHub', rating: 5 },
  { quote: 'Support is incredibly responsive. We had a database issue at 2 AM and they helped us resolve it in minutes.', name: 'David Smith', role: 'Founder, CloudApp', rating: 5 },
];`,
    plans: `const plans = [
  {
    name: 'Starter',
    description: 'Perfect for side projects and small teams.',
    monthlyPrice: 15,
    annualPrice: 12,
    features: ['1 Project', '10GB Storage', 'Community Support', 'Basic Analytics'],
    cta: 'Get Started',
    ctaHref: '/contact',
  },
  {
    name: 'Professional',
    description: 'For growing businesses that need more power.',
    monthlyPrice: 49,
    annualPrice: 39,
    features: ['Unlimited Projects', '100GB Storage', 'Priority Email Support', 'Advanced Analytics', 'Custom Domains'],
    cta: 'Start Free Trial',
    ctaHref: '/contact',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Dedicated resources for large organizations.',
    monthlyPrice: 'Custom' as const,
    annualPrice: 'Custom' as const,
    features: ['Dedicated Infrastructure', 'Unlimited Storage', '24/7 Phone Support', 'SLA Guarantee', 'Custom Contracts'],
    cta: 'Contact Sales',
    ctaHref: '/contact',
  },
];`
  },
  agency: {
    services: `const services = [
  { icon: '✦', title: 'Web Development',       description: 'Custom websites built with modern frameworks, optimized for speed and accessibility.' },
  { icon: '◈', title: 'UI/UX Design',      description: 'Clear, intuitive interfaces designed to guide your users and improve conversion rates.' },
  { icon: '◉', title: 'Brand Identity',         description: 'Logos, typography, and visual guidelines that communicate your core business values.' },
  { icon: '◧', title: 'Digital Marketing',     description: 'Data-driven campaigns across search and social channels to acquire new customers.' },
  { icon: '◆', title: 'Content Strategy',        description: 'Professional copywriting and content planning to engage your target audience.' },
  { icon: '◎', title: 'Technical Consulting',    description: 'Expert advice on software architecture, platform selection, and scaling your technology.' },
];`,
    portfolioProjects: `const portfolioProjects = [
  {
    id: 'retail',
    title: 'RetailPlus E-commerce Redesign',
    tag: 'Web Development',
    category: 'E-commerce',
    client: 'RetailPlus',
    metric: '40% Increase in Sales',
    image: MEDIA.agency.meridian,
    gradient: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)',
    year: '2023',
    description: 'A complete overhaul of the RetailPlus online store, focusing on mobile responsiveness and a streamlined checkout process.',
    deliverables: ['Custom Shopify Theme', 'Payment Gateway Integration', 'Inventory Sync', 'Performance Optimization'],
  },
  {
    id: 'healthapp',
    title: 'HealthTrack Patient Portal',
    tag: 'UI/UX Design',
    category: 'Healthcare',
    client: 'City General Hospital',
    metric: '95% Positive Feedback',
    image: MEDIA.agency.otera,
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    year: '2024',
    description: 'Designed a secure, easy-to-use portal for patients to schedule appointments, view test results, and communicate with doctors.',
    deliverables: ['User Research', 'Wireframing', 'High-Fidelity Prototypes', 'Accessibility Audit'],
  },
  {
    id: 'fintech',
    title: 'Nexus Financial Branding',
    tag: 'Brand Identity',
    category: 'Finance',
    client: 'Nexus Financial',
    metric: 'Successful Rebrand Launch',
    image: MEDIA.agency.solis,
    gradient: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
    year: '2024',
    description: 'Created a modern, trustworthy brand identity for a growing financial services firm, including a new logo, color palette, and marketing materials.',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Presentation Templates'],
  }
];`
  }
};

async function updateTheme(themeName, replacements) {
  const filePath = path.join(process.cwd(), 'src', 'themes', themeName, 'index.astro');
  if (!fs.existsSync(filePath)) {
    console.log('Not found:', filePath);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  for (const [key, replacementText] of Object.entries(replacements)) {
    // Basic regex to find the const declaration until the closing bracket + semicolon
    const regex = new RegExp(\`const \${key} = \\\\[[\\\\s\\\\S]*?\\\\];\\n\`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, replacementText + '\\n');
      console.log(\`Updated \${key} in \${themeName}\`);
    } else {
      console.log(\`Could not find \${key} in \${themeName}\`);
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
}

async function run() {
  for (const [themeName, replacements] of Object.entries(themes)) {
    await updateTheme(themeName, replacements);
  }
  console.log('Done rewriting.');
}

run();
