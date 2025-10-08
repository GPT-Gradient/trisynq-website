import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://trisynq.ai';

  const routes = [
    '',
    '/about',
    '/about/founder-story',
    '/about/team-philosophy',
    '/mission',
    '/mission/transparency',
    '/mission/economic-liberation',
    '/continuum',
    '/continuum/nexus',
    '/continuum/data-democracy',
    '/continuum/no-cheating',
    '/continuum/ctos-heart',
    '/continuum/safe-spaces',
    '/continuum/re-connect',
    '/solutions/consulting',
    '/solutions/partnership',
    '/solutions/platform',
    '/solutions/custom',
    '/community/20-percent',
    '/community/beta-partners',
    '/community/success-stories',
    '/community/resources',
    '/dashboard',
    '/beta',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('/beta') ? 0.9 : 0.8,
  }));
}
