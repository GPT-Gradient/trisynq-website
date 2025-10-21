import { Article } from '@/types';
import ArticleCard from './ArticleCard';

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-12 border-t border-primary-blue/30">
      <h2 className="text-3xl font-bold text-white mb-8">
        Related <span className="text-gradient">Articles</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
