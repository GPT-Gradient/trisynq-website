import { MetadataRoute } from 'next';
import { getGatewayClient } from '@/lib/gateway-client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.clearforgetech.com';

  const staticRoutes = [
    // Homepage
    '',

    // About pages
    '/about',
    '/about/story',
    '/about/mission',
    '/about/team',

    // Foundry (Platform & Products)
    '/foundry/platform',
    '/foundry/business',
    '/foundry/business/os',
    '/foundry/search',
    '/foundry/connect',
    '/foundry/roadmap',
    '/foundry/origin-story',

    // Services
    '/services',
    '/services/consulting',
    '/services/custom',
    '/services/training',
    '/services/partnership',

    // The Forge
    '/forge',
    '/forge/knowledge',
    '/forge/tools',
    '/forge/community',
    '/forge/build',

    // The Continuum
    '/continuum',
    '/continuum/nexus',
    '/continuum/nexus/apply',
    '/continuum/nexus/pricing',
    '/continuum/re-connect',

    // Other
    '/dashboard',
    '/public-dashboard',
    '/contact',
    '/blog',
    '/data-divide',
    '/transparency',
    '/careers',
  ];

  // Fetch all articles for dynamic blog routes
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const client = getGatewayClient();
    const { articles } = await client.getArticles({ limit: 100 });

    blogRoutes = articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.updated_at ? new Date(article.updated_at) : new Date(article.published_at),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Failed to fetch articles for sitemap:', error);
  }

  const staticSitemapEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : route === '/blog' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : route.includes('/beta') ? 0.9 : route === '/blog' ? 0.8 : 0.7,
  }));

  return [...staticSitemapEntries, ...blogRoutes];
}
