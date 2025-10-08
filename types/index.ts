export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: string;
  icon: string;
  description: string;
  link: string;
}

export interface Metric {
  label: string;
  value: string | number;
  description?: string;
}

export interface FormData {
  [key: string]: string;
}

export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}
