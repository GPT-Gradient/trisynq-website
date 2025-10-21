'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-white mb-6 mt-8">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-white mb-4 mt-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold text-primary-blue mb-3 mt-5">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-bold text-secondary-purple-light mb-2 mt-4">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary-blue hover:text-accent-pink transition-colors underline"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300 ml-4">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-blue pl-4 py-2 my-4 bg-primary-blue/10 rounded-r-lg">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-primary/50 text-accent-pink px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            return (
              <code className="block bg-background-dark text-gray-300 p-4 rounded-lg overflow-x-auto font-mono text-sm my-4">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-background-dark rounded-lg p-4 overflow-x-auto my-4">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-primary-blue/30">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="bg-primary-blue/20 text-white px-4 py-2 border border-primary-blue/30 text-left">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 border border-primary-blue/30 text-gray-300">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="border-primary-blue/30 my-8" />
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ''}
              className="rounded-lg my-4 w-full"
            />
          ),
          strong: ({ children }) => (
            <strong className="text-white font-bold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-gray-200 italic">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
