# ClearForge Website

A production-ready Next.js 14+ website for ClearForge Technologies — making enterprise intelligence accessible through The Foundry platform, proven through The Continuum, and shared through The Forge.

**Live URL:** https://clearforge-website-vgjxy554mq-uc.a.run.app
**Status:** Production v1.0
**Last Updated:** October 22, 2025

---

## 🚀 Tech Stack

- **Framework**: Next.js 14.2+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Validation**: Zod (runtime type validation)
- **Deployment**: Google Cloud Platform (Cloud Run)
- **Analytics**: Google Analytics 4
- **API Integration**: Intelligence Gateway

---

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Google Cloud SDK (for deployment)
- Docker (for containerization)

---

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/GPT-Gradient/cloudforge-website.git
cd clearforge-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```

Update the following variables in `.env.local`:
- `NEXT_PUBLIC_GATEWAY_URL`: Intelligence Gateway API endpoint
- `GATEWAY_API_KEY`: Your Gateway API key (stored in GCP Secret Manager)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement ID

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
clearforge-website/
├── .context/                 # Context files for AI assistants (gitignored)
│   ├── current/             # Active context materials
│   └── processed/           # Completed materials
├── app/                      # Next.js App Router pages
│   ├── about/               # About pages (Story, Mission, Team)
│   ├── api/                 # API routes (beta, contact, health)
│   ├── blog/                # Blog system
│   ├── contact/             # Contact page (URL parameter routing)
│   ├── continuum/           # Continuum pages (Overview, NEXUS, RE-Connect)
│   ├── dashboard/           # Public transparency dashboard
│   ├── forge/               # The Forge hub + 4 doors
│   │   ├── build/          # Open source & Continuum transparency
│   │   ├── community/      # Community hub
│   │   ├── knowledge/      # Educational content
│   │   └── tools/          # Free tools & calculators
│   ├── foundry/             # Foundry product pages
│   │   ├── business/       # Business Suite
│   │   │   └── os/        # Business: OS product page
│   │   ├── connect/        # API access
│   │   ├── roadmap/        # Product roadmap
│   │   └── search/         # Search Suite
│   ├── services/            # Services pages
│   │   ├── consulting/     # Consulting services
│   │   ├── custom/         # Custom development
│   │   ├── partnership/    # Continuum partnerships
│   │   └── training/       # Training & enablement
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   ├── robots.ts            # Robots.txt generator
│   └── sitemap.ts           # Sitemap generator
├── archive/                  # Archived legacy pages & files
│   └── 2025-10/             # October 2025 archives
│       ├── legacy-pages/   # Old pages replaced in rebrand
│       ├── old-trds/       # Superseded technical docs
│       └── old-updates/    # Applied update configs
├── components/              # React components
│   ├── analytics/          # Google Analytics components
│   ├── content/            # Content components (articles, etc.)
│   ├── forms/              # Form components (Beta Application)
│   ├── layout/             # Layout components (Header, Footer)
│   ├── performance/        # Core Web Vitals monitoring
│   ├── seo/                # SEO components (SEOHead, metadata)
│   ├── sections/           # Page sections (Hero, Authority)
│   └── ui/                 # Reusable UI components (Button, Card, Section)
├── data/                    # Static configuration data
│   ├── navigation.ts        # Primary navigation structure
│   └── projects.ts          # Continuum projects data
├── docs/                    # PROJECT DOCUMENTATION
│   ├── architecture/       # Technical architecture docs
│   ├── deployment/         # Deployment guides
│   ├── implementation/     # Implementation guides
│   ├── integration/        # API specs and integration
│   ├── planning/           # TRDs and planning docs
│   ├── quality/            # Code review notes
│   ├── trd/                # Technical Requirements Documents
│   ├── CURRENT_STATE.md    # Current state documentation
│   ├── QUICKSTART.md       # Quick start guide
│   └── WEBSITE_PAGE_TREE.md # Site structure
├── lib/                     # Utility libraries
│   ├── utils.ts            # Helper utilities
│   └── gateway-client.ts   # Intelligence Gateway integration
├── public/                  # Static assets
│   └── images/             # Images (hero backgrounds, logos)
├── types/                   # TypeScript type definitions
│   └── index.ts            # Global types
├── .env.example             # Environment variable template
├── .gitignore               # Git ignore rules
├── cloudbuild.yaml          # GCP Cloud Build configuration
├── deploy.sh                # Deployment script
├── Dockerfile               # Container configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 📂 File Organization Guidelines

### Where to Save Files

**Documentation** → `./docs/` (NOT root)
- Technical docs → `./docs/architecture/`
- Implementation guides → `./docs/implementation/`
- TRDs → `./docs/trd/`
- Legacy docs → `./docs/legacy/`

**Configuration** → `./data/` or root config files
- Navigation → `./data/navigation.ts`
- Project data → `./data/projects.ts`

**Components** → `./components/`
- Organized by type (layout, ui, forms, etc.)

**Utilities** → `./lib/`
- Helper functions and API clients

**Types** → `./types/`
- TypeScript type definitions

**Static Assets** → `./public/`
- Images, fonts, etc.

### Root Folder (Only Essential Config)
- `.env.example`, `.env.local`
- `.gitignore`, `.eslintrc`, etc.
- `package.json`, `package-lock.json`
- `next.config.js`, `tailwind.config.ts`, `tsconfig.json`
- `README.md`, `CHANGELOG.md`
- **NO markdown documents** (use `./docs/`)
- **NO data files** (use `./data/`)

---

## 🗺️ Site Architecture

### Navigation Structure (5 Primary Items)

**1. Foundry** (Platform & Products)
- Platform
- Business Suite → Business: OS
- Search Suite
- Connect (API)
- Roadmap

**2. The Forge** (Community & Resources)
- Knowledge (education & articles)
- Tools (free calculators)
- Community (beta partners)
- Build (open source & transparency)

**3. Services** (Professional Services)
- Consulting
- Custom Development
- Training
- Continuum Partnership

**4. The Continuum** (Validation Process)
- Overview
- Public Dashboard
- Project NEXUS
- Project RE-Connect

**5. About**
- Our Story
- Mission & Values
- Team
- Contact

---

## 📞 Contact Form Routing

The site uses URL parameter-based routing for contact forms:

**Form Types:**
- `/contact?type=beta-os` - Business: OS Beta application
- `/contact?type=nexus` - NEXUS Continuum application
- `/contact?type=connect` - Foundry Connect API access
- `/contact?type=waitlist-search` - Search: Visibility waitlist
- `/contact?type=partnership` - Services partnership inquiry
- `/contact?type=general` - General contact

All CTAs throughout the site route to these parameterized forms.

---

## 🚢 Deployment

### GCP Cloud Run Deployment

**Prerequisites:**
1. GCP project configured (`xynergy-dev-1757909467`)
2. Cloud Build API enabled
3. Artifact Registry configured
4. Secrets configured in Secret Manager:
   - `gateway-url`
   - `gateway-api-key`
   - `ga-measurement-id`

**Deploy via Cloud Build:**
```bash
./deploy.sh
```

Or manually:
```bash
gcloud builds submit \
  --config=cloudbuild.yaml \
  --project=xynergy-dev-1757909467 \
  --substitutions=COMMIT_SHA=$(git rev-parse --short HEAD)
