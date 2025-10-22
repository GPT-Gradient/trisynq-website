# ClearForge Website Update - Technical Requirements Document
## Page-by-Page Implementation Guide

**Document Version:** 1.0  
**Created:** October 22, 2025  
**Site Status:** Pre-launch (not public, not indexed)  
**Implementation Approach:** Replace pages (no redirects needed)

---

## EXECUTIVE SUMMARY

### Changes Overview

**Navigation Updates:**
- Move CTA to right side of header
- Replace "Proof" → "The Continuum" (hybrid link with dropdown)
- Add Services to menu structure
- Collapse About menu items
- Remove Pricing page entirely

**Content Updates:**
- Add Continuum as core narrative throughout
- Restore Services/Consulting messaging
- Replace "The 20%" with combined Options 3-5 messaging
- Fix all CTAs to route to appropriate contact forms
- Add intelligence/AI-driven messaging to Platform page

**Product Updates:**
- Remove hero logos from Foundry product pages (OS, Platform, Search)
- Add actual screenshots to Business: OS
- Update all products with "early access benefits" instead of pricing
- Archive Continuum projects (keep only NEXUS and RE-Connect)

**Contact Form Updates:**
- Implement URL parameter routing for 6+ form types
- Remove intermediate beta landing pages
- Direct CTAs to appropriate contact forms

---

## PART I: NAVIGATION STRUCTURE

### Primary Navigation Changes

**Current Navigation:**
```
[Logo] The Forge | Xynergy | Proof | Solutions | Community | About | Contact [Beta]
```

**NEW Navigation:**
```
[Logo] Foundry ▾ | The Forge ▾ | Services ▾ | The Continuum ▾ | About ▾ | Contact        [Join Beta →]
```

**Layout:** Menu items start after logo on left, CTA button aligned to right

---

### Foundry Dropdown

```yaml
Foundry ▾:
  - Platform
  - Business Suite
    - Business: OS
  - Search Suite
  - Connect (API)
  - Roadmap
```

**Implementation:**
```typescript
// data/navigation.ts
{
  label: 'Foundry',
  href: '/foundry/platform',
  dropdown: [
    { label: 'Platform', href: '/foundry/platform', description: 'The AI engine powering everything' },
    { label: 'Business Suite', href: '/foundry/business' },
    { label: '→ Business: OS', href: '/foundry/business/os', indent: true },
    { label: 'Search Suite', href: '/foundry/search' },
    { label: 'Connect', href: '/foundry/connect', description: 'API Access' },
    { label: 'Roadmap', href: '/foundry/roadmap' }
  ]
}
```

---

### The Forge Dropdown

```yaml
The Forge ▾:
  - Knowledge (skeleton)
  - Tools (skeleton)
  - Community (skeleton)
  - Build (skeleton)
```

**Implementation:**
```typescript
{
  label: 'The Forge',
  href: '/forge',
  dropdown: [
    { label: 'Knowledge', href: '/forge/knowledge', description: 'Free education & articles' },
    { label: 'Tools', href: '/forge/tools', description: 'Free calculators & resources' },
    { label: 'Community', href: '/forge/community', description: 'Connect with builders' },
    { label: 'Build', href: '/forge/build', description: 'Transparency & Continuum' }
  ]
}
```

---

### Services Dropdown

```yaml
Services ▾:
  - Consulting
  - Custom Development
  - Training & Enablement
  - Continuum Partnership
```

**Implementation:**
```typescript
{
  label: 'Services',
  href: '/services',
  dropdown: [
    { label: 'Consulting', href: '/services/consulting', description: 'Operators-first knowledge transfer' },
    { label: 'Custom Development', href: '/services/custom', description: 'We build, you own' },
    { label: 'Training', href: '/services/training', description: 'Workshops & enablement' },
    { label: 'Continuum Partnership', href: '/services/partnership', description: 'Co-create products' }
  ]
}
```

---

### The Continuum Dropdown (Hybrid Link)

```yaml
The Continuum ▾:
  - Overview (main link)
  - Public Dashboard
  - Project NEXUS
  - Project RE-Connect
```

**Implementation:**
```typescript
{
  label: 'The Continuum',
  href: '/continuum', // Clicking label goes to overview
  dropdown: [
    { label: 'Overview', href: '/continuum' },
    { label: 'Public Dashboard', href: '/dashboard' },
    { label: 'Project NEXUS', href: '/continuum/nexus' },
    { label: 'Project RE-Connect', href: '/continuum/re-connect' }
  ]
}
```

---

### About Dropdown (Collapsed)

```yaml
About ▾:
  - Our Story
  - Mission & Values
  - Team
  - Contact
```

**Implementation:**
```typescript
{
  label: 'About',
  href: '/about',
  dropdown: [
    { label: 'Our Story', href: '/about/story', description: 'How we started & founder journey' },
    { label: 'Mission & Values', href: '/about/mission', description: 'Manifesto & philosophy' },
    { label: 'Team', href: '/about/team' },
    { label: 'Contact', href: '/contact' }
  ]
}
```

**Note:** This collapses multiple About pages:
- `/about/how-we-started` + `/about/founder-story` → `/about/story`
- `/about/manifesto` + `/about/team-philosophy` → `/about/mission`

---

### Header CTA Button

**Position:** Far right of header (right-aligned)

**Button:**
```yaml
Text: "Join Beta"
Link: /contact?type=beta-os
Style: Primary button (existing accent color)
```

---

## PART II: HOMEPAGE UPDATES

### File: `/app/page.tsx`

---

#### Section 1: Hero

**KEEP:** Existing hero structure

**UPDATE:** CTA buttons

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="text-center max-w-4xl mx-auto">
    <h1 className="text-6xl font-bold mb-6">
      Enterprise Capability. Small Business Reality.
    </h1>
    <p className="text-2xl mb-12">
      Intelligence-driven platform that doesn't require enterprise budgets. 
      Built in The Foundry. Proven in The Forge. Delivered with transparency.
    </p>
    <div className="flex gap-4 justify-center">
      <Button href="/foundry/platform" variant="primary">
        Explore Products
      </Button>
      <Button href="/forge" variant="outline">
        Learn & Build Free
      </Button>
    </div>
  </div>
</Section>
```

---

#### Section 2: The Foundry Platform Overview

**NEW SECTION** - Add after hero

```typescript
<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Intelligence-Driven Platform
      </h2>
      <p className="text-xl text-gray-300">
        42+ AI-powered microservices. Real-time context. Enterprise-grade clarity.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      <Card>
        <h3>Foundry Platform</h3>
        <p>The proprietary AI engine powering everything</p>
        <Button href="/foundry/platform">Learn More</Button>
      </Card>
      
      <Card>
        <h3>Product Suites</h3>
        <p>Business OS. Search Visibility. More coming.</p>
        <Button href="/foundry/business/os">View Products</Button>
      </Card>
      
      <Card>
        <h3>Foundry Connect</h3>
        <p>API access for developers and integrators</p>
        <Button href="/foundry/connect">Request Access</Button>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Section 3: Services Overview

**NEW SECTION** - Add after Foundry Platform

```typescript
<Section background="medium">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Not Just Products. Full Partnership.
      </h2>
      <p className="text-xl text-gray-300">
        Consulting. Custom development. Training. Continuum partnerships.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <h3>Consulting & Training</h3>
        <p>Operators-first knowledge transfer. No consultant-speak. Practical enablement.</p>
        <ul className="mt-4 space-y-2">
          <li>• Strategy & implementation consulting</li>
          <li>• Team training & workshops</li>
          <li>• Ongoing advisory partnerships</li>
        </ul>
        <Button href="/services/consulting" className="mt-6">Learn More</Button>
      </Card>
      
      <Card>
        <h3>Custom Development</h3>
        <p>We build, you own. White-label capabilities. Continuum co-creation.</p>
        <ul className="mt-4 space-y-2">
          <li>• Custom product development</li>
          <li>• White-label platform access</li>
          <li>• Continuum partnership program</li>
        </ul>
        <Button href="/services/custom" className="mt-6">Discuss Your Needs</Button>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Section 4: Why ClearForge Exists (Replaces "The 20%")

**REMOVE:** Current "The 20%" section entirely

**REPLACE WITH:** Combined Options 3-5 messaging

```typescript
<Section background="dark">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      No Gatekeeping
    </h2>
    
    <div className="text-xl space-y-6 text-gray-300">
      <p>
        Technology shouldn't require enterprise budgets. We're changing that by 
        making intelligence accessible—not just affordable, but actually usable.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
        <div>
          <h3 className="text-2xl font-semibold mb-3">What Should Change</h3>
          <ul className="space-y-3">
            <li>• $50K agency bills → $5K platform access</li>
            <li>• 6-month implementations → 6-week deployments</li>
            <li>• Consultant dependency → Your team ownership</li>
            <li>• Black-box tools → Transparent intelligence</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-3">Built For</h3>
          <ul className="space-y-3">
            <li>• Founders managing 6+ projects</li>
            <li>• SMBs competing with enterprise brands</li>
            <li>• Teams who need control, not consultants</li>
            <li>• Builders who want proof, not promises</li>
          </ul>
        </div>
      </div>
      
      <p className="mt-12 text-2xl font-semibold">
        We built The Foundry to prove it's possible.
      </p>
    </div>
    
    <div className="mt-12">
      <Button href="/about/mission" variant="outline">
        Read Our Mission
      </Button>
    </div>
  </div>
