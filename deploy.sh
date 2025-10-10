#!/bin/bash
set -e

# ClearForge Website Deployment Script
# Deploys the website to Google Cloud Run

PROJECT_ID="xynergy-dev-1757909467"
REGION="us-central1"
SERVICE_NAME="clearforge-website"
IMAGE_TAG="gcr.io/$PROJECT_ID/$SERVICE_NAME:latest"

echo "🚀 Deploying ClearForge Website to Cloud Run..."
echo "   Project: $PROJECT_ID"
echo "   Region: $REGION"
echo "   Service: $SERVICE_NAME"
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Error: gcloud CLI is not installed"
    echo "   Install from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if logged in
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
    echo "❌ Error: Not logged in to gcloud"
    echo "   Run: gcloud auth login"
    exit 1
fi

# Set project
echo "📋 Setting GCP project..."
gcloud config set project $PROJECT_ID

# Build Docker image
echo ""
echo "📦 Building Docker image..."
docker build -t $IMAGE_TAG .

# Push to Container Registry
echo ""
echo "⬆️  Pushing to Google Container Registry..."
docker push $IMAGE_TAG

# Deploy to Cloud Run
echo ""
echo "☁️  Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image $IMAGE_TAG \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --min-instances 1 \
  --max-instances 10 \
  --memory 1Gi \
  --cpu 1 \
  --port 3000 \
  --set-env-vars NODE_ENV=production,NEXT_PUBLIC_ENVIRONMENT=production,NEXT_TELEMETRY_DISABLED=1 \
  --set-secrets GATEWAY_API_KEY=gateway-api-key:latest,NEXT_PUBLIC_GATEWAY_URL=gateway-url:latest,NEXT_PUBLIC_GA_MEASUREMENT_ID=ga-measurement-id:latest

# Get service URL
echo ""
echo "🔍 Retrieving service URL..."
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
  --region $REGION \
  --format 'value(status.url)')

echo ""
echo "✅ Deployment complete!"
echo "🌐 Service URL: $SERVICE_URL"
echo ""
echo "Next steps:"
echo "  1. Test the deployed service: curl $SERVICE_URL"
echo "  2. Check logs: gcloud logging read \"resource.type=cloud_run_revision AND resource.labels.service_name=$SERVICE_NAME\" --limit 50"
echo "  3. Monitor: https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME"
echo ""
