import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
}