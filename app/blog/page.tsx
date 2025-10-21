import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import ArticleCard from '@/components/content/ArticleCard';
import { getGatewayClient } from '@/lib/gateway-client';
import { generateMetadata } from '@/components/seo/SEOHead';
import { FileText, TrendingUp, BookOpen } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Blog — Insights on AI, Transparency, and Growth',
  description: 'Explore ClearForge\'s blog for deep dives, how-tos, playbooks, and thought leadership on AI transparency, data accessibility, and SMB growth.',
  canonical: '/blog',
});

// ISR: Revalidate every 5 minutes
export const revalidate = 300;

export default async function BlogPage() {
  // Fetch articles from Intelligence Gateway
  let articles: any[] = [];
  let total = 0;
  let featuredArticles: any[] = [];

  try {
    const client = getGatewayClient();
    const response = await client.getArticles({ limit: 20 });
    articles = response.articles;
    total = response.total;
    featuredArticles = await client.getFeaturedArticles(3);
  } catch (error) {
    // Gracefully handle missing Gateway config during build
    console.log('Gateway not configured, blog will show "Coming Soon" state');
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ClearForge <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Deep dives, how-tos, playbooks, and thought leadership on transparency, automation, and growth.
          </p>
          <p className="text-lg text-gray-400">
            {total > 0 ? `${total} articles published` : 'Articles coming soon'}
          </p>
        </div>
      </Section>

      {/* Featured Articles */}
      {featuredArticles && featuredArticles.length > 0 && (
        <Section background="dark">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Featured</span> Articles
              </h2>
              <p className="text-xl text-gray-300">
                Curated insights on what matters most
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Latest Articles */}
      <Section background={featuredArticles.length > 0 ? "medium" : "dark"}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
          </div>

          {articles && articles.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="bg-primary/50 rounded-2xl p-12 border border-primary-blue/30 text-center">
              <div className="mb-6">
                <span className="bg-accent-pink/20 text-accent-pink px-4 py-2 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Content Coming Soon
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We&apos;re building a comprehensive content library covering AI transparency,
                data accessibility, content operations, automation, and SMB growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-primary/30 rounded-xl p-4 text-center">
                  <FileText className="w-8 h-8 text-accent-pink mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Blogs & Opinions</h4>
                  <p className="text-xs text-gray-400">Real perspectives</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4 text-center">
                  <BookOpen className="w-8 h-8 text-primary-blue mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">How-Tos & Playbooks</h4>
                  <p className="text-xs text-gray-400">Step-by-step guides</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-secondary-purple-light mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">White Papers</h4>
                  <p className="text-xs text-gray-400">Deep analysis</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay <span className="text-gradient">Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our newsletter to get the latest insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/community#waitlist" size="lg">
              Subscribe to Newsletter
            </Button>
            <Button href="/forge" variant="outline" size="lg">
              Back to The Forge
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