</Section>
```

---

#### Section 5: The Continuum

**NEW SECTION** - Add after "No Gatekeeping"

```typescript
<Section background="gradient">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        How We Validate: The Continuum
      </h2>
      <p className="text-xl text-gray-300">
        We prove products work before we launch them. Every Foundry product 
        starts as a Continuum project—used internally, validated with partners, 
        then released commercially.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <Card>
        <div className="text-4xl mb-4">1️⃣</div>
        <h3>Internal Use</h3>
        <p>We use it ourselves first. If it doesn't work for us, we don't ship it.</p>
      </Card>
      
      <Card>
        <div className="text-4xl mb-4">2️⃣</div>
        <h3>Continuum Partners</h3>
        <p>12-18 month validation with real companies. Build case studies organically.</p>
      </Card>
      
      <Card>
        <div className="text-4xl mb-4">3️⃣</div>
        <h3>Product Launch</h3>
        <p>Commercial release with proven methodology. Not promises—proof.</p>
      </Card>
    </div>
    
    <div className="text-center">
      <h3 className="text-2xl font-semibold mb-6">Current Continuum Projects</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Card variant="bordered">
          <h4 className="text-xl font-semibold mb-2">Project NEXUS</h4>
          <p className="mb-4">Search visibility validation → Foundry Search suite</p>
          <span className="text-sm text-blue-400">Phase 1 Starting Q1 2026</span>
        </Card>
        
        <Card variant="bordered">
          <h4 className="text-xl font-semibold mb-2">Project RE-Connect</h4>
          <p className="mb-4">Real estate transparency & intelligence</p>
          <span className="text-sm text-purple-400">Early Development</span>
        </Card>
      </div>
      
      <Button href="/continuum" variant="outline" className="mt-8">
        Explore The Continuum
      </Button>
    </div>
  </div>
</Section>
```

---

#### Section 6: Proof & Transparency

**UPDATE:** Existing dashboard section

```typescript
<Section background="dark">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Public Dashboard
    </h2>
    <p className="text-xl mb-8 text-gray-300">
      Full transparency into platform health, product development, and Continuum progress.
    </p>
    
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <Card>
        <div className="text-3xl font-bold text-blue-400 mb-2">42+</div>
        <p>Microservices Operational</p>
      </Card>
      <Card>
        <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
        <p>Platform Uptime</p>
      </Card>
      <Card>
        <div className="text-3xl font-bold text-pink-400 mb-2">Q4 2025</div>
        <p>Business: OS Beta</p>
      </Card>
    </div>
    
    <Button href="/dashboard" variant="primary">
      View Full Dashboard
    </Button>
  </div>
</Section>
```

---

#### Section 7: Beta CTA

**UPDATE:** Existing beta section

```typescript
<Section background="gradient">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Join the Beta Program
    </h2>
    <p className="text-xl mb-8">
      Get early access to Foundry Business: OS with significant benefits for beta users.
    </p>
    
    <div className="space-y-4 mb-8 text-left max-w-xl mx-auto">
      <div className="flex items-start gap-3">
        <span className="text-2xl">✓</span>
        <p>Priority access to new features</p>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-2xl">✓</span>
        <p>Significant early adopter benefits</p>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-2xl">✓</span>
        <p>Direct input on product development</p>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-2xl">✓</span>
        <p>Dedicated support during beta period</p>
      </div>
    </div>
    
    <Button href="/contact?type=beta-os" variant="primary" size="lg">
      Apply for Beta Access
    </Button>
  </div>
</Section>
```

---

## PART III: FOUNDRY PAGES

### Page: `/foundry/platform`

**File:** `/app/foundry/platform/page.tsx`

---

#### Hero Section

**REMOVE:** Hero logo (if present)

**UPDATE:** Hero content to emphasize AI/intelligence

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-bold mb-6">
      The Foundry Platform
    </h1>
    <p className="text-2xl mb-8 text-gray-300">
      Intelligence-driven platform using our proprietary AI engine. 
      42+ microservices powering real-time context, automation, and insights.
    </p>
    <div className="flex gap-4 justify-center">
      <Button href="/foundry/connect" variant="primary">
        Request API Access
      </Button>
      <Button href="/dashboard" variant="outline">
        View Platform Status
      </Button>
    </div>
  </div>
</Section>
```

---

#### What Powers The Foundry

**NEW SECTION**

```typescript
<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Proprietary AI Engine
    </h2>
    
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Intelligence Gateway</h3>
        <p className="text-gray-300 mb-4">
          Orchestration layer that routes requests intelligently across 42+ microservices. 
          Real-time context awareness. Pattern recognition. Autonomous decision-making 
          within defined boundaries.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li>• AI-powered request routing</li>
          <li>• Context preservation across services</li>
          <li>• Real-time data synthesis</li>
          <li>• Adaptive learning from usage patterns</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">What Makes It Different</h3>
        <p className="text-gray-300 mb-4">
          Not just AI-assisted. Intelligence-driven. The platform doesn't just respond—it 
          anticipates, suggests, and executes within your parameters.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li>• Multi-source data integration</li>
          <li>• Living memory across sessions</li>
          <li>• Explainable recommendations</li>
          <li>• Transparent operations (no black boxes)</li>
        </ul>
      </div>
    </div>
  </div>
</Section>
```

---

#### Platform Components

**UPDATE:** Existing section

```typescript
<Section background="medium">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Platform Components
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      <Card>
        <h3>Communication Intelligence</h3>
        <p>Slack, Gmail, Calendar integration with AI classification and prioritization</p>
      </Card>
      
      <Card>
        <h3>Business Intelligence</h3>
        <p>CRM, analytics, living memory with semantic search and insights</p>
      </Card>
      
      <Card>
        <h3>Content Intelligence</h3>
        <p>Generation, optimization, and distribution with performance tracking</p>
      </Card>
      
      <Card>
        <h3>Infrastructure Intelligence</h3>
        <p>Cost tracking, anomaly detection, optimization recommendations</p>
      </Card>
      
      <Card>
        <h3>Marketing Intelligence</h3>
        <p>Campaign management, social media, multi-channel orchestration</p>
      </Card>
      
      <Card>
        <h3>Search Intelligence</h3>
        <p>Keyword discovery, content planning, visibility optimization</p>
      </Card>
    </div>
  </div>
</Section>
```

---

#### How to Access

**NEW SECTION**

```typescript
<Section background="dark">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Access The Foundry
    </h2>
    
    <div className="space-y-6">
      <Card>
        <h3 className="text-xl font-semibold mb-3">Via Foundry Products</h3>
        <p className="mb-4">
          Business: OS, Search: Visibility, and future products are built on The Foundry. 
          Platform intelligence is included with your product subscription.
        </p>
        <Button href="/foundry/business/os">View Products</Button>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-3">Via Foundry Connect (API)</h3>
        <p className="mb-4">
          Direct API access for developers and integrators. Build custom applications 
          powered by The Foundry's intelligence. Currently in beta.
        </p>
        <Button href="/foundry/connect">Request API Access</Button>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-3">Via Custom Development</h3>
        <p className="mb-4">
          We build white-label solutions on The Foundry for enterprise partners. 
          You own the product, we provide the intelligence engine.
        </p>
        <Button href="/services/custom">Discuss Custom Development</Button>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Platform Status

**NEW SECTION**

```typescript
<Section background="gradient">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Platform Status</h2>
    
    <div className="grid grid-cols-3 gap-6 mb-8">
      <div>
        <div className="text-3xl font-bold text-blue-400 mb-2">42+</div>
        <p className="text-sm">Services Operational</p>
      </div>
      <div>
        <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
        <p className="text-sm">Uptime (30 days)</p>
      </div>
      <div>
        <div className="text-3xl font-bold text-purple-400 mb-2">&lt;180ms</div>
        <p className="text-sm">Avg Response Time</p>
      </div>
    </div>
    
    <Button href="/dashboard">View Full Dashboard</Button>
  </div>
</Section>
```

---

### Page: `/foundry/business` (Suite Landing)

**File:** `/app/foundry/business/page.tsx`

**ACTION:** Create new page

---

#### Content

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-bold mb-6">
      Foundry Business Suite
    </h1>
    <p className="text-2xl mb-8 text-gray-300">
      AI-powered products for multi-project leaders and teams. 
      Intelligence that amplifies your intuition.
    </p>
  </div>
</Section>

<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">Current Products</h2>
    
    <Card variant="elevated" className="mb-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-sm font-semibold text-blue-400 mb-2 block">BETA Q4 2025</span>
          <h3 className="text-3xl font-bold mb-4">Foundry Business: OS</h3>
          <p className="text-xl mb-6 text-gray-300">
            Operating system for managing 6+ parallel projects. Communication intelligence, 
            living memory, autonomous operations.
          </p>
          <ul className="space-y-2 mb-6 text-gray-300">
            <li>• Context-aware across Slack, Gmail, Calendar</li>
            <li>• Persistent knowledge that learns from your work</li>
            <li>• AI execution within your defined boundaries</li>
            <li>• Exception-only management (AI handles routine)</li>
          </ul>
          <Button href="/foundry/business/os" variant="primary">
            Learn More & Apply for Beta
          </Button>
        </div>
        <div>
          {/* Placeholder for screenshot */}
          <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-gray-500">Screenshot: Dashboard View</span>
          </div>
        </div>
      </div>
    </Card>
    
    <div className="text-center mt-12">
      <h3 className="text-2xl font-semibold mb-4">More Business Products Coming</h3>
      <p className="text-gray-300 mb-6">
        Analytics, financial intelligence, and team collaboration tools are in development.
      </p>
      <Button href="/foundry/roadmap" variant="outline">
        View Product Roadmap
      </Button>
    </div>
  </div>
</Section>
```

---

### Page: `/foundry/business/os`

**File:** `/app/foundry/business/os/page.tsx`

---

#### Hero Section

**REMOVE:** Hero logo (if present)

**UPDATE:** Hero content

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
      BETA Q4 2025
    </span>
    <h1 className="text-5xl font-bold mb-6">
      Foundry Business: OS
    </h1>
    <p className="text-2xl mb-8 text-gray-300">
      Finally, an operating system for multi-project leaders. 
      Stop drowning in context switching.
    </p>
    <div className="flex gap-4 justify-center">
      <Button href="/contact?type=beta-os" variant="primary" size="lg">
        Apply for Beta
      </Button>
      <Button href="#screenshots" variant="outline">
        See Screenshots
      </Button>
    </div>
  </div>
