# ClearForge Website - Custom Domain Setup Guide

**Domain:** clearforgetech.com
**Cloud Run Service:** clearforge-website
**Current URL:** https://clearforge-website-835612502919.us-central1.run.app
**Project:** xynergy-dev-1757909467
**Region:** us-central1

---

## Overview

This guide will walk you through setting up your custom domain (clearforgetech.com) to point to your Cloud Run website. You have two options:

1. **www.clearforgetech.com** (recommended)
2. **clearforgetech.com** (apex domain)
3. **Both** (recommended - with redirect)

---

## Prerequisites

- [x] Cloud Run service deployed: `clearforge-website`
- [x] Domain registered: `clearforgetech.com`
- [ ] Access to domain DNS settings (registrar: GoDaddy, Namecheap, Google Domains, etc.)
- [ ] `gcloud` CLI authenticated

---

## Step-by-Step Setup

### Step 1: Verify Domain Ownership

First, add your custom domain mapping in Cloud Run. This will give you DNS records to add.

```bash
# Map www subdomain (recommended to start with this)
gcloud run domain-mappings create \
  --service clearforge-website \
  --domain www.clearforgetech.com \
  --region us-central1 \
  --project xynergy-dev-1757909467
```

**Expected Output:**
```
Deploying domain mapping...
✓ Creating domain mapping...
Domain mapping deployment started. This may take several minutes.
```

You'll receive DNS records to add. It will look something like:

```
Please add the following DNS records to your domain registrar:

TYPE    NAME                            DATA
CNAME   www.clearforgetech.com          ghs.googlehosted.com
```

---

### Step 2: Add DNS Records

#### Option A: Using www.clearforgetech.com (Recommended First)

Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add:

**DNS Record:**
```
Type:  CNAME
Name:  www
Value: ghs.googlehosted.com
TTL:   3600 (or Auto)
```

#### Option B: Using clearforgetech.com (Apex Domain)

For the apex domain, you need A records:

1. First, create the domain mapping:
```bash
gcloud run domain-mappings create \
  --service clearforge-website \
  --domain clearforgetech.com \
  --region us-central1 \
  --project xynergy-dev-1757909467
```

2. Google will provide A records (4 IP addresses):
```
Type:  A
Name:  @ (or leave blank for apex)
Value: 216.239.32.21
TTL:   3600

Type:  A
Name:  @ (or leave blank for apex)
Value: 216.239.34.21
TTL:   3600

Type:  A
Name:  @ (or leave blank for apex)
Value: 216.239.36.21
TTL:   3600

Type:  A
Name:  @ (or leave blank for apex)
Value: 216.239.38.21
TTL:   3600
```

**Note:** The actual IPs will be provided by gcloud. Use those, not the example above.

#### Option C: Both (Recommended - with Redirect)

1. Set up www.clearforgetech.com (Option A above)
2. Set up clearforgetech.com (Option A above)
3. Add a redirect from apex to www (see Step 5)

---

### Step 3: Verify DNS Propagation

After adding DNS records, wait for propagation (can take 5 minutes to 48 hours, usually < 1 hour).

Check DNS propagation:

```bash
# Check CNAME record
dig www.clearforgetech.com CNAME +short

# Expected output:
# ghs.googlehosted.com

# Check A records (if using apex)
dig clearforgetech.com A +short

# Expected output:
# 216.239.32.21
# 216.239.34.21
# 216.239.36.21
# 216.239.38.21
```

Or use online tools:
- https://dnschecker.org
- https://www.whatsmydns.net

---

### Step 4: Verify Domain Mapping Status

Check if Cloud Run has verified your domain:

```bash
# List domain mappings
gcloud run domain-mappings list \
  --region us-central1 \
  --project xynergy-dev-1757909467

# Describe specific mapping
gcloud run domain-mappings describe www.clearforgetech.com \
  --region us-central1 \
  --project xynergy-dev-1757909467
```

**Status should show:**
```
✓ Domain mapping is ready
✓ SSL certificate provisioned
```

**Note:** SSL certificate provisioning can take 15-60 minutes after DNS is verified.

---

### Step 5: Set Up Apex to WWW Redirect (Recommended)

To redirect `clearforgetech.com` → `www.clearforgetech.com`:

#### Option A: Using Domain Registrar's URL Forwarding

Most registrars offer URL forwarding/redirect:

1. Log into your domain registrar
2. Find "Forwarding" or "URL Redirect" settings
3. Set up:
   - **From:** clearforgetech.com
   - **To:** https://www.clearforgetech.com
   - **Type:** 301 Permanent Redirect
   - **Include Path:** Yes

#### Option B: Using Cloud Load Balancer (Advanced)

If you need more control, set up a Cloud Load Balancer with URL redirect rules.

---

### Step 6: Update Environment Variables

Once your domain is working, update your environment variables:

```bash
# Update the deployed service environment variable
gcloud run services update clearforge-website \
  --region us-central1 \
  --project xynergy-dev-1757909467 \
  --update-env-vars NEXT_PUBLIC_APP_URL=https://www.clearforgetech.com
```

**Or update in next deployment:**

