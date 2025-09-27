import { NavigationItem } from '@/types'

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Mission',
    href: '/mission'
  },
  {
    label: 'Top 5',
    href: '/top-5',
    children: [
      {
        label: 'Project NEXUS',
        href: '/top-5/nexus'
      },
      {
        label: 'Educational AI Translation',
        href: '/top-5/educational-ai'
      },
      {
        label: 'Inclusive Innovation',
        href: '/top-5/inclusive-innovation'
      },
      {
        label: 'Safe Digital Spaces',
        href: '/top-5/safe-digital-spaces'
      },
      {
        label: 'Business Possibility Platform',
        href: '/top-5/business-platform'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'Consulting & Strategy',
        href: '/solutions/consulting'
      },
      {
        label: 'Training & Education',
        href: '/solutions/training'
      },
      {
        label: 'Custom Development',
        href: '/solutions/development'
      },
      {
        label: 'Platform Solutions',
        href: '/solutions/platforms'
      }
    ]
  },
  {
    label: 'Community',
    href: '/community'
  },
  {
    label: 'Dashboard',
    href: '/dashboard'
  },
  {
    label: 'Beta Program',
    href: '/beta'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

export const footerNavigation: NavigationItem[] = [
  {
    label: 'Manifesto',
    href: '/manifesto'
  },
  {
    label: 'The 20%',
    href: '/community/the-20-percent'
  },
  {
    label: 'Transparency',
    href: '/transparency'
  },
  {
    label: 'Team',
    href: '/team'
  },
  {
    label: 'Content Hub',
    href: '/content'
  },
  {
    label: 'Get Started',
    href: '/get-started'
  },
  {
    label: 'Legal/Privacy',
    href: '/legal'
  }
]