</Section>
```

---

#### Problem Section

**KEEP:** Existing problem section (if present)

**OR CREATE:**

```typescript
<Section background="dark">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center">
      The Context Switching Problem
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <h3 className="text-xl font-semibold mb-4">What Drains You</h3>
        <ul className="space-y-3 text-gray-300">
          <li>• Switching between 10+ tools daily</li>
          <li>• Losing context every time you switch projects</li>
          <li>• Manually synthesizing information from Slack, Gmail, Calendar</li>
          <li>• Forgetting critical details between weekly check-ins</li>
          <li>• Spending hours on status updates instead of decisions</li>
        </ul>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-4">What Should Happen</h3>
        <ul className="space-y-3 text-gray-300">
          <li>• Single source of truth across all projects</li>
          <li>• AI that remembers context you'd forget</li>
          <li>• Automatic synthesis of communications</li>
          <li>• Proactive alerts only when you need to act</li>
          <li>• Focus on decisions, not status tracking</li>
        </ul>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Solution/Features Section

**UPDATE:** Existing features section

```typescript
<Section background="medium">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      How Business: OS Solves It
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <Card variant="elevated">
        <h3 className="text-2xl font-semibold mb-4">Communication Intelligence</h3>
        <p className="mb-4 text-gray-300">
          AI analyzes your Slack messages, emails, and calendar events. 
          Classifies by urgency, extracts action items, generates summaries.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Auto-prioritization of incoming messages</li>
          <li>• Suggested responses (you approve)</li>
          <li>• Meeting prep briefs generated automatically</li>
          <li>• Follow-up tracking across conversations</li>
        </ul>
      </Card>
      
      <Card variant="elevated">
        <h3 className="text-2xl font-semibold mb-4">Living Memory</h3>
        <p className="mb-4 text-gray-300">
          Persistent knowledge graph that grows with your work. 
          Remember context across projects, months, years.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Semantic search across all your data</li>
          <li>• Automatic linking of related information</li>
          <li>• Context retrieval when switching projects</li>
          <li>• Historical decision tracking with reasoning</li>
        </ul>
      </Card>
      
      <Card variant="elevated">
        <h3 className="text-2xl font-semibold mb-4">Autonomous Operations</h3>
        <p className="mb-4 text-gray-300">
          AI executes routine tasks within boundaries you define. 
          You only handle exceptions and strategic decisions.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Confidence scoring on every AI action</li>
          <li>• You approve execution boundaries</li>
          <li>• Automatic escalation when uncertain</li>
          <li>• Full audit trail of AI decisions</li>
        </ul>
      </Card>
      
      <Card variant="elevated">
        <h3 className="text-2xl font-semibold mb-4">Multi-Project Dashboard</h3>
        <p className="mb-4 text-gray-300">
          One view across 6+ parallel projects. Real-time status, 
          alerts, and recommendations.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Project health scoring with trend analysis</li>
          <li>• Proactive alerts for blockers/risks</li>
          <li>• Resource allocation recommendations</li>
          <li>• Performance tracking with benchmarks</li>
        </ul>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Screenshots Section

**NEW SECTION** (screenshots will be added)

```typescript
<Section background="dark" id="screenshots">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-4 text-center">
      See Business: OS in Action
    </h2>
    <p className="text-xl text-gray-300 mb-12 text-center">
      Actual screenshots from current build (Beta Q4 2025)
    </p>
    
    {/* Screenshot 1 */}
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-4">Multi-Project Dashboard</h3>
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
        {/* Placeholder - replace with actual screenshot */}
        <img 
          src="/screenshots/business-os-dashboard.png" 
          alt="Business: OS Dashboard showing 6 active projects with health scores and alerts"
          className="w-full"
        />
      </div>
      <p className="text-sm text-gray-400 mt-3">
        Single view across all active projects with AI-generated health scores and proactive alerts
      </p>
    </div>
    
    {/* Screenshot 2 */}
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-4">Communication Intelligence</h3>
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
        {/* Placeholder - replace with actual screenshot */}
        <img 
          src="/screenshots/business-os-comms.png" 
          alt="Communication intelligence showing classified messages and suggested responses"
          className="w-full"
        />
      </div>
      <p className="text-sm text-gray-400 mt-3">
        AI classifies Slack/Gmail by urgency, generates response suggestions, tracks action items
      </p>
    </div>
    
    {/* Screenshot 3 */}
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-4">Living Memory</h3>
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
        {/* Placeholder - replace with actual screenshot */}
        <img 
          src="/screenshots/business-os-memory.png" 
          alt="Living memory search showing semantic connections across projects"
          className="w-full"
        />
      </div>
      <p className="text-sm text-gray-400 mt-3">
        Semantic search across all data with automatic linking and context preservation
      </p>
    </div>
  </div>
</Section>
```

---

#### Target Audience

**KEEP/UPDATE:** Existing section

```typescript
<Section background="medium">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Who This Is For
    </h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <h3 className="text-xl font-semibold mb-3">Multi-Venture Founders</h3>
        <p className="text-gray-300">
          Managing 3+ businesses simultaneously. Need context switching without cognitive overload.
        </p>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-3">Executives with Large Teams</h3>
        <p className="text-gray-300">
          6+ direct reports, each with multiple initiatives. Need visibility without micromanaging.
        </p>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-3">Consultants & Agencies</h3>
        <p className="text-gray-300">
          10+ client accounts, constant context switching. Need single source of truth.
        </p>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Beta Program & Early Access

**UPDATE:** Replace any pricing section with early access messaging

```typescript
<Section background="gradient">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Beta Program (Q4 2025)
    </h2>
    
    <p className="text-xl mb-8 text-gray-300">
      We're taking applications for Business: OS beta. Early access with 
      significant benefits for participants who help shape the product.
    </p>
    
    <div className="bg-gray-900/50 rounded-lg p-8 mb-8">
      <h3 className="text-2xl font-semibold mb-6">Beta Benefits</h3>
      <div className="grid md:grid-cols-2 gap-4 text-left">
        <div className="flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold">Priority Access</p>
            <p className="text-sm text-gray-400">First to receive new features</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold">Significant Early Adopter Benefits</p>
            <p className="text-sm text-gray-400">Preferred terms for beta participants</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold">Product Input</p>
            <p className="text-sm text-gray-400">Direct feedback shapes features</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold">Dedicated Support</p>
            <p className="text-sm text-gray-400">Direct access to founding team</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-4 mb-8 text-gray-400 text-sm">
      <p>
        Beta opens Q4 2025 (Oct-Dec). Limited spots available. 
        We're looking for 10-20 founding users managing 6+ parallel projects.
      </p>
      <p>
        Commercial launch Q1 2026. Beta participants receive preferred terms 
        and benefits that reflect their contribution to product development.
      </p>
    </div>
    
    <Button href="/contact?type=beta-os" variant="primary" size="lg">
      Apply for Beta Access
    </Button>
  </div>
</Section>
```

---

#### Current Status

**NEW SECTION**

```typescript
<Section background="dark">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Development Status</h2>
    
    <div className="space-y-4">
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Communication Intelligence</h3>
            <p className="text-sm text-gray-400">Slack, Gmail, Calendar integration with AI classification</p>
          </div>
          <span className="text-green-400 font-semibold">100% Complete</span>
        </div>
      </Card>
      
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Living Memory</h3>
            <p className="text-sm text-gray-400">Persistent knowledge graph with semantic search</p>
          </div>
          <span className="text-yellow-400 font-semibold">In Progress</span>
        </div>
      </Card>
      
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Autonomous Operations</h3>
            <p className="text-sm text-gray-400">AI execution within defined boundaries</p>
          </div>
          <span className="text-yellow-400 font-semibold">In Progress</span>
        </div>
      </Card>
      
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Multi-Project Dashboard</h3>
            <p className="text-sm text-gray-400">Real-time status across 6+ projects</p>
          </div>
          <span className="text-yellow-400 font-semibold">In Progress</span>
        </div>
      </Card>
    </div>
    
    <div className="mt-8 text-center">
      <Button href="/dashboard" variant="outline">
        View Platform Status
      </Button>
    </div>
  </div>
</Section>
```

---

### Page: `/foundry/search` (Suite Landing)

**File:** `/app/foundry/search/page.tsx`

**ACTION:** Create new page

---

#### Hero Section

**REMOVE:** Hero logo

**Content:**

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <span className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
      CONTINUUM VALIDATION Q1-Q3 2026
    </span>
    <h1 className="text-5xl font-bold mb-6">
      Foundry Search Suite
    </h1>
    <p className="text-2xl mb-8 text-gray-300">
      Adaptive search optimization validated through Project NEXUS. 
      Traditional search + AI overviews. Transparent methodology.
    </p>
  </div>
</Section>
```

---

#### Continuum Origin Story

**NEW SECTION**

```typescript
<Section background="dark">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center">
      Born from The Continuum
    </h2>
    
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-purple-500/30 mb-12">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl">🔬</span>
        <div>
          <h3 className="text-2xl font-semibold">Project NEXUS</h3>
          <p className="text-gray-400">Continuum validation program for search methodology</p>
        </div>
      </div>
      
      <p className="text-lg mb-6">
        Before launching Foundry Search as a commercial product, we're validating the 
        methodology through Project NEXUS—a 12-18 month Continuum program with real partners.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <div className="text-2xl font-bold text-purple-400 mb-2">Q1 2026</div>
          <p className="text-sm">NEXUS Phase 1 Starts</p>
          <p className="text-xs text-gray-400">10-20 beta partners</p>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400 mb-2">Q1-Q3 2026</div>
          <p className="text-sm">Methodology Validation</p>
          <p className="text-xs text-gray-400">Real results, transparency reports</p>
        </div>
        <div>
          <div className="text-2xl font-bold text-pink-400 mb-2">Q3 2026</div>
          <p className="text-sm">Commercial Launch</p>
          <p className="text-xs text-gray-400">Foundry Search: Visibility</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button href="/continuum/nexus" variant="outline">
          Learn About Project NEXUS
        </Button>
        <Button href="/contact?type=nexus" variant="primary">
          Apply for NEXUS Continuum
        </Button>
      </div>
    </div>
  </div>
