import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import ArticleHero from '@/components/content/ArticleHero';
import ArticleContent from '@/components/content/ArticleContent';
import AuthorBio from '@/components/content/AuthorBio';
import RelatedArticles from '@/components/content/RelatedArticles';
import { getGatewayClient } from '@/lib/gateway-client';
import { ArrowLeft } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// ISR: Revalidate every 10 minutes
export const revalidate = 600;

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const client = getGatewayClient();
  const article = await client.getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.excerpt,
    openGraph: {
      title: article.seo?.title || article.title,
      description: article.seo?.description || article.excerpt,
      images: article.seo?.og_image ? [article.seo.og_image] : article.featured_image ? [article.featured_image] : [],
      type: 'article',
      publishedTime: article.published_at,
      modifiedTime: article.updated_at,
      authors: article.author ? [article.author.name] : [],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo?.title || article.title,
      description: article.seo?.description || article.excerpt,
      images: article.seo?.og_image ? [article.seo.og_image] : article.featured_image ? [article.featured_image] : [],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const client = getGatewayClient();

  // Fetch the article
  const article = await client.getArticleBySlug(params.slug);

  // Return 404 if article not found
  if (!article) {
    notFound();
  }

  // Fetch related articles from the same category
  const { articles: allArticles } = await client.getArticles({
    limit: 4,
    category: article.category
  });

  // Filter out the current article and limit to 3
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      {/* Back Button */}
      <Section background="dark" className="pt-24 pb-0">
        <div className="max-w-4xl mx-auto">
          <Button href="/blog" variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </Section>

      {/* Article Hero */}
      <Section background="dark" className="pt-0">
        <ArticleHero article={article} />
      </Section>

      {/* Article Content */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <ArticleContent content={article.content} />
        </div>
      </Section>

      {/* Author Bio */}
      {article.author && (
        <Section background="dark">
          <div className="max-w-4xl mx-auto">
            <AuthorBio author={article.author} />
          </div>
        </Section>
      )}

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <Section background="medium">
          <div className="max-w-6xl mx-auto">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enjoyed This <span className="text-gradient">Article?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for more insights on transparency, automation, and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/community#waitlist" size="lg">
              Subscribe to Newsletter
            </Button>
            <Button href="/blog" variant="outline" size="lg">
              Read More Articles
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
