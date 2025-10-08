import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variantClasses = {
    default: 'bg-primary border border-primary-blue/20',
    bordered: 'bg-background-medium border-2 border-primary-blue',
    elevated: 'bg-primary shadow-xl shadow-primary-blue/10',
  };

  return (
    <div className={`rounded-3xl p-6 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
