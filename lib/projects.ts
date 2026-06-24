export interface Project {
  slug: string;
  title: string;
  category: 'brand-design' | 'development' | 'wordpress';
  categoryLabel: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  tools: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  behanceUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
    {
    slug: 'eventflow',
    title: 'EventFlow',
    category: 'development',
    categoryLabel: 'Event Management',
    description: 'An event management platform that gets you from idea to live event page in 60 seconds.',
    fullDescription: 'EventFlow is a web application built for anyone who has ever tried to organise an event using WhatsApp messages, Google Forms and a prayer. It gives organisers one clean place to create, manage and share events without the usual back and forth. No credit card required to start, no complicated setup and automated reminders so attendees actually show up.',
    problem: 'Organising events online in Nigeria and across Africa is messier than it needs to be. Most people rely on a combination of WhatsApp broadcasts, flyers on Instagram and manually chasing confirmations. The tools that exist are either too expensive, too bloated or built for markets that do not reflect how events are actually run here.',
    solution: 'Built a full stack event platform with a clean public event listing page, a secure authentication system and a full admin dashboard that gives organisers visibility over every event and every attendee in one place. Smart filtering lets you sort upcoming and past events instantly. Automated reminders handle the follow up so the organiser does not have to. The whole thing was built mobile first because that is where the users are.',
    tools: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/eventflow_cover.JPG',
    liveUrl: 'https://eventflow-website.vercel.app',
    githubUrl: 'https://github.com/nino-2/eventflow',
    featured: true,
  },
  {
    slug: 'mapoly',
    title: 'Mapoly',
    category: 'development',
    categoryLabel: 'Healthcare',
    description: 'A smart clinic web app that cuts queues and puts student healthcare one click away.',
    fullDescription: 'Mapoly Smart Clinic Assistant is a full stack web application built to solve a real problem on campus. Students were spending too much time waiting at the clinic for things that could be handled digitally. This project brought the clinic experience online with an AI assistant, appointment booking, and a clean admin dashboard for managing patient records.',
    problem: 'The school clinic had one bottleneck that affected everyone: long queues. Students had no way to book ahead, check their status or get quick answers about their health concerns without physically showing up. Time was being wasted on both sides.',
    solution: 'Built a web app where students can chat with an AI assistant for quick health guidance, book appointments without joining a queue and receive notifications when their slot is confirmed. On the admin side, clinic staff get a full dashboard to manage patient records and track appointments in one place. The goal was simple: less waiting, better care.',
    tools: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Gemini AI API'],
    image: '/mapoly-cover.JPG',
    liveUrl: 'https://smartclinic-react-hu19.vercel.app/',
    githubUrl: 'https://github.com/nino-2/smartclinic-react',
    featured: true,
  },
  {
    slug: 'jumia',
    title: 'Jumia',
    category: 'development',
    categoryLabel: 'E-commerce',
    description: 'A full clone of Jumia built from scratch with real cart logic, product listings and user authentication.',
    fullDescription: "This is a full stack clone of Jumia, Africa's largest e-commerce platform. Not a UI copy and paste, but a working application with real authentication, a functional shopping cart and dynamic product listings pulled from a backend I built. The goal was to understand how a large scale e-commerce platform actually works under the hood by building every layer of it myself.",
    problem: 'Most developers claim they can build e-commerce. Few have actually sat down and built one end to end, the auth flow, the cart state, the product schema, the API connections and the UI all talking to each other properly. This project was a deliberate challenge to prove I could.',
    solution: 'Built the entire application on the MERN stack. The frontend handles dynamic product rendering, real time cart updates and user sessions without a single page reload. The backend manages authentication, business logic and data flow through REST APIs I wrote and consumed myself. MongoDB handles the product and user data with schemas designed for scale. The result is a fully working e-commerce application that behaves exactly like the real thing.',
    tools: ['React', 'Node.js', 'MongoDB', ' CSS', 'Express.js'],
    image: '/jumiaclone_cover.JPG',
    liveUrl: 'https://react-jumia-app.vercel.app/',
    githubUrl: 'https://github.com/nino-2/react-jumia-app',
    featured: true,
  },
  {
    slug: 'tidemint',
    title: 'Tidemint',
    category: 'brand-design',
    categoryLabel: 'Brand Design',
    description: 'Social media brand design for a Nigerian fintech app built around speed and trust.',
    fullDescription: 'Tidemint is a Nigerian fintech app with a simple promise your money, in motion. I designed a complete social media brand suite for them covering campaign posts, app showcase creatives, a referral campaign and billboard mockups. The brand needed to feel modern and trustworthy while still being energetic enough to stop someone mid-scroll.',
    problem: 'Fintech brands in Nigeria either look too corporate and cold or too playful to be trusted with your money. Tidemint needed visuals that sat right in the middle, clean enough to feel secure, bold enough to compete on social media where attention is everything.',
    solution: 'Built a cohesive visual system around their mint green and black palette. Every post was designed with a clear hierarchy one message, one action. The "Send money in Seconds" post leads with urgency. The referral creative leads with the reward. The billboard puts the app front and centre with a direct CTA. Consistent across every format, recognisable at a glance.',
    tools: ['Figma', 'Canva' ],
    image: '/tidemint_cover.jpg',
    behanceUrl: 'https://www.behance.net/gallery/231550765/Tidemint-Social-Media-Brand-Design',
    featured: true,
  },
   {
    slug: 'lumiere',
    title: 'Lumiere',
    category: 'development',
    categoryLabel: 'Landing Page',
    description: 'A luxury skincare landing page built to convert browsers into buyers.',
    fullDescription: 'Lumière is a luxury skincare landing page I designed and built end to end. The brief was simple: make it feel expensive before the user even reads a word. Clean layouts, a muted elegant palette, and product presentation that puts the goods first.',
    problem: 'Most skincare brands online look too clinical or too cluttered. The goal was something that felt premium without being cold. A brand that modern women would trust at first glance and actually enjoy browsing.',
    solution: 'Built in Next.js with a sharp focus on visual hierarchy. Hero images that breathe, product cards that don\'t compete with each other, and a colour system anchored in soft neutrals. The bestseller grid and beauty club section were designed to guide users naturally toward action without feeling pushy.',
    tools: ['Next.js', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
    image: '/lumiere_cover.jpg',
    liveUrl: 'https://lumiere-pi.vercel.app/',
    githubUrl: 'https://github.com/nino-2/Lumiere',
    featured: true,
  },
  {
    slug: 'swifthaul',
    title: 'SwiftHaul',
    category: 'development',
    categoryLabel: 'Logistics',
    description: 'A no-nonsense logistics landing page built to convert frustrated SME owners into paying customers.',
    fullDescription: 'SwiftHaul is a Lagos based logistics company that moves packages across 12 states. Same day within Lagos, next day everywhere else. I built their landing page with one goal: get the visitor to book a delivery before they leave. The copy speaks directly to Nigerian SME business owners who have been burned by unreliable dispatch riders. The design gets out of the way and lets the message do the work.',
    problem: 'Every logistics brand in Nigeria says the same thing. Fast. Reliable. Trusted. None of it lands because every SME owner has a story of a missing package, a rider who went silent and a customer threatening a chargeback. SwiftHaul needed a page that acknowledged that pain out loud before pitching anything.',
    solution: "Built a conversion focused landing page that leads with the customer's frustration, not the brand's features. The 'You have heard this before' section names the exact scenarios business owners dread. The first delivery free offer with no card required removes every barrier to getting started. WhatsApp booking is front and centre because that is how Nigerian SMEs actually operate.",
    tools: ['Next.js', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
    image: '/swifthaul_cover.JPG',
    liveUrl: 'https://swifthaul-eight.vercel.app/',
    githubUrl: 'https://github.com/nino-2/swifthaul',
    featured: false,
  },
  {
    slug: 'kmorg',
    title: 'Kmorg Clothing',
    category: 'wordpress',
    categoryLabel: 'WordPress',
    description: 'A full e-commerce website for a Canada-based fashion brand that made it onto CBC News.',
    fullDescription: 'Kmorg Clothing is a Canada-based fashion brand by Kofoworola Morgan-Yusuf, offering bespoke and ready-to-wear pieces built around fit, craftsmanship and individuality. I built their full e-commerce website on WordPress, covering everything from the shop and product listings to the bespoke booking flow, alterations service and size guide. A real brand, a real audience, a real brief.',
    problem: 'The brand was growing fast with a loyal customer base across ready-to-wear, bespoke and bridal categories but had no central digital home to sell, tell their story and convert visitors into customers.',
    solution: 'Built a clean structured WordPress e-commerce site that organises their catalogue across multiple categories, handles bespoke inquiries, and tells the brand story properly. Shortly after launch, Kmorg was featured on CBC News. The website was ready to receive that traffic and hold up.',
    tools: ['WordPress', 'WooCommerce', 'Divi'],
    image: '/kmorg-cover.JPG',
    liveUrl: 'https://kmorg.ca/',
    featured: false,
  },
  {
    slug: 'lumera',
    title: 'LUMÉRA ',
    category: 'brand-design',
    categoryLabel: 'Brand Design',
    description: 'An elegant email campaign for a luxury skincare brand that needed to sell without shouting.',
    fullDescription: 'LUMÉRA is a luxury skincare brand built around the idea that effective skincare does not need to be aggressive. I designed an email campaign promoting two of their hero products - the Rich Daily Moisturizer and Acne Spot Treatment. The goal was to make each email feel like it belonged in the same world as the product itself. Calm, soft and considered.',
    problem: 'Most skincare email campaigns either dump too much information on the reader or go so minimal they forget to actually sell anything. LUMÉRA needed emails that felt premium at first glance but still guided the reader clearly toward a purchase without feeling pushy.',
    solution: 'Designed a clean layout system built around soft tones, generous white space and typography that breathes. Each product got its moment without competing with the other. The hierarchy was intentional — brand feel first, product second, CTA third. The result is an email that a subscriber actually wants to open and a brand that looks exactly as expensive as it is.',
    tools: [ 'Canva' ],
    image: '/lumera_cover.jpg',
    behanceUrl: 'https://www.behance.net/gallery/227263295/LUMERA-Skincare-Email-Design',
    featured: true,
  },
  {
    slug: 'rockpaper',
    title: 'Rock Paper Scissors',
    category: 'development',
    categoryLabel: 'Development',
    description: 'Classic Rock Paper Scissors, built from scratch with a twist, Auto Play mode included.',
    fullDescription: 'A browser based Rock Paper Scissors game built with vanilla HTML, CSS and JavaScript. No frameworks, no libraries, just clean logic and a working game. It tracks your score against the computer and lets you reset anytime. The Auto Play mode is the fun part, it plays rounds automatically so you can watch the computer battle itself.',
    problem: 'Every developer has a list of fundamentals they need to prove they can build without leaning on a framework. Game logic, state management, DOM manipulation and real time UI updates all in one small project.',
    solution: "Built it clean and kept it focused. The game handles win and loss logic, updates the score in real time, shows what both sides picked each round and resets on demand. Auto Play was added as an extra layer to make it more interactive and a little more fun than the average beginner project.",
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: '/rockpaper_cover.JPG',
    liveUrl: 'https://rock-paper-scissors-game-ten-sand.vercel.app/',
    githubUrl: 'https://github.com/nino-2/Rock-Paper-Scissors-Game',
    featured: false,
  },
  // {
  //   slug: 'verde-restaurant',
  //   title: 'Verde Restaurant',
  //   category: 'wordpress',
  //   categoryLabel: 'WordPress',
  //   description: 'Elegant restaurant website with online reservations, menu management, and events calendar.',
  //   fullDescription: 'Verde is a fine dining restaurant website with a focus on visual storytelling. Features online reservation integration, dynamic menu management, private events booking, and a rich media gallery.',
  //   problem: 'The restaurant was relying on a generic template that did not capture the ambiance and premium dining experience they offered. Table reservation calls were overwhelming their front desk staff.',
  //   solution: 'Built a bespoke WordPress theme centered on atmospheric photography and immersive scroll effects. Integrated OpenTable for reservations, custom menu management system, and an events module with deposit payments via WooCommerce.',
  //   tools: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'JavaScript', 'Figma'],
  //   image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
  //   liveUrl: 'https://example.com',
  //   featured: false,
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}
