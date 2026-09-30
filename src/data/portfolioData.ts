import { CaseStudy, ServiceItem, ProcessStep, Testimonial, ColorToken, ToolCategory } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'drseba',
    tag: 'HEALTHCARE TECH',
    year: '2024',
    category: 'Healthcare Tech',
    title: 'DrSeba — Healthcare Appointment Platform',
    shortDescription:
      'Re-engineered the end-to-end patient consultation journey. Built an intelligent triage doctor discovery flow, one-tap booking system, and frictionless EHR access.',
    fullProblem:
      'Patients reported an average of 8 minutes spent trying to schedule a specialized doctor visit. Drop-offs occurred mainly at physician verification, scheduling mismatches, and insurance pre-checks (over 45% abandonment rate).',
    fullSolution:
      'Engineered an adaptive symptom-based search with instant calendar slot booking, reducing the scheduling path down to 3 frictionless steps. Integrated real-time doctor availability feeds and one-tap insurance pre-fill.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWI90-tqGoA-4FSKoYTXaUlWWBVPwwsfjgyHgVIQYfXBfDcdXj2EBzj_J9MnkJs3cYoQKieqAg6bFExP9L8m7tV9O6QJz3R_9r9RWHy4QMTcNAfqSfqA4nH3tJOjTNc76t8EhQU9x7jovrT98TJC4BhmwzljurrzDUsZAWtLBvPGAV1t_bIxMJaFFLfgaZ92RBecHErGPWROIWs7oLD_Ynxs2CiricKjQ2MPk6tg3rC4-1bJUzvZyWrw',
    detailImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4E-y4VTibbSmE7nPb5AsIeQ5pGSih7bTZU1tDQSWsathbLQwId6VyWLS9D4fvr5c-vHjlgSkjv1iZBhRZZplVPcHv6mkTNy2rB0rKhCoVGPQyq-NdoMFZlr9YWC2yqEzBtrH-i_38fwixZzEh2spAcBN4bv0mJvIU9y4QyWKb2lZs6ATYjljUbQg4PSwsDLviJLy-8WYD8byAJt9du8hW6WbtaiuOrRlJYg0LDB6WI6EIGwetI1XBw',
    metrics: [
      { label: 'Booking Completion', value: '+68%', subtext: 'Post-launch conversion' },
      { label: 'Scheduling Drop-off', value: '-45%', subtext: 'Drop-off reduction' },
      { label: 'Average Booking Time', value: '1.8 min', subtext: 'Down from 8.2 mins' },
      { label: 'Positive Usability Score', value: '96%', subtext: 'From 120+ clinical tests' }
    ],
    deliverables: ['Information Architecture', 'Design System (Figma)', 'Interactive Telemetry Prototypes', 'Doctor Scheduling Grid', 'Responsive Patient Portal'],
    tools: ['Figma Auto Layout 4.0', 'ProtoPie', 'Miro Journey Mapping', 'Tokens Studio'],
    subtitle: 'Re-engineered the end-to-end patient consultation journey with intelligent triage and one-tap calendar booking.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWI90-tqGoA-4FSKoYTXaUlWWBVPwwsfjgyHgVIQYfXBfDcdXj2EBzj_J9MnkJs3cYoQKieqAg6bFExP9L8m7tV9O6QJz3R_9r9RWHy4QMTcNAfqSfqA4nH3tJOjTNc76t8EhQU9x7jovrT98TJC4BhmwzljurrzDUsZAWtLBvPGAV1t_bIxMJaFFLfgaZ92RBecHErGPWROIWs7oLD_Ynxs2CiricKjQ2MPk6tg3rC4-1bJUzvZyWrw',
    featured: true,
    tags: ['Healthcare Tech', 'Telemedicine', 'Design System', 'Figma'],
    overview: 'A complete patient portal overhaul addressing scheduling fragmentation, insurance verification bottlenecks, and EHR access in one unified viewport.',
    problem: 'Patients faced multi-page forms, slow physician verification, and mismatched schedules resulting in a 45% abandonment rate during peak hours.',
    solution: 'Designed an intuitive symptom triage wizard, instant time-slot picker, and direct integration with provider electronic health records.',
    impact: 'Increased booking completions by +68%, dropped abandonment by -45%, and received 96% positive satisfaction scores in clinical usability testing.'
  },
  {
    id: 'skillstream',
    tag: 'EDTECH SAAS',
    year: '2024',
    category: 'EdTech SaaS',
    title: 'SkillStream — Modern E-Learning Platform',
    shortDescription:
      'Designed a frictionless study environment with personalized pacing, interactive knowledge checks, and distraction-free lecture viewports.',
    fullProblem:
      'Student course completion rates hovered below 18% due to cluttered navigation, rigid desktop viewports, and disconnected video lecture notes that caused cognitive fatigue.',
    fullSolution:
      'Introduced a distraction-free theatre layout with synchronized timestamp annotations and interactive checkpoint milestones, boosting student retention and engagement by 3.4x.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyAReV_n-3Rd9HdcUztxetH-RrDqbZMIZdLxts-oU5FcXZwOUOIiVKNxrJl8Aq3pa_CVPHRoXxBqyeOTtmV_09hUOfqfQ82l29qNu15Xt-ABCbAKaDaXfrQwU3tCtEhTyHwfeL955buvgc7OnaF9tsXvpjFCZYA16gdloLUCINW_lgUPxiXS3gyDJjjv0U65ZwKUGw8phs338z1ngBs45N5YS6rpD79KsWnrg96AuJNbAUbqTpXrra5g',
    detailImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4E-y4VTibbSmE7nPb5AsIeQ5pGSih7bTZU1tDQSWsathbLQwId6VyWLS9D4fvr5c-vHjlgSkjv1iZBhRZZplVPcHv6mkTNy2rB0rKhCoVGPQyq-NdoMFZlr9YWC2yqEzBtrH-i_38fwixZzEh2spAcBN4bv0mJvIU9y4QyWKb2lZs6ATYjljUbQg4PSwsDLviJLy-8WYD8byAJt9du8hW6WbtaiuOrRlJYg0LDB6WI6EIGwetI1XBw',
    metrics: [
      { label: 'Course Engagement', value: '+3.4x', subtext: 'Daily active study time' },
      { label: 'Completion Rate', value: '72%', subtext: 'Up from 18% prior baseline' },
      { label: 'Note Retrieval Speed', value: '0.8s', subtext: 'Instant indexed search' },
      { label: 'NPS Score', value: '+64', subtext: 'Measured across 1,400 students' }
    ],
    deliverables: ['Video Player Canvas UI', 'Modular Curriculum Sidebar', 'Gamified Milestones & Badges', 'Dark Mode Cognitive Balance'],
    tools: ['Figma', 'FigJam', 'Principle', 'Lookback User Tests'],
    subtitle: 'Frictionless study environment with personalized pacing, interactive knowledge checks, and distraction-free theatre viewports.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyAReV_n-3Rd9HdcUztxetH-RrDqbZMIZdLxts-oU5FcXZwOUOIiVKNxrJl8Aq3pa_CVPHRoXxBqyeOTtmV_09hUOfqfQ82l29qNu15Xt-ABCbAKaDaXfrQwU3tCtEhTyHwfeL955buvgc7OnaF9tsXvpjFCZYA16gdloLUCINW_lgUPxiXS3gyDJjjv0U65ZwKUGw8phs338z1ngBs45N5YS6rpD79KsWnrg96AuJNbAUbqTpXrra5g',
    featured: false,
    tags: ['EdTech', 'SaaS Platform', 'Video UX', 'Interactive'],
    overview: 'A next-generation e-learning web platform engineered for deep focus, modular curriculums, and instant note indexing.',
    problem: 'Course completion was lagging at 18% because lecture players were cluttered with extraneous sidebars and fragmented note taking tools.',
    solution: 'Designed an ambient theatre mode with inline time-stamped note taking, markdown export, and micro-quiz checkpoints.',
    impact: 'Completion jumped from 18% to 72%, with student study times increasing 3.4x.'
  },
  {
    id: 'pulsehealth',
    tag: 'MOBILE UX / IOS',
    year: '2023',
    category: 'AI / Health',
    title: 'PulseHealth — Healthcare Mobile Experience',
    shortDescription:
      'Engineered an intuitive mobile application for remote vital telemetry tracking, telemedicine video triage, and biometric history records.',
    fullProblem:
      'Patients managing chronic conditions struggled with multi-device Bluetooth syncing, dense medical charts, and overwhelming alert noise that created anxiety.',
    fullSolution:
      'Architected a glanceable card-based telemetry dashboard with color-coded biometric safety bands, push guidance, and instant 1-tap emergency teleconsultation.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8tCZNslYRbARkTNP-1JjsxENuWAGUHSiPu3eeLOwCI_AONlXyBZNLq3JKbWZjCruTXqcxTCaBf70nQMk99suZREtWHtD3jNCGHZxlaRXQuKysQ79ZOeJuAnVMLP_UAqj4osPD0ndWNqEli7Yy5Klbz2JBB-xvOmfqMRvSsF3pIOYJNsmM1fSGohhl5COsdG_ZIbOzx3Zju67itRdWPGBE5OdbpbksTQ04zO4MNXq-oxs_-2er9r6_3A',
    detailImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4E-y4VTibbSmE7nPb5AsIeQ5pGSih7bTZU1tDQSWsathbLQwId6VyWLS9D4fvr5c-vHjlgSkjv1iZBhRZZplVPcHv6mkTNy2rB0rKhCoVGPQyq-NdoMFZlr9YWC2yqEzBtrH-i_38fwixZzEh2spAcBN4bv0mJvIU9y4QyWKb2lZs6ATYjljUbQg4PSwsDLviJLy-8WYD8byAJt9du8hW6WbtaiuOrRlJYg0LDB6WI6EIGwetI1XBw',
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★', subtext: 'Over 8,400 user reviews' },
      { label: 'Daily Vitals Log Rate', value: '88%', subtext: 'Consistent compliance' },
      { label: 'Emergency Response', value: '-60%', subtext: 'Faster alert-to-doctor time' },
      { label: 'Crash-Free UX Sessions', value: '99.9%', subtext: 'Optimized iOS build' }
    ],
    deliverables: ['iOS Human Interface Architecture', 'Biometric Live Telemetry Charts', 'Accessible Large-Type Themes', 'Doctor-Patient Chat UI'],
    tools: ['Figma iOS Kit', 'SwiftUI Mockup Token Sync', 'Maze Testing'],
    subtitle: 'Intuitive mobile application for remote vital telemetry tracking, telemedicine video triage, and biometric history records.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8tCZNslYRbARkTNP-1JjsxENuWAGUHSiPu3eeLOwCI_AONlXyBZNLq3JKbWZjCruTXqcxTCaBf70nQMk99suZREtWHtD3jNCGHZxlaRXQuKysQ79ZOeJuAnVMLP_UAqj4osPD0ndWNqEli7Yy5Klbz2JBB-xvOmfqMRvSsF3pIOYJNsmM1fSGohhl5COsdG_ZIbOzx3Zju67itRdWPGBE5OdbpbksTQ04zO4MNXq-oxs_-2er9r6_3A',
    featured: false,
    tags: ['Mobile UX', 'iOS App', 'Telemetry', 'Healthcare'],
    overview: 'A mobile-first medical telemetry companion connecting home biometric sensors directly with emergency care physicians.',
    problem: 'Dense clinical data was terrifying patients, and ambiguous readings caused frequent false-alarm hospital visits.',
    solution: 'Designed color-banded vital zones, calming haptic feedback, and a 1-tap SOS triage workflow with geolocation.',
    impact: 'Achieved 4.9 stars on App Store across 8,400+ reviews and lowered emergency escalation response times by 60%.'
  },
  {
    id: 'auracommerce',
    tag: 'LUXURY E-COMMERCE',
    year: '2023',
    category: 'FinTech',
    title: 'Aura Commerce — High-End Retail System',
    shortDescription:
      'Constructed an avant-garde digital storefront with seamless micro-interactions, an interactive cart drawer, and high-velocity one-tap checkout architecture.',
    fullProblem:
      'High shopping cart abandonment (76%) caused by heavy page reloads, fragmented checkout forms, and generic product galleries lacking high-fashion tactile presence.',
    fullSolution:
      'Designed an interactive slide-drawer checkout with real-time currency conversion, 3D interactive product viewports, and instantaneous Apple Pay/Google Pay integration.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAa_O9qyrMjk1-hK4eG1Vtkx3GJKT4zSzLIDH63_0He08Wq-vZsz8FGg-1v1ZgltoiAcaoQ8w-wT75qWsi1KkXuBZhtnQieucs8Q5nzBtIoCe-WERisO2p0mqsWj2rpWPerGsrnMc4w6f1h1Jk1HicLe41J11r0ZemS2oBsVeruirS0NS_H-hrMil1wQOoY6pSViPSdIr1PeSj2KVf1po6B_E__eR3StqooctRwgkhcGBaH4pO7dQOGow',
    detailImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4E-y4VTibbSmE7nPb5AsIeQ5pGSih7bTZU1tDQSWsathbLQwId6VyWLS9D4fvr5c-vHjlgSkjv1iZBhRZZplVPcHv6mkTNy2rB0rKhCoVGPQyq-NdoMFZlr9YWC2yqEzBtrH-i_38fwixZzEh2spAcBN4bv0mJvIU9y4QyWKb2lZs6ATYjljUbQg4PSwsDLviJLy-8WYD8byAJt9du8hW6WbtaiuOrRlJYg0LDB6WI6EIGwetI1XBw',
    metrics: [
      { label: 'Average Order Value', value: '+31%', subtext: 'Through contextual bundles' },
      { label: 'Checkout Duration', value: '1.8s', subtext: 'Reduced friction' },
      { label: 'Mobile Conversion', value: '+44%', subtext: 'Fluid one-hand layout' },
      { label: 'Cart Retention', value: '82%', subtext: 'Persistent slide drawer' }
    ],
    deliverables: ['Tactile Micro-interactions', 'Cart Drawer Architecture', 'Luxury Editorial Lookbook', 'Global Checkout Localization'],
    tools: ['Figma', 'Spline 3D Integration', 'After Effects Lottie'],
    subtitle: 'Avant-garde digital storefront with seamless tactile micro-interactions, cart drawer, and high-velocity one-tap checkout.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAa_O9qyrMjk1-hK4eG1Vtkx3GJKT4zSzLIDH63_0He08Wq-vZsz8FGg-1v1ZgltoiAcaoQ8w-wT75qWsi1KkXuBZhtnQieucs8Q5nzBtIoCe-WERisO2p0mqsWj2rpWPerGsrnMc4w6f1h1Jk1HicLe41J11r0ZemS2oBsVeruirS0NS_H-hrMil1wQOoY6pSViPSdIr1PeSj2KVf1po6B_E__eR3StqooctRwgkhcGBaH4pO7dQOGow',
    featured: true,
    tags: ['Luxury E-Commerce', 'FinTech', 'Micro-interactions', 'UI/UX Design'],
    overview: 'A premier digital boutique combining high-fashion editorial aesthetics with zero-latency frictionless checkout.',
    problem: 'Cart abandonment was at 76% due to clunky redirects and generic e-commerce layouts that failed to convey luxury value.',
    solution: 'Designed fluid drawer-based cart transitions, interactive 3D product material previewers, and 1-click biometric payments.',
    impact: 'Drove a +31% increase in average order value and compressed checkout duration down to 1.8 seconds.'
  }
];

export const caseStudies = CASE_STUDIES;

export const SERVICES: ServiceItem[] = [
  {
    id: 'uiux',
    number: '01',
    title: 'UI/UX Design',
    description: 'User-centered interfaces and thoughtful digital experiences designed around real people and real business goals.',
    icon: 'Layers',
    accent: 'primary',
    deliverables: ['Research & Discovery', 'Wireframes', 'High-Fidelity UI', 'Prototypes']
  },
  {
    id: 'cms',
    number: '02',
    title: 'CMS',
    description: 'Beautiful, scalable and easy-to-manage websites built with modern CMS platforms.',
    icon: 'Layout',
    accent: 'secondary',
    deliverables: ['Webflow Websites', 'Wix Websites', 'WordPress Sites', 'Squarespace Sites']
  }
];

export const services = SERVICES;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Discovery & User Needs',
    description: 'Understand the audience, brand, goals, and pain points before shaping the experience.',
    pill: 'Brief & Scope',
    duration: 'Week 1',
    artifacts: ['Project Brief', 'User Needs', 'Experience Goals']
  },
  {
    step: '02',
    number: '02',
    title: 'Flows & Wireframes',
    description: 'Map the important journeys and explore low-fidelity layouts before moving into visual design.',
    pill: 'Lo-Fi Layouts',
    duration: 'Week 2',
    artifacts: ['User Flows', 'Information Architecture', 'Wireframes']
  },
  {
    step: '03',
    number: '03',
    title: 'High-Fidelity UI',
    description: 'Shape the visual language, responsive layouts, interaction states, and polished prototype.',
    pill: 'Hi-Fi System',
    duration: 'Weeks 3-4',
    artifacts: ['UI Screens', 'Responsive States', 'Interactive Prototype']
  },
  {
    step: '04',
    number: '04',
    title: 'Refine & Launch',
    description: 'Review the details together, refine the final experience, and prepare a clear handoff for launch.',
    pill: 'Dev Specs',
    duration: 'Week 5',
    artifacts: ['Design Review', 'Content Polish', 'Launch Checklist']
  }
];

