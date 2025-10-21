import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import { Calendar, User, Tag } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="group bg-primary/50 rounded-2xl overflow-hidden border border-primary-blue/30 hover:border-primary-blue/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm h-full flex flex-col">
        {/* Featured Image */}
        {article.featured_image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={article.featured_image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
            {article.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-primary-blue/20">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formattedDate}</span>
            </div>
            {article.author && (
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{article.author.name}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <Tag className="w-3 h-3 text-gray-500" />
              {article.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-gray-400 bg-primary/30 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
