import { MetadataRoute } from 'next';
import { getGatewayClient } from '@/lib/gateway-client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://trisynq.ai';

  const staticRoutes = [
    '',
    '/about',
    '/about/how-we-started',
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
    '/blog',
    '/forge',
    '/forge/knowledge',
    '/forge/tools',
    '/forge/community',
    '/forge/build',
    '/forge/topics',
    '/foundry',
    '/foundry/business',
    '/foundry/connect',
    '/foundry/pricing',
    '/foundry/roadmap',
    '/foundry/search',
    '/foundry/origin-story',
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