</Section>
```

---

#### The Problem

**NEW SECTION**

```typescript
<Section background="medium">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center">
      The Search Visibility Crisis
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <h3 className="text-xl font-semibold mb-4">What's Broken</h3>
        <ul className="space-y-3 text-gray-300">
          <li>• Traditional SEO dying (rankings ≠ traffic anymore)</li>
          <li>• AI search rising (40%+ of searches involve AI now)</li>
          <li>• Agencies charge $10K-50K/month, gatekeep knowledge</li>
          <li>• No clear methodology for both paradigms</li>
          <li>• SMBs locked out of effective search strategies</li>
        </ul>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-4">What Should Exist</h3>
        <ul className="space-y-3 text-gray-300">
          <li>• Transparent methodology (not black-box agencies)</li>
          <li>• Works for traditional AND AI search</li>
          <li>• Accessible pricing ($99-349/mo, not $10K+)</li>
          <li>• Proven through real results (NEXUS transparency)</li>
          <li>• You own the strategy, not dependent on consultants</li>
        </ul>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Future Product: Search: Visibility

**NEW SECTION**

```typescript
<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-4 text-center">
      Coming Q3 2026: Foundry Search: Visibility
    </h2>
    <p className="text-xl text-gray-300 mb-12 text-center">
      After proving the methodology through NEXUS, we'll launch the commercial product.
    </p>
    
    <div className="grid md:grid-cols-3 gap-8">
      <Card variant="elevated">
        <h3 className="text-xl font-semibold mb-4">Transition Tracker</h3>
        <p className="text-gray-300 mb-4">
          Where are you in the search transition? Stage 1-5 assessment with clear next steps.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Traditional search performance baseline</li>
          <li>• AI search visibility assessment</li>
          <li>• Gap analysis and recommendations</li>
          <li>• Monthly progress tracking</li>
        </ul>
      </Card>
      
      <Card variant="elevated">
        <h3 className="text-xl font-semibold mb-4">Intelligence Engine</h3>
        <p className="text-gray-300 mb-4">
          AI-powered strategy and content planning. What to optimize, when, and why.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Keyword opportunity discovery</li>
          <li>• Content gap analysis</li>
          <li>• Priority recommendations</li>
          <li>• Competitive intelligence</li>
        </ul>
      </Card>
      
      <Card variant="elevated">
        <h3 className="text-xl font-semibold mb-4">Performance Monitoring</h3>
        <p className="text-gray-300 mb-4">
          Track traditional AND AI search visibility. One dashboard, complete picture.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Traditional keyword rankings</li>
          <li>• AI overview appearances</li>
          <li>• Traffic attribution by source</li>
          <li>• ROI tracking</li>
        </ul>
      </Card>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-400 mb-6">
        Want to be notified when Search: Visibility launches? Join the waitlist.
      </p>
      <Button href="/contact?type=waitlist-search" variant="outline">
        Join Launch Waitlist
      </Button>
    </div>
  </div>
</Section>
```

---

#### NEXUS Application

**NEW SECTION**

```typescript
<Section background="gradient">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Apply for Project NEXUS
    </h2>
    
    <p className="text-xl mb-8 text-gray-300">
      We're recruiting 10-20 partners for NEXUS Phase 1 (Q1 2026). 12-18 month 
      validation program. Help prove the methodology, get early access to tools, 
      significant benefits for participants.
    </p>
    
    <div className="bg-gray-900/50 rounded-lg p-8 mb-8">
      <h3 className="text-2xl font-semibold mb-6">What NEXUS Partners Get</h3>
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div>
          <h4 className="font-semibold mb-2">During Validation (12-18 mo)</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Monthly transparency reports (your progress + methodology)</li>
            <li>• Direct access to founding team</li>
            <li>• Input on product development</li>
            <li>• Co-creation of case studies</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">After Commercial Launch</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Preferred pricing for early supporters</li>
            <li>• Priority feature access</li>
            <li>• Public case study recognition</li>
            <li>• Revenue share opportunities (select partners)</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-4">Ideal NEXUS Partners</h4>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div className="bg-gray-800/50 rounded p-4">
          <p className="font-semibold mb-1">SMB or Mid-Market</p>
          <p className="text-gray-400">Competing with enterprise brands</p>
        </div>
        <div className="bg-gray-800/50 rounded p-4">
          <p className="font-semibold mb-1">Search-Dependent</p>
          <p className="text-gray-400">Organic search is a primary channel</p>
        </div>
        <div className="bg-gray-800/50 rounded p-4">
          <p className="font-semibold mb-1">Transparency-Aligned</p>
          <p className="text-gray-400">Willing to share progress publicly</p>
        </div>
      </div>
    </div>
    
    <Button href="/contact?type=nexus" variant="primary" size="lg">
      Apply for NEXUS Continuum
    </Button>
  </div>
</Section>
```

---

### Page: `/foundry/connect`

**File:** `/app/foundry/connect/page.tsx`

**KEEP:** Existing page structure

**UPDATE:** Replace any pricing with "Contact for access and early adopter benefits"

---

#### Hero Section Update

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
      BETA EXPANDING
    </span>
    <h1 className="text-5xl font-bold mb-6">
      Foundry Connect
    </h1>
    <p className="text-2xl mb-8 text-gray-300">
      API access to The Foundry Platform. Build custom applications powered 
      by 42+ AI-driven microservices.
    </p>
    <div className="flex gap-4 justify-center">
      <Button href="/contact?type=connect" variant="primary">
        Request API Access
      </Button>
      <Button href="https://docs.clearforge.com" variant="outline">
        View API Docs
      </Button>
    </div>
  </div>
</Section>
```

---

#### Early Access Section (Replace Pricing)

```typescript
<Section background="gradient">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Beta Access</h2>
    
    <p className="text-xl mb-8 text-gray-300">
      We're expanding beta access to developers and integrators. Contact us for 
      early access and significant benefits for beta participants.
    </p>
    
    <div className="bg-gray-900/50 rounded-lg p-8 mb-8">
      <h3 className="text-2xl font-semibold mb-6">Beta Program Benefits</h3>
      <div className="space-y-4 text-left">
        <div className="flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold">Early Access</p>
            <p className="text-sm text-gray-400">Use Foundry Connect before public launch (Q1 2026)</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold">Preferred Terms</p>
            <p className="text-sm text-gray-400">Early adopter benefits that reflect your contribution</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold">API Input</p>
            <p className="text-sm text-gray-400">Shape endpoints and functionality based on your use case</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold">Technical Support</p>
            <p className="text-sm text-gray-400">Direct access to platform engineering team</p>
          </div>
        </div>
      </div>
    </div>
    
    <Button href="/contact?type=connect" variant="primary" size="lg">
      Request Beta Access
    </Button>
  </div>
</Section>
```

---

### Page: `/foundry/roadmap`

**File:** `/app/foundry/roadmap/page.tsx`

**UPDATE:** Existing roadmap page with clear product timelines

---

#### Content Update

```typescript
<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">Product Roadmap</h2>
    
    {/* Q4 2025 */}
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl font-bold text-blue-400">Q4 2025</span>
        <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">IN PROGRESS</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="elevated">
          <h3 className="text-xl font-semibold mb-3">Foundry Business: OS Beta</h3>
          <p className="text-gray-300 mb-4">
            Beta program opens for multi-project leaders. 10-20 founding users.
          </p>
          <span className="text-sm text-gray-400">Target: October-December 2025</span>
        </Card>
        
        <Card variant="elevated">
          <h3 className="text-xl font-semibold mb-3">Foundry Connect Expansion</h3>
          <p className="text-gray-300 mb-4">
            Expand API beta from 15 to 50+ developers.
          </p>
          <span className="text-sm text-gray-400">Target: December 2025</span>
        </Card>
      </div>
    </div>
    
    {/* Q1 2026 */}
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl font-bold text-purple-400">Q1 2026</span>
        <span className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">UPCOMING</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="elevated">
          <h3 className="text-xl font-semibold mb-3">Business: OS Commercial Launch</h3>
          <p className="text-gray-300 mb-4">
            Public launch after internal validation and beta program.
          </p>
          <span className="text-sm text-gray-400">Target: January-March 2026</span>
        </Card>
        
        <Card variant="elevated">
          <h3 className="text-xl font-semibold mb-3">Project NEXUS Phase 1</h3>
          <p className="text-gray-300 mb-4">
            Start 12-18 month validation with 10-20 search partners.
          </p>
          <span className="text-sm text-gray-400">Target: January 2026</span>
        </Card>
        
        <Card variant="elevated">
          <h3 className="text-xl font-semibold mb-3">Foundry Connect Public API</h3>
          <p className="text-gray-300 mb-4">
            Public API launch with developer portal and documentation.
          </p>
          <span className="text-sm text-gray-400">Target: March 2026</span>
        </Card>
      </div>
    </div>
    
    {/* Q3 2026 */}
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl font-bold text-pink-400">Q3 2026</span>
        <span className="text-sm bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">PLANNED</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="elevated">
          <h3 className="text-xl font-semibold mb-3">Foundry Search: Visibility Launch</h3>
          <p className="text-gray-300 mb-4">
            Commercial launch after NEXUS validation. Proven methodology, transparent results.
          </p>
          <span className="text-sm text-gray-400">Target: July-September 2026</span>
        </Card>
        
        <Card variant="elevated">
          <h3 className="text-xl font-semibold mb-3">Business: OS Scale</h3>
          <p className="text-gray-300 mb-4">
            Expand to 50+ customers with enhanced features.
          </p>
          <span className="text-sm text-gray-400">Target: Ongoing through Q3</span>
        </Card>
      </div>
    </div>
    
    {/* Future */}
    <div>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl font-bold text-gray-400">Future</span>
        <span className="text-sm bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full">IN CONSIDERATION</span>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-semibold mb-2">Business: Analytics</h3>
          <p className="text-sm text-gray-400">From Data Democracy Continuum project</p>
        </Card>
        
        <Card>
          <h3 className="text-lg font-semibold mb-2">Business: Financial</h3>
          <p className="text-sm text-gray-400">Automated bookkeeping and forecasting</p>
        </Card>
        
        <Card>
          <h3 className="text-lg font-semibold mb-2">Additional Suites</h3>
          <p className="text-sm text-gray-400">Based on Continuum project validation</p>
        </Card>
      </div>
    </div>
  </div>
