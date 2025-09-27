'use client'

import { useState, useEffect } from 'react'
import { Activity, TrendingUp, Users, Zap } from 'lucide-react'
import { formatNumber } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface Metric {
  icon: any
  label: string
  value: number
  change: number
  color: string
}

interface LiveDashboardWidgetProps {
  className?: string
  showTitle?: boolean
  compact?: boolean
  animated?: boolean
}

export default function LiveDashboardWidget({
  className,
  showTitle = true,
  compact = false,
  animated = true
}: LiveDashboardWidgetProps) {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      icon: Users,
      label: 'Connections Made',
      value: 127,
      change: 5,
      color: 'text-secondary-pink'
    },
    {
      icon: Zap,
      label: 'Ideas Implemented',
      value: 43,
      change: 2,
      color: 'text-secondary-purple-bright'
    },
    {
      icon: TrendingUp,
      label: 'Bridges Built',
      value: 891,
      change: 12,
      color: 'text-primary-accent'
    },
    {
      icon: Activity,
      label: 'Creative Minds',
      value: 2847,
      change: 23,
      color: 'text-green-400'
    }
  ])

  useEffect(() => {
    if (!animated) return

    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const shouldUpdate = Math.random() > 0.7 // 30% chance to update
        if (shouldUpdate) {
          const changeAmount = Math.floor(Math.random() * 3) + 1
          return {
            ...metric,
            value: metric.value + changeAmount,
            change: metric.change + changeAmount
          }
        }
        return metric
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [animated])

  if (compact) {
    return (
      <div className={cn(
        "p-4 bg-primary-blue/50 backdrop-blur-md rounded-xl border border-secondary-purple-bright/20",
        className
      )}>
        {showTitle && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-neutral-white flex items-center">
              <Activity className="w-4 h-4 mr-2 text-secondary-pink" />
              Live Impact
            </h3>
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs">LIVE</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          {metrics.slice(0, 4).map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Icon className={`w-3 h-3 ${metric.color}`} />
                </div>
                <div className="text-lg font-bold text-neutral-white">
                  {formatNumber(metric.value)}
                </div>
                <div className="text-xs text-neutral-light truncate">
                  {metric.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      "p-6 bg-primary-blue/50 backdrop-blur-md rounded-2xl border border-secondary-purple-bright/20",
      className
    )}>
      {showTitle && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-neutral-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-secondary-pink" />
            Real-Time Impact
          </h3>
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">LIVE</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="text-center space-y-2">
              <div className="flex items-center justify-center mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br from-primary-blue to-secondary-purple/20`}>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-neutral-white">
                  {formatNumber(metric.value)}
                </div>
                <div className="text-sm text-neutral-light">
                  {metric.label}
                </div>
                {animated && (
                  <div className="text-xs text-green-400">
                    +{metric.change} recently
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {animated && (
        <div className="mt-4 pt-4 border-t border-secondary-purple-bright/20">
          <div className="flex items-center justify-center space-x-2 text-xs text-neutral-light">
            <Activity className="w-3 h-3" />
            <span>Updates every few seconds</span>
          </div>
        </div>
      )}
    </div>
  )
}