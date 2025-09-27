import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glow' | 'minimal'
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className,
  variant = 'default',
  padding = 'md'
}: CardProps) {
  const variants = {
    default: 'bg-primary-blue border border-secondary-purple-bright border-opacity-20 rounded-3xl',
    glow: 'card-glow',
    minimal: 'bg-primary-blue/50 backdrop-blur-md rounded-2xl border border-secondary-purple-bright/10'
  }

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div className={cn(
      variants[variant],
      paddings[padding],
      className
    )}>
      {children}
    </div>
  )
}