import { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'The Accidental Revolutionaries — ClearForge Origin Story',
  description: 'How a mechanic and a mortgage expert joined forces to tear down the walls of enterprise technology.',
  canonical: '/about/founder-story-complete',
});

export default function FounderStoryCompletePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Accidental <span className="text-gradient">Revolutionaries</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              How a Mechanic and a Mortgage Expert Joined Forces to Tear Down Big Tech&apos;s Walls
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <div className="text-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent-pink/30 mb-4">
                <Image
                  src="/shawn.png"
                  alt="Shawn Sloan - ClearForge Co-Founder & CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Shawn Sloan</h3>
              <p className="text-gray-400">Co-Founder & CTO</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-blue/30 mb-4">
                <Image
                  src="/josh.jpg"
                  alt="Josh Giddings - ClearForge Co-Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Josh Giddings</h3>
              <p className="text-gray-400">Co-Founder & CEO</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Shawn's Journey Begins */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">The Accidental Journey</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4 italic">
            <strong className="text-white">Hi, I&apos;m Shawn.</strong> I&apos;m the CTO and Co-Founder of ClearForge. This is my story—how I went from being a mechanic to building enterprise systems for Fortune 100 companies, and why I&apos;m now tearing down the walls that keep those capabilities locked away.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I never meant to end up in technology. Hell, I never even dreamed about it.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            My hands were built for fixing things—as a firefighter pulling people from wreckage, a tow truck driver hauling broken-down dreams off highways, and as a mechanic bringing dead engines back to life. After selling everything I owned along with my at-the-time high school sweetheart, we packed up and left Michigan for Florida with the wild dreams of two people in their early 20s desperately in love. A year or so passed since we moved, and I ran the local shop for the biggest tire, battery, and repair chain in the country—the kind of place where I came home every night smelling like motor oil and tire rubber. My wife actually loved that smell—it meant I was building something real, something you could touch.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Then fate walked through my shop door wearing an evil grin.
          </p>
        </div>
      </Section>

      {/* The Invitation That Changed Everything */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-pink">The Invitation That Changed Everything</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            &quot;Hey, I have an off-the-wall question,&quot; said the familiar face—our local IT helpdesk manager, a regular customer whose car I&apos;d been fixing for years. &quot;What do you think about coming to work with me?&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I genuinely laughed at him. Nothing about me screamed &quot;tech person.&quot; I was the guy who diagnosed engine problems by listening to them purr. The guy who could rebuild a transmission with my eyes closed. The guy whose idea of advanced technology was a computerized alignment machine.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            But his logic was bulletproof: &quot;Over a third of our calls are about point-of-sale systems and store operations. We need someone who understands how businesses actually work, not just how computers work.&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            So I traded my wrench for a headset and became the most unlikely &quot;tech support&quot; person you&apos;ve ever met.
          </p>
        </div>
      </Section>

      {/* Twenty Years Behind the Curtain */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-purple-light">Twenty Years Behind the Curtain</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            What followed was two decades of the most incredible education you could imagine. From answering helpdesk calls to architecting solutions for Fortune 100 companies alongside IBM&apos;s top architects. I traveled the world, built technology infrastructure for sports arenas, guided global retail mergers, and stood in war rooms during cyber breaches.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I learned secrets that would make your head spin. I saw budgets that could fund small countries. I watched technology decisions get made that would affect millions of people—often by people who had never actually met one of those affected millions.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            But most importantly, I learned something that haunts me to this day: <strong className="text-accent-pink">the biggest players in technology actively design systems to keep smaller players out.</strong>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I became the bridge between those two worlds. The translator who could explain why a $50 million system worked the way it did, and how you could get 80% of the benefit for 2% of the cost—if you knew what you were doing.
          </p>
        </div>
      </Section>

      {/* The Breaking Point */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-pink">The Breaking Point</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Last year, I achieved 135% of my sales target at a global technology company. I won awards. I was invited to exclusive clubs. I was living the dream of enterprise success.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Then, on a Friday morning at 10:30 AM, my phone rang. &quot;We&apos;re letting you go,&quot; my boss said in a two-minute conversation that ended twenty years of enterprise loyalty.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            By 11 AM, I was unemployed for the first time since I was seventeen. All those sacrifices, all those missed family dinners, dance recitals, t-ball games. All those Father&apos;s Days spent on emergency flights to distant data centers, watching my children grow up in pictures sent with that famous &apos;Missing you, Daddy!&apos; caption.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            After the dust settled, I started attending local business networking events to see how small businesses use technology. I walked out of my first Port Saint Lucie Business Club meeting with unbridled rage in my stomach.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            It was like stepping back a decade in time. How do the people who account for 43% of US GDP not even understand the fundamentals of today&apos;s technology and its capabilities?
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Then it all dawned on me: <strong className="text-white">it&apos;s because we productize that knowledge.</strong> We lock it away behind enterprise pricing and complexity. Nope, this stops. NOW.
          </p>
        </div>
      </Section>

      {/* The Universe Has a Sense of Humor */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">The Universe Has a Sense of Humor</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Before I left that first networking event, they held a raffle. I won.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The prize was donated by Josh Giddings, a mortgage loan officer with The Giddings Group.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I had no idea that winning that raffle would change everything.
          </p>
        </div>
      </Section>

      {/* Meet Josh: The Other Translator */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-pink">Meet Josh: The Other Translator</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4 italic">
            <strong className="text-white">Hi, I&apos;m Josh.</strong> I come in later in this story, but that&apos;s how the best partnerships work—you don&apos;t force it, you find it. I&apos;m the CEO and Co-Founder of ClearForge, and my path to this moment was just as unlikely as Shawn&apos;s.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I wasn&apos;t supposed to be in mortgages either.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Born and raised in Philadelphia, Josh spent over 20 years helping families achieve homeownership across Pennsylvania, New Jersey, Florida, and Georgia. But if you asked him what he really does, he wouldn&apos;t say &quot;sell mortgages.&quot; He&apos;d tell you he builds relationships and creates generational wealth through homeownership.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Josh discovered early in his career that the mortgage industry had the same problem enterprise technology had: it was built for insiders, not for the people it was supposed to serve. He never saw people as numbers in a pipeline—he saw families making life-changing decisions who deserved clarity, not complexity.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            So Josh became a translator. He built his practice on four pillars that would later become the foundation of our partnership:
          </p>

          <ul className="space-y-3 text-gray-300 text-lg mb-6">
            <li><strong className="text-white">WEALTH</strong> - Create a legacy through homeownership. Your home is your biggest asset.</li>
            <li><strong className="text-white">COMMUNICATION</strong> - Available 24/7, 365 days a year. Updates on all major milestones.</li>
            <li><strong className="text-white">KNOWLEDGE</strong> - Learn how to buy a home the right way. Educate the homebuyer with each step.</li>
            <li><strong className="text-white">TECHNOLOGY</strong> - Hi-tech + Hi-touch. Use technology as an enhancement to people, not a replacement.</li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            That last pillar—technology—set Josh apart. While most loan officers saw technology as a necessary evil, Josh saw it as a way to amplify his ability to serve people.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Josh didn&apos;t just close loans. He hosted Hype Local, highlighting local businesses. He served as a Community Connector with the Port St. Lucie Business Club. He built a practice around the radical idea that success wasn&apos;t about transactions—it was about impact.
          </p>
        </div>
      </Section>

      {/* The Collision */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-purple-light">The Collision</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I reached out to thank Josh for the raffle prize. We grabbed coffee.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Within ten minutes, I realized I was talking to someone who understood what I was trying to do—not because he came from enterprise tech, but because he&apos;d been fighting the same battle from a completely different angle.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Josh was the yin to my yang. I had the anger; he had the calm. I&apos;m the introvert who wants to tear down systems; he&apos;s the extrovert who wants to lift people up. I speak in architecture and infrastructure; he speaks in relationships and impact.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            But we both spoke the same language where it mattered: <strong className="text-accent-pink">transparency, accessibility, and the belief that complexity is a choice, not a requirement.</strong>
          </p>
        </div>
      </Section>

      {/* The Foundation: ASO */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">The Foundation: Why We Built ASO First</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            During one of our marathon lunch sessions, we had a critical realization: <strong className="text-white">transparency requires proof, but proof is meaningless if people can&apos;t find it.</strong>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The entire internet is drowning in AI-generated garbage and clickbait. The systems that decide what people see reward the worst behavior. The loudest voice wins, not the best answer. The most manipulative tactics get the traffic, not the most helpful information.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We can talk all day about transparency and doing the right thing, but if nobody can find the truth when they&apos;re searching for it, what&apos;s the point? If you&apos;re on page 47 of search results while fake clickbait is in position one, transparency doesn&apos;t matter. Proof doesn&apos;t matter.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            That&apos;s when we developed <strong className="text-accent-pink">Adaptive Search Optimization (ASO)</strong>—a fundamentally different approach built on one principle: <strong className="text-white">intent satisfaction beats algorithm manipulation.</strong>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Traditional SEO is about gaming systems—keyword stuffing, link schemes, content farms. ASO flips it. Instead of gaming the system, you actually satisfy the intent. You become the genuine, verifiable, provable answer to what people are searching for.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Search had to come first. Because without solving discovery, everything else is just philosophy.
          </p>
        </div>
      </Section>

      {/* The Revelation */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-pink">The Revelation</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Somewhere around our third or fourth lunch, between bites of Cuban sandwiches, it hit us both at the same time.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We weren&apos;t just talking about making technology more accessible. We were talking about fundamentally changing the power dynamics of business technology.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            &quot;You know what&apos;s crazy?&quot; Josh leaned back. &quot;Between your enterprise contacts and my community network—the Port St. Lucie Business Club alone has over 6,700 active business owners—we&apos;re talking about thousands of people who already believe in this. They want this.&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            He was right. I&apos;d been so focused on the technical architecture that I hadn&apos;t realized what we were actually building: <strong className="text-white">an army.</strong>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            On my side: Twenty years of enterprise relationships. Architects, engineers, CTOs who were as frustrated as I was with vendor lock-in and artificial complexity.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            On Josh&apos;s side: Hundreds of business owners through his community work, Hype Local, and years of building relationships. People who knew exactly what pain we were talking about because they lived it every day.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            &quot;We should do this,&quot; Josh said. &quot;Yeah,&quot; I agreed. &quot;We should.&quot;
          </p>
        </div>
      </Section>

      {/* What We Learned */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-purple-light">What We Learned (That They Don&apos;t Want You to Know)</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-blue">From Shawn&apos;s Side:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Complex doesn&apos;t mean better—it just means more expensive</li>
                <li>Vendor lock-in is intentional—the maze is designed to keep you trapped</li>
                <li>Enterprise capabilities aren&apos;t magic—they&apos;re just well-hidden</li>
                <li>Small businesses get scraps—watered-down versions at premium prices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-accent-pink">From Josh&apos;s Side:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Technology should enhance people, not replace them</li>
                <li>The best solutions are the ones people actually use</li>
                <li>Relationships matter more than features</li>
                <li>Community impact is the real measure of success</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What we both know:</strong> You can have enterprise capabilities without enterprise complexity or costs. You just need someone who speaks both languages. Or better yet, two people who speak all the languages—tech, business, finance, and most importantly, human.
          </p>
        </div>
      </Section>

      {/* The Birth of ClearForge */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">The Birth of ClearForge</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            ClearForge wasn&apos;t born from a business plan. It was born from rage and clarity, from enterprise scars and community commitment, from two accidental revolutionaries who realized they had an army waiting to be mobilized.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We&apos;re not just another technology company. We&apos;re proof that the system can be different. That transparency beats manipulation—and it starts with being found. That complexity is a choice. That the same capabilities enterprises take for granted can be accessible to the businesses that make up 43% of our GDP.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Josh brings the calm to my storm, the relationships to my infrastructure, the community trust that opens doors my enterprise credibility can&apos;t. I bring the technical architecture, the enterprise playbook, the rage that fuels late nights turning corrupt systems into honest ones.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Together, we&apos;re not just building software. We&apos;re proving that transparency can win. One intent satisfied at a time. One transparent proof point at a time. One genuine answer rising above the noise.
          </p>
        </div>
      </Section>

      {/* The Invitation */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-pink text-center">The Invitation</h2>

          <div className="prose prose-invert prose-lg mb-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              This is just the beginning. ClearForge is coming out of hiding, and what you&apos;ll see will challenge everything you&apos;ve been told about technology, costs, and what&apos;s possible for your business.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">If you&apos;re part of the 20%</strong>—the leaders willing to test new approaches—join us as a Proof Partner. Help us demonstrate that transparency wins.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">If you&apos;re in the 80%</strong>—the businesses, nonprofits, and communities who&apos;ve been locked out of real technology capabilities—follow our journey. We&apos;re building this for you.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Above all, know this: as ClearForge steps into the light, there will be no smoke, no mirrors, no hidden agendas. We will show our work. We will share our failures alongside our wins. We will be transparent. Always.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-blue/20 to-accent-pink/20 rounded-3xl p-8 border border-accent-pink/30 mb-8">
            <blockquote className="text-xl md:text-2xl font-semibold text-center text-white italic">
              &quot;Don&apos;t worry about the how—we&apos;ve got that covered. You bring the vision, and together we&apos;ll build the proof that transparency wins.&quot;
            </blockquote>
          </div>

          <div className="text-center space-x-4">
            <Button href="/beta-program" size="lg">
              Join the Revolution
            </Button>
            <Button href="/mission" variant="outline" size="lg">
              Read Our Manifesto
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