```

**Service URL:**
https://clearforge-website-vgjxy554mq-uc.a.run.app

---

## 🧪 Testing

### Build Verification
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Manual Testing Checklist
- [ ] All navigation dropdowns work
- [ ] All 6 contact form variants load correctly
- [ ] Homepage sections render properly
- [ ] Foundry product pages functional
- [ ] Services pages functional
- [ ] Continuum pages functional
- [ ] Mobile responsive
- [ ] Performance acceptable (LCP < 1.2s)

---

## 🔄 Recent Changes (v1.0)

**October 22, 2025 - Production v1.0 Release**

**Major Updates:**
- ✅ Complete website rebrand (TriSynq → ClearForge)
- ✅ Navigation restructured (7 items → 5 items with dropdowns)
- ✅ Homepage rewritten ("No Gatekeeping" messaging)
- ✅ Foundry product pages created (Platform, Business: OS, Connect, Search, Roadmap)
- ✅ Services section created (Consulting, Custom, Training, Partnership)
- ✅ Continuum integration (Overview + NEXUS + RE-Connect)
- ✅ Contact form URL routing (6 variants)
- ✅ The Forge restructured (4-door hub)
- ✅ About pages consolidated (Story + Mission)
- ✅ 40+ legacy pages archived
- ✅ Documentation organized into /docs/ structure
- ✅ Project structure follows Next.js best practices

**Build Status:** ✅ 75 pages → 35-40 pages (cleaned up)
**Deployment:** ✅ Live on GCP Cloud Run

---

## 📚 Additional Resources

- **Documentation:** `./docs/`
- **TRDs:** `./docs/trd/`
- **Current State:** `./docs/CURRENT_STATE.md`
- **Quick Start:** `./docs/QUICKSTART.md`
- **Site Structure:** `./docs/WEBSITE_PAGE_TREE.md`

---

## 🤝 Contributing

This is a private repository for ClearForge Technologies. For questions or contributions, contact the development team.

---

## 📄 License

Proprietary - All rights reserved by ClearForge Technologies

---

## 🆘 Support

For technical issues or questions:
- Check `./docs/` for detailed documentation
- Review TRDs in `./docs/trd/`
- Contact the development team

---

**Built with transparency. Proven through The Continuum. Shared through The Forge.**
