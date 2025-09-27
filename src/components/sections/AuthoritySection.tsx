import Image from 'next/image'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder } from '@/lib/utils'
import { Shield, Eye, Zap, ArrowRight } from 'lucide-react'

export default function AuthoritySection() {
  const bridges = [
    {
      icon: Shield,
      title: "We Translate, Don't Intimidate",
      description: "Human language explanations of technology capabilities",
      color: "text-secondary-pink"
    },
    {
      icon: Eye,
      title: "Radically Transparent",
      description: "Show possibilities, not secrets. Capabilities, not complexity.",
      color: "text-primary-accent"
    },
    {
      icon: Zap,
      title: "Creative Amplification",
      description: "Turn 'that's impossible' into 'here's how we build it'",
      color: "text-secondary-purple-bright"
    }
  ]

  return (
    <Section background="default" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content Side */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Technology Translators,{' '}
              <span className="gradient-text">Possibility Amplifiers</span>
            </h2>

            <p className="text-xl text-neutral-light leading-relaxed">
              Our team brings decades of enterprise experience from inside the big tech machine.
              We've seen what's possible when creative minds meet transparent technology.
            </p>

            <div className="p-6 bg-gradient-to-r from-secondary-pink/10 to-secondary-purple-bright/10 border border-secondary-pink/20 rounded-2xl">
              <p className="text-lg font-semibold text-secondary-pink mb-2">
                Bold Insight:
              </p>
              <p className="text-neutral-light">
                Every technology has its purpose. Every vendor has their place.
                But the system is broken when 90% of creative minds are locked out.
              </p>
            </div>
          </div>

          {/* Three Key Bridges */}
          <div className="space-y-4">
            {bridges.map((bridge, index) => {
              const Icon = bridge.icon
              return (
                <Card key={index} variant="minimal" padding="md">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-primary-blue to-secondary-purple/20 ${bridge.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-white mb-2">
                        {bridge.title}
                      </h3>
                      <p className="text-neutral-light">
                        {bridge.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Vision Statement */}
          <Card variant="glow" padding="lg">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-neutral-white">
                Our Vision
              </h3>
              <p className="text-lg text-neutral-light italic">
                We don't replace vendors. We help creative minds understand what's actually possible.
              </p>
              <ArrowRight className="w-6 h-6 text-secondary-pink mx-auto" />
            </div>
          </Card>
        </div>

        {/* Images Side */}
        <div className="space-y-6">
          <div className="relative h-80 rounded-3xl overflow-hidden">
            <Image
              src={generateImagePlaceholder('authority', 600, 320)}
              alt="Team collaboration and technology translation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-dark/40" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 rounded-2xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('authority', 300, 160)}
                alt="Translation work in action"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-2xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('authority', 300, 160)}
                alt="Technology bridge building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}