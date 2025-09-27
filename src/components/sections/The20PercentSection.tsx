'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder, formatNumber } from '@/lib/utils'
import { Users, Lightbulb, Rocket, Target, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        const increment = Math.ceil(target / 100)
        return prev + increment >= target ? target : prev + increment
      })
    }, 20)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {formatNumber(count)}
      </div>
      <div className="text-neutral-light">{label}</div>
    </div>
  )
}

export default function The20PercentSection() {
  const stats = [
    { target: 2847, label: "Creative Minds Connected" },
    { target: 156, label: "Impossible Ideas Implemented" },
    { target: 892, label: "New Possibilities Discovered" },
    { target: 1234, label: "Bridges Built" }
  ]

  return (
    <Section background="dark" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images Side */}
        <div className="space-y-6">
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <Image
              src={generateImagePlaceholder('community', 600, 400)}
              alt="Diverse creative collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/30 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card variant="minimal" padding="md">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-secondary-pink" />
                <div>
                  <div className="text-lg font-semibold text-neutral-white">Rule Breakers</div>
                  <div className="text-sm text-neutral-light">Who see barriers as bridges</div>
                </div>
              </div>
            </Card>

            <Card variant="minimal" padding="md">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-primary-accent" />
                <div>
                  <div className="text-lg font-semibold text-neutral-white">Uphill Runners</div>
                  <div className="text-sm text-neutral-light">Who choose the hard path</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              We Want the{' '}
              <span className="gradient-text">20% Who See Differently</span>
            </h2>

            <p className="text-xl text-neutral-light leading-relaxed">
              Not the 20% who break rules for chaos. The 20% who see 'automation eliminates jobs'
              and ask 'what jobs could this create?' The minds that look at barriers and see bridges.
            </p>

            <Card variant="glow" padding="lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-secondary-pink" />
                  <h3 className="text-lg font-semibold text-neutral-white">
                    Bold Declaration:
                  </h3>
                </div>
                <p className="text-neutral-light">
                  You don't need to understand how technology works.
                  You need to understand what's possible.
                </p>
              </div>
            </Card>
          </div>

          {/* Community Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-white text-center">
              Live Community Impact
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <AnimatedCounter key={index} target={stat.target} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Challenge Statement */}
          <Card variant="minimal" padding="lg" className="border-2 border-secondary-pink/30">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Rocket className="w-12 h-12 text-secondary-pink" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-white">
                The Challenge
              </h3>
              <p className="text-lg text-neutral-light italic">
                Got an idea everyone says is impossible? Let's find out what's actually possible.
              </p>
              <Button variant="primary" size="lg">
                Show Us Your Impossible Idea
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}