</Section>
```

---

## PART IV: THE FORGE PAGES

### Page: `/forge` (Landing Hub)

**File:** `/app/forge/page.tsx`

**ACTION:** Restructure as comprehensive landing page

---

#### Hero Section

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-6xl font-bold mb-6">
      The Forge
    </h1>
    <p className="text-2xl mb-8 text-gray-300">
      Free education, tools, community, and transparency. No gatekeeping. 
      Four doors, always open.
    </p>
    <p className="text-xl text-gray-400 mb-12">
      The Foundry is where we build products. The Forge is where we build together.
    </p>
  </div>
</Section>
```

---

#### Four Doors Section

```typescript
<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Four Doors to The Forge
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      {/* Knowledge Forge */}
      <Card variant="elevated" className="group hover:border-blue-500/50 transition-all">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">📚</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Knowledge Forge</h3>
            <p className="text-gray-400">Free education & resources</p>
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          Blog articles, tutorials, case studies, white papers, and playbooks. 
          What others charge $10K for, we give away.
        </p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Topics Include:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">AI Transparency</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">Data Accessibility</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">Search & Discovery</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">Automation</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">SMB Growth</span>
          </div>
        </div>
        <Button href="/forge/knowledge" variant="outline">
          Explore Knowledge →
        </Button>
      </Card>
      
      {/* Tool Forge */}
      <Card variant="elevated" className="group hover:border-purple-500/50 transition-all">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">🛠️</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Tool Forge</h3>
            <p className="text-gray-400">Free calculators & utilities</p>
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          Practical tools you can use immediately. Calculators, templates, 
          scripts, Chrome extensions, and more.
        </p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Available Tools:</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>• Visibility Transition Calculator</li>
            <li>• Context Switching Cost Estimator</li>
            <li>• Data Divide Self-Assessment</li>
            <li>• ROI Calculators (coming soon)</li>
          </ul>
        </div>
        <Button href="/forge/tools" variant="outline">
          Browse Tools →
        </Button>
      </Card>
      
      {/* Community Forge */}
      <Card variant="elevated" className="group hover:border-pink-500/50 transition-all">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">🤝</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Community Forge</h3>
            <p className="text-gray-400">Connect with builders</p>
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          Forums, events, AMAs, and direct access to the founding team. 
          Join builders solving similar problems.
        </p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">What's Happening:</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>• Monthly founder AMAs</li>
            <li>• Beta partner showcase</li>
            <li>• Community events (coming soon)</li>
            <li>• Forums & discussion (coming soon)</li>
          </ul>
        </div>
        <Button href="/forge/community" variant="outline">
          Join Community →
        </Button>
      </Card>
      
      {/* Build Forge */}
      <Card variant="elevated" className="group hover:border-green-500/50 transition-all">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">🏗️</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Build Forge</h3>
            <p className="text-gray-400">Transparent progress</p>
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          Watch us build in public. Monthly transparency reports, revenue ranges, 
          product development status, lessons learned, and The Continuum.
        </p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">What We Share:</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>• Monthly transparency reports</li>
            <li>• Continuum project updates</li>
            <li>• Product development status</li>
            <li>• Open questions for community input</li>
          </ul>
        </div>
        <Button href="/forge/build" variant="outline">
          See Our Progress →
        </Button>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Why The Forge Exists

```typescript
<Section background="medium">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Why The Forge Is Always Free
    </h2>
    
    <div className="text-xl space-y-6 text-gray-300">
      <p>
        We believe knowledge shouldn't be gatekept. What SEO agencies charge 
        $10K for should be accessible. What consultants hoard should be shared.
      </p>
      
      <p>
        The Forge is how we prove that transparency works. We give away the playbook, 
        the tools, and the methodology. If it helps you, great. If you need help 
        implementing, The Foundry products and services are there.
      </p>
      
      <p className="font-semibold text-2xl">
        No gatekeeping. No bait-and-switch. Just value.
      </p>
    </div>
    
    <div className="mt-12">
      <Button href="/about/mission" variant="outline">
        Read Our Mission
      </Button>
    </div>
  </div>
</Section>
```

---

### Page: `/forge/knowledge` (Skeleton)

**File:** `/app/forge/knowledge/page.tsx`

**ACTION:** Create skeleton page

---

#### Content

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <div className="text-5xl mb-4">📚</div>
    <h1 className="text-5xl font-bold mb-6">
      Knowledge Forge
    </h1>
    <p className="text-2xl text-gray-300">
      Free education, tutorials, and resources. Coming soon.
    </p>
  </div>
</Section>

<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      What's Coming
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <h3 className="text-xl font-semibold mb-3">Blog Articles</h3>
        <p className="text-gray-300">
          Deep dives on AI transparency, search optimization, data accessibility, 
          and building in public.
        </p>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-3">How-To Guides</h3>
        <p className="text-gray-300">
          Step-by-step tutorials for implementing intelligence-driven workflows.
        </p>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
        <p className="text-gray-300">
          Real results from Continuum projects and Foundry product users.
        </p>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold mb-3">Playbooks</h3>
        <p className="text-gray-300">
          Complete frameworks for search optimization, AI implementation, and more.
        </p>
      </Card>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-400 mb-6">
        Want to be notified when Knowledge Forge launches?
      </p>
      <Button href="/contact?type=general" variant="outline">
        Get Notified
      </Button>
    </div>
  </div>
</Section>
```

---

### Page: `/forge/tools` (Skeleton)

**File:** `/app/forge/tools/page.tsx`

**ACTION:** Create skeleton page

---

#### Content

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <div className="text-5xl mb-4">🛠️</div>
    <h1 className="text-5xl font-bold mb-6">
      Tool Forge
    </h1>
    <p className="text-2xl text-gray-300">
      Free calculators, templates, and utilities. Coming soon.
    </p>
  </div>
</Section>

<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Planned Tools
    </h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <h3 className="text-lg font-semibold mb-2">Visibility Transition Calculator</h3>
        <p className="text-sm text-gray-400">
          What stage are you in? (Traditional SEO → AI search)
        </p>
      </Card>
      
      <Card>
        <h3 className="text-lg font-semibold mb-2">Context Switching Cost Estimator</h3>
        <p className="text-sm text-gray-400">
          How much is context switching costing you?
        </p>
      </Card>
      
      <Card>
        <h3 className="text-lg font-semibold mb-2">Data Divide Assessment</h3>
        <p className="text-sm text-gray-400">
          Are you locked out by technology barriers?
        </p>
      </Card>
      
      <Card>
        <h3 className="text-lg font-semibold mb-2">ROI Calculator</h3>
        <p className="text-sm text-gray-400">
          Business: OS time savings calculator
        </p>
      </Card>
      
      <Card>
        <h3 className="text-lg font-semibold mb-2">Content Templates</h3>
        <p className="text-sm text-gray-400">
          AI-optimized content structures
        </p>
      </Card>
      
      <Card>
        <h3 className="text-lg font-semibold mb-2">Chrome Extensions</h3>
        <p className="text-sm text-gray-400">
          Productivity tools for multi-project management
        </p>
      </Card>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-400 mb-6">
        Want to be notified when Tool Forge launches?
      </p>
      <Button href="/contact?type=general" variant="outline">
        Get Notified
      </Button>
    </div>
  </div>
</Section>
```

---

### Page: `/forge/community` (Skeleton)

**File:** `/app/forge/community/page.tsx`

**ACTION:** Create skeleton page

---

#### Content

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <div className="text-5xl mb-4">🤝</div>
    <h1 className="text-5xl font-bold mb-6">
      Community Forge
    </h1>
    <p className="text-2xl text-gray-300">
      Connect with builders. Events, forums, and direct access. Coming soon.
    </p>
  </div>
</Section>

<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      What's Planned
    </h2>
    
    <div className="space-y-6">
      <Card variant="elevated">
        <h3 className="text-xl font-semibold mb-3">Monthly Founder AMAs</h3>
        <p className="text-gray-300">
          Ask anything. Product decisions, strategy, lessons learned, failures.
        </p>
      </Card>
      
      <Card variant="elevated">
        <h3 className="text-xl font-semibold mb-3">Forums & Discussion</h3>
        <p className="text-gray-300">
          Topic-based forums for search optimization, AI implementation, 
          multi-project management, and more.
        </p>
      </Card>
      
      <Card variant="elevated">
        <h3 className="text-xl font-semibold mb-3">Beta Partner Showcase</h3>
        <p className="text-gray-300">
          Learn from early adopters. What worked, what didn't, lessons learned.
        </p>
      </Card>
      
      <Card variant="elevated">
        <h3 className="text-xl font-semibold mb-3">Virtual Events</h3>
        <p className="text-gray-300">
          Workshops, webinars, and live product demos.
        </p>
      </Card>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-400 mb-6">
        Want to be notified when Community Forge launches?
      </p>
      <Button href="/contact?type=general" variant="outline">
        Join the List
      </Button>
    </div>
  </div>
</Section>
```

---

### Page: `/forge/build` (Transparency + Continuum)

**File:** `/app/forge/build/page.tsx`

**ACTION:** Create new page

---

#### Hero

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <div className="text-5xl mb-4">🏗️</div>
    <h1 className="text-5xl font-bold mb-6">
      Build Forge
    </h1>
    <p className="text-2xl text-gray-300">
      Watch us build in public. Monthly transparency. The Continuum. 
      Lessons learned. No PR spin.
    </p>
  </div>
