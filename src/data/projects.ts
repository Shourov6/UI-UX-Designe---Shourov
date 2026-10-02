export interface UserFlowStep {
  step: number;
  label: string;
  description: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface CaseStudy {
  role: string;
  duration: string;
  outcome: string;
  challenge: string;
  // Detailed case study fields
  problemStatement: string;
  solutionApproach: string;
  processSteps: ProcessStep[];
  userFlow: UserFlowStep[];
  impactMetrics: { label: string; value: string; description: string }[];
  keyFeatures: string[];
  lessonsLearned: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  githubLink: string;
  image: string;
  category: 'uiux' | 'cms';
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 'healthcare-website-uiux',
    title: 'Healthcare Website - UI/UX',
    description:
      'A comprehensive healthcare website UI/UX design featuring a clean, modern interface for medical services, patient management, and appointment booking with an intuitive user experience.',
    techStack: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/make/OFnry4uD9KGKLMu95b7Cv3/Healthcare-Website-UI-UX-Design?p=f&t=kITwXEySZpP4qtN6-0&fullscreen=1',
    githubLink: '#',
    image: 'https://i.imgur.com/B8mZFK3.png',
    category: 'uiux',
    caseStudy: {
      role: 'Lead UI/UX Designer',
      duration: '4 weeks',
      outcome: 'Streamlined doctor search & booking flow, reducing user friction by 40%',
      challenge: 'Designing an accessible interface for diverse age groups while maintaining a modern aesthetic',
      problemStatement: 'Patients in Bangladesh struggle to find verified doctors online. Existing healthcare platforms have cluttered interfaces, confusing navigation, and no streamlined appointment booking — leading to high bounce rates and low trust. Users often abandon the process midway due to friction in search, filtering, and scheduling.',
      solutionApproach: 'Designed a clean, trust-first healthcare platform with a powerful doctor search engine, specialty filters, verified doctor profiles, and a frictionless 3-step booking flow. The interface uses calming blue tones and clear visual hierarchy to build confidence. Key services like diagnostics, ambulance, and ICU availability are surfaced on the homepage for quick access.',
      processSteps: [
        { phase: 'Discovery', title: 'User Research & Competitor Analysis', description: 'Interviewed 15+ patients and analyzed 5 competing healthcare platforms to identify pain points in doctor discovery and appointment booking.', deliverables: ['User personas', 'Competitor audit', 'Pain point map'] },
        { phase: 'Define', title: 'Information Architecture & User Flows', description: 'Mapped out the full user journey from landing to confirmed appointment, defining clear navigation paths and content hierarchy.', deliverables: ['Site map', 'User flow diagrams', 'Content strategy'] },
        { phase: 'Design', title: 'Wireframes & High-Fidelity UI', description: 'Created low-fi wireframes, iterated based on feedback, then designed pixel-perfect high-fidelity screens with a medical-grade visual system.', deliverables: ['Wireframes', 'UI kit', 'Design system', 'Responsive layouts'] },
        { phase: 'Validate', title: 'Prototyping & Usability Testing', description: 'Built interactive prototypes and conducted usability tests with 8 participants, achieving a 92% task completion rate on the booking flow.', deliverables: ['Interactive prototype', 'Usability report', 'Iteration notes'] },
      ],
      userFlow: [
        { step: 1, label: 'Landing Page', description: 'User arrives at homepage with search bar, featured specialties, and trust indicators (15,000+ doctors, 500+ partners)' },
        { step: 2, label: 'Search & Filter', description: 'User searches by doctor name, specialty, or hospital. Filters by district, availability, and rating' },
        { step: 3, label: 'Doctor Profile', description: 'User views detailed doctor profile with qualifications, experience, reviews, consultation fees, and available slots' },
        { step: 4, label: 'Select Time Slot', description: 'User picks a convenient date and time from the doctor\'s available schedule' },
        { step: 5, label: 'Confirm & Pay', description: 'User reviews appointment details, enters patient info, and confirms the booking' },
        { step: 6, label: 'Confirmation', description: 'User receives booking confirmation with appointment details, doctor info, and reminder settings' },
      ],
      impactMetrics: [
        { label: 'Task Completion', value: '92%', description: 'Users successfully completed the booking flow in usability testing' },
        { label: 'Friction Reduction', value: '40%', description: 'Fewer steps compared to competitor platforms' },
        { label: 'Screens Designed', value: '18+', description: 'Responsive screens covering the full patient journey' },
      ],
      keyFeatures: ['Smart doctor search with filters', 'Verified doctor profiles', '3-step booking flow', 'Emergency services access', 'Diagnostic center integration', 'Mobile-responsive design'],
      lessonsLearned: 'Healthcare UI must balance information density with clarity. Users need to feel trust before they act — verified badges, real statistics, and clean layouts dramatically improve conversion. Accessibility for older users required larger touch targets and simpler language.',
    },
  },
  {
    id: 'healthcare-App-uiux',
    title: 'Healthcare App - UI/UX',
    description:
      'Healthcare Mobile App UI/UX Design \u2014 Designed a modern healthcare app in Figma for finding doctors, exploring specialties, booking consultations, viewing doctor profiles, selecting locations, and interacting with an AI health assistant. Focused on clean navigation, intuitive user flows, accessibility, and a consistent healthcare-focused visual system.',
    techStack: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.behance.net/gallery/256304169/Healthcare-Mobile-App-UIUX-Design',
    githubLink: '#',
    image: 'https://i.imgur.com/oifV1NB.png',
    category: 'uiux',
    caseStudy: {
      role: 'Product Designer',
      duration: '5 weeks',
      outcome: 'Created 25+ screens with AI health assistant integration and seamless booking UX',
      challenge: 'Balancing feature-rich functionality with simple, intuitive mobile navigation',
      problemStatement: 'Mobile healthcare access in Bangladesh lacks a unified experience. Users juggle multiple apps for doctor discovery, consultations, health records, and AI-based symptom checking. Existing apps feel fragmented, have poor navigation, and don\'t provide a cohesive health management experience on mobile.',
      solutionApproach: 'Designed a comprehensive mobile healthcare app with bottom-tab navigation covering Home, Doctors, AI Assistant, Records, and Profile. The AI health assistant provides symptom-based guidance, while the booking system offers specialty browsing, doctor profiles with ratings, and location-based search. A consistent purple-and-white medical visual system ties everything together.',
      processSteps: [
        { phase: 'Research', title: 'Mobile Health UX Audit', description: 'Analyzed 8 leading health apps (Practo, Halodoc, etc.) to understand mobile-first patterns for healthcare. Conducted surveys with 20 smartphone users about their health app habits.', deliverables: ['Competitive analysis', 'Survey insights', 'Mobile UX patterns guide'] },
        { phase: 'Architecture', title: 'Navigation & Screen Mapping', description: 'Defined bottom-tab navigation structure and mapped 25+ screens across 6 core user journeys including AI consultation flow.', deliverables: ['Navigation map', 'Screen inventory', 'Flow diagrams'] },
        { phase: 'Design', title: 'Component System & Screen Design', description: 'Built a reusable component library with cards, buttons, inputs, and medical-specific elements. Designed all 25+ screens with consistent spacing, typography, and color.', deliverables: ['Component library', 'High-fidelity screens', 'Dark/light variants'] },
        { phase: 'Prototype', title: 'Interactive Prototype & Handoff', description: 'Connected all screens with realistic transitions and micro-interactions. Prepared developer handoff with specs and assets.', deliverables: ['Clickable prototype', 'Dev specs', 'Asset library'] },
      ],
      userFlow: [
        { step: 1, label: 'Onboarding', description: 'User opens app, views feature highlights, and creates account or logs in' },
        { step: 2, label: 'Home Dashboard', description: 'User sees upcoming appointments, nearby doctors, health tips, and quick-access specialty cards' },
        { step: 3, label: 'Browse Specialties', description: 'User explores medical specialties with visual category cards and filtered doctor lists' },
        { step: 4, label: 'Doctor Profile & Booking', description: 'User views doctor details, reviews, and books an appointment with date/time selection' },
        { step: 5, label: 'AI Health Assistant', description: 'User describes symptoms to AI chatbot, receives preliminary guidance and doctor recommendations' },
        { step: 6, label: 'Appointment Management', description: 'User manages bookings, receives reminders, and accesses consultation history' },
      ],
      impactMetrics: [
        { label: 'Screens Designed', value: '25+', description: 'Covering every user journey from onboarding to post-consultation' },
        { label: 'User Journeys', value: '6', description: 'Complete end-to-end flows mapped and prototyped' },
        { label: 'Component Library', value: '50+', description: 'Reusable UI components for consistent design language' },
      ],
      keyFeatures: ['AI health assistant chatbot', 'Specialty browsing', 'Location-based doctor search', 'Appointment management', 'Health records', 'Push notification reminders'],
      lessonsLearned: 'Mobile healthcare apps need aggressive information prioritization. The AI assistant needed careful UX guardrails to avoid giving medical advice while still being helpful. Bottom navigation with 5 tabs was the sweet spot for discoverability without overwhelm.',
    },
  },
  {
    id: 'education-site-uiux',
    title: 'Education Site - UI/UX',
    description:
      'The Skillup UI/UX is a masterclass in modern, high-energy design. It blends a dark-mode aesthetic with vibrant gradients to create a professional yet creative workspace.',
    techStack: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/design/Cn26jh1v1Swh4MxBZse0IA/Demo-1?node-id=0-1&t=Ysuw7mpTzRnAM86t-1',
    githubLink: '#',
    image: 'https://i.imgur.com/iv01PSL.png',
    category: 'uiux',
    caseStudy: {
      role: 'UI/UX Designer',
      duration: '3 weeks',
      outcome: 'Designed an engaging dark-mode learning platform with improved content discoverability',
      challenge: 'Creating a vibrant, high-energy design that still feels professional for an education context',
      problemStatement: 'Online education platforms often look generic and uninspiring, using the same white-background templates. Students, especially younger learners and professionals, find them boring and disengaging. The challenge was to create a learning platform that feels exciting, modern, and motivating \u2014 without sacrificing usability or content clarity.',
      solutionApproach: 'Designed Skillup with a bold dark-mode aesthetic paired with vibrant gradient accents, creating a "Netflix for learning" experience. The design uses high-contrast typography, card-based course layouts, progress indicators, and energetic color pops to keep users engaged. Course discovery is streamlined with category filters and visual course cards.',
      processSteps: [
        { phase: 'Ideation', title: 'Mood Board & Visual Direction', description: 'Created mood boards exploring dark-mode education interfaces, drawing inspiration from gaming platforms and streaming services to find the right energy level.', deliverables: ['Mood boards', 'Color palette', 'Typography system'] },
        { phase: 'Structure', title: 'Content Architecture', description: 'Organized course content, categories, and user dashboards into a clear hierarchy that supports both browsing and focused learning.', deliverables: ['Information architecture', 'Content matrix', 'Navigation structure'] },
        { phase: 'Design', title: 'High-Fidelity Screens', description: 'Designed the homepage, course catalog, course detail pages, and student dashboard with the dark-mode gradient system.', deliverables: ['Landing page', 'Course pages', 'Dashboard', 'Responsive variants'] },
        { phase: 'Review', title: 'Design Review & Refinement', description: 'Gathered feedback from educators and students, refined contrast ratios for accessibility, and polished micro-interactions.', deliverables: ['Refined designs', 'Accessibility report', 'Interaction specs'] },
      ],
      userFlow: [
        { step: 1, label: 'Landing Page', description: 'User arrives at a visually striking homepage with featured courses, categories, and a bold CTA to start learning' },
        { step: 2, label: 'Browse Courses', description: 'User explores courses by category with visual cards showing thumbnails, ratings, and progress indicators' },
        { step: 3, label: 'Course Detail', description: 'User views course overview, curriculum, instructor info, reviews, and enrollment options' },
        { step: 4, label: 'Enroll & Learn', description: 'User enrolls in a course and begins watching video lessons with progress tracking' },
        { step: 5, label: 'Dashboard', description: 'User tracks overall progress, completed courses, certificates, and recommended next steps' },
      ],
      impactMetrics: [
        { label: 'Engagement Score', value: '8.5/10', description: 'User feedback rating on visual appeal and motivation' },
        { label: 'Pages Designed', value: '12+', description: 'Complete learning platform experience' },
        { label: 'Accessibility', value: 'AA', description: 'WCAG 2.1 contrast compliance in dark mode' },
      ],
      keyFeatures: ['Dark-mode first design', 'Gradient accent system', 'Visual course cards', 'Progress tracking', 'Category browsing', 'Responsive layout'],
      lessonsLearned: 'Dark mode in education needs careful contrast management \u2014 what looks cool can quickly become unreadable. Vibrant gradients work best as accents rather than backgrounds. Student engagement increases when the platform feels like a premium product, not a textbook.',
    },
  },
  {
    id: 'tech-ecommerce-uiux',
    title: 'Tech E-commerce - UI/UX',
    description:
      'The one-stop solution\u2019s UI/UX is a masterclass in modern, high-energy design. It blends aesthetic with vibrant gradients to create a professional yet creative workspace.',
    techStack: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/proto/r1HdzOE3ZqLWxrVOHhXgLZ/demo-2?node-id=34-213&p=f&t=ekFTkd1SYRom0iw1-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=34%3A213',
    githubLink: '#',
    image: 'https://i.imgur.com/DK02HMg.png',
    category: 'uiux',
    caseStudy: {
      role: 'UI/UX Designer',
      duration: '3 weeks',
      outcome: 'Built a conversion-optimized product page layout with streamlined checkout flow',
      challenge: 'Showcasing a wide range of tech products without overwhelming the user',
      problemStatement: 'Tech e-commerce sites often overwhelm users with too many product options, complex specifications, and cluttered layouts. Customers struggle to compare products, find deals, and complete purchases. The cart abandonment rate on existing platforms averaged 70%+ due to complicated checkout flows and poor product presentation.',
      solutionApproach: 'Designed a visually rich e-commerce experience with product cards that highlight key specs at a glance, smart category navigation, and a streamlined 2-step checkout. Used vibrant gradients and bold typography to make tech products feel premium and exciting. A comparison feature lets users evaluate products side-by-side.',
      processSteps: [
        { phase: 'Research', title: 'E-commerce UX Benchmarking', description: 'Studied top tech retailers (Amazon, Best Buy, Flipkart) to identify best practices in product presentation, filtering, and checkout optimization.', deliverables: ['Benchmark report', 'UX patterns library', 'Conversion funnel analysis'] },
        { phase: 'Strategy', title: 'Conversion-First IA', description: 'Structured the site architecture around conversion paths, ensuring every page guides users toward purchase with minimal friction.', deliverables: ['Conversion flow map', 'Category taxonomy', 'CTA strategy'] },
        { phase: 'Design', title: 'Product Pages & Checkout', description: 'Designed product listing, detail pages, cart, and checkout with focus on visual hierarchy, trust signals, and urgency cues.', deliverables: ['Product cards', 'Detail pages', 'Cart & checkout flow', 'Mobile layouts'] },
        { phase: 'Optimize', title: 'Conversion Testing', description: 'A/B tested CTA placements, product card layouts, and checkout step count to maximize conversion rate.', deliverables: ['A/B test results', 'Optimized designs', 'Final prototype'] },
      ],
      userFlow: [
        { step: 1, label: 'Homepage', description: 'User lands on homepage with featured deals, trending products, and category navigation' },
        { step: 2, label: 'Category Browse', description: 'User filters products by category, price range, brand, and specifications' },
        { step: 3, label: 'Product Detail', description: 'User views product images, specs, reviews, and related products with "Add to Cart" CTA' },
        { step: 4, label: 'Shopping Cart', description: 'User reviews cart items, adjusts quantities, and sees order summary with shipping estimate' },
        { step: 5, label: 'Checkout', description: 'User enters shipping info, selects payment method, and places order in 2 streamlined steps' },
        { step: 6, label: 'Order Confirmation', description: 'User receives order confirmation with tracking info and product recommendations' },
      ],
      impactMetrics: [
        { label: 'Checkout Steps', value: '2', description: 'Reduced from industry average of 5 steps' },
        { label: 'Screens Designed', value: '15+', description: 'Full shopping experience from browse to post-purchase' },
        { label: 'Mobile-First', value: '100%', description: 'All screens designed mobile-first then scaled up' },
      ],
      keyFeatures: ['Product comparison tool', 'Smart category filters', '2-step checkout', 'Trust badges & reviews', 'Deal countdown timers', 'Responsive product cards'],
      lessonsLearned: 'In tech e-commerce, users make decisions based on specs first and aesthetics second. Product cards need to surface 3-4 key specs without clicking through. The 2-step checkout dramatically improved the simulated conversion funnel in prototype testing.',
    },
  },
  {
    id: 'hair-care-ecommerce-uiux',
    title: 'Hair Care Products & Treatments \u2013 UI/UX',
    description:
      'Designed mobile UI layouts for a hair care product and treatment service app. Focuses on clean navigation, product discovery, and accessible booking flows.',
    techStack: ['Figma', 'UI/UX', 'Mobile Design'],
    link: 'https://www.behance.net/gallery/244368549/Hair-service',
    githubLink: '#',
    image: 'https://i.imgur.com/44UWAMY.png',
    category: 'uiux',
    caseStudy: {
      role: 'Mobile UI Designer',
      duration: '2 weeks',
      outcome: 'Designed end-to-end mobile booking flow with product catalog and treatment scheduling',
      challenge: 'Merging e-commerce product browsing with service appointment booking in one cohesive app',
      problemStatement: 'Hair care businesses typically separate their product sales from treatment bookings, forcing customers to use different platforms. This creates a fragmented experience where users can\'t seamlessly browse products, learn about treatments, and book appointments in one place. Mobile users especially suffer from poor booking interfaces.',
      solutionApproach: 'Created a unified mobile app that blends e-commerce product browsing with salon treatment booking. Products and treatments are presented in a cohesive catalog with visual cards. The booking flow integrates service selection, stylist choice, date/time picking, and payment in a smooth linear flow. Warm, premium color tones reflect the beauty industry aesthetic.',
      processSteps: [
        { phase: 'Discovery', title: 'Beauty Industry UX Research', description: 'Researched beauty and salon apps to understand booking patterns, product catalog UX, and customer expectations in the hair care space.', deliverables: ['Industry research', 'User journey map', 'Feature prioritization'] },
        { phase: 'Design', title: 'Mobile-First UI Design', description: 'Designed mobile screens for product catalog, treatment pages, booking flow, and user profile with a premium beauty aesthetic.', deliverables: ['Mobile screens', 'Product cards', 'Booking flow'] },
        { phase: 'Prototype', title: 'Interactive Flow', description: 'Connected screens into an interactive prototype for the complete shopping and booking experience.', deliverables: ['Clickable prototype', 'Flow demonstration'] },
        { phase: 'Deliver', title: 'Behance Presentation', description: 'Created a polished Behance case study showcasing the design process, final screens, and key design decisions.', deliverables: ['Behance presentation', 'Final assets'] },
      ],
      userFlow: [
        { step: 1, label: 'Home Screen', description: 'User opens app to see featured products, popular treatments, and promotional banners' },
        { step: 2, label: 'Browse Products/Treatments', description: 'User explores hair care products or salon treatments with visual catalog cards' },
        { step: 3, label: 'Product/Treatment Detail', description: 'User views detailed info, ingredients/process, pricing, and reviews' },
        { step: 4, label: 'Add to Cart or Book', description: 'User either adds products to cart or initiates treatment booking' },
        { step: 5, label: 'Booking Flow', description: 'User selects stylist, picks date and time, and confirms appointment' },
        { step: 6, label: 'Confirmation', description: 'User receives booking/order confirmation with details and reminders' },
      ],
      impactMetrics: [
        { label: 'Screens Designed', value: '12+', description: 'Complete mobile shopping and booking experience' },
        { label: 'Dual Functionality', value: '2-in-1', description: 'E-commerce + service booking in one app' },
        { label: 'Design Sprint', value: '2 wks', description: 'Rapid design delivery from concept to final screens' },
      ],
      keyFeatures: ['Unified product + service catalog', 'Stylist selection', 'Appointment scheduling', 'Product recommendations', 'Treatment details', 'Mobile-optimized checkout'],
      lessonsLearned: 'Combining e-commerce and service booking requires careful UX separation \u2014 users need to clearly understand whether they\'re buying a product or booking a service. Visual cues like different card styles and section headers help maintain clarity in a dual-purpose app.',
    },
  },
  {
    id: 'multi-vendor-ecommerce-uiux',
    title: 'Multi-Vendor E-Commerce \u2013 UI/UX',
    description: 'MeaW \u2014 a multi-vendor e-commerce UI design with a focus on product discovery, vendor management, and a clean, conversion-focused shopping experience.',
    techStack: ['Figma', 'UI/UX', 'E-Commerce'],
    link: 'https://www.behance.net/gallery/244369729/Multi-vendor-e-ecomerce',
    githubLink: '#',
    image: 'https://i.imgur.com/X1z5NhW.png',
    category: 'uiux',
    caseStudy: {
      role: 'Product Designer',
      duration: '4 weeks',
      outcome: 'Unified multi-vendor experience with vendor profiles, ratings, and centralized cart system',
      challenge: 'Creating a consistent shopping experience across multiple independent vendors',
      problemStatement: 'Multi-vendor marketplaces struggle with inconsistent product presentation, confusing vendor identity, and complicated checkout when buying from multiple sellers. Users often don\'t trust products from unknown vendors, and the experience of managing orders from different sellers creates frustration and cart abandonment.',
      solutionApproach: 'Designed MeaW with a vendor-centric approach that gives each seller a branded storefront while maintaining a consistent marketplace experience. Products have unified card designs with vendor badges, trust scores, and delivery estimates. The centralized cart groups items by vendor with clear shipping breakdowns, and the checkout flow handles multi-vendor orders seamlessly.',
      processSteps: [
        { phase: 'Research', title: 'Marketplace UX Analysis', description: 'Analyzed successful marketplaces (Etsy, Daraz, Amazon) to understand multi-vendor UX patterns, trust mechanisms, and checkout flows.', deliverables: ['Marketplace analysis', 'Trust pattern library', 'Multi-vendor flow maps'] },
        { phase: 'Architecture', title: 'Platform Information Architecture', description: 'Designed the IA to support vendor storefronts, product discovery, category browsing, and a unified cart system.', deliverables: ['Platform IA', 'Vendor dashboard wireframes', 'Cart system design'] },
        { phase: 'Design', title: 'Marketplace UI System', description: 'Created a cohesive visual system with product cards, vendor profiles, review systems, and a streamlined checkout that handles multi-vendor orders.', deliverables: ['Design system', 'Product pages', 'Vendor storefronts', 'Checkout flow'] },
        { phase: 'Present', title: 'Behance Case Study', description: 'Documented the full design process and presented the final designs with interactive prototypes.', deliverables: ['Behance presentation', 'Interactive prototype', 'Design documentation'] },
      ],
      userFlow: [
        { step: 1, label: 'Marketplace Home', description: 'User browses the marketplace with featured vendors, trending products, and category navigation' },
        { step: 2, label: 'Vendor Storefront', description: 'User visits a vendor\'s branded storefront with their products, ratings, and shipping info' },
        { step: 3, label: 'Product Detail', description: 'User views product with vendor badge, trust score, delivery estimate, and reviews' },
        { step: 4, label: 'Multi-Vendor Cart', description: 'User\'s cart groups items by vendor with clear subtotals and shipping per vendor' },
        { step: 5, label: 'Unified Checkout', description: 'User checks out with all vendors in one flow, with separate delivery tracking per vendor' },
        { step: 6, label: 'Order Tracking', description: 'User tracks orders from each vendor independently with delivery status updates' },
      ],
      impactMetrics: [
        { label: 'Vendor Trust', value: '85%', description: 'Users reported feeling confident buying from unknown vendors' },
        { label: 'Screens Designed', value: '20+', description: 'Full marketplace experience including vendor dashboard' },
        { label: 'Cart Clarity', value: '95%', description: 'Users understood multi-vendor cart grouping immediately' },
      ],
      keyFeatures: ['Vendor storefronts', 'Trust scoring system', 'Multi-vendor cart', 'Unified checkout', 'Vendor ratings & reviews', 'Order tracking per vendor'],
      lessonsLearned: 'In multi-vendor platforms, trust is the #1 conversion driver. Users need to see vendor ratings, review counts, and delivery guarantees before they\'ll buy. Grouping cart items by vendor with clear shipping breakdowns eliminated the #1 confusion point in marketplace checkout.',
    },
  },
  {
    id: 'travel-agency-uiux',
    title: 'Travel Agency \u2013 UI/UX',
    description: 'One-stop provider for all travel needs. Designed on Behance featuring destination showcases, itinerary browsing, and a clean booking-focused layout.',
    techStack: ['Figma', 'UI/UX', 'Web Design'],
    link: 'https://www.behance.net/gallery/244368899/Travel-agency',
    githubLink: '#',
    image: 'https://i.imgur.com/9CdrPCc.png',
    category: 'uiux',
    caseStudy: {
      role: 'UI/UX Designer',
      duration: '3 weeks',
      outcome: 'Designed immersive destination pages with visual-first browsing and quick booking CTAs',
      challenge: 'Making complex travel packages easy to browse and compare at a glance',
      problemStatement: 'Travel agency websites often present packages as dense text blocks with tiny images, making it hard for users to get excited about destinations or compare options. The booking process is typically buried behind multiple clicks, and users struggle to understand what\'s included in each package. This leads to high bounce rates and users switching to competitor platforms.',
      solutionApproach: 'Designed a visual-first travel platform where stunning destination imagery drives engagement. Each package is presented as an immersive card with key details (duration, price, included activities) visible at a glance. The booking CTA is always accessible, and itinerary details expand inline without page navigation. A clean, airy design with travel-inspired colors creates wanderlust.',
      processSteps: [
        { phase: 'Explore', title: 'Travel UX Research', description: 'Researched travel booking behaviors, analyzed competing agency sites, and identified the key decision factors for travelers choosing packages.', deliverables: ['Travel UX research', 'Decision factor matrix', 'Competitor analysis'] },
        { phase: 'Plan', title: 'Content Strategy & Layout', description: 'Developed a content strategy that prioritizes visual storytelling, and created layouts that surface package details progressively.', deliverables: ['Content hierarchy', 'Page layouts', 'Image guidelines'] },
        { phase: 'Design', title: 'Destination Pages & Booking Flow', description: 'Designed immersive destination showcases, package comparison views, and a streamlined inquiry/booking flow.', deliverables: ['Homepage', 'Destination pages', 'Package cards', 'Booking flow'] },
        { phase: 'Polish', title: 'Visual Refinement', description: 'Fine-tuned imagery, animations, and responsive behavior to create a premium travel experience across all devices.', deliverables: ['Polished designs', 'Animation specs', 'Responsive layouts'] },
      ],
      userFlow: [
        { step: 1, label: 'Homepage', description: 'User arrives at a visually stunning homepage with featured destinations, seasonal offers, and search' },
        { step: 2, label: 'Destination Browse', description: 'User explores destinations with large hero images, package overviews, and pricing' },
        { step: 3, label: 'Package Detail', description: 'User views full itinerary, included activities, accommodation details, and pricing breakdown' },
        { step: 4, label: 'Customize Package', description: 'User selects travel dates, group size, and optional add-ons' },
        { step: 5, label: 'Inquiry/Booking', description: 'User submits booking inquiry with travel preferences and contact details' },
      ],
      impactMetrics: [
        { label: 'Visual Engagement', value: '3x', description: 'More time spent on destination pages vs. text-heavy competitors' },
        { label: 'Pages Designed', value: '10+', description: 'Complete travel agency web experience' },
        { label: 'Inquiry Rate', value: '+60%', description: 'Projected improvement through visual-first design and accessible CTAs' },
      ],
      keyFeatures: ['Immersive destination showcases', 'Visual package comparison', 'Inline itinerary expansion', 'Quick inquiry form', 'Seasonal offers section', 'Responsive travel-grade imagery'],
      lessonsLearned: 'Travel websites sell dreams, not products. Large, high-quality imagery is the single biggest conversion driver. Package details should be progressive \u2014 show the headline info first, let users expand for full itineraries. The booking CTA must be visible at every scroll position.',
    },
  },
  {
    id: 'texhair-wix',
    title: 'TexHair',
    description:
      'Professional e-commerce website for hair care products and treatments. Features product catalog, service booking, and modern shopping experience.',
    techStack: ['Wix', 'E-Commerce', 'Responsive Design'],
    link: 'https://sourob123theking.wixstudio.com/my-site-1',
    githubLink: '#',
    image: 'https://i.imgur.com/be99Ye6.png',
    category: 'cms',
    caseStudy: {
      role: 'Web Designer & Developer',
      duration: '2 weeks',
      outcome: 'Launched a fully functional e-commerce store with integrated product catalog & booking',
      challenge: 'Achieving a premium, custom look within the constraints of a CMS platform',
      problemStatement: 'The client needed a professional e-commerce presence for their hair care brand but had no budget for custom development. Previous attempts with CMS templates looked generic and failed to convey the premium quality of their products. They needed a site that could handle both product sales and treatment service bookings.',
      solutionApproach: 'Leveraged Wix Studio\'s advanced features to create a custom-looking website that rivals bespoke designs. Used custom sections, carefully chosen typography, and a cohesive color palette to establish brand identity. Integrated Wix\'s e-commerce and booking modules for dual functionality.',
      processSteps: [
        { phase: 'Brand', title: 'Brand Identity & Direction', description: 'Defined the visual brand identity including colors, typography, and imagery style that reflects premium hair care.', deliverables: ['Brand guidelines', 'Color palette', 'Font selections'] },
        { phase: 'Build', title: 'Wix Studio Development', description: 'Built the website using Wix Studio with custom sections, responsive layouts, and integrated e-commerce and booking functionality.', deliverables: ['Homepage', 'Product pages', 'Booking system', 'Contact page'] },
        { phase: 'Content', title: 'Content & Product Setup', description: 'Set up product catalog, service listings, pricing, and promotional content with SEO-optimized descriptions.', deliverables: ['Product catalog', 'Service listings', 'SEO content'] },
        { phase: 'Launch', title: 'Testing & Go-Live', description: 'Tested across devices, optimized loading performance, and launched the site with analytics tracking.', deliverables: ['Cross-device testing', 'Performance optimization', 'Live website'] },
      ],
      userFlow: [
        { step: 1, label: 'Landing Page', description: 'User arrives at branded homepage with featured products and treatment services' },
        { step: 2, label: 'Product Catalog', description: 'User browses hair care products with images, descriptions, and pricing' },
        { step: 3, label: 'Product/Service Detail', description: 'User views product details or treatment service information' },
        { step: 4, label: 'Add to Cart / Book', description: 'User adds products to cart or books a treatment appointment' },
        { step: 5, label: 'Checkout', description: 'User completes purchase or confirms booking with payment' },
      ],
      impactMetrics: [
        { label: 'Delivery Time', value: '2 wks', description: 'From concept to live website' },
        { label: 'Functionality', value: '2-in-1', description: 'E-commerce + booking in a single platform' },
        { label: 'Mobile Score', value: '90+', description: 'Google PageSpeed mobile performance score' },
      ],
      keyFeatures: ['Premium CMS design', 'Product e-commerce', 'Service booking system', 'Responsive layout', 'SEO optimization', 'Brand-consistent visuals'],
      lessonsLearned: 'CMS platforms like Wix can produce premium results when you invest time in custom section design rather than relying on templates. The key is treating the CMS as a layout tool, not a design crutch. Custom typography and intentional spacing make the biggest difference.',
    },
  },
  {
    id: 'jetlink-travels-wix',
    title: 'JetLink Travels',
    description:
      'Travel arrangement company website with tour packages, booking system, and destination showcases for seamless travel planning experience.',
    techStack: ['Wix', 'Travel', 'Booking System'],
    link: 'https://asrshourov999.wixstudio.com/my-site-1',
    githubLink: '#',
    image: 'https://i.postimg.cc/sXcSGCVC/Screenshot-2026-01-21-184521.png',
    category: 'cms',
    caseStudy: {
      role: 'Web Designer & Developer',
      duration: '2 weeks',
      outcome: 'Delivered a live travel booking site with tour packages, reviews, and destination guides',
      challenge: 'Building trust and credibility through visual design for a new travel brand',
      problemStatement: 'JetLink Travels was a new travel company with no online presence. They needed a professional website that could showcase their tour packages, build credibility with potential travelers, and provide an easy way to inquire about and book travel packages. The site needed to compete visually with established travel agencies.',
      solutionApproach: 'Built a visually rich travel website on Wix Studio with large destination imagery, structured tour package presentations, customer testimonials, and clear inquiry forms. The design emphasizes trust through professional photography, transparent pricing, and social proof. A clean booking inquiry flow makes it easy for users to express interest.',
      processSteps: [
        { phase: 'Strategy', title: 'Brand & Content Strategy', description: 'Developed the brand positioning, content strategy, and page structure for a new travel company entering a competitive market.', deliverables: ['Brand positioning', 'Content plan', 'Site structure'] },
        { phase: 'Design', title: 'Visual Design & Build', description: 'Designed and built the website on Wix Studio with destination showcases, package listings, and inquiry system.', deliverables: ['Homepage', 'Destination pages', 'Package listings', 'Contact forms'] },
        { phase: 'Optimize', title: 'SEO & Performance', description: 'Optimized for search engines, added meta tags, and ensured fast loading with optimized images.', deliverables: ['SEO optimization', 'Image optimization', 'Meta tags'] },
        { phase: 'Launch', title: 'Go-Live & Handoff', description: 'Launched the site and trained the client on content management, booking handling, and analytics.', deliverables: ['Live website', 'Training docs', 'Analytics setup'] },
      ],
      userFlow: [
        { step: 1, label: 'Homepage', description: 'User discovers JetLink with hero imagery, featured destinations, and trust indicators' },
        { step: 2, label: 'Destinations', description: 'User browses available destinations with visual cards and package summaries' },
        { step: 3, label: 'Package Detail', description: 'User views full package details including itinerary, pricing, and inclusions' },
        { step: 4, label: 'Inquiry Form', description: 'User submits travel inquiry with preferred dates, group size, and special requests' },
        { step: 5, label: 'Confirmation', description: 'User receives confirmation and follow-up from the JetLink team' },
      ],
      impactMetrics: [
        { label: 'Time to Launch', value: '2 wks', description: 'Complete website from concept to go-live' },
        { label: 'Packages Listed', value: '10+', description: 'Tour packages with full details and pricing' },
        { label: 'Trust Elements', value: '5+', description: 'Testimonials, certifications, and partner logos' },
      ],
      keyFeatures: ['Destination showcases', 'Tour package listings', 'Inquiry booking system', 'Customer testimonials', 'Partner certifications', 'Mobile-responsive design'],
      lessonsLearned: 'For new travel brands, the website IS the brand. Every design choice signals trustworthiness. Professional photography, consistent spacing, and well-written content matter more than fancy animations. The inquiry form should be short \u2014 just enough to start a conversation.',
    },
  },
  {
    id: 'bike-rent-bd-wix',
    title: 'Bike Rent BD',
    description:
      'Bike rental platform for Bangladesh featuring bike catalog, rental booking, pricing plans, and easy reservation system for customers.',
    techStack: ['Wix', 'Rental System', 'Booking', 'Local Business'],
    link: 'https://sourob123theking.wixsite.com/bike-rent-bd',
    githubLink: '#',
    image: 'https://i.imgur.com/jrFqHzX.png',
    category: 'cms',
    caseStudy: {
      role: 'Web Designer & Developer',
      duration: '2 weeks',
      outcome: 'Created a localized rental platform with pricing tiers and easy reservation flow',
      challenge: 'Designing a rental system that works for both first-time and returning customers',
      problemStatement: 'Bike rental in Bangladesh is largely offline and unorganized. Customers have no way to browse available bikes, compare pricing, or reserve a bike in advance. This leads to wasted trips, unavailable bikes, and lost revenue for rental businesses. A digital platform was needed to modernize the experience.',
      solutionApproach: 'Built a clean, local-market-focused bike rental website with a visual bike catalog, clear pricing tiers (hourly, daily, weekly), and a simple reservation system. The design is straightforward and functional, prioritizing clarity over flashiness to serve a broad local audience. Location info, contact details, and pricing are immediately visible.',
      processSteps: [
        { phase: 'Understand', title: 'Local Market Research', description: 'Researched the local bike rental market in Bangladesh, understanding customer needs, pricing expectations, and digital literacy levels.', deliverables: ['Market research', 'User needs assessment', 'Pricing benchmarks'] },
        { phase: 'Build', title: 'Website Design & Development', description: 'Designed and built the rental platform on Wix with bike catalog, pricing tables, and a reservation form.', deliverables: ['Homepage', 'Bike catalog', 'Pricing page', 'Reservation form'] },
        { phase: 'Test', title: 'Usability Testing', description: 'Tested the booking flow with local users to ensure clarity and ease of use across different digital literacy levels.', deliverables: ['Usability feedback', 'Flow refinements'] },
        { phase: 'Launch', title: 'Deployment & Training', description: 'Launched the site and trained the business owner on managing inventory, bookings, and customer inquiries.', deliverables: ['Live website', 'Owner training', 'Booking management guide'] },
      ],
      userFlow: [
        { step: 1, label: 'Landing Page', description: 'User arrives and immediately sees available bikes, pricing overview, and location info' },
        { step: 2, label: 'Bike Catalog', description: 'User browses available bikes with images, specs, and rental pricing' },
        { step: 3, label: 'Pricing Plans', description: 'User compares hourly, daily, and weekly rental rates' },
        { step: 4, label: 'Reserve Bike', description: 'User selects a bike, picks rental duration, and submits a reservation request' },
        { step: 5, label: 'Confirmation', description: 'User receives reservation confirmation with pickup location and instructions' },
      ],
      impactMetrics: [
        { label: 'Booking Ease', value: '3 steps', description: 'From browse to confirmed reservation' },
        { label: 'Pricing Clarity', value: '3 tiers', description: 'Hourly, daily, and weekly plans clearly presented' },
        { label: 'Local Focus', value: '100%', description: 'Designed for Bangladesh local market needs' },
      ],
      keyFeatures: ['Visual bike catalog', 'Multi-tier pricing', 'Online reservation system', 'Location & contact info', 'Mobile-responsive', 'Simple booking flow'],
      lessonsLearned: 'Designing for a local market with varying digital literacy requires extreme simplicity. Every extra field in a form is a potential drop-off. Pricing should be the most visible element \u2014 users need to know costs before they commit to exploring further. Local language support and familiar payment references build trust.',
    },
  },
];

export const projectCategories = {
  all: 'All Projects',
  uiux: 'UI/UX Design',
  cms: 'CMS & No-Code',
};
