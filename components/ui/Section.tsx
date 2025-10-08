import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'medium' | 'gradient';
}

export default function Section({ children, className = '', id, background = 'dark' }: SectionProps) {
  const backgroundClasses = {
    dark: 'bg-background-dark',
    medium: 'bg-background-medium',
    gradient: 'bg-gradient-to-br from-background-dark via-primary to-background-dark',
  };

  return (
    <section id={id} className={`py-20 px-4 ${backgroundClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
