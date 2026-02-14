
// Add React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Differential {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FabricCare {
  type: string;
  tips: string[];
}