import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Heart, Coffee, Umbrella, TrendingUp, Users, Award, DollarSign, Home } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Careers — Work That Works for Life',
  description: 'Join a team that takes PTO seriously, values your voice, and shares success. Deliver what\'s expected. Live your life. Grow together.',
  canonical: '/careers',
});

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Work That Works <span className="text-gradient">for Life</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Deliver what&apos;s expected. Live your life. Grow with us.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            We&apos;re building a company where work amplifies life—not competes with it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/careers#openings" size="lg">
              View Open Positions
            </Button>
            <Button href="/about/culture" variant="outline" size="lg">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </Section>

      {/* The Real Deal */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              No BS. <span className="text-gradient">Here&apos;s the Real Deal.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re not going to pretend we&apos;re perfect. But we&apos;re committed to building something different—a company that treats people like adults.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Take PTO Seriously */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <Umbrella className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">PTO Is Sacred</h3>
                  <p className="text-gray-300 mb-4">
                    We take PTO <strong className="text-primary-blue">seriously</strong>. Actually seriously. Not &ldquo;unlimited PTO that no one takes&rdquo; seriously.
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Minimum 3 weeks off per year (we track it)</li>
                    <li>• Use it or we&apos;ll ask why you&apos;re not</li>
                    <li>• No guilt. No passive-aggressive Slack messages</li>
                    <li>• Your life is not optional</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Sick Days Are Good */}
            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <Heart className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Sick Days = Stay Home</h3>
                  <p className="text-gray-300 mb-4">
                    Sick days are <strong className="text-accent-pink">good</strong>. For you. For the team. For everyone.
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Feel like crap? Stay home</li>
                    <li>• Mental health day? That counts too</li>
                    <li>• No doctor&apos;s note required</li>
                    <li>• We&apos;re adults here</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Live Your Life */}
            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary-purple/20 rounded-full p-3 flex-shrink-0">
                  <Coffee className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Live Your Life</h3>
                  <p className="text-gray-300 mb-4">
                    Run your errands. Go to lunch with your bestie. Pick up your kids. <strong className="text-secondary-purple-light">We trust you.</strong>
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Flexible schedule that works for your life</li>
                    <li>• Need to leave at 3pm? Cool, see you tomorrow</li>
                    <li>• Async-first communication</li>
                    <li>• Results matter, not hours logged</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Just Deliver */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Just Deliver</h3>
                  <p className="text-gray-300 mb-4">
                    That&apos;s all we ask. <strong className="text-primary-blue">Deliver what&apos;s expected of you.</strong> Do good work. Communicate honestly.
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Clear expectations, clear goals</li>
                    <li>• Own your work, own your outcomes</li>
                    <li>• Help the team when you can</li>
                    <li>• That&apos;s it. Really.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Everyone Has a Voice */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Everyone</span> Has a Voice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We mean it. Your title doesn&apos;t determine the value of your ideas. Your experience, perspective, and insight do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Users className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Inclusion Isn&apos;t a Checkbox</h3>
                  <p className="text-gray-300 mb-4">
                    We&apos;re building a team that looks different, thinks different, and comes from different places. Because that&apos;s how you build something worth building.
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Diverse backgrounds = better decisions</li>
                    <li>• No bro culture, no cliques, no nonsense</li>
                    <li>• Safe space to disagree respectfully</li>
                    <li>• Everyone contributes to culture</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Award className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Your Ideas Matter</h3>
                  <p className="text-gray-300 mb-4">
                    The best idea wins. Doesn&apos;t matter if you&apos;ve been here 5 years or 5 weeks. Bring receipts, bring logic, and we&apos;ll listen.
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Open architecture discussions</li>
                    <li>• Transparent decision-making</li>
                    <li>• Challenge anything (respectfully)</li>
                    <li>• We&apos;re all learning together</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-primary-blue/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Oh, and About Drugs...</h3>
              <p className="text-lg text-gray-300 mb-4">
                No hard drugs. That&apos;s the federal stuff, and we have to follow those rules.
              </p>
              <p className="text-lg text-gray-300 mb-2">
                <strong className="text-accent-pink">Weed?</strong> Don&apos;t even get us started on why we&apos;re still having this conversation in 2025.
              </p>
              <p className="text-sm text-gray-400 italic">
                (We&apos;re not testing for it. Just don&apos;t come to work impaired. Like alcohol. Be an adult.)
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* When We Succeed, You Succeed */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              When We Succeed, <span className="text-gradient">You Succeed</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re not here to build wealth for founders while everyone else gets pizza parties. If this thing works, we all win.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="text-center">
                <div className="bg-primary-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Competitive Salary</h3>
                <p className="text-gray-300 text-sm">
                  Market rate or better. We benchmark against real data, not startup fairy tales.
                </p>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="text-center">
                <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Performance Bonuses</h3>
                <p className="text-gray-300 text-sm">
                  Hit your goals? You get paid. Clear metrics, clear payouts.
                </p>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="text-center">
                <div className="bg-secondary-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Profit Sharing</h3>
                <p className="text-gray-300 text-sm">
                  Company does well? Team does well. Simple math.
                </p>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-accent-pink/30">
            <div className="flex items-start gap-6">
              <div className="bg-accent-pink/20 rounded-full p-4 flex-shrink-0">
                <Home className="w-10 h-10 text-accent-pink" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">Potential Ownership Stakes</h3>
                <p className="text-lg text-gray-300 mb-4">
                  For the right people, at the right time, we&apos;re open to offering <strong className="text-accent-pink">equity and ownership stakes</strong> in ClearForge.
                </p>
                <p className="text-base text-gray-400 mb-4">
                  Not empty promises of &ldquo;startup lottery tickets.&rdquo; Real ownership. Real upside. Real skin in the game.
                </p>
                <div className="bg-background-dark/50 rounded-xl p-4 border border-accent-pink/20">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">We want you to succeed when we succeed.</strong> That means sharing the wins, sharing the growth, and building something together that&apos;s worth owning a piece of.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* What We're Looking For */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We&apos;re <span className="text-gradient">Looking For</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re not looking for unicorns or rockstars. We&apos;re looking for humans who give a damn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">You Might Be a Good Fit If:</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">•</span>
                  <span>You deliver what you commit to</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">•</span>
                  <span>You communicate honestly, even when it&apos;s hard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">•</span>
                  <span>You want to learn and grow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">•</span>
                  <span>You value transparency over politics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">•</span>
                  <span>You treat people like adults</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">•</span>
                  <span>You care about the work, not just the paycheck</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">You&apos;re Probably Not If:</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>You need constant supervision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>You thrive on office politics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>You can&apos;t handle direct feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>You need a strict 9-5 structure to function</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>You think &ldquo;startup culture&rdquo; means ping pong tables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>You&apos;re looking for a place to coast</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Current Openings */}
      <Section background="dark" id="openings">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Current <span className="text-gradient">Openings</span>
            </h2>
          </div>

          <Card variant="elevated" className="text-center border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4 text-white">We&apos;re Growing Thoughtfully</h3>
            <p className="text-lg text-gray-300 mb-6">
              We don&apos;t have specific openings posted right now, but we&apos;re always looking for exceptional people who align with our values.
            </p>
            <p className="text-base text-gray-400 mb-8">
              If you think you&apos;d be a great fit, reach out. Tell us what you do, why you care, and what you&apos;re looking for. We read every message.
            </p>
            <Button href="/contact" size="lg">
              Get In Touch
            </Button>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Something <span className="text-gradient">Worth Building</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join a team that values your time, respects your voice, and shares the wins. Let&apos;s forge something together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Start the Conversation
            </Button>
            <Button href="/about/culture" variant="outline" size="lg">
              Explore Our Culture
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
