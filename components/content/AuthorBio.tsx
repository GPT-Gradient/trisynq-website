import Image from 'next/image';
import { Author } from '@/types';
import Card from '@/components/ui/Card';

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <Card variant="elevated" className="border-2 border-primary-blue/30">
      <div className="flex items-start gap-4">
        {author.avatar && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            Written by {author.name}
          </h3>
          {author.role && (
            <p className="text-sm text-gray-400 mb-2">{author.role}</p>
          )}
          <p className="text-sm text-gray-300">
            Contributing to ClearForge&apos;s mission of transparency and accessibility in technology.
          </p>
        </div>
      </div>
    </Card>
  );
}
