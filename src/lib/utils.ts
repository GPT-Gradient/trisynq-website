import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatPercentage(num: number): string {
  return `${num.toFixed(1)}%`
}

export function generateImagePlaceholder(category: string, width: number = 800, height: number = 600): string {
  const baseUrl = 'https://via.placeholder.com'
  const colors = {
    hero: '4299e1/ffffff',
    authority: '553c9a/ffffff',
    technology: '9f7aea/ffffff',
    business: 'ed64a6/ffffff',
    community: '4299e1/ffffff',
    transparency: '553c9a/ffffff',
    problems: '2d3748/ffffff',
    diy: 'ed64a6/ffffff',
    dashboard: '9f7aea/ffffff'
  }

  const color = colors[category as keyof typeof colors] || '2d3748/ffffff'
  return `${baseUrl}/${width}x${height}/${color}?text=${encodeURIComponent(category.toUpperCase())}`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}