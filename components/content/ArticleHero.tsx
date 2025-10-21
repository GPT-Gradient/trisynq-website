import Image from 'next/image';
import { Article } from '@/types';
import { Calendar, User, Clock, Tag } from 'lucide-react';

interface ArticleHeroProps {
  article: Article;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  const formattedDate = new Date(article.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Estimate reading time (rough estimate: 200 words per minute)
  const wordCount = article.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="relative">
      {/* Featured Image */}
      {article.featured_image && (
        <div className="relative h-[400px] w-full mb-8 rounded-2xl overflow-hidden">
          <Image
            src={article.featured_image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />
        </div>
      )}

      {/* Article Header */}
      <div className="max-w-4xl mx-auto">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-primary-blue/20 text-primary-blue px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-primary-blue/30">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {article.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-primary-blue/30">
          {/* Author */}
          {article.author && (
            <div className="flex items-center gap-3">
              {article.author.avatar && (
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <User className="w-4 h-4" />
                  <span>{article.author.name}</span>
                </div>
                {article.author.role && (
                  <div className="text-xs text-gray-500">{article.author.role}</div>
                )}
              </div>
            </div>
          )}

          {/* Date */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          {/* Reading Time */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min read</span>
          </div>

          {/* Views */}
          {article.views !== undefined && article.views > 0 && (
            <div className="flex items-center gap-2">
              <span>{article.views.toLocaleString()} views</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            <Tag className="w-4 h-4 text-gray-500" />
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-gray-300 bg-primary/30 px-3 py-1 rounded-full border border-primary-blue/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
