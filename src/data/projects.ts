export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  githubLink: string;
  image: string;
  category: 'uiux' | 'cms';
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
  },
   {
    id: 'healthcare-App-uiux',
    title: 'Healthcare App - UI/UX',
    description:
      'Healthcare Mobile App UI/UX Design — Designed a modern healthcare app in Figma for finding doctors, exploring specialties, booking consultations, viewing doctor profiles, selecting locations, and interacting with an AI health assistant. Focused on clean navigation, intuitive user flows, accessibility, and a consistent healthcare-focused visual system.',
    techStack: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.behance.net/gallery/256304169/Healthcare-Mobile-App-UIUX-Design',
    githubLink: '#',
    image: 'https://i.imgur.com/oifV1NB.png',
    category: 'uiux',
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
  },
  {
    id: 'tech-ecommerce-uiux',
    title: 'Tech E-commerce - UI/UX',
    description:
      'The one-stop solution’s UI/UX is a masterclass in modern, high-energy design. It blends aesthetic with vibrant gradients to create a professional yet creative workspace.',
    techStack: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/proto/r1HdzOE3ZqLWxrVOHhXgLZ/demo-2?node-id=34-213&p=f&t=ekFTkd1SYRom0iw1-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=34%3A213',
    githubLink: '#',
    image: 'https://i.imgur.com/DK02HMg.png',
    category: 'uiux',
  },

  {
    id: 'hair-care-ecommerce-uiux',
    title: 'Hair Care Products & Treatments – UI/UX',
    description:
      'Designed mobile UI layouts for a hair care product and treatment service app. Focuses on clean navigation, product discovery, and accessible booking flows.',
    techStack: ['Figma', 'UI/UX', 'Mobile Design'],
    link: 'https://www.behance.net/gallery/244368549/Hair-service',
    githubLink: '#',
    image: 'https://i.imgur.com/44UWAMY.png',
    category: 'uiux',
  },

  {
    id: 'multi-vendor-ecommerce-uiux',
    title: 'Multi-Vendor E-Commerce – UI/UX',
    description: 'MeaW — a multi-vendor e-commerce UI design with a focus on product discovery, vendor management, and a clean, conversion-focused shopping experience.',
    techStack: ['Figma', 'UI/UX', 'E-Commerce'],
    link: 'https://www.behance.net/gallery/244369729/Multi-vendor-e-ecomerce',
    githubLink: '#',
    image: 'https://i.imgur.com/X1z5NhW.png',
    category: 'uiux',
  },

  {
    id: 'travel-agency-uiux',
    title: 'Travel Agency – UI/UX',
    description: 'One-stop provider for all travel needs. Designed on Behance featuring destination showcases, itinerary browsing, and a clean booking-focused layout.',
    techStack: ['Figma', 'UI/UX', 'Web Design'],
    link: 'https://www.behance.net/gallery/244368899/Travel-agency',
    githubLink: '#',
    image: 'https://i.imgur.com/9CdrPCc.png',
    category: 'uiux',
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
  },
];

export const projectCategories = {
  all: 'All Projects',
  uiux: 'UI/UX Design',
  cms: 'CMS & No-Code',
};
