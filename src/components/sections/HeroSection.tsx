import Image from 'next/image'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder } from '@/lib/utils'
import { ArrowRight, Users, Lightbulb, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <Section background="gradient" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">What If We Tapped Into</span>
              <br />
              <span className="text-neutral-white">the Other 90%?</span>
            </h1>

            <p className="text-xl text-neutral-light leading-relaxed">
              The technology world speaks one language. Creative minds speak another.
              We're the translators. We break down the barriers between 'that's impossible'
              and 'what if we did it this way?' Because the most impactful solutions
              come from minds that don't know the rules.
            </p>

            <div className="p-6 bg-secondary-purple-bright/10 border border-secondary-purple-bright/20 rounded-2xl">
              <p className="text-lg font-semibold text-secondary-pink mb-2">
                Bold Vision Statement:
              </p>
              <p className="text-neutral-light">
                90% of breakthrough ideas never happen because creative minds can't find
                the first person in tech who speaks human.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Bridge the Gap
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" size="lg">
              See What's Possible
            </Button>
          </div>

          {/* Live Dashboard Widget Preview */}
          <div className="p-6 bg-primary-blue/50 backdrop-blur-md rounded-2xl border border-secondary-purple-bright/20">
            <h3 className="text-lg font-semibold text-neutral-white mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-secondary-pink" />
              Real-Time Impact
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-pink">127</div>
                <div className="text-sm text-neutral-light">Connections Made</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-purple-bright">43</div>
                <div className="text-sm text-neutral-light">Ideas Implemented</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-accent">891</div>
                <div className="text-sm text-neutral-light">Bridges Built</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative">
          <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden">
            <Image
              src={generateImagePlaceholder('hero', 800, 600)}
              alt="Diverse creative minds collaborating with technology"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/20 to-transparent" />
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 p-4 bg-secondary-pink rounded-2xl shadow-lg">
            <Users className="w-6 h-6 text-neutral-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 p-4 bg-primary-accent rounded-2xl shadow-lg">
            <Lightbulb className="w-6 h-6 text-neutral-white" />
          </div>
        </div>
      </div>
    </Section>
  )
}