</Section>
```

---

#### The Continuum Section

```typescript
<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center">
      The Continuum: How We Validate Products
    </h2>
    
    <div className="max-w-3xl mx-auto mb-12">
      <p className="text-xl text-gray-300 mb-6">
        Every Foundry product starts as a Continuum project. We prove it works 
        before we launch it. Three phases: Internal use → Partner validation → Commercial launch.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <Card variant="elevated">
        <div className="text-4xl mb-4">1️⃣</div>
        <h3 className="text-xl font-semibold mb-3">Internal Use</h3>
        <p className="text-gray-300">
          We use it ourselves first. Manage our own operations. If it doesn't 
          work for us, we don't ship it.
        </p>
        <div className="mt-4 text-sm text-gray-400">
          <strong>Example:</strong> Business: OS managing 6+ Continuum projects internally
        </div>
      </Card>
      
      <Card variant="elevated">
        <div className="text-4xl mb-4">2️⃣</div>
        <h3 className="text-xl font-semibold mb-3">Continuum Partners</h3>
        <p className="text-gray-300">
          12-18 month validation with 10-20 real companies. Build case studies 
          organically. Transparent progress reports.
        </p>
        <div className="mt-4 text-sm text-gray-400">
          <strong>Example:</strong> Project NEXUS validating Search: Visibility
        </div>
      </Card>
      
      <Card variant="elevated">
        <div className="text-4xl mb-4">3️⃣</div>
        <h3 className="text-xl font-semibold mb-3">Product Launch</h3>
        <p className="text-gray-300">
          Commercial release with proven methodology. Not promises—proof. 
          Case studies, metrics, transparent results.
        </p>
        <div className="mt-4 text-sm text-gray-400">
          <strong>Timeline:</strong> Business: OS Q1 2026, Search: Visibility Q3 2026
        </div>
      </Card>
    </div>
    
    <div className="text-center">
      <Button href="/continuum" variant="primary">
        Explore Current Continuum Projects
      </Button>
    </div>
  </div>
</Section>
```

---

#### Transparency Reports Section

```typescript
<Section background="medium">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center">
      Monthly Transparency Reports
    </h2>
    
    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-500/30 mb-12">
      <p className="text-xl mb-6">
        We publish monthly reports showing platform health, product development 
        status, revenue ranges (redacted details), lessons learned, and what we're 
        building next.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-3">What We Share:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Platform metrics (services operational, uptime, cost)</li>
            <li>• Product development % complete</li>
            <li>• Revenue ranges (not exact numbers)</li>
            <li>• Customer/user counts</li>
            <li>• Lessons learned (failures + successes)</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">What We Don't Share:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Customer-identifying information</li>
            <li>• Exact revenue numbers</li>
            <li>• Proprietary technical details</li>
            <li>• Competitive intelligence</li>
            <li>• Anything that compromises security</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="text-center">
      <p className="text-gray-400 mb-6">
        First transparency report coming Q4 2025
      </p>
      <Button href="/contact?type=general" variant="outline">
        Notify Me When Published
      </Button>
    </div>
  </div>
</Section>
```

---

#### Open Questions Section

```typescript
<Section background="dark">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">
      Open Questions for the Community
    </h2>
    
    <p className="text-lg text-gray-300 mb-8 text-center">
      We don't have all the answers. Sometimes we ask the community for input 
      on product decisions, pricing, roadmap priorities, and more.
    </p>
    
    <div className="bg-gray-900/50 rounded-lg p-8">
      <p className="text-center text-gray-400">
        First open questions coming soon as we approach product launches.
      </p>
    </div>
  </div>
</Section>
```

---

## PART V: CONTINUUM & PROOF PAGES

### Page: `/continuum` (Overview Landing)

**File:** `/app/continuum/page.tsx`

**ACTION:** Create new overview page

---

#### Hero

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-6xl font-bold mb-6">
      The Continuum
    </h1>
    <p className="text-2xl mb-8 text-gray-300">
      How we validate products before launching them. Internal use → Partner validation → Commercial launch.
    </p>
    <div className="flex gap-4 justify-center">
      <Button href="/dashboard" variant="primary">
        View Public Dashboard
      </Button>
      <Button href="/forge/build" variant="outline">
        See Build Forge
      </Button>
    </div>
  </div>
</Section>
```

---

#### How It Works

```typescript
<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Three-Phase Validation
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <Card variant="elevated">
        <div className="text-5xl mb-4">1️⃣</div>
        <h3 className="text-2xl font-semibold mb-4">Internal Use</h3>
        <p className="text-gray-300 mb-4">
          We eat our own dog food. Before asking anyone else to use it, 
          we use it to manage our own operations.
        </p>
        <div className="text-sm text-gray-400">
          <strong>Current:</strong> Business: OS managing 6+ internal projects
        </div>
      </Card>
      
      <Card variant="elevated">
        <div className="text-5xl mb-4">2️⃣</div>
        <h3 className="text-2xl font-semibold mb-4">Continuum Partners</h3>
        <p className="text-gray-300 mb-4">
          12-18 month validation with 10-20 companies. Real use cases. 
          Transparent progress. Build case studies organically.
        </p>
        <div className="text-sm text-gray-400">
          <strong>Next:</strong> Project NEXUS starting Q1 2026
        </div>
      </Card>
      
      <Card variant="elevated">
        <div className="text-5xl mb-4">3️⃣</div>
        <h3 className="text-2xl font-semibold mb-4">Commercial Launch</h3>
        <p className="text-gray-300 mb-4">
          Public launch with proven results. Not marketing promises—actual 
          case studies, metrics, and transparent validation.
        </p>
        <div className="text-sm text-gray-400">
          <strong>Timeline:</strong> Business: OS Q1 2026, Search: Visibility Q3 2026
        </div>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Current Projects

```typescript
<Section background="medium">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Active Continuum Projects
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      {/* Project NEXUS */}
      <Card variant="elevated" className="border-l-4 border-purple-500">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-sm font-semibold text-purple-400 mb-2 block">PHASE 1 STARTING Q1 2026</span>
            <h3 className="text-3xl font-bold">Project NEXUS</h3>
          </div>
        </div>
        
        <p className="text-xl text-gray-300 mb-6">
          Search visibility validation. Traditional SEO + AI overviews. 
          12-18 month partner program.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">What We're Validating:</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Adaptive search optimization methodology</li>
            <li>• Works for both traditional and AI search</li>
            <li>• Transparent, accessible ($99-349/mo vs $10K+ agencies)</li>
            <li>• Delivers 300%+ visibility improvement</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Partner Benefits:</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Monthly transparency reports (your progress)</li>
            <li>• Significant early adopter benefits</li>
            <li>• Public case study recognition</li>
            <li>• Revenue share opportunities (select partners)</li>
          </ul>
        </div>
        
        <div className="flex gap-4">
          <Button href="/continuum/nexus" variant="outline">
            Learn More
          </Button>
          <Button href="/contact?type=nexus" variant="primary">
            Apply for NEXUS
          </Button>
        </div>
      </Card>
      
      {/* Project RE-Connect */}
      <Card variant="elevated" className="border-l-4 border-blue-500">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-sm font-semibold text-blue-400 mb-2 block">EARLY DEVELOPMENT</span>
            <h3 className="text-3xl font-bold">Project RE-Connect</h3>
          </div>
        </div>
        
        <p className="text-xl text-gray-300 mb-6">
          Real estate intelligence and transparency platform. 
          Connecting buyers, sellers, and agents with better information.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Problem Space:</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Information asymmetry in real estate</li>
            <li>• Opaque processes and hidden data</li>
            <li>• Buyers lack visibility into true value</li>
            <li>• Agents need better intelligence tools</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Solution Direction:</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Transparent property intelligence</li>
            <li>• AI-powered market analysis</li>
            <li>• Buyer/seller/agent platform</li>
            <li>• Real-time data integration</li>
          </ul>
        </div>
        
        <div className="flex gap-4">
          <Button href="/continuum/re-connect" variant="outline">
            Learn More
          </Button>
          <Button href="/contact?type=partnership" variant="outline">
            Partner Inquiry
          </Button>
        </div>
      </Card>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-400 mb-4">
        More Continuum projects in development. We always maintain 5 active projects.
      </p>
      <p className="text-sm text-gray-500">
        Archived: Data Democracy, No-Cheating, CTO's Heart, Safe Spaces (re-evaluating)
      </p>
    </div>
  </div>
</Section>
```

---

#### Partner With Us

```typescript
<Section background="gradient">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Become a Continuum Partner
    </h2>
    
    <p className="text-xl mb-8 text-gray-300">
      Interested in partnering on a Continuum project? We're looking for companies 
      willing to help validate new products and methodologies.
    </p>
    
    <div className="bg-gray-900/50 rounded-lg p-8 mb-8">
      <h3 className="text-2xl font-semibold mb-6">What Makes a Good Partner</h3>
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div>
          <h4 className="font-semibold mb-2">You're Transparent</h4>
          <p className="text-sm text-gray-400">
            Willing to share progress publicly (anonymized or attributed)
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">You're Committed</h4>
          <p className="text-sm text-gray-400">
            12-18 month validation timeline with active participation
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">You're Representative</h4>
          <p className="text-sm text-gray-400">
            Your use case represents the target market we're solving for
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">You Want to Build Together</h4>
          <p className="text-sm text-gray-400">
            Provide feedback, shape features, co-create the solution
          </p>
        </div>
      </div>
    </div>
    
    <Button href="/contact?type=partnership" variant="primary" size="lg">
      Discuss Continuum Partnership
    </Button>
  </div>
</Section>
```

---

### Page: `/continuum/nexus`

**File:** `/app/continuum/nexus/page.tsx`

**KEEP:** Existing page structure

**UPDATE:** Clarify it's Phase 1 starting Q1 2026, add application CTA

---

#### Update Hero CTA

```typescript
// At end of hero section
<div className="flex gap-4 justify-center mt-8">
  <Button href="/contact?type=nexus" variant="primary" size="lg">
    Apply for NEXUS Phase 1
  </Button>
  <Button href="/forge/build" variant="outline">
    View Transparency Commitment
  </Button>
