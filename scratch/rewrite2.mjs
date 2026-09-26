import fs from 'node:fs';
import path from 'node:path';

const themes = {
  ecommerce: {
    curatedProducts: `const curatedProducts = [
  {
    name: 'Classic Oxford Shirt',
    price: '$85',
    originalPrice: null,
    badge: 'Bestseller',
    tag: 'Apparel',
    rating: '4.8 (120 reviews)',
    image: MEDIA.ecommerce.linenShirt,
  },
  {
    name: 'Leather Messenger Bag',
    price: '$215',
    originalPrice: '$250',
    badge: 'Sale',
    tag: 'Accessories',
    rating: '4.9 (85 reviews)',
    image: MEDIA.ecommerce.leatherTote,
  },
  {
    name: 'Minimalist Desk Lamp',
    price: '$120',
    originalPrice: null,
    badge: 'New Arrival',
    tag: 'Home Goods',
    rating: '4.7 (45 reviews)',
    image: MEDIA.ecommerce.lamp,
  },
];`,
    testimonials: `const testimonials = [
  { quote: 'The quality of the materials is excellent, and shipping was remarkably fast.', name: 'James Wilson', role: 'Verified Buyer', rating: 5 },
  { quote: 'Customer service was very helpful when I needed to exchange a size. Will definitely shop here again.', name: 'Emily Davis', role: 'Verified Buyer', rating: 5 },
  { quote: 'Simple, well-made products that hold up to daily use. Exactly what I was looking for.', name: 'Robert Johnson', role: 'Verified Buyer', rating: 5 },
];`,
    ecomPlans: `const ecomPlans = [
  {
    name: 'Standard Account',
    description: 'Free account for all shoppers.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Standard 3-5 Day Shipping',
      '30-Day Return Policy',
      'Order Tracking',
      'Email Support'
    ],
    cta: 'Create Account',
    ctaHref: '#shop',
  },
  {
    name: 'Premium Member',
    description: 'For frequent shoppers who want faster delivery.',
    monthlyPrice: 10,
    annualPrice: 8,
    features: [
      'Free 2-Day Shipping',
      '60-Day Return Policy',
      'Early Access to Sales',
      'Priority Customer Support',
      'Exclusive Member Discounts'
    ],
    cta: 'Join Premium',
    ctaHref: '#shop',
    popular: true,
  }
];`
  },
  health: {
    services: `const services = [
  { icon: '🩺', title: 'Primary Care',       description: 'Comprehensive general medical care, routine check-ups, and preventative screenings.' },
  { icon: '🧬', title: 'Specialist Referrals',      description: 'Access to a network of specialists for advanced diagnostics and treatment.' },
  { icon: '🔬', title: 'Lab Services',         description: 'On-site blood work, urinalysis, and other diagnostic laboratory tests.' },
  { icon: '🧠', title: 'Mental Health',     description: 'Counseling and psychiatric services for comprehensive well-being.' },
  { icon: '❤️', title: 'Cardiology',        description: 'Heart health monitoring, EKG tests, and cardiovascular consultations.' },
  { icon: '👶', title: 'Pediatrics',    description: 'Dedicated medical care for infants, children, and adolescents.' },
];`,
    testimonials: `const testimonials = [
  { quote: 'The doctors here are attentive and take the time to answer all my questions. I always feel well-cared for.', name: 'Mary Stevens', role: 'Patient', rating: 5 },
  { quote: 'Booking appointments is easy and the clinic staff is incredibly organized and friendly.', name: 'John Thompson', role: 'Patient', rating: 5 },
  { quote: 'I appreciate the comprehensive approach to health. They really focus on prevention rather than just treating symptoms.', name: 'Linda Garcia', role: 'Patient', rating: 5 },
];`,
    plans: `const plans = [
  {
    name: 'Standard Care',
    description: 'Pay per visit services.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: ['Access to General Practitioners', 'Standard Appointment Booking', 'Pay-as-you-go Lab Tests', 'Accepts Most Insurance'],
    cta: 'Book Appointment',
    ctaHref: '/contact',
  },
  {
    name: 'Health Plus Membership',
    description: 'A comprehensive membership for ongoing care.',
    monthlyPrice: 99,
    annualPrice: 89,
    features: ['Unlimited Telehealth Consults', 'Same-Day Urgent Appointments', 'Annual Comprehensive Physical', 'Discounted Lab Tests', 'Direct Messaging with Doctor'],
    cta: 'Become a Member',
    ctaHref: '/contact',
    popular: true,
  }
];`
  },
  restaurant: {
    menuCategories: `const menuCategories = [
  { id: 'starters', name: 'Appetizers' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'sides', name: 'Sides' },
  { id: 'desserts', name: 'Desserts' },
];`,
    menuItems: `const menuItems = [
  { category: 'starters', name: 'Roasted Tomato Soup', description: 'Fresh basil, cream, toasted sourdough', price: '$12' },
  { category: 'starters', name: 'Crispy Calamari', description: 'Lemon aioli, marinara, fresh parsley', price: '$16' },
  { category: 'mains', name: 'Grilled Salmon', description: 'Asparagus, quinoa, lemon herb butter', price: '$32' },
  { category: 'mains', name: 'Ribeye Steak', description: '12oz aged ribeye, garlic mashed potatoes, seasonal vegetables', price: '$45' },
  { category: 'mains', name: 'Mushroom Risotto', description: 'Arborio rice, wild mushrooms, parmesan, truffle oil', price: '$26' },
  { category: 'sides', name: 'Truffle Fries', description: 'Parmesan, parsley, truffle aioli', price: '$10' },
  { category: 'desserts', name: 'Classic Cheesecake', description: 'New York style, berry compote', price: '$11' },
];`,
    testimonials: `const testimonials = [
  { quote: 'The food was absolutely delicious and the service was prompt and courteous. A great dining experience.', name: 'Michael R.', role: 'Local Guide', rating: 5 },
  { quote: 'A fantastic atmosphere for our anniversary dinner. The steak was cooked perfectly to order.', name: 'Jessica T.', role: 'Customer', rating: 5 },
  { quote: 'Consistently good food. We come here almost every week and have never been disappointed.', name: 'David L.', role: 'Regular Customer', rating: 5 },
];`,
    experiences: `const experiences = [
  {
    title: 'Private Dining',
    description: 'Reserve our private room for corporate events or family celebrations. Accommodates up to 20 guests.',
    image: MEDIA.restaurant.diningRoom,
  },
  {
    title: 'Weekend Brunch',
    description: 'Join us every Saturday and Sunday for our special brunch menu featuring classics and bottomless mimosas.',
    image: MEDIA.restaurant.souffle,
  },
  {
    title: 'Wine Tasting Events',
    description: 'Monthly events led by our sommelier, featuring selections from around the world paired with small bites.',
    image: MEDIA.restaurant.sommelier,
  },
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
