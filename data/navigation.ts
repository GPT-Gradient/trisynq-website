import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Who We Are',
    href: '/who-we-are',
    children: [
      { label: 'About TriSynq', href: '/about' },
      { label: 'Founder Story', href: '/about/founder-story' },
      { label: 'Complete Founder Journey', href: '/about/founder-story-complete' },
      { label: 'Team & Philosophy', href: '/about/team-philosophy' },
      { label: 'Our Mission', href: '/mission' },
      { label: 'The Continuum', href: '/continuum' },
    ],
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      { label: 'Solutions', href: '/what-we-do' },
      { label: 'Community', href: '/community' },
      { label: 'Continuum Projects', href: '/continuum' },
    ],
  },
  {
    label: 'How We Do It',
    href: '/how-we-do-it',
    children: [
      { label: 'T.R.A.N.S.L.A.T.E. Methodology', href: '/how-we-do-it' },
      { label: 'Beta Program Structure', href: '/beta-program' },
    ],
  },
  {
    label: 'See Our Proof',
    href: '/dashboard',
  },
];

export const footerNavigation = {
  mission: [
    { label: 'Complete Manifesto', href: '/mission' },
    { label: 'Transparency Commitment', href: '/mission/transparency' },
    { label: 'The Data Divide', href: '/mission/economic-liberation' },
    { label: 'AI Reality Check', href: '/mission#ai-reality' },
  ],
  company: [
    { label: 'Team Values', href: '/about/team-philosophy' },
    { label: 'Founder Story', href: '/about/founder-story' },
    { label: 'Content Hub', href: '/community/resources' },
    { label: 'Get Started', href: '/beta' },
  ],
  legal: [
    { label: 'Legal', href: '/legal' },
    { label: 'Privacy', href: '/privacy' },
  ],
};