</div>
```

---

#### Add Timeline Section

```typescript
<Section background="dark">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">
      NEXUS Timeline
    </h2>
    
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="min-w-[120px] text-right">
          <span className="text-lg font-semibold text-purple-400">Q4 2025</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Partner Recruitment</h3>
          <p className="text-gray-400">
            Accepting applications for 10-20 beta partners. Ideal: SMB/mid-market, 
            search-dependent, transparency-aligned.
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="min-w-[120px] text-right">
          <span className="text-lg font-semibold text-blue-400">Q1 2026</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Phase 1 Launch</h3>
          <p className="text-gray-400">
            NEXUS Continuum starts with selected partners. Initial assessments, 
            baseline metrics, strategy development.
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="min-w-[120px] text-right">
          <span className="text-lg font-semibold text-pink-400">Q1-Q3 2026</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Methodology Validation</h3>
          <p className="text-gray-400">
            12-18 months of real implementation. Monthly transparency reports. 
            Track traditional + AI search performance.
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="min-w-[120px] text-right">
          <span className="text-lg font-semibold text-green-400">Q3 2026</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Commercial Launch</h3>
          <p className="text-gray-400">
            Foundry Search: Visibility launches with proven results, case studies, 
            and transparent methodology.
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>
```

---

### Page: `/continuum/re-connect`

**File:** `/app/continuum/re-connect/page.tsx`

**KEEP:** Existing structure if present

**OR CREATE:** Basic page similar to NEXUS format

---

### Page: `/dashboard` (Public Dashboard)

**File:** `/app/dashboard/page.tsx`

**UPDATE:** Existing dashboard with Continuum section

---

#### Add Continuum Projects Section

```typescript
<Section background="medium">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Continuum Project Status
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <Card variant="elevated">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Project NEXUS</h3>
          <span className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
            Phase 1 Starting Q1 2026
          </span>
        </div>
        <p className="text-gray-300 mb-4">
          Search visibility validation for Foundry Search suite
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Target Partners:</span>
            <span>10-20</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Applications:</span>
            <span>Open Now</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Timeline:</span>
            <span>12-18 months</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Product Launch:</span>
            <span>Q3 2026</span>
          </div>
        </div>
        <Button href="/continuum/nexus" variant="outline" className="mt-6">
          View Project Details
        </Button>
      </Card>
      
      <Card variant="elevated">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Project RE-Connect</h3>
          <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
            Early Development
          </span>
        </div>
        <p className="text-gray-300 mb-4">
          Real estate transparency and intelligence platform
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Stage:</span>
            <span>Problem validation</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Timeline:</span>
            <span>TBD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Status:</span>
            <span>Internal research</span>
          </div>
        </div>
        <Button href="/continuum/re-connect" variant="outline" className="mt-6">
          View Project Details
        </Button>
      </Card>
    </div>
    
    <div className="mt-8 text-center">
      <Button href="/continuum" variant="outline">
        View All Continuum Projects
      </Button>
    </div>
  </div>
</Section>
```

---

## PART VI: SERVICES PAGES

### Page: `/services` (Services Hub)

**File:** `/app/services/page.tsx`

**ACTION:** Create new services landing page

---

#### Hero

```typescript
<Section background="gradient" className="pt-32 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-6xl font-bold mb-6">
      Services
    </h1>
    <p className="text-2xl mb-8 text-gray-300">
      Not just products. Full partnership. Consulting, custom development, 
      training, and Continuum co-creation.
    </p>
  </div>
</Section>
```

---

#### Services Grid

```typescript
<Section background="dark">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Consulting */}
      <Card variant="elevated">
        <h2 className="text-3xl font-bold mb-4">Consulting</h2>
        <p className="text-xl text-gray-300 mb-6">
          Operators-first knowledge transfer. No consultant-speak. 
          Practical implementation with your team.
        </p>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">What We Do:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• AI implementation strategy</li>
            <li>• Search optimization roadmaps</li>
            <li>• Intelligence platform architecture</li>
            <li>• Data strategy and governance</li>
            <li>• Process automation design</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">How We're Different:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• We don't sell implementation hours</li>
            <li>• We transfer knowledge to your team</li>
            <li>• No long-term dependency on consultants</li>
            <li>• Transparent methodologies (documented)</li>
            <li>• Fixed-scope engagements with clear deliverables</li>
          </ul>
        </div>
        
        <Button href="/services/consulting" variant="outline">
          Learn More
        </Button>
      </Card>
      
      {/* Custom Development */}
      <Card variant="elevated">
        <h2 className="text-3xl font-bold mb-4">Custom Development</h2>
        <p className="text-xl text-gray-300 mb-6">
          We build, you own. White-label capabilities on The Foundry Platform. 
          Custom products that leverage our intelligence engine.
        </p>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">What We Build:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• White-label intelligence platforms</li>
            <li>• Custom AI-powered applications</li>
            <li>• Industry-specific solutions</li>
            <li>• Integration with existing systems</li>
            <li>• Foundry Platform extensions</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Ownership Model:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• You own the product and IP</li>
            <li>• We provide ongoing platform access</li>
            <li>• Optional maintenance and support</li>
            <li>• Revenue share opportunities</li>
            <li>• Co-marketing when beneficial</li>
          </ul>
        </div>
        
        <Button href="/services/custom" variant="outline">
          Learn More
        </Button>
      </Card>
      
      {/* Training */}
      <Card variant="elevated">
        <h2 className="text-3xl font-bold mb-4">Training & Enablement</h2>
        <p className="text-xl text-gray-300 mb-6">
          Workshops, bootcamps, and ongoing enablement. Upskill your team 
          on AI, search optimization, and intelligence platforms.
        </p>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Training Programs:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• AI implementation for teams</li>
            <li>• Search optimization workshops</li>
            <li>• Intelligence platform usage</li>
            <li>• Custom bootcamps (your tech stack)</li>
            <li>• Executive briefings</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Delivery Options:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• On-site workshops (1-3 days)</li>
            <li>• Virtual training series</li>
            <li>• Self-paced learning paths</li>
            <li>• Ongoing office hours</li>
            <li>• Certification programs</li>
          </ul>
        </div>
        
        <Button href="/services/training" variant="outline">
          Learn More
        </Button>
      </Card>
      
      {/* Continuum Partnership */}
      <Card variant="elevated">
        <h2 className="text-3xl font-bold mb-4">Continuum Partnership</h2>
        <p className="text-xl text-gray-300 mb-6">
          Co-create the next Foundry product. Partner with us on a Continuum 
          project. Share learnings, revenue, and recognition.
        </p>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Partnership Model:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Co-define problem and solution</li>
            <li>• 12-18 month validation program</li>
            <li>• Your use case shapes the product</li>
            <li>• Public transparency and case studies</li>
            <li>• Revenue share when product launches</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Partner Benefits:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Early access to emerging products</li>
            <li>• Preferred pricing and terms</li>
            <li>• Public recognition and case studies</li>
            <li>• Revenue share opportunities</li>
            <li>• Strategic partnership status</li>
          </ul>
        </div>
        
        <Button href="/services/partnership" variant="outline">
          Learn More
        </Button>
      </Card>
    </div>
  </div>
</Section>
```

---

#### Contact CTA

```typescript
<Section background="gradient">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Let's Discuss Your Needs
    </h2>
    <p className="text-xl mb-8 text-gray-300">
      Not sure which service is right? Let's talk about your goals and 
      find the best approach.
    </p>
    <Button href="/contact?type=partnership" variant="primary" size="lg">
      Start a Conversation
    </Button>
  </div>
</Section>
```

---

### Pages: Individual Service Pages

**Files:** 
- `/app/services/consulting/page.tsx`
- `/app/services/custom/page.tsx`
- `/app/services/training/page.tsx`
- `/app/services/partnership/page.tsx`

**ACTION:** Create detail pages for each service

**Structure:** Similar format to Foundry product pages
- Hero with service description
- What's included
- How it works
- Engagement model
- Case studies/examples (when available)
- CTA: Contact for services inquiry

---

## PART VII: ABOUT PAGES (COLLAPSED)

### Page: `/about/story` (Merged Page)

**File:** `/app/about/story/page.tsx`

**ACTION:** Merge `/about/how-we-started` + `/about/founder-story`

**Content:** Combined origin story + founder journey (one page, not two)

---

### Page: `/about/mission` (Merged Page)

**File:** `/app/about/mission/page.tsx`

**ACTION:** Merge `/about/manifesto` + `/about/team-philosophy`

**Content:** Mission, values, manifesto, transparency commitment (one comprehensive page)

---

### Page: `/about/team`

**File:** `/app/about/team/page.tsx`

**KEEP:** Existing team page

---

### Archive These About Pages:

- `/about/how-we-started` → merged into `/about/story`
- `/about/founder-story-complete` → merged into `/about/story`
- `/about/manifesto` → merged into `/about/mission`
- `/about/team-philosophy` → merged into `/about/mission`
- `/about/transparency` → merged into `/about/mission`
- `/about/data-divide` → move to `/data-divide` (top-level, important enough)

---

## PART VIII: CONTACT FORM ROUTING

### Page: `/contact`

**File:** `/app/contact/page.tsx`

**UPDATE:** Implement URL parameter-based form routing

---

#### Form Routing Logic

```typescript
// app/contact/page.tsx

'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState('general');
  
  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setFormType(type);
    }
  }, [searchParams]);
  
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            {getFormTitle(formType)}
          </h1>
          <p className="text-xl text-gray-300">
            {getFormDescription(formType)}
          </p>
        </div>
      </Section>
      
      <Section background="dark">
        <div className="max-w-2xl mx-auto">
          <ContactForm type={formType} />
        </div>
      </Section>
    </>
  );
}

