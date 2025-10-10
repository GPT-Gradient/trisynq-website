import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'The Forge',
    href: '/forge',
  },
  {
    label: 'Xynergy',
    href: '/xynergy',
  },
  {
    label: 'Proof',
    href: '/proof',
  },
  {
    label: 'Solutions',
    href: '/solutions',
  },
  {
    label: 'Community',
    href: '/community',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  mission: [
    { label: 'Manifesto', href: '/manifesto' },
    { label: 'Transparency Commitment', href: '/transparency' },
    { label: 'The Data Divide', href: '/data-divide' },
    { label: 'AI Reality Check', href: '/ai-reality-check' },
  ],
  company: [
    { label: 'Team Values', href: '/about/team-philosophy' },
    { label: 'How We Started', href: '/about/how-we-started' },
    { label: 'Content Hub', href: '/forge/topics' },
    { label: 'Get Started', href: '/beta' },
  ],
  legal: [
    { label: 'Legal', href: '/legal' },
    { label: 'Privacy', href: '/privacy' },
  ],
};
