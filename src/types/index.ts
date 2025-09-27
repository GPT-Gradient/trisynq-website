export interface Project {
  id: string
  title: string
  description: string
  status: 'development' | 'beta' | 'live'
  progress: number
  category: 'technology' | 'business' | 'community'
  features: string[]
  image?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  expertise: string[]
}

export interface CommunityStats {
  totalMembers: number
  ideasImplemented: number
  bridgesBuilt: number
  creativesConnected: number
}

export interface DashboardMetric {
  label: string
  value: number | string
  change?: number
  period?: string
  category: 'traffic' | 'community' | 'business' | 'technology'
}

export interface BetaApplication {
  name: string
  email: string
  company: string
  role: string
  challenge: string
  timeline: string
  budget: string
  experience: string
  goals: string[]
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
}

export interface ImageCategory {
  hero: string[]
  authority: string[]
  technology: string[]
  business: string[]
  community: string[]
  transparency: string[]
  problems: string[]
  diy: string[]
  dashboard: string[]
}