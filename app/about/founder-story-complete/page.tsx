import { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Founder Story — Complete',
  description: 'The long-form founder journey behind ClearForge.',
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
              The Founder&apos;s <span className="text-gradient">Long-Form Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              How a Mechanic Became the Voice Against Big Tech&apos;s Biggest Lie
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent-pink/30">
              <Image
                src="/shawn-sloan.png"
                alt="Shawn Sloan - ClearForge Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* The Accidental Journey */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">The Accidental Journey</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I never meant to end up in technology. Hell, I never even dreamed about it.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            My hands were built for fixing things— as a firefighter pulling people from wreckage, a tow truck driver hauling broken-down dreams off highways, and as a mechanic bringing dead engines back to life. After selling everything I owned along with at-the-time High School sweetheart, we packed up and left Michigan for Florida with the wild dreams of two people in their early 20s desperately in love. A year or so passed since we moved, and I ran the local shop for the biggest tire, battery, and repair chain in the country—the kind of place where I came home every night smelling like motor oil and tire rubber. My wife actually loved that smell—it meant I was building something real, something you could touch.
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
            I genuinely laughed at him. Nothing about me screamed &quot;tech person.&quot; I was the guy who diagnosed engine problems by listening to them purr. The guy who could rebuild a transmission with my eyes closed. The guy whose idea of advanced technology was a computerized alignment machine. I ran a shop for the biggest automotive chain in the country, and I was damn good at it.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            But his logic was bulletproof: &quot;Over a third of our calls are about point-of-sale systems and store operations. We need someone who understands how businesses actually work, not just how computers work. If you learn tech along the way, even better.&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            It was purely a financial decision. Guaranteed salary versus the performance bonuses and questionable P&Ls of retail management. So I traded my wrench for a headset and became the most unlikely &quot;tech support&quot; person you&apos;ve ever met.
          </p>
        </div>
      </Section>

      {/* The Room That Opened My Eyes */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-purple-light">The Room That Opened My Eyes</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Six months later, I got summoned to a conference room that would change my life forever.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I walked into what I thought was a routine meeting and found myself face-to-face with company leadership and a team of IBM architects. They were planning an enterprise-wide transformation: T-1 to MPLS upgrades, POTS to VoIP migration, WiFi installation across over 1800 locations.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I had no idea why I was there. I knew what WiFi was, but the rest might as well have been spoken in ancient Greek.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Then I understood: I wasn&apos;t there for my tech knowledge. I was there because I understood <strong className="text-white">operations</strong>. While the architects spoke in acronyms and protocols, my job was to translate: &quot;How will this affect the morning rush? What happens when the system goes down during Black Friday? How do we train someone&apos;s grandmother to use this?&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            That&apos;s when I discovered my superpower: <strong className="text-accent-pink">I could see both sides of the technology curtain.</strong>
          </p>
        </div>
      </Section>

      {/* The Education Nobody Planned */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">The Education Nobody Planned</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            For the next two years, I lived between two worlds. Officially, I was still answering helpdesk calls. Unofficially, I had become the curiosity-driven guy who hung out with IBM&apos;s top architects during lunch breaks, eavesdropped on strategy sessions, and asked the questions nobody else thought to ask.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I wasn&apos;t trying to become a technologist. I was just naturally curious about how these impossibly complex systems actually worked—and more importantly, why they often didn&apos;t work for the people who needed them most.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Ray, one of the IBM architects, became my unofficial mentor. We&apos;d grab dinner and he&apos;d explain the thinking behind massive infrastructure decisions. I&apos;d challenge him with real-world scenarios: &quot;But what happens when Mrs. Johnson at Store #247 can&apos;t figure out how to process a return?&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            That&apos;s when I learned the dirty secret of enterprise technology: <strong className="text-accent-pink">most of it is built for the builders, not the users.</strong>
          </p>
        </div>
      </Section>

      {/* The Call That Shocked Everyone */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-pink">The Call That Shocked Everyone (Including Me)</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Three months after the project ended, my phone rang.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            &quot;Wanna come work for IBM?&quot; Ray asked without preamble.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I burst out laughing. Again. This was IBM—450,000 employees, global technology giant, the company that basically invented enterprise computing. I was a mechanic with 2.5 years of &quot;tech&quot; experience, most of which involved telling people to turn things off and back on again.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            &quot;Trust me,&quot; Ray said. &quot;Just apply.&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The interview was unlike anything I&apos;d expected. No technical quizzing. No whiteboard coding challenges. Instead, they threw scenarios at me: &quot;How would you solve this business problem? What would you do if this system failed during peak hours? Walk us through your thinking process.&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            After an hour of this, Ray turned to the interviewer and said, &quot;See, I told ya!&quot;
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I had to ask what he meant.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            &quot;Most people become architects through career progression,&quot; he explained. &quot;They learn the technology first, then maybe learn to think strategically. You&apos;re the opposite. You already think like we do—you just need to learn the tech.&quot;
          </p>
        </div>
      </Section>

      {/* The Leap of Faith */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-purple-light">The Leap of Faith</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The offer came while I was home with my pregnant wife, nervously awaiting our first child. There it was in my inbox: an employment offer from IBM.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We faced an impossible decision: leave my stable position at a national automotive chain for the unknown world of global technology, or play it safe and stay in my comfort zone?
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            We leaped.
          </p>
        </div>
      </Section>

      {/* Twenty Years Behind the Curtain */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">Twenty Years Behind the Curtain</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            What followed was two decades of the most incredible education you could imagine. I traveled the world architecting solutions for Fortune 100 companies and federal agencies. I built technology infrastructure for sports arenas, guided global retail mergers through digital transformations, and stood in war rooms during cyber breaches.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I learned secrets that would make your head spin. I saw budgets that could fund small countries. I watched technology decisions get made that would affect millions of people—often by people who had never actually met one of those affected millions.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            But most importantly, I learned something that haunts me to this day: <strong className="text-accent-pink">the biggest players in technology actively design systems to keep smaller players out.</strong>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            It&apos;s not malicious—it&apos;s systemic. Enterprise technology is built for enterprise buyers. The complexity, the costs, the vendor relationships, the implementation timelines—all of it creates a moat around capabilities that could revolutionize any business, if only they could access them.
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
            Then, on a Friday morning at 10:30 AM, my phone rang.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            &quot;We&apos;re letting you go,&quot; my boss said in a two-minute conversation that ended twenty years of enterprise loyalty.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            By 11 AM, I was unemployed for the first time since I was seventeen. The shock wasn&apos;t just professional—it was existential. All those sacrifices, all those missed family dinners - dance recitals - t-ball games, all those Father&apos;s Days spent on emergency flights to distant data centers, watching your children (and beautiful wife) grow up in the pictures sent with that famous &apos;Missing you, Daddy!&apos; caption. For what? Sure, I gave them an amazing life by societal standards, but at what cost?
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            After the dust settled, and I had some time to reflect I decided I was going to enjoy not being tethered to my phone, not be working this emergency or that emergency, not be up at 2am while my family is enjoying their beauty sleep trying to playing conductor to 50 engineers on a conference call frantically trying to restore a global retail chain&apos;s entire network before they open in less than 8 hours. I was going to be present in my home, go to my daughter&apos;s volleyball private lesson, enjoy an evening barbeque with friends, throw some bait with my son. For the first time in a very very long time I was going to just RELAX (because even on vacation you are still available at that level of tech - I&apos;ve been on vacation with my wife and a SAT phone before. True story.).
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            After a while I started to get a little stir crazy sitting around the house, so I decided to go attend some local business networking events to see how the completely other side of business uses tech in cool and unique ways. I walked out of my first one, the Port Saint Lucie Business Club&apos;s monthly networking event, with this unbridled rage in my stomach. It was like I stepped back 10 years, at minimum, in time. The number of shocked looks I got when I would ask the &apos;why don&apos;t you do it this way&apos; question, followed by most people asking if that can be done or isn&apos;t that expensive genuinely rocked me to my core. How do the people that account for DOUBLE the US GDP not even understand the fundamentals of today&apos;s technology and its capabilities? Then it all dawned on me and i got that pit-of-stomach feeling when your adreneline dumps, it&apos;s because we productize that knowledge... Nope, this stops. NOW.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            That&apos;s when ClearForge was born. Not from ambition, but from rage. Not from opportunity, but from clarity.
          </p>
        </div>
      </Section>

      {/* The Revolution Begins */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">The Revolution Begins</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            ClearForge isn&apos;t just another startup. It&apos;s a <strong className="text-white">technology translation revolution</strong> built on one simple premise: <strong className="text-accent-pink">transparency beats manipulation in every domain.</strong>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I&apos;ve seen how the giants play the game. I helped build their playbook. Now I&apos;m writing a new one.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Here&apos;s what I learned in twenty years behind the enterprise curtain:
          </p>

          <ul className="space-y-3 text-gray-300 text-lg mb-6">
            <li><strong className="text-white">Complex doesn&apos;t mean better</strong>—it just means more expensive and harder to escape</li>
            <li><strong className="text-white">Vendor lock-in is intentional</strong>—the maze is designed to keep you trapped</li>
            <li><strong className="text-white">Enterprise capabilities aren&apos;t magic</strong>—they&apos;re just well-engineered and well-hidden</li>
            <li><strong className="text-white">Small businesses get scraps</strong>—watered-down versions at premium prices</li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            But here&apos;s what they don&apos;t want you to know: <strong className="text-accent-pink">you can have enterprise capabilities without enterprise complexity or enterprise costs.</strong>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            You just need someone who speaks both languages.
          </p>
        </div>
      </Section>

      {/* Proof Sections */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-gradient">Proof Points</span></h2>
            <p className="text-xl text-gray-300">Enterprise experience backing the forge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
              <h4 className="text-xl font-bold mb-4 text-primary-blue">Mercedes-Benz Stadium</h4>
              <div className="aspect-video bg-background-dark rounded-lg mb-4 flex items-center justify-center border border-primary-blue/30">
                <p className="text-gray-500">[Mercedes-Benz Stadium - Technology Backbone Architecture]</p>
              </div>
              <p className="text-gray-300">
                Architected the complete technology backbone for one of the world&apos;s most advanced sports venues.
              </p>
            </div>

            <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
              <h4 className="text-xl font-bold mb-4 text-accent-pink">Classified Federal Systems</h4>
              <div className="aspect-video bg-background-dark rounded-lg mb-4 flex items-center justify-center border border-accent-pink/30">
                <p className="text-gray-500">[System Architecture Schematic]</p>
              </div>
              <p className="text-gray-300">
                Developed classified solutions for federal agencies requiring the highest levels of security and reliability.
              </p>
            </div>

            <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple/20">
              <h4 className="text-xl font-bold mb-4 text-secondary-purple-light">Children&apos;s Hospital of Atlanta</h4>
              <div className="aspect-video bg-background-dark rounded-lg mb-4 flex items-center justify-center border border-secondary-purple/30">
                <p className="text-gray-500">[Arthur M. Blank Hospital - Technology Infrastructure]</p>
              </div>
              <p className="text-gray-300">
                Designed and architected the technology backbone for the Arthur M. Blank Hospital, supporting critical pediatric care systems.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Mission */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-purple-light">The Mission: Proving Transparency Works</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            ClearForge operates on a radical model: <strong className="text-white">the 20% and the 80%</strong>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We work <strong className="text-white">with the 20%</strong>—the leaders, innovators, and challengers willing to test bold ideas and prove that transparency actually works. These aren&apos;t traditional clients—they&apos;re partners in proving a point.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            But everything we build is <strong className="text-white">for the 80%</strong>—the small businesses, nonprofits, educators, and community leaders who will benefit once we&apos;ve proven transparency works at scale.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            The 20% pave the road. The 80% get to walk it without fear.
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
