import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'

  const variants = {
    primary: 'bg-secondary-pink text-neutral-white hover:bg-opacity-90 focus:ring-secondary-pink',
    secondary: 'border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-neutral-white focus:ring-primary-accent',
    outline: 'border-2 border-secondary-purple-bright text-secondary-purple-bright hover:bg-secondary-purple-bright hover:text-neutral-white focus:ring-secondary-purple-bright',
    ghost: 'text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright hover:bg-opacity-10 focus:ring-secondary-purple-bright'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-lg'
  }

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}