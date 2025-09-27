import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'default' | 'dark' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  container?: boolean
  id?: string
}

export default function Section({
  children,
  className,
  background = 'default',
  padding = 'lg',
  container = true,
  id
}: SectionProps) {
  const backgrounds = {
    default: 'bg-neutral-medium',
    dark: 'bg-primary-dark',
    gradient: 'bg-gradient-to-br from-primary-dark via-neutral-medium to-secondary-purple/20'
  }

  const paddings = {
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  }

  const content = container ? (
    <div className="container-wide">
      {children}
    </div>
  ) : children

  return (
    <section
      id={id}
      className={cn(
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      {content}
    </section>
  )
}