export const processSteps = PROCESS_STEPS;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'client-01',
    quote:
      'Shourov delivered a clean, intuitive Figma prototype within the timeline we agreed on. He asked the right questions upfront and the final design needed very minimal revisions.',
    author: 'Freelance Client',
    name: 'Freelance Client',
    role: 'Product Owner',
    company: 'E-commerce Startup',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    initials: 'PC',
    accentColor: 'border-primary text-primary',
    stars: 5
  },
  {
    id: 'client-02',
    quote:
      'Great experience working with Shourov on our Wix website. He understood our brand, built it fast, and made sure we could manage it ourselves afterward. Highly recommended.',
    author: 'Freelance Client',
    name: 'Freelance Client',
    role: 'Founder',
    company: 'Local Business',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    initials: 'FC',
    accentColor: 'border-secondary text-secondary',
    stars: 5
  },
  {
    id: 'client-03',
    quote:
      'Shourov helped redesign our service page UI and the difference was immediately noticeable. He has a strong eye for layout, spacing, and user flow. Professional and easy to work with.',
    author: 'Freelance Client',
    name: 'Freelance Client',
    role: 'Marketing Manager',
    company: 'Digital Agency',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    initials: 'FC',
    accentColor: 'border-tertiary text-tertiary',
    stars: 5
  }
];

export const testimonials = TESTIMONIALS;

export const COLOR_TOKENS: ColorToken[] = [
  {
    name: 'Primary Violet',
    value: '#7C3AED',
    hex: '#7C3AED',
    role: 'Primary Accent & Actions',
    bgClass: 'bg-[#7c3aed]',
    shadowClass: 'shadow-[0_0_12px_#7c3aed]'
  },
  {
    name: 'Electric Indigo',
    value: '#3626CE',
    hex: '#3626CE',
    role: 'Secondary & Logic',
    bgClass: 'bg-[#3626ce]',
    shadowClass: 'shadow-[0_0_12px_#3626ce]'
  },
  {
    name: 'Hyper Pink',
    value: '#BF2076',
    hex: '#BF2076',
    role: 'Focal Points & Badges',
    bgClass: 'bg-[#bf2076]',
    shadowClass: 'shadow-[0_0_12px_#bf2076]'
  },
  {
    name: 'Soft Lavender',
    value: '#D2BBFF',
    hex: '#D2BBFF',
    role: 'Text Highlight & Glow',
    bgClass: 'bg-[#d2bbff]',
    shadowClass: 'shadow-[0_0_12px_#d2bbff]'
  },
];

export const designTokens = COLOR_TOKENS;

