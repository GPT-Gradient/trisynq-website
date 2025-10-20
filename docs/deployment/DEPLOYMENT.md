# ClearForge Website - Deployment Guide

Complete guide for deploying the ClearForge website to Google Cloud Platform.

## Architecture Overview

The ClearForge website uses a v5 architecture with **The Forge** as the central hub, connecting all components and services in a unified platform.

## Prerequisites

Before deploying, ensure you have:

1. **Google Cloud Account** with billing enabled
2. **GCP Project** created
3. **gcloud CLI** installed and authenticated
4. **Docker** installed (for local testing)
5. **Domain** configured (optional, for custom domain)

## Initial GCP Setup

### 1. Enable Required APIs

```bash
# Set your project ID
export PROJECT_ID="your-project-id"
gcloud config set project $PROJECT_ID

# Enable required APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable secretmanager.googleapis.com
```

### 2. Create Secrets in Secret Manager

```bash
# Xynergy API Key
echo -n "your-xynergy-api-key-here" | \
  gcloud secrets create xynergy-api-key \
  --replication-policy="automatic" \
  --data-file=-

# Google Analytics Measurement ID
echo -n "G-XXXXXXXXXX" | \
  gcloud secrets create ga-measurement-id \
  --replication-policy="automatic" \
  --data-file=-

# Grant Cloud Run access to secrets
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')

gcloud secrets add-iam-policy-binding xynergy-api-key \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"

gcloud secrets add-iam-policy-binding ga-measurement-id \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

## Deployment Methods

### Method 1: Automated Deployment with Cloud Build (Recommended)

This method uses the included `cloudbuild.yaml` configuration.

```bash
# From the project root directory
gcloud builds submit --config=cloudbuild.yaml
```

The Cloud Build process will:
1. Build the Docker image
2. Push to Google Container Registry
3. Deploy to Cloud Run
4. Configure environment variables and secrets

### Method 2: Manual Docker Deployment

```bash
# 1. Build the Docker image
docker build -t gcr.io/$PROJECT_ID/clearforge-website:latest .

# 2. Test locally (optional)
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_XYNERGY_API_URL=https://api.xynergy.io/v1 \
  gcr.io/$PROJECT_ID/clearforge-website:latest

# 3. Push to Google Container Registry
docker push gcr.io/$PROJECT_ID/clearforge-website:latest

# 4. Deploy to Cloud Run
gcloud run deploy clearforge-website \
  --image gcr.io/$PROJECT_ID/clearforge-website:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 3000 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --set-env-vars NODE_ENV=production,NEXT_TELEMETRY_DISABLED=1 \
  --set-secrets XYNERGY_API_KEY=xynergy-api-key:latest,NEXT_PUBLIC_GA_MEASUREMENT_ID=ga-measurement-id:latest
```

## Configuration

### Environment Variables

The following environment variables are configured in Cloud Run:

**Public Variables** (set via `--set-env-vars`):
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `NEXT_PUBLIC_APP_URL=https://clearforge.ai` (update after domain setup)

**Secret Variables** (set via `--set-secrets`):
- `GATEWAY_API_KEY` - Intelligence Gateway API key from Secret Manager
- `NEXT_PUBLIC_GATEWAY_URL` - Gateway base URL from Secret Manager
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID from Secret Manager

### Cloud Run Settings

**Resource Allocation**:
- **Memory**: 512Mi (adjust based on traffic)
- **CPU**: 1 (1 vCPU)
- **Min Instances**: 0 (cold starts allowed)
- **Max Instances**: 10 (adjust based on expected traffic)

**Scaling**:
- **Autoscaling**: Enabled
- **Concurrency**: 80 (default)
- **Timeout**: 300s (5 minutes)

## Custom Domain Setup

### 1. Map Domain to Cloud Run

```bash
# Map your domain
gcloud run services add-iam-policy-binding clearforge-website \
  --region=us-central1 \
  --member="allUsers" \
  --role="roles/run.invoker"

# Add domain mapping
gcloud beta run domain-mappings create \
  --service clearforge-website \
  --domain clearforge.ai \
  --region us-central1
```

### 2. Update DNS Records

Add the DNS records provided by the domain mapping command to your DNS provider.

### 3. Update Environment Variables

```bash
gcloud run services update clearforge-website \
  --region us-central1 \
  --update-env-vars NEXT_PUBLIC_APP_URL=https://clearforge.ai
```

## SSL/TLS Configuration

Cloud Run automatically provisions and manages SSL/TLS certificates for custom domains. No additional configuration needed.