Update `cloudbuild.yaml` to include:
```yaml
- '--set-env-vars'
- 'NODE_ENV=production,NEXT_PUBLIC_ENVIRONMENT=production,NEXT_TELEMETRY_DISABLED=1,NEXT_PUBLIC_APP_URL=https://www.clearforgetech.com'
```

---

### Step 7: Verify Everything Works

Test your custom domain:

```bash
# Test HTTP access (should redirect to HTTPS)
curl -I http://www.clearforgetech.com

# Expected:
# HTTP/1.1 301 Moved Permanently
# Location: https://www.clearforgetech.com/

# Test HTTPS access
curl -I https://www.clearforgetech.com

# Expected:
# HTTP/2 200
# content-type: text/html

# Test health endpoint
curl https://www.clearforgetech.com/api/health

# Expected:
# {"status":"healthy","service":"clearforge-website","timestamp":"..."}

# Test actual page
curl https://www.clearforgetech.com | grep -i "ClearForge"
```

---

## Quick Reference Commands

### Check Service Status
```bash
gcloud run services describe clearforge-website \
  --region us-central1 \
  --project xynergy-dev-1757909467 \
  --format="value(status.url)"
```

### List Domain Mappings
```bash
gcloud run domain-mappings list \
  --region us-central1 \
  --project xynergy-dev-1757909467
```

### Delete Domain Mapping (if needed)
```bash
gcloud run domain-mappings delete www.clearforgetech.com \
  --region us-central1 \
  --project xynergy-dev-1757909467
```

### Check SSL Certificate Status
```bash
gcloud run domain-mappings describe www.clearforgetech.com \
  --region us-central1 \
  --project xynergy-dev-1757909467 \
  --format="value(status.certificateStatus)"
```

---

## Common DNS Registrars Setup

### GoDaddy

1. Log in to GoDaddy
2. Go to **My Products** → **Domains**
3. Click **DNS** next to your domain
4. Click **Add** under Records

**For www subdomain:**
```
Type:  CNAME
Name:  www
Value: ghs.googlehosted.com
TTL:   1 hour
```

**For apex domain:**
```
Type:  A
Name:  @
Value: [IP from gcloud output]
TTL:   1 hour
```

### Namecheap

1. Log in to Namecheap
2. Go to **Domain List**
3. Click **Manage** next to your domain
4. Click **Advanced DNS** tab
5. Click **Add New Record**

**For www subdomain:**
```
Type:          CNAME Record
Host:          www
Value:         ghs.googlehosted.com
TTL:           Automatic
```

**For apex domain:**
```
Type:          A Record
Host:          @
Value:         [IP from gcloud output]
TTL:           Automatic
```

### Google Domains

1. Log in to Google Domains
2. Click on your domain
3. Click **DNS** in left menu
4. Scroll to **Custom resource records**

**For www subdomain:**
```
Name:  www
Type:  CNAME
TTL:   1H
Data:  ghs.googlehosted.com
```

**For apex domain:**
```
Name:  @
Type:  A
TTL:   1H
Data:  [IP from gcloud output] (add 4 separate A records)
```

### Cloudflare

1. Log in to Cloudflare
2. Select your domain
3. Click **DNS** tab
4. Click **Add record**

**For www subdomain:**
```
Type:    CNAME
Name:    www
Target:  ghs.googlehosted.com
Proxy:   DNS only (gray cloud)
TTL:     Auto
```

**Important for Cloudflare:**
- Initially set to **DNS only** (gray cloud) until domain mapping is verified
- After verification, you can enable proxy (orange cloud) if desired

---

## Troubleshooting

### Issue 1: "Domain not verified"

**Symptom:** Domain mapping shows "Pending" or "Not Verified"

**Solution:**
1. Check DNS records are correctly added:
   ```bash
   dig www.clearforgetech.com CNAME +short
   ```
2. Wait for DNS propagation (up to 48 hours, usually < 1 hour)
3. Check for typos in DNS records
4. Ensure no conflicting DNS records exist

### Issue 2: "SSL certificate pending"

**Symptom:** HTTPS doesn't work, certificate shows pending

**Solution:**
1. DNS must be verified first (domain mapping status: Ready)
2. Wait 15-60 minutes for Google to provision certificate
3. Check certificate status:
   ```bash
   gcloud run domain-mappings describe www.clearforgetech.com \
     --region us-central1 \
     --format="value(status.certificateStatus)"
   ```
4. If stuck, delete and recreate domain mapping

### Issue 3: "404 Not Found" on custom domain

**Symptom:** Domain resolves but shows 404

**Solution:**
1. Verify service is deployed and running:
   ```bash
   gcloud run services describe clearforge-website \
     --region us-central1
   ```
2. Check domain mapping is attached to correct service:
   ```bash
   gcloud run domain-mappings describe www.clearforgetech.com \
     --region us-central1
   ```
3. Test direct Cloud Run URL to ensure service works

### Issue 4: "This site can't be reached"

**Symptom:** Domain doesn't resolve at all

**Solution:**
1. DNS records not propagated yet - wait longer
2. DNS records incorrect - double-check values
3. Check DNS from multiple locations:
   ```bash
   # Check from your location
   nslookup www.clearforgetech.com

   # Check global propagation
   # Visit: https://dnschecker.org
   ```

