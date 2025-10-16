import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'The Forge',
    href: '/forge',
  },
  {
    label: 'Xynergy',
    href: '/xynergy',
    children: [
      { label: 'Xynergy CORE Overview', href: '/xynergy' },
      { label: 'XynergyOS Preview', href: '/xynergy/preview' },
      { label: 'Origin Story', href: '/xynergy/origin-story' },
      { label: 'ASO Platform', href: '/aso' },
    ],
  },
  {
    label: 'Proof',
    href: '/proof',
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'All Solutions', href: '/solutions' },
      { label: 'Platform', href: '/solutions/platform' },
      { label: 'Consulting', href: '/solutions/consulting' },
      { label: 'Partnership', href: '/solutions/partnership' },
      { label: 'Custom', href: '/solutions/custom' },
      { label: 'B2B Services', href: '/solutions/b2b' },
    ],
  },
  {
    label: 'Training',
    href: '/training',
    children: [
      { label: 'All Training Programs', href: '/training' },
      { label: 'Data Training', href: '/training/data' },
      { label: 'AI Training', href: '/training/ai' },
      { label: 'Data + AI Combined', href: '/training/combined' },
      { label: 'Revenue Generator Workshop', href: '/training/revenue-workshop' },
      { label: 'Custom Training', href: '/training/custom' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About ClearForge', href: '/about' },
      { label: 'Culture Hub', href: '/about/culture' },
      { label: 'Mission & Vision', href: '/about/mission-vision' },
      { label: 'Values', href: '/about/values' },
      { label: 'Team Philosophy', href: '/about/team-philosophy' },
      { label: 'How We Started', href: '/about/how-we-started' },
      { label: 'Careers', href: '/careers' },
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
    { label: 'Content Hub', href: '/forge/topics' },
    { label: 'Get Started', href: '/beta' },
  ],
  legal: [
    { label: 'Legal', href: '/legal' },
    { label: 'Privacy', href: '/privacy' },
  ],
};
