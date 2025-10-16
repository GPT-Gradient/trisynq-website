# Apex Domain Setup for clearforgetech.com

## The Challenge
Cloud Run services don't have static IP addresses, which makes traditional A record setup impossible. You can't point an A record to a hostname like `clearforge-website-vgjxy554mq-uc.a.run.app`.

## Recommended Solution: Domain Forwarding

### Option 1: GoDaddy Domain Forwarding (Simplest)

This is the easiest approach and what most people do:

**Step 1: Set up www subdomain (already in guide)**
1. Go to GoDaddy DNS Management
2. Add CNAME record:
   - Type: CNAME
   - Name: www
   - Value: ghs.googlehosted.com
   - TTL: 600 seconds (10 minutes)

**Step 2: Set up apex domain forwarding**
1. In GoDaddy, go to your domain settings
2. Look for "Forwarding" or "Domain Forwarding" section
3. Set up forwarding:
   - From: clearforgetech.com (or @)
   - To: https://www.clearforgetech.com
   - Forwarding type: Permanent (301)
   - Forward only: No (forward with path)
4. Save settings

**Result**:
- `clearforgetech.com` → redirects to → `www.clearforgetech.com`
- `www.clearforgetech.com` → Cloud Run service
- Both work, but apex redirects to www

### Option 2: Use Cloudflare (More Advanced)

If you want true A record support, you can use Cloudflare (free):

**Benefits:**
- True apex domain support
- Better performance (global CDN)
- Free SSL
- DDoS protection
- Better analytics

**Setup:**
1. Create free Cloudflare account
2. Add clearforgetech.com to Cloudflare
3. Cloudflare will give you nameservers (e.g., `ns1.cloudflare.com`)
4. Update nameservers in GoDaddy to point to Cloudflare
5. In Cloudflare DNS:
   - Add CNAME for @ (apex) → clearforge-website-vgjxy554mq-uc.a.run.app (Cloudflare will flatten this)
   - Add CNAME for www → clearforge-website-vgjxy554mq-uc.a.run.app
6. Enable "Proxied" (orange cloud) for both records
7. Cloudflare automatically handles the redirect and SSL

### Option 3: Google Cloud Load Balancer (Enterprise)

This is overkill for most sites but gives you complete control:

**Setup Required:**
1. Reserve static IP address in Google Cloud
2. Set up HTTPS load balancer
3. Configure backend service pointing to Cloud Run
4. Set up SSL certificate
5. Point A record to static IP

**Cost**: ~$18-25/month for load balancer

**This is NOT recommended** unless you need load balancer features.

## My Recommendation

**Use Option 1 (GoDaddy Forwarding)** because:
- ✓ Simple setup (5 minutes)
- ✓ No additional cost
- ✓ Standard industry practice
- ✓ SEO-friendly (301 redirect)
- ✓ No code changes needed

Most major websites do this (try visiting `google.com` - it redirects to `www.google.com`).

## Current Status Check

Before making changes, let's verify current setup:

```bash
# Check if domain mapping exists
gcloud run domain-mappings list --region=us-central1

# Check current DNS records
nslookup www.clearforgetech.com
nslookup clearforgetech.com
```

## Next Steps

1. Choose your preferred option (I recommend Option 1)
2. Follow the setup steps
3. Test both URLs:
   - http://clearforgetech.com
   - http://www.clearforgetech.com
   - https://clearforgetech.com
   - https://www.clearforgetech.com
4. Wait 10-60 minutes for DNS propagation

## Important Notes

- **SSL Certificates**: Cloud Run automatically provisions SSL certificates for your custom domain
- **DNS Propagation**: Can take 10 minutes to 48 hours (usually 10-30 minutes)
- **SEO Impact**: 301 redirects are SEO-friendly and recommended by Google
- **Analytics**: Both domains will show in analytics, but most traffic will be on www

## Troubleshooting

**If www.clearforgetech.com doesn't work:**
1. Verify CNAME record points to `ghs.googlehosted.com`
2. Check Cloud Run domain mapping exists
3. Wait longer for DNS propagation
4. Clear your DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

**If apex redirect doesn't work:**
1. Check GoDaddy forwarding settings
2. Ensure forwarding is set to "Permanent (301)"
3. Test in incognito mode (avoid browser cache)

## Reference Links

- [Google Cloud Run Custom Domains](https://cloud.google.com/run/docs/mapping-custom-domains)
- [GoDaddy Domain Forwarding Guide](https://www.godaddy.com/help/forward-my-godaddy-domain-12123)
- [Cloudflare Setup Guide](https://developers.cloudflare.com/dns/zone-setups/full-setup/)