function getFormTitle(type: string): string {
  const titles = {
    'beta-os': 'Apply for Business: OS Beta',
    'nexus': 'Apply for NEXUS Continuum',
    'connect': 'Request Foundry Connect Access',
    'waitlist-search': 'Join Search: Visibility Waitlist',
    'partnership': 'Partner With ClearForge',
    'general': 'Contact Us'
  };
  return titles[type] || titles.general;
}

function getFormDescription(type: string): string {
  const descriptions = {
    'beta-os': 'Get early access to Foundry Business: OS with significant benefits for beta participants.',
    'nexus': 'Join our 12-18 month search visibility validation program.',
    'connect': 'Request API access to The Foundry Platform.',
    'waitlist-search': 'Be notified when Foundry Search: Visibility launches (Q3 2026).',
    'partnership': 'Discuss consulting, custom development, training, or Continuum partnerships.',
    'general': 'General inquiries, support, or questions about ClearForge.'
  };
  return descriptions[type] || descriptions.general;
}
```

---

#### ContactForm Component

```typescript
// components/forms/ContactForm.tsx

interface ContactFormProps {
  type: string;
}

export function ContactForm({ type }: ContactFormProps) {
  const fields = getFormFields(type);
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden field for form type */}
      <input type="hidden" name="formType" value={type} />
      
      {/* Render dynamic fields based on type */}
      {fields.map(field => (
        <FormField key={field.name} {...field} />
      ))}
      
      <Button type="submit" variant="primary" size="lg" className="w-full">
        {getSubmitButtonText(type)}
      </Button>
    </form>
  );
}

function getFormFields(type: string) {
  const commonFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'company', label: 'Company', type: 'text', required: false }
  ];
  
  const typeSpecificFields = {
    'beta-os': [
      ...commonFields,
      { name: 'projects', label: 'Number of parallel projects you manage', type: 'number', required: true },
      { name: 'tools', label: 'Current tools you use (comma-separated)', type: 'text', required: false },
      { name: 'challenge', label: 'Biggest challenge with context switching', type: 'textarea', required: true }
    ],
    'nexus': [
      ...commonFields,
      { name: 'website', label: 'Website URL', type: 'url', required: true },
      { name: 'traffic', label: 'Monthly organic search traffic (estimate)', type: 'text', required: false },
      { name: 'strategy', label: 'Current SEO/search strategy', type: 'textarea', required: false },
      { name: 'why', label: 'Why do you want to be a NEXUS partner?', type: 'textarea', required: true }
    ],
    'connect': [
      ...commonFields,
      { name: 'role', label: 'Developer role/title', type: 'text', required: true },
      { name: 'use_case', label: 'What will you build with Foundry Connect?', type: 'textarea', required: true },
      { name: 'volume', label: 'Expected monthly API request volume', type: 'select', options: ['<10K', '10K-100K', '100K-1M', '>1M'], required: false }
    ],
    'waitlist-search': [
      ...commonFields,
      { name: 'interest', label: 'What interests you about Foundry Search?', type: 'textarea', required: false }
    ],
    'partnership': [
      ...commonFields,
      { name: 'service_type', label: 'Service Interest', type: 'select', options: ['Consulting', 'Custom Development', 'Training', 'Continuum Partnership', 'Multiple'], required: true },
      { name: 'details', label: 'Tell us about your needs', type: 'textarea', required: true }
    ],
    'general': [
      ...commonFields,
      { name: 'subject', label: 'Subject', type: 'text', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true }
    ]
  };
  
  return typeSpecificFields[type] || typeSpecificFields.general;
}

function getSubmitButtonText(type: string): string {
  const texts = {
    'beta-os': 'Apply for Beta',
    'nexus': 'Submit NEXUS Application',
    'connect': 'Request API Access',
    'waitlist-search': 'Join Waitlist',
    'partnership': 'Submit Inquiry',
    'general': 'Send Message'
  };
  return texts[type] || 'Submit';
}

async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  // Form submission logic (existing API endpoints)
  // Route to appropriate backend handler based on formType
}
```

---

#### Update All CTAs Site-Wide

**Find all instances of these CTAs and update links:**

| Current CTA Text | New Link |
|-----------------|----------|
| "Join Beta" (generic) | `/contact?type=beta-os` |
| "Apply for Beta" (Business: OS) | `/contact?type=beta-os` |
| "Apply for NEXUS" | `/contact?type=nexus` |
| "Request API Access" (Connect) | `/contact?type=connect` |
| "Join Waitlist" (Search) | `/contact?type=waitlist-search` |
| "Contact for Services" | `/contact?type=partnership` |
| "Contact Us" (general) | `/contact?type=general` |

---

## PART IX: REMOVE/ARCHIVE

### Pages to Remove Entirely:

1. **Pricing Page** (`/foundry/pricing`) - Delete completely
2. **Beta Landing Pages** (if they exist as intermediates) - Remove redirects
3. **Old Continuum Project Pages:**
   - `/continuum/data-democracy` → Archive
   - `/continuum/no-cheating` → Archive
   - `/continuum/ctos-heart` → Archive
   - `/continuum/safe-spaces` → Archive
   
**Keep Only:**
- `/continuum/nexus`
- `/continuum/re-connect`

---

## PART X: IMPLEMENTATION CHECKLIST

### Phase 1: Navigation (Week 1, Days 1-2)

```
☐ Update header component with new nav structure
☐ Move CTA to right side
☐ Implement Foundry dropdown
☐ Implement The Forge dropdown
☐ Implement Services dropdown
☐ Implement The Continuum dropdown (hybrid link)
☐ Update About dropdown (collapsed)
☐ Test all dropdown menus
☐ Test mobile navigation
☐ Verify active page highlighting
```

---

### Phase 2: Homepage (Week 1, Days 3-4)

```
☐ Update hero CTAs
☐ Add Foundry Platform section
☐ Add Services overview section
☐ Replace "The 20%" with "No Gatekeeping" section
☐ Add Continuum explanation section
☐ Update Proof/Dashboard section
☐ Update Beta CTA section
☐ Remove any pricing mentions
☐ Test all links and CTAs
```

---

### Phase 3: Foundry Pages (Week 1-2)

```
☐ Create /foundry/platform (enhanced with AI focus)
☐ Remove hero logo from Platform page
☐ Create /foundry/business (suite landing)
☐ Update /foundry/business/os
☐ Remove hero logo from Business: OS page
☐ Add actual screenshots to Business: OS
☐ Replace pricing with early access messaging
☐ Create /foundry/search (suite landing)
☐ Remove hero logo from Search page
☐ Update /foundry/connect (early access messaging)
☐ Update /foundry/roadmap (clear timelines)
☐ Test all Foundry product pages
```

---

### Phase 4: The Forge Pages (Week 2)

```
☐ Create /forge (comprehensive landing hub)
☐ Create /forge/knowledge (skeleton)
☐ Create /forge/tools (skeleton)
☐ Create /forge/community (skeleton)
☐ Create /forge/build (Continuum + transparency)
☐ Test all Forge pages and navigation
```

---

### Phase 5: Continuum & Proof (Week 2)

```
☐ Create /continuum (overview landing)
☐ Update /continuum/nexus (Phase 1 Q1 2026)
☐ Keep /continuum/re-connect (early dev status)
☐ Archive old Continuum project pages
☐ Update /dashboard (add Continuum section)
☐ Test Continuum navigation and links
```

---

### Phase 6: Services (Week 2)

```
☐ Create /services (services hub)
☐ Create /services/consulting
☐ Create /services/custom
☐ Create /services/training
☐ Create /services/partnership
☐ Add services to navigation
☐ Test all service pages
```

---

### Phase 7: About Pages (Week 2)

```
☐ Merge pages into /about/story
☐ Merge pages into /about/mission
☐ Keep /about/team
☐ Update About dropdown
☐ Archive old About pages
☐ Test all About pages
```

---

### Phase 8: Contact Form (Week 2)

```
☐ Implement URL parameter routing
☐ Create dynamic form fields
☐ Update all CTAs site-wide to use ?type= params
☐ Remove intermediate beta landing pages
☐ Test all form variants:
  ☐ beta-os
  ☐ nexus
  ☐ connect
  ☐ waitlist-search
  ☐ partnership
  ☐ general
☐ Test form submissions
☐ Verify email routing works
```

---

### Phase 9: Global Updates (Week 2)

```
☐ Remove all pricing page references
☐ Update all "early access benefits" messaging
☐ Remove hero logos from Foundry product pages
☐ Add bridge imagery to hero sections (when asset ready)
☐ Update sitemap
☐ Update any internal links
☐ Test all cross-page navigation
```

---

### Phase 10: QA & Launch (Week 2-3)

```
☐ Full site QA (all pages)
☐ Test all CTAs and form routing
☐ Verify mobile responsiveness
☐ Check accessibility
☐ Performance testing
☐ SEO meta tags updated
☐ Analytics tracking verified
☐ Final review with stakeholders
☐ Deploy to production
```

---

## CONCLUSION

This TRD provides page-by-page implementation details for the ClearForge website rebrand. Key changes:

1. **Navigation:** Simplified to 5 items with strategic dropdowns
2. **Continuum:** Elevated to primary navigation with dedicated pages
3. **Services:** Restored with full section and detail pages
4. **Messaging:** Replaced "The 20%" with inclusive "No Gatekeeping" approach
5. **Contact Forms:** Implemented URL parameter routing for all CTAs
6. **Foundry Products:** Removed hero logos, added early access messaging
7. **The Forge:** Created comprehensive 4-door hub with skeleton pages
8. **Pricing:** Removed entirely from all pages

**Timeline:** 2-3 weeks for complete implementation

**Next Steps:**
1. Review this TRD for accuracy
2. Prioritize pages for Phase 1 (critical path)
3. Begin implementation starting with navigation
4. Iterate based on feedback

---

**END OF DOCUMENT**

**Version:** 1.0  
**Created:** October 22, 2025  
**Status:** Ready for Implementation
