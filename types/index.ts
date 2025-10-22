export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  indent?: boolean;
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

export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: 'blog' | 'how-to' | 'white-paper' | 'playbook' | 'opinion';
  tags: string[];
  featured_image?: string;
  published_at: string;
  updated_at?: string;
  views?: number;
  featured?: boolean;
  seo?: {
    title?: string;
    description?: string;
    og_image?: string;
  };
}

export interface ArticleListResponse {
  articles: Article[];
  total: number;
  page?: number;
  limit?: number;
}
