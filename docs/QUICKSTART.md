# ClearForge Website - Quick Start Guide

Get the ClearForge website running in minutes.

## 🚀 Local Development (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values (optional for local dev)
```

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## ☁️ Deploy to GCP (15 minutes)

### Prerequisites
- GCP account with billing enabled
- gcloud CLI installed

### Quick Deploy

```bash
# 1. Set your project
export PROJECT_ID="your-gcp-project-id"
gcloud config set project $PROJECT_ID

# 2. Enable APIs
gcloud services enable cloudbuild.googleapis.com run.googleapis.com

# 3. Create secrets (update with your values)
echo -n "your-xynergy-api-key" | gcloud secrets create xynergy-api-key --data-file=-
echo -n "G-XXXXXXXXXX" | gcloud secrets create ga-measurement-id --data-file=-

# 4. Grant permissions
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')
gcloud secrets add-iam-policy-binding xynergy-api-key \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
gcloud secrets add-iam-policy-binding ga-measurement-id \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"

# 5. Deploy
gcloud builds submit --config=cloudbuild.yaml
```

Done! Your site is live on Cloud Run.

## 📦 What's Included

### ✅ Complete Website (46 Pages)
- **Homepage** with 6 key sections
- **About Section** (3 pages)
- **Mission Section** (3 pages)
- **Continuum Projects** (7 pages)
- **Solutions** (4 pages)
- **Community** (4 pages)
- **Dashboard, Beta Program, Contact**
- **The Forge** - v5 architecture central hub

### ✅ Technical Features
- Next.js 13+ App Router
- TypeScript
- Tailwind CSS
- SEO optimized (meta tags, sitemap, robots.txt)
- Google Analytics 4
- Core Web Vitals optimization
- Xynergy API integration
- Form handling (Beta & Contact)

### ✅ Production Ready
- Docker containerization
- GCP Cloud Build & Cloud Run config
- Security headers configured
- Environment variable management
- Performance optimized

## 🎨 Customization

### Update Content
Content is in the `app/` directory. Each page is a separate `.tsx` file.

### Modify Styling
- Colors: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Components: `components/ui/`

### Add New Pages
```bash
# Create new page
touch app/new-page/page.tsx

# Add to navigation
# Edit: data/navigation.ts
```

## 🔧 Common Tasks

### Build for Production
```bash
npm run build
npm start
```

### Update Dependencies
```bash
npm update
```

### Check for Issues
```bash
npm run lint
npm run build
```

### View Deployed Logs
```bash
gcloud run services logs tail clearforge-website --region=us-central1
```

## 📚 Documentation

- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Complete deployment guide
- **Media/REQs/** - Original requirements

## 🆘 Need Help?

### Build Errors
1. Run `npm install` to ensure dependencies are installed
2. Check Node.js version (requires 20.x+)
3. Review error messages in console

### Deployment Issues
1. Verify GCP APIs are enabled
2. Check secret permissions
3. Review Cloud Build logs: `gcloud builds log [BUILD_ID]`

### Questions
- Email: hello@clearforge.ai
- Check README.md and DEPLOYMENT.md

## 🎯 Next Steps

1. **Test Locally**: Run `npm run dev` and explore all pages
2. **Deploy**: Follow GCP deploy steps above
3. **Configure Domain**: See DEPLOYMENT.md for custom domain setup
4. **Integrate Xynergy**: Connect to Xynergy platform API
5. **Monitor**: Set up Cloud Monitoring and alerts

---

**Built with complete transparency**

🤖 Generated with [Claude Code](https://claude.com/claude-code)
