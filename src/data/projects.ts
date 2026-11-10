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

export interface VisualPrinciple {
  title: string;
  tagline: string;
  description: string;
  badges?: string[];
}

export interface ColorToken {
  role: string;
  hex: string;
  intent: string;
}

export interface TypographySpec {
  level: string;
  specs: string;
}

export interface BilingualStrategyItem {
  title: string;
  description: string;
}

export interface ArchitecturalPattern {
  number: string;
  title: string;
  screenRefs: string;
  description: string;
  features: string[];
}

export interface ImpactCohesionItem {
  label: string;
  metric: string;
  description: string;
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
  // Sovereign Enterprise / Rich Case Study fields
  subtitle?: string;
  executiveSummary?: string;
  corePrinciples?: VisualPrinciple[];
  colorTokens?: ColorToken[];
  typographySpecs?: TypographySpec[];
  bilingualStrategy?: BilingualStrategyItem[];
  architecturalPatterns?: ArchitecturalPattern[];
  impactCohesion?: ImpactCohesionItem[];
  conclusion?: string;
}

export type ProjectCategory = 'app' | 'website' | 'dashboard' | 'landing-page';

export const categoryLabels: Record<ProjectCategory, string> = {
  app: 'App',
  website: 'Website',
  dashboard: 'Dashboard',
  'landing-page': 'Landing page',
};

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  githubLink: string;
  image: string;
  category: ProjectCategory;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 'orbit-ai-design-system',
    title: 'ORBIT AI — Sovereign Enterprise AI Workspace',
    description: 'Bangladesh’s first sovereign enterprise AI workspace design system, spanning 38+ screens across desktop and mobile, engineered for statutory compliance, bilingual Bangla-English NLP, and domestic data residency.',
    techStack: ['Figma', 'Design System', 'Enterprise AI', 'Bilingual UI/UX', 'Fintech & Gov'],
    link: 'https://www.behance.net/gallery/258314983/ORBIT-AI-Sovereign-Enterprise-AI-Workspace',
    githubLink: '#',
    image: 'https://i.imgur.com/QB3X4wT.png',
    category: 'dashboard',
    caseStudy: {
      role: 'Lead Product & Design Systems Architect',
      duration: '8 weeks',
      outcome: 'Architected 38+ screens with 100% design system continuity, compliant with Bangladesh Bank ICT 3.0 & NBR Mushak 6.3',
      challenge: 'Unifying multi-modal Bengali linguistics, statutory tax compliance, and sub-15ms domestic telemetry without generic Western SaaS templates',
      subtitle: 'Architecting a Sovereign Enterprise AI Platform for Bangladesh',
      executiveSummary: 'ORBIT AI is Bangladesh’s first sovereign enterprise AI workspace, engineered to bridge unstructured corporate information—faded paper VAT challans, WhatsApp voice memos, legacy ERP databases, and dual-language legal instruments—into deterministic, audit-ready operational action.\n\nTo support an expansive ecosystem spanning 38+ screens across desktop and mobile (including core foundational products, specialized departmental agents, statutory compliance dashboards, developer documentation, and industry solutions), the product required a unified, robust, and culturally attuned Design System: ORBIT AI Workspace (DESIGN_SYSTEM_1).\n\nThis case study breaks down the design strategy, typographic hierarchy, color chemistry, layout rhythm, component architecture, and bilingual information design that enabled ORBIT AI to communicate uncompromising enterprise rigor and futuristic technological capability.',
      problemStatement: 'Most B2B SaaS platforms adopt generic Western templates: clean white cards, English-centric typography, standard credit card billing patterns, and generic conversational chat shells. For a mission-critical platform operating in Bangladesh:\n\n1. Linguistic Complexity: Real corporate communication in Bangladesh is multi-modal and fluid—interleaving formal Shuddho Bangla, colloquial factory floor terms, phonetic English transliterations ("Banglish"), and specialized Bengali compound conjunct ligatures (যুক্তবর্ণ).\n\n2. Statutory & Operational Rigor: Enterprises require strict auditability under Bangladesh Bank ICT Security Guideline 3.0, National Board of Revenue (NBR) Mushak 6.3 tax compliance, and zero data egress beyond domestic BGD-IX peering nodes.\n\n3. Cognitive Fatigue: Traditional SaaS grids become monotonous across 30+ pages. The interface needed to alternate strategically between high-density operational cockpits and cinematic, inspiring storytelling without compromising scanability.',
      solutionApproach: 'Engineered ORBIT AI Workspace (DESIGN_SYSTEM_1)—a sovereign design system reconciling deep institutional trust with electric generative AI intelligence. Structured around high-density operational cockpits, an intentional light-to-dark atmospheric rhythm, bilingual typographic scaling with Bengali ligature accommodation (+8% optical line-height), and repeatable architectural modules (Tri-Pane Document Cockpit, Multi-Agent Swarm Cluster, Sovereign Latency & Peering Visualizer, and BDT Token & Forex Savings Calculator).',
      processSteps: [
        {
          phase: 'Discovery & Auditing',
          title: 'Sovereignty & Statutory Compliance',
          description: 'Audited regulatory constraints under Bangladesh Bank ICT Security Guideline 3.0, NBR Mushak 6.3 VAT requirements, and domestic BGD-IX routing latency needs across Bangladeshi enterprises.',
          deliverables: ['Regulatory audit matrix', 'Domestic latency benchmarks', 'Bilingual text corpus analysis']
        },
        {
          phase: 'Tokenomics & Color',
          title: 'Atmospheric Rhythm & Visual Hierarchy',
          description: 'Formulated the tokenomic palette balancing Deep Void dark zones (#0B1020) for telemetry and AI swarms with Precision Light Workspaces (#FFFFFF/#F8FAFC) for high-density document audits.',
          deliverables: ['Color token system', 'Contrast & accessibility matrix', 'Dark/light atmospheric pacing guide']
        },
        {
          phase: 'Architecture',
          title: 'Bilingual Typography & Component Library',
          description: 'Engineered typography combining Inter glyphs with specialized Bengali rendering calibrated for compound ligatures (+8% line height), plus reusable tri-pane cockpits and agent clusters.',
          deliverables: ['Bilingual type scale', 'Tri-pane cockpit components', 'Multi-agent card patterns']
        },
        {
          phase: 'Prototyping',
          title: 'Cross-Form Factor Parity & Telemetry',
          description: 'Designed and prototyped 38+ enterprise desktop and mobile surfaces, integrating real-time regional node latency visualizers (Dhaka, Chittagong, Sylhet) and BDT token calculators.',
          deliverables: ['38+ desktop & mobile screens', 'Interactive telemetry prototypes', 'Design system documentation']
        }
      ],
      userFlow: [
        {
          step: 1,
          label: 'Sovereign Auth & Enclave Verification',
          description: 'User enters the air-gapped workspace, verified against local BGD-IX peering nodes with sub-15ms domestic latency telemetry.'
        },
        {
          step: 2,
          label: 'Document Ingestion & Tri-Pane Cockpit',
          description: 'Uploads unstructured paperwork (faded Mushak 6.3 VAT challans, WhatsApp audio, CIB reports) into the synchronized tri-pane cockpit.'
        },
        {
          step: 3,
          label: 'Multi-Agent Swarm Processing',
          description: 'Bangla NLP engine, NBR Tax Agent, and Procurement Agent execute zero-hallucination extraction and ERP synchronization.'
        },
        {
          step: 4,
          label: 'Statutory Audit & Discrepancy Log',
          description: 'Live validation checkmarks verify compliance against Bangladesh Bank 3.0 & NBR rules, flagging discrepancy alerts in amber.'
        },
        {
          step: 5,
          label: 'Deterministic Action & Ledger Sync',
          description: 'Exports audit-ready JSON schemas, commits records to domestic ERPs (SAP/Tally), and updates BDT financial ledger.'
        }
      ],
      impactMetrics: [
        {
          label: 'Ecosystem Scale',
          value: '38+ Screens',
          description: 'Complete enterprise coverage across desktop cockpits and responsive mobile interfaces'
        },
        {
          label: 'Domestic Latency',
          value: '<15ms',
          description: 'Zero international data egress via domestic BGD-IX peering nodes (Dhaka, CTG, Sylhet)'
        },
        {
          label: 'Design Continuity',
          value: '100%',
          description: 'Unified visual continuity and token reuse across navigation, components, and telemetry'
        }
      ],
      keyFeatures: [
        'Tri-Pane Document Cockpit',
        'Autonomous Multi-Agent Swarm Cluster',
        'Sovereign Latency & Peering Visualizer',
        'BDT Token & Forex Savings Calculator',
        'Bilingual Shuddho Bangla Typography Scale (+8% optical line-height)',
        'Atmospheric Rhythm (Light ↔ Dark Pacing)',
        'Bangladesh Bank ICT 3.0 & NBR Mushak 6.3 Compliance Badges',
        'Air-Gapped Enclave Telemetry'
      ],
      lessonsLearned: 'Designing for high-stakes enterprise applications in emerging regional markets requires grounding the interface in statutory realities rather than cosmetic Silicon Valley tropes. When auditability, linguistic nuance (যুক্তবর্ণ), and local latency guarantees are embedded directly into foundational design tokens, user trust scales exponentially.',
      corePrinciples: [
        {
          title: 'Sovereignty by Design',
          tagline: 'Domestic Security & Latency',
          description: 'Every visual token reinforces domestic security, local latency (<15ms via BGD-IX), and institutional trust. Visual accents incorporate telemetry indicators directly into card headers and badges.',
          badges: ['Dhaka DC-1 Kaliakair', 'Mohakhali Tier-IV Node', '99.98% SLA', 'Air-Gapped Enclave']
        },
        {
          title: 'High-Fidelity Information Density',
          tagline: 'The Cockpit Standard',
          description: 'Rather than abstracting complexity away with empty whitespace, ORBIT AI embraces structured enterprise density. Complex data tables, tripartite split-screens, and cryptographic provenance hashes are treated as primary design elements.',
          badges: ['Document Preview', 'Parsed JSON Schema', 'Discrepancy Log']
        },
        {
          title: 'Atmospheric Rhythm',
          tagline: 'Light ↔ Dark Pacing',
          description: 'Rejects uniform white layouts in favor of an intentional rhythm: Cinematic Dark Zones (#0B1020 / #111827) for hero storytelling & server maps; Precision Light Workspaces (#FFFFFF / #F8FAFC) for document analysis; Soft Accents (#EEF2FF) for seamless transitions.',
          badges: ['Cinematic Dark Zones', 'Precision Light Workspaces', 'Atmospheric Accents']
        },
        {
          title: 'The Orbital Signature',
          tagline: 'Trajectory & Movement',
          description: 'Concentric glowing orbital rings representing the operational trajectory: Knowledge → Intelligence → Action, complemented by multi-layered floating contextual pill-cards orbiting product viewports.',
          badges: ['Knowledge → Intelligence → Action', 'CSAT +18%', 'Bangla NLP 1.2s']
        }
      ],
      colorTokens: [
        { role: 'Primary Ink', hex: '#111827', intent: 'Primary typography, dark container surfaces, high-contrast badges' },
        { role: 'Deep Void', hex: '#0B1020', intent: 'Hero backdrops, server enclave terminal frames, code editors' },
        { role: 'AI Violet', hex: '#635BFF', intent: 'Primary brand accent, verified status indicators, interactive CTAs' },
        { role: 'Electric Indigo', hex: '#4F46E5', intent: 'Active pipeline flows, focused states, primary links' },
        { role: 'Cyan Glow', hex: '#06B6D4', intent: 'Real-time telemetry, WebSocket streaming badges, speed metrics' },
        { role: 'Sovereign Emerald', hex: '#10B981', intent: 'Statutory compliance passed, zero-hallucination verification, BDT ledger sync' },
        { role: 'Alert Amber', hex: '#F59E0B', intent: 'NBR tax discrepancies, CIB threshold warnings, HITL (human-in-the-loop) pause' },
        { role: 'Surface Low', hex: '#F8FAFC', intent: 'Main canvas background, secondary card backing' },
        { role: 'Outline Subtle', hex: '#E5E7EB', intent: '1px clean architectural boundaries, grid dividers' }
      ],
      typographySpecs: [
        { level: 'Display Large', specs: '48px - 56px / Line Height 1.1 / Bold / Tracking -0.02em (Hero Titles)' },
        { level: 'Display Medium', specs: '32px - 36px / Line Height 1.2 / Semi-Bold / Tracking -0.015em (Section Headlines)' },
        { level: 'Heading Sm/Md', specs: '20px - 24px / Line Height 1.3 / Medium to Semi-Bold' },
        { level: 'Body Standard', specs: '15px - 16px / Line Height 1.6 / Regular (Content & Case Studies)' },
        { level: 'Telemetry & Code', specs: '12px - 13px / JetBrains Mono / Space Grotesk / Tabular Numerals' },
        { level: 'Statutory Pills', specs: '11px - 12px / Line Height 1.0 / Semibold / Uppercase Tracking +0.05em' }
      ],
      bilingualStrategy: [
        {
          title: 'Proportional Scaling for Bengali Conjunct Ligatures (যুক্তবর্ণ)',
          description: 'Bengali scripts feature higher visual ascenders and complex compound conjunct ligatures. The design system dynamically calibrates optical line heights by +8% when rendering mixed bilingual strings (e.g., "চালান নং CH-2024-9982 • HS Code 6109.10") to eliminate glyph clipping.'
        },
        {
          title: 'Currency & Stat Localization (BDT / Lakh / Crore)',
          description: 'Standardized formatting for Bangladeshi Taka (৳ 1,85,000 / month, ৳ 42.8 Crore ARR) alongside localized South Asian numbering scales (Lakh, Crore) for instant comprehension by domestic CFOs and procurement officers.'
        }
      ],
      architecturalPatterns: [
        {
          number: '01',
          title: 'The Tri-Pane Document Cockpit',
          screenRefs: 'SCREEN_16, SCREEN_31, SCREEN_2',
          description: 'Engineered for high-volume Document Intelligence and Statutory VAT Ingestion, replacing fragmented paper-handling with synchronized live verification.',
          features: [
            'Left Pane: High-resolution visual canvas displaying original scanned paperwork with SVG bounding-box overlays (Mushak 6.3, Bill of Entry, CIB Report)',
            'Center Pane: Synchronous live JSON / Tabular schema parsed by the sovereign Bangla-OCR engine with character-level confidence scores',
            'Right Pane: Real-time audit trail and statutory compliance checklist with automated Bangladesh Bank & NBR validation checkmarks'
          ]
        },
        {
          number: '02',
          title: 'The Multi-Agent Swarm Cluster',
          screenRefs: 'SCREEN_29, SCREEN_2, SCREEN_3',
          description: 'Visualizes autonomous digital coworkers collaborating seamlessly across enterprise workflows with live telemetry and integration status.',
          features: [
            'Modular digital coworkers: Bangla Customer Agent, NBR Statutory Tax Agent, Textile Procurement Agent, and Workforce & bKash Payroll',
            'Live telemetry status indicators: Active state, 99.2% Grounded, and <350ms response latency badges',
            'Integrated API badge chains connecting directly to Tally Prime, SAP S/4HANA, and bKash Merchant infrastructure'
          ]
        },
        {
          number: '03',
          title: 'Sovereign Latency & Peering Visualizer',
          screenRefs: 'SCREEN_9, SCREEN_34',
          description: 'Interactive regional network probes providing undeniable cryptographic proof of domestic data residency and ultra-low edge latency.',
          features: [
            'Dhaka Central Node (Kalyanpur/Mohakhali): 12ms - 28ms real-time benchmark ping',
            'Chittagong Port Node (Agrabad C/A): 34ms - 46ms commercial trade line latency',
            'Sylhet Regional Corridor: 42ms - 58ms local routing with 0ms international data egress'
          ]
        },
        {
          number: '04',
          title: 'BDT Token & Forex Savings Calculator',
          screenRefs: 'SCREEN_10, SCREEN_33',
          description: 'Interactive financial calculator demonstrating tangible ROI by computing synthetic token volume against customs invoices.',
          features: [
            'Dual-slider interaction balancing monthly synthetic token consumption and customs challan volume',
            'Quantifies direct cost avoidance of the 15% offshore withholding tax and foreign credit card transaction overhead',
            'Demonstrates measurable operational ROI directly aligned with Bangladeshi corporate fiscal policies'
          ]
        }
      ],
      impactCohesion: [
        {
          label: 'Design System Reuse',
          metric: '100%',
          description: 'Flawless visual continuity across navigation, footers, typography, telemetry badges, and card borders throughout the 38-screen lifecycle.'
        },
        {
          label: 'Cross-Form Factor Parity',
          metric: 'Desktop ↔ Mobile',
          description: 'Seamless translation of dense desktop enterprise cockpits into responsive mobile touch surfaces (SCREEN_39 - SCREEN_43) without sacrificing audit indicators.'
        },
        {
          label: 'Market Reception',
          metric: 'Institutional Trust',
          description: 'Elevated ORBIT AI into an authoritative, institutional-grade brand positioned alongside tier-1 global enterprise software while rooted firmly in Bangladesh’s commercial reality.'
        }
      ],
      conclusion: 'The ORBIT AI Workspace Design System demonstrates that specialized regional enterprise tools do not need to mimic generic Silicon Valley templates. By infusing local statutory workflows, bilingual precision, low-latency telemetry, and cinematic visual depth into a structured component library, the system establishes a new benchmark for sovereign enterprise design in South Asia.'
    }
  },
  {
    id: 'nova-bank-uiux',
    title: 'NOVA Bank App- UI/UX',
    description: 'Premium Mobile Banking App for a modern Bangladeshi commercial bank. Designed with a focus on trust, security, simplicity, and human-centered digital convenience.',
    techStack: ['Figma', 'UI/UX', 'Fintech', 'Mobile Design'],
    link: 'https://www.behance.net/gallery/256674557/Banking-App',
    githubLink: '#',
    image: 'https://i.imgur.com/74At7Eb.png',
    category: 'app',
    caseStudy: {
      role: 'Product Designer',
      duration: '4 weeks',
      outcome: 'Designed 30+ premium, production-ready screens for a complete mobile banking application',
      challenge: 'Combining traditional banking trust with digital convenience for the Bangladeshi market',
      problemStatement: 'Existing Bangladeshi banking apps often feel old-fashioned, cluttered, and lack the premium feel of modern international fintech products. Users need a secure, fast, and intuitive app that is accessible to first-time digital banking users while looking world-class and trustworthy.',
      solutionApproach: 'Created a unique visual identity for NOVA Bank using Deep Emerald Green (#075B4A) and clean typography (Inter). Designed a minimal, human-centered UI with strong visual hierarchy. Features include a clear dashboard, quick actions, simplified transfers to local banks and wallets (bKash, Nagad), utility bill payments, and biometric security.',
      processSteps: [
        { phase: 'Strategy', title: 'Brand & UX Direction', description: 'Defined the NOVA Bank brand identity (Trust + Security + Simplicity) and established the deep emerald green color system. Formulated UX principles prioritizing clarity, speed, and accessibility.', deliverables: ['Brand guidelines', 'Color palette', 'UX Strategy'] },
        { phase: 'Design', title: 'Component System', description: 'Built a mobile-first design system with accessible touch targets, consistent iconography, and clear feedback states. Ensured the interface remains mostly white with subtle green accents.', deliverables: ['Design system', 'UI components', 'Typography scale'] },
        { phase: 'Prototyping', title: 'High-Fidelity Screens', description: 'Designed 30+ complete screens covering onboarding, dashboard, transfers, payments, card management, branch locator, and comprehensive security settings.', deliverables: ['30+ UI screens', 'Empty/Error states', 'Interactive prototype'] },
      ],
      userFlow: [
        { step: 1, label: 'Onboarding & Auth', description: 'User views value propositions and logs in securely with biometrics or PIN.' },
        { step: 2, label: 'Dashboard', description: 'User sees available balance, quick actions (Send Money, Pay Bill), and recent transactions at a glance.' },
        { step: 3, label: 'Transfer Money', description: 'User selects recipient (NOVA, Other Bank, Mobile Wallet), enters amount, and confirms with security PIN.' },
        { step: 4, label: 'Payments & Recharge', description: 'User pays local utility bills (DESCO, WASA, etc.) or recharges mobile balance with automatic operator detection.' },
        { step: 5, label: 'Card Management', description: 'User manages their Visa Debit card, sets spending limits, or freezes the card directly from the app.' },
      ],
      impactMetrics: [
        { label: 'Screens Designed', value: '30+', description: 'Comprehensive coverage of all core banking features and states' },
        { label: 'Color System', value: 'Emerald', description: 'Deep Emerald Green for trust, security, and premium feel' },
        { label: 'Local UX', value: '100%', description: 'Tailored for Bangladeshi payment behaviors (MFS, local utilities)' },
      ],
      keyFeatures: ['Biometric login', 'Dashboard with quick actions', 'Local bank & wallet transfers', 'Utility bill payments', 'Card management', 'Security alerts', 'Branch & ATM locator'],
      lessonsLearned: 'Designing for the Bangladeshi financial market requires balancing international premium aesthetics with local context. Trust is built through clarity\u2014showing exact fees, providing satisfying success screens, and keeping important financial information immediately visible without cluttering the interface.',
    },
  },
  {
    id: 'healthcare-website-uiux',
    title: 'Healthcare Website - UI/UX',
    description:
      'A comprehensive healthcare website UI/UX design featuring a clean, modern interface for medical services, patient management, and appointment booking with an intuitive user experience.',
    techStack: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/make/OFnry4uD9KGKLMu95b7Cv3/Healthcare-Website-UI-UX-Design?p=f&t=kITwXEySZpP4qtN6-0&fullscreen=1',
    githubLink: '#',
    image: 'https://i.imgur.com/B8mZFK3.png',
    category: 'website',
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
    category: 'app',
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
    id: 'nova-bank-admin-dashboard-uiux',
    title: 'NOVA Bank — Admin Dashboard — UI/UX',
    description: 'A comprehensive enterprise banking admin dashboard designed to give NOVA Bank\'s internal teams a centralized platform for managing customers, accounts, transactions, cards, KYC, and operations.',
    techStack: ['Figma', 'UI/UX', 'Admin Dashboard', 'Fintech'],
    link: 'https://www.figma.com/proto/DrAbTFlBenf7Pg7tutvbHg/Personl?node-id=6-7533&p=f&t=N3WSfPKKrTqrW8JR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    githubLink: '#',
    image: 'https://i.imgur.com/HRU2KFp.png',
    category: 'dashboard',
    caseStudy: {
      role: 'Lead UI/UX Designer',
      duration: '6 weeks',
      outcome: 'Created a centralized banking operations platform that organizes complex financial data into clear workflows, enabling administrators to monitor transactions and manage customers efficiently.',
      challenge: 'Designing an enterprise banking system capable of handling large amounts of sensitive financial and customer information without overwhelming administrators. The challenge was to create clear information hierarchies, efficient data-management workflows, and strong security interactions.',
      problemStatement: 'Managing a modern bank requires handling immense amounts of sensitive data across multiple departments. Existing systems are often fragmented, outdated, and require administrators to switch between multiple software tools to complete simple tasks like KYC verification or fraud monitoring.',
      solutionApproach: 'Designed a unified, role-based admin dashboard that brings all banking operations into a single platform. The interface uses clear data visualization, structured tables, and streamlined workflows to help teams process KYC applications, monitor transactions, and manage user accounts efficiently.',
      processSteps: [
        { phase: 'Discovery', title: 'Operational Research', description: 'Interviewed banking operational staff to understand their daily workflows, pain points, and data requirements.', deliverables: ['Workflow diagrams', 'User roles matrix'] },
        { phase: 'Design', title: 'Dashboard & Workflows', description: 'Created a modular design system for the admin panel, focusing on data density, readability, and clear actions.', deliverables: ['Component library', 'High-fidelity screens'] },
        { phase: 'Prototyping', title: 'Interactive Workflows', description: 'Built prototypes for key tasks like KYC approval and transaction monitoring to validate efficiency with stakeholders.', deliverables: ['Interactive prototype', 'Usability feedback'] }
      ],
      userFlow: [
        { step: 1, label: 'Secure Login', description: 'Admin logs in with role-based access control and 2FA.' },
        { step: 2, label: 'Global Dashboard', description: 'Views high-level metrics, pending KYC requests, and active security alerts.' },
        { step: 3, label: 'Customer Management', description: 'Searches for a user, views their profile, accounts, and transaction history.' },
        { step: 4, label: 'Task Processing', description: 'Reviews a pending KYC application and approves/rejects with comments.' },
        { step: 5, label: 'Reporting', description: 'Generates and exports an operational report for the compliance team.' }
      ],
      impactMetrics: [
        { label: 'Workflows', value: 'Centralized', description: 'Brought 10+ fragmented banking operations into one platform' },
        { label: 'Roles', value: 'Defined', description: 'Created specific views for different banking departments' },
        { label: 'Efficiency', value: 'Increased', description: 'Streamlined data-management and approval processes' }
      ],
      keyFeatures: [
        'Banking operations dashboard',
        'Customer profile and account management',
        'KYC verification and document review',
        'Transaction monitoring',
        'Fraud monitoring and security',
        'AML and compliance workflows'
      ],
      lessonsLearned: 'Designing enterprise software requires a deep understanding of the user\'s daily tasks. Information density is crucial—administrators need to see a lot of data at once, but it must be organized logically with clear visual hierarchies to prevent cognitive overload.',
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
    category: 'website',
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
    category: 'website',
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
    category: 'app',
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
    category: 'website',
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
    category: 'website',
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
    category: 'landing-page',
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
    category: 'landing-page',
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
    category: 'landing-page',
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
  all: 'All',
  app: 'App',
  website: 'Website',
  dashboard: 'Dashboard',
  'landing-page': 'Landing page',
};
