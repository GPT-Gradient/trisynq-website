import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Foundry',
    href: '/foundry',
    children: [
      // Platform
      { label: 'The Foundry Platform', href: '/foundry' },
      { label: 'Foundry Connect (API)', href: '/foundry/connect' },
      // Products
      { label: 'Foundry Business: OS', href: '/foundry/business' },
      { label: 'Foundry Search: Visibility', href: '/foundry/search' },
      // Info
      { label: 'Product Roadmap', href: '/foundry/roadmap' },
      { label: 'Pricing', href: '/foundry/pricing' },
    ],
  },
  {
    label: 'The Forge',
    href: '/forge',
    children: [
      // Four Doors
      { label: 'Knowledge Forge', href: '/forge/knowledge' },
      { label: 'Tool Forge', href: '/forge/tools' },
      { label: 'Community Forge', href: '/forge/community' },
      { label: 'Build Forge', href: '/forge/build' },
      // Additional
      { label: 'Blog / Articles', href: '/blog' },
      { label: 'Continuum Projects', href: '/continuum' },
    ],
  },
  {
    label: 'Proof',
    href: '/proof',
  },
  {
    label: 'About',
    href: '/about',
    children: [
      // Company
      { label: 'Mission & Vision', href: '/about/mission-vision' },
      { label: 'Our Story', href: '/about/how-we-started' },
      { label: 'Values', href: '/about/values' },
      { label: 'Team', href: '/about/team-philosophy' },
      // Resources
      { label: 'Manifesto', href: '/manifesto' },
      { label: 'Data Divide', href: '/data-divide' },
      { label: 'Transparency Commitment', href: '/transparency' },
    ],
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
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Get Started', href: '/beta' },
  ],
  legal: [
    { label: 'Legal', href: '/legal' },
    { label: 'Privacy', href: '/privacy' },
  ],
};
