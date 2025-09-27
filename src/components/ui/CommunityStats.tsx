'use client'

import { useState, useEffect } from 'react'
import { cn, formatNumber } from '@/lib/utils'
import { Users, TrendingUp, Lightbulb, Target, Activity, Star } from 'lucide-react'
import type { CommunityStats as CommunityStatsType } from '@/types'

interface CommunityStatsProps {
  className?: string
  variant?: 'default' | 'compact' | 'detailed'
  animated?: boolean
  showGrowth?: boolean
}

interface StatItem {
  icon: any
  label: string
  value: number
  growth?: number
  color: string
  description?: string
}

export default function CommunityStats({
  className,
  variant = 'default',
  animated = true,
  showGrowth = true
}: CommunityStatsProps) {
  const [stats, setStats] = useState<StatItem[]>([
    {
      icon: Users,
      label: 'Total Members',
      value: 2847,
      growth: 23,
      color: 'text-secondary-pink',
      description: 'Creative minds in our community'
    },
    {
      icon: Lightbulb,
      label: 'Ideas Implemented',
      value: 156,
      growth: 8,
      color: 'text-secondary-purple-bright',
      description: 'Impossible solutions made possible'
    },
    {
      icon: Target,
      label: 'Bridges Built',
      value: 892,
      growth: 12,
      color: 'text-primary-accent',
      description: 'Connections between creativity and technology'
    },
    {
      icon: TrendingUp,
      label: 'Creatives Connected',
      value: 1234,
      growth: 34,
      color: 'text-green-400',
      description: 'Successful collaborations facilitated'
    }
  ])

  useEffect(() => {
    if (!animated) return

    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => {
        const shouldUpdate = Math.random() > 0.8 // 20% chance to update
        if (shouldUpdate) {
          const increment = Math.floor(Math.random() * 3) + 1
          return {
            ...stat,
            value: stat.value + increment,
            growth: stat.growth ? stat.growth + increment : increment
          }
        }
        return stat
      }))
    }, 7000)

    return () => clearInterval(interval)
  }, [animated])

  if (variant === 'compact') {
    return (
      <div className={cn(
        "p-4 bg-primary-blue/30 rounded-xl border border-secondary-purple-bright/10",
        className
      )}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-neutral-white flex items-center">
            <Activity className="w-4 h-4 mr-2 text-secondary-pink" />
            Community Impact
          </h3>
          {animated && (
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs">LIVE</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <Icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                <div className="text-lg font-bold text-neutral-white">
                  {formatNumber(stat.value)}
                </div>
                <div className="text-xs text-neutral-light truncate">
                  {stat.label}
                </div>
                {showGrowth && stat.growth && (
                  <div className="text-xs text-green-400">
                    +{stat.growth}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className={cn(
        "p-6 bg-gradient-to-br from-primary-blue to-primary-dark rounded-2xl border border-secondary-purple-bright/20",
        className
      )}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-neutral-white flex items-center">
            <Star className="w-6 h-6 mr-3 text-secondary-pink" />
            Community Impact
          </h3>
          {animated && (
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">LIVE UPDATES</span>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-primary-blue to-secondary-purple/20`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-neutral-white">
                      {stat.label}
                    </h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-neutral-white">
                        {formatNumber(stat.value)}
                      </div>
                      {showGrowth && stat.growth && (
                        <div className="text-sm text-green-400">
                          +{stat.growth} this week
                        </div>
                      )}
                    </div>
                  </div>
                  {stat.description && (
                    <p className="text-sm text-neutral-light">
                      {stat.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-secondary-purple-bright/20">
          <div className="text-center space-y-2">
            <p className="text-sm text-neutral-light">
              Join the movement of creative minds building transparent technology solutions
            </p>
            <button className="text-secondary-pink hover:text-secondary-purple-bright transition-colors duration-300 text-sm font-medium">
              Become a Community Member →
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn(
      "p-6 bg-primary-blue/50 backdrop-blur-md rounded-2xl border border-secondary-purple-bright/20",
      className
    )}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-white flex items-center">
          <Users className="w-5 h-5 mr-2 text-secondary-pink" />
          Community Stats
        </h3>
        {animated && (
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">LIVE</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="text-center space-y-3">
              <div className="flex items-center justify-center">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-primary-blue to-secondary-purple/20`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-neutral-white">
                  {formatNumber(stat.value)}
                </div>
                <div className="text-sm text-neutral-light">
                  {stat.label}
                </div>
                {showGrowth && stat.growth && (
                  <div className="text-xs text-green-400">
                    +{stat.growth} this week
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {animated && (
        <div className="mt-6 pt-6 border-t border-secondary-purple-bright/20">
          <div className="flex items-center justify-center space-x-2 text-xs text-neutral-light">
            <Activity className="w-3 h-3" />
            <span>Stats update in real-time</span>
          </div>
        </div>
      )}
    </div>
  )
}