## Monitoring & Logging

### View Logs

```bash
# Real-time logs
gcloud run services logs tail clearforge-website --region=us-central1

# Recent logs
gcloud run services logs read clearforge-website --region=us-central1 --limit=100
```

### Cloud Console Monitoring

1. Go to [Cloud Run Console](https://console.cloud.google.com/run)
2. Select `clearforge-website` service
3. Navigate to **Logs** or **Metrics** tab

Monitor:
- Request count and latency
- Error rates
- Container CPU and memory usage
- Instance count

## CI/CD Setup

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloud Run

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - id: auth
        uses: google-github-actions/auth@v1
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY }}

      - name: Set up Cloud SDK
        uses: google-github-actions/setup-gcloud@v1

      - name: Build and Deploy
        run: |
          gcloud builds submit --config=cloudbuild.yaml
```

Set `GCP_SA_KEY` secret in GitHub repository settings.

## Rollback

If you need to rollback to a previous version:

```bash
# List revisions
gcloud run revisions list --service=clearforge-website --region=us-central1

# Rollback to specific revision
gcloud run services update-traffic clearforge-website \
  --region=us-central1 \
  --to-revisions=clearforge-website-00001-abc=100
```

## Updating the Deployment

### Update Code

```bash
# After making code changes
gcloud builds submit --config=cloudbuild.yaml
```

### Update Environment Variables

```bash
gcloud run services update clearforge-website \
  --region=us-central1 \
  --update-env-vars NEW_VAR=value
```

### Update Secrets

```bash
# Update secret value
echo -n "new-secret-value" | \
  gcloud secrets versions add xynergy-api-key --data-file=-

# Cloud Run will automatically use the latest version
```

## Performance Optimization

### 1. Enable HTTP/2

HTTP/2 is automatically enabled on Cloud Run.

### 2. Configure Caching

Add to `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:all*(svg|jpg|png|webp|avif)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
}
```

### 3. Use CDN (Optional)

For global traffic, use Cloud CDN:

```bash
gcloud compute backend-services create clearforge-backend \
  --global \
  --enable-cdn
```

## Cost Optimization

1. **Auto-scaling**: Set min-instances=0 to avoid charges when idle
2. **Resource allocation**: Start with 512Mi memory, adjust based on usage
3. **Request optimization**: Optimize images and code splitting
4. **Monitoring**: Set up budget alerts in GCP Console

### Estimated Monthly Costs

Based on moderate traffic (100K requests/month):
- **Cloud Run**: $5-15/month
- **Cloud Build**: $5/month (first 120 builds free)
- **Container Registry**: $1-5/month
- **Secret Manager**: $0.10/month

## Troubleshooting

### Build Failures

```bash
# View build logs
gcloud builds log --region=us-central1 [BUILD_ID]

# Common issues:
# - Check Dockerfile syntax
# - Verify all dependencies in package.json
# - Ensure .dockerignore is configured properly
```

### Deployment Failures

```bash
# Check service status
gcloud run services describe clearforge-website --region=us-central1

# Common issues:
# - Verify secret permissions
# - Check environment variables
# - Review container logs
```

### Runtime Errors

```bash
# View runtime logs
gcloud run services logs tail clearforge-website --region=us-central1

# Common issues:
# - API connection failures (check XYNERGY_API_KEY)
# - Missing environment variables
# - Memory limits exceeded
```

## Security Best Practices

1. **Use Secret Manager** for all sensitive data
2. **Enable VPC connector** for private API access (if needed)
3. **Configure IAM** with least privilege principle
4. **Regular updates** to dependencies and base images
5. **Enable Cloud Armor** for DDoS protection (optional)

## Backup & Disaster Recovery

1. **Source Code**: Keep in Git repository
2. **Secrets**: Document secret values in secure location
3. **Container Images**: Kept in GCR indefinitely
4. **Configuration**: Store cloudbuild.yaml and configs in repo

## Support & Maintenance

### Regular Maintenance Tasks

- **Weekly**: Review error logs and performance metrics
- **Monthly**: Update dependencies (`npm update`)
- **Quarterly**: Security audit and dependency updates
- **As needed**: Scale resources based on traffic patterns

### Getting Help

- **GCP Support**: [Google Cloud Support](https://cloud.google.com/support)
- **Next.js Docs**: [Next.js Documentation](https://nextjs.org/docs)
- **ClearForge Team**: hello@clearforge.ai

---

**Last Updated**: 2025-10-07

🤖 Generated with [Claude Code](https://claude.com/claude-code)
