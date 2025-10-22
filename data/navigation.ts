import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Foundry',
    href: '/foundry/platform',
    children: [
      { label: 'Platform', href: '/foundry/platform', description: 'The AI engine powering everything' },
      { label: 'Business Suite', href: '/foundry/business' },
      { label: '→ Business: OS', href: '/foundry/business/os', indent: true },
      { label: 'Search Suite', href: '/foundry/search' },
      { label: 'Connect', href: '/foundry/connect', description: 'API Access' },
      { label: 'Roadmap', href: '/foundry/roadmap' },
    ],
  },
  {
    label: 'The Forge',
    href: '/forge',
    children: [
      { label: 'Knowledge', href: '/forge/knowledge', description: 'Free education & articles' },
      { label: 'Tools', href: '/forge/tools', description: 'Free calculators & resources' },
      { label: 'Community', href: '/forge/community', description: 'Connect with builders' },
      { label: 'Build', href: '/forge/build', description: 'Transparency & Continuum' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Consulting', href: '/services/consulting', description: 'Operators-first knowledge transfer' },
      { label: 'Custom Development', href: '/services/custom', description: 'We build, you own' },
      { label: 'Training', href: '/services/training', description: 'Workshops & enablement' },
      { label: 'Continuum Partnership', href: '/services/partnership', description: 'Co-create products' },
    ],
  },
  {
    label: 'The Continuum',
    href: '/continuum',
    children: [
      { label: 'Overview', href: '/continuum' },
      { label: 'Public Dashboard', href: '/dashboard' },
      { label: 'Project NEXUS', href: '/continuum/nexus' },
      { label: 'Project RE-Connect', href: '/continuum/re-connect' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/story', description: 'How we started & founder journey' },
      { label: 'Mission & Values', href: '/about/mission', description: 'Manifesto & philosophy' },
      { label: 'Team', href: '/about/team' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

// CTA Button for header (displayed separately on right side)
export const headerCTA = {
  label: 'Join Beta',
  href: '/contact?type=beta-os',
};

export const footerNavigation = {
  mission: [
    { label: 'Our Mission', href: '/about/mission' },
    { label: 'The Data Divide', href: '/data-divide' },
    { label: 'Public Dashboard', href: '/dashboard' },
    { label: 'The Continuum', href: '/continuum' },
  ],
  company: [
    { label: 'Our Story', href: '/about/story' },
    { label: 'Team', href: '/about/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Legal', href: '/legal' },
    { label: 'Privacy', href: '/privacy' },
  ],
};
