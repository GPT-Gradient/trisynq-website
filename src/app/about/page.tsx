import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder } from '@/lib/utils'
import { Users, Eye, Zap, Shield, ArrowRight, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Small Team, Big Vision',
  description: 'We\'re a focused startup team with deep enterprise experience who believe the biggest breakthroughs come from creative minds, not big budgets.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Eye,
      title: 'Transparency First',
      description: 'We show methodology, share results, document what doesn\'t work'
    },
    {
      icon: Heart,
      title: 'Human Amplification',
      description: 'Technology should enhance creativity, not replace it'
    },
    {
      icon: Zap,
      title: 'Bridge Building',
      description: 'Connect possibility with implementation through clear translation'
    },
    {
      icon: Users,
      title: 'Community Over Competition',
      description: 'Rising tide lifts all boats through shared knowledge'
    }
  ]

  return (
    <>
      {/* Team Introduction Section */}
      <Section background="gradient" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-white">
                Small Team, Big Vision -{' '}
                <span className="gradient-text">Technology Translators</span>
              </h1>

              <p className="text-xl text-neutral-light leading-relaxed">
                We're a focused startup team with deep enterprise experience who believe
                the biggest breakthroughs come from creative minds, not big budgets.
              </p>

              <Card variant="glow" padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-pink">
                    Core Philosophy:
                  </h3>
                  <p className="text-neutral-light">
                    Every breakthrough happens when creative vision meets technical possibility.
                    We make those connections.
                  </p>
                </div>
              </Card>

              <div className="p-6 bg-secondary-purple-bright/10 border border-secondary-purple-bright/20 rounded-2xl">
                <h3 className="text-lg font-semibold text-neutral-white mb-3">
                  Mission Statement:
                </h3>
                <p className="text-neutral-light">
                  Democratizing technology through transparent translation and systematic bridge-building
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('authority', 600, 500)}
                alt="Professional team collaboration focused on technology translation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/20 to-transparent" />
            </div>

            {/* Floating Team Indicators */}
            <div className="absolute -top-4 -right-4 p-4 bg-secondary-pink rounded-2xl shadow-lg">
              <Users className="w-6 h-6 text-neutral-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-primary-accent rounded-2xl shadow-lg">
              <Eye className="w-6 h-6 text-neutral-white" />
            </div>
          </div>
        </div>
      </Section>

      {/* Founder Story Section */}
      <Section background="default" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('authority', 600, 320)}
                alt="Founder journey from enterprise technology to bridge building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-dark/40" />
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('business', 600, 256)}
                alt="Team building and collaborative development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
                Founded by Someone Who{' '}
                <span className="gradient-text">Lived Both Sides</span>
              </h2>

              <div className="space-y-6">
                <Card variant="minimal" padding="lg">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-secondary-pink">
                      The Background:
                    </h3>
                    <p className="text-neutral-light">
                      Our founder spent 20+ years inside enterprise technology, seeing firsthand
                      how possibility gets locked behind complexity.
                    </p>
                  </div>
                </Card>

                <Card variant="minimal" padding="lg">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary-accent">
                      The Insight:
                    </h3>
                    <p className="text-neutral-light">
                      After rebuilding 'impossible' systems and watching creative ideas die from
                      miscommunication, the solution became clear: we need translators.
                    </p>
                  </div>
                </Card>

                <Card variant="glow" padding="lg">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-neutral-white">
                      Team Assembly:
                    </h3>
                    <p className="text-neutral-light">
                      We assembled a team of technology translators who've seen what's possible
                      and can explain it in human language.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Values Section */}
      <Section background="dark" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-white mb-6">
            Our <span className="gradient-text">Values</span> and Approach
          </h2>
          <p className="text-xl text-neutral-light max-w-3xl mx-auto">
            These principles guide every interaction, every project, and every bridge we build
            between creative minds and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} variant="glow" padding="lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-gradient-to-br from-secondary-pink to-secondary-purple-bright rounded-2xl">
                      <Icon className="w-8 h-8 text-neutral-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-neutral-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Values in Action */}
        <Card variant="minimal" padding="lg" className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-white">
              Values in Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src={generateImagePlaceholder('transparency', 400, 192)}
                  alt="Team values in transparent action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src={generateImagePlaceholder('community', 400, 192)}
                  alt="Community-focused development approach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-4">
              <Link href="/mission" className="btn-primary inline-flex items-center">
                Learn About Our Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </Card>
      </Section>
    </>
  )
}