### Issue 5: Mixed content warnings

**Symptom:** Page loads but some resources blocked

**Solution:**
Update `next.config.js` to enforce HTTPS:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        }
      ]
    }
  ]
}
```

---

## Security Best Practices

### 1. Enable HTTPS-only (Already configured in next.config.js)

HSTS header forces HTTPS:
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### 2. Monitor SSL Certificate Expiration

Cloud Run auto-renews Let's Encrypt certificates, but monitor:
```bash
# Check certificate expiration
openssl s_client -connect www.clearforgetech.com:443 -servername www.clearforgetech.com 2>/dev/null | openssl x509 -noout -dates
```

### 3. Set Up Domain Verification

Add TXT record for domain verification (optional but recommended):
```
Type:  TXT
Name:  @
Value: google-site-verification=XXXXX
```

Get verification code from: https://search.google.com/search-console

---

## Post-Setup Checklist

After domain is live, verify:

- [ ] **DNS Resolution**
  ```bash
  dig www.clearforgetech.com +short
  ```

- [ ] **HTTPS Certificate**
  ```bash
  curl -I https://www.clearforgetech.com
  # Should show HTTP/2 200
  ```

- [ ] **HTTP → HTTPS Redirect**
  ```bash
  curl -I http://www.clearforgetech.com
  # Should show 301 redirect to HTTPS
  ```

- [ ] **Homepage Loads**
  ```bash
  curl https://www.clearforgetech.com | grep "ClearForge"
  ```

- [ ] **API Routes Work**
  ```bash
  curl https://www.clearforgetech.com/api/health
  ```

- [ ] **Forms Submit**
  - Test beta application form
  - Test contact form

- [ ] **Google Analytics**
  - Verify GA tracking code fires on custom domain

- [ ] **Update Marketing Materials**
  - Update social media profiles
  - Update email signatures
  - Update business cards

---

## Complete Setup Script

Here's a complete script to set up your domain (run after adding DNS records):

```bash
#!/bin/bash
set -e

PROJECT_ID="xynergy-dev-1757909467"
REGION="us-central1"
SERVICE="clearforge-website"
DOMAIN="www.clearforgetech.com"

echo "🌐 Setting up custom domain: $DOMAIN"

# 1. Create domain mapping
echo "📌 Creating domain mapping..."
gcloud run domain-mappings create \
  --service $SERVICE \
  --domain $DOMAIN \
  --region $REGION \
  --project $PROJECT_ID

# 2. Wait for domain verification
echo "⏳ Waiting for domain verification (this may take a few minutes)..."
sleep 30

# 3. Check status
echo "✅ Checking domain mapping status..."
gcloud run domain-mappings describe $DOMAIN \
  --region $REGION \
  --project $PROJECT_ID

# 4. Update service environment variable
echo "🔧 Updating service environment variable..."
gcloud run services update $SERVICE \
  --region $REGION \
  --project $PROJECT_ID \
  --update-env-vars NEXT_PUBLIC_APP_URL=https://$DOMAIN

# 5. Verify deployment
echo "🔍 Verifying deployment..."
SERVICE_URL=$(gcloud run services describe $SERVICE \
  --region $REGION \
  --project $PROJECT_ID \
  --format="value(status.url)")

echo "✅ Service URL: $SERVICE_URL"
echo "✅ Custom Domain: https://$DOMAIN"

echo ""
echo "🎉 Domain setup initiated!"
echo ""
echo "Next steps:"
echo "1. Add DNS records to your domain registrar (see output above)"
echo "2. Wait for DNS propagation (5-60 minutes)"
echo "3. Wait for SSL certificate provisioning (15-60 minutes)"
echo "4. Test your site at: https://$DOMAIN"
```

Save this as `setup-domain.sh` and run:
```bash
chmod +x setup-domain.sh
./setup-domain.sh
```

---

## Summary

**Recommended Setup:**

1. Start with `www.clearforgetech.com` (easier, faster)
2. Add DNS CNAME record: `www` → `ghs.googlehosted.com`
3. Wait for verification and SSL certificate (15-60 min)
4. Set up apex domain redirect: `clearforgetech.com` → `www.clearforgetech.com`
5. Update environment variables
6. Test thoroughly

**Timeline:**
- DNS setup: 5 minutes
- DNS propagation: 5-60 minutes
- Domain verification: 1-5 minutes
- SSL certificate: 15-60 minutes
- **Total:** 30-90 minutes typically

---

## Need Help?

**Check Domain Mapping Status:**
```bash
gcloud run domain-mappings describe www.clearforgetech.com \
  --region us-central1 \
  --project xynergy-dev-1757909467
```

**View Logs:**
```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website" \
  --limit 50 \
  --project xynergy-dev-1757909467
```

**Cloud Run Console:**
https://console.cloud.google.com/run/detail/us-central1/clearforge-website/metrics?project=xynergy-dev-1757909467

---

**Document Version:** 1.0
**Last Updated:** October 15, 2025
**Service:** clearforge-website
**Domain:** clearforgetech.com
