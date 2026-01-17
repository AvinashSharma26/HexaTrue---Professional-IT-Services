

// Import React to provide access to the React namespace for types like ReactNode
import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  columns?: MegaMenuColumn[];
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuItem {
  title: string;
  description?: string;
  path: string;
  icon: React.ReactNode;
}

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  features: string[];
  detailedOverview: string;
  keyBenefits: string[];
  process: ServiceProcess[];
}

export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  image: string;
  thumbnail: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  sections: ProjectSection[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface ClientLogo {
  name: string;
  url: string;
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCardType?: 'summary_large_image' | 'summary';
  twitterImage?: string;
}