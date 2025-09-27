'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { Activity, TrendingUp, Users, Zap, Eye, ArrowRight } from 'lucide-react'

interface Metric {
  icon: any
  label: string
  value: string
  change: string
  positive: boolean
}

interface Connection {
  id: string
  title: string
  status: 'breakthrough' | 'solved' | 'building'
  time: string
}

export default function PublicDashboardSection() {
  const [metrics] = useState<Metric[]>([
    {
      icon: Users,
      label: 'Ideas Submitted Today',
      value: '23',
      change: '+12%',
      positive: true
    },
    {
      icon: Zap,
      label: 'Impossibilities Solved',
      value: '8',
      change: '+4',
      positive: true
    },
    {
      icon: TrendingUp,
      label: 'Bridges Built',
      value: '156',
      change: '+8%',
      positive: true
    },
    {
      icon: Activity,
      label: 'Creative Minds Connected',
      value: '2,847',
      change: '+23',
      positive: true
    }
  ])

  const [connections, setConnections] = useState<Connection[]>([
    {
      id: '1',
      title: 'AI-powered accessibility tool for visual designers',
      status: 'breakthrough',
      time: '2 min ago'
    },
    {
      id: '2',
      title: 'Blockchain solution for creative copyright protection',
      status: 'solved',
      time: '8 min ago'
    },
    {
      id: '3',
      title: 'No-code platform for community-driven innovation',
      status: 'building',
      time: '15 min ago'
    }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      const newConnection: Connection = {
        id: Date.now().toString(),
        title: 'Voice-controlled design interface for disabled artists',
        status: 'breakthrough',
        time: 'Just now'
      }

      setConnections(prev => [newConnection, ...prev.slice(0, 2)])
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section background="default" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Content Side */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Watch <span className="gradient-text">Creative Minds</span>{' '}
              Meet Technology in Real-Time
            </h2>

            <p className="text-xl text-neutral-light leading-relaxed">
              We show what's possible because possibility shouldn't be a secret.
              First platform to publicly document the journey from 'impossible' to 'implemented.'
            </p>

            <Card variant="glow" padding="lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="w-6 h-6 text-secondary-pink" />
                  <h3 className="text-lg font-semibold text-neutral-white">
                    Transparency Vision
                  </h3>
                </div>
                <p className="text-neutral-light italic">
                  "We show what's possible because possibility shouldn't be a secret."
                </p>
              </div>
            </Card>

            <div className="p-6 bg-secondary-purple-bright/10 border border-secondary-purple-bright/20 rounded-2xl">
              <h3 className="text-lg font-semibold text-secondary-pink mb-3">
                Bold Statement:
              </h3>
              <p className="text-neutral-light mb-4">
                First platform to publicly document the journey from 'impossible' to 'implemented.'
              </p>
              <div className="text-sm text-neutral-light">
                <strong>Challenge:</strong> Find another platform connecting creative minds with transparent technology capabilities.
              </div>
            </div>
          </div>

          <Link href="/dashboard" className="btn-primary inline-flex items-center justify-center">
            See Possibility in Action
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Dashboard Preview Side */}
        <div className="space-y-6">
          {/* Live Metrics */}
          <Card variant="minimal" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-neutral-white">
                  Live Impact Metrics
                </h3>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">LIVE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-secondary-purple-bright" />
                        <span className="text-sm text-neutral-light">{metric.label}</span>
                      </div>
                      <div className="flex items-end space-x-2">
                        <span className="text-2xl font-bold text-neutral-white">
                          {metric.value}
                        </span>
                        <span className={`text-sm ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>

          {/* Recent Connections Feed */}
          <Card variant="minimal" padding="lg">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-white">
                Recent Connections
              </h3>

              <div className="space-y-4">
                {connections.map((connection) => (
                  <div
                    key={connection.id}
                    className="p-4 bg-primary-blue/30 rounded-xl border border-secondary-purple-bright/10 hover:border-secondary-purple-bright/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        connection.status === 'breakthrough' ? 'bg-green-500/20 text-green-400' :
                        connection.status === 'solved' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {connection.status.toUpperCase()}
                      </div>
                      <span className="text-xs text-neutral-light">{connection.time}</span>
                    </div>
                    <p className="text-sm text-neutral-light leading-relaxed">
                      {connection.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <Link
                  href="/dashboard"
                  className="text-secondary-pink hover:text-secondary-purple-bright transition-colors duration-300 text-sm font-medium"
                >
                  View Full Dashboard →
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}