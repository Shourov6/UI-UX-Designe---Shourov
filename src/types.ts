export interface CaseStudy {
  id: string;
  tag: string;
  year?: string;
  category: string;
  title: string;
  shortDescription: string;
  fullProblem: string;
  fullSolution: string;
  image: string;
  detailImage?: string;
  metrics: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  deliverables?: string[];
  tools?: string[];
  // Harmonized alias fields
  subtitle?: string;
  thumbnail?: string;
  featured?: boolean;
  tags?: string[];
  overview?: string;
  problem?: string;
  solution?: string;
  impact?: string;
}

export interface ServiceItem {
  id: string;
  number?: string;
  title: string;
  description: string;
  icon: string;
  accent?: 'primary' | 'secondary' | 'tertiary';
  deliverables?: string[];
}

export interface ProcessStep {
  step?: string;
  number?: string;
  title: string;
  description: string;
  pill?: string;
  duration?: string;
  artifacts?: string[];
  isHighlighted?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name?: string;
  author?: string;
  role: string;
  company: string;
  initials?: string;
  accentColor?: string;
  avatar?: string;
  stars: number;
}

export interface ColorToken {
  name: string;
  value?: string;
  hex: string;
  role: string;
  bgClass?: string;
  shadowClass?: string;
}

export interface ToolCategory {
  category: string;
  items: string[];
}
