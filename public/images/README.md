# Public Images

This directory contains image assets served publicly via the website.

## Purpose

Store image files that need to be directly accessible via HTTP URLs (not processed by Next.js Image component).

## Current Assets

- **josh.jpg** - Founder photo (Josh)
- **shawn.png** - Co-founder photo (Shawn)

## Guidelines

### When to use `public/images/`
- Team photos
- Simple static images not requiring optimization
- Images referenced in external content (emails, etc.)
- Direct URL access needed

### When to use Next.js Image component instead
- Product images (automatic optimization)
- Hero images (WebP/AVIF conversion)
- Responsive images (multiple sizes)
- Any image benefiting from automatic optimization

## File Naming

- Use lowercase, hyphenated names: `team-photo.jpg`
- Include descriptive names: `josh-founder.jpg` not `photo1.jpg`
- Optimize images before uploading (compress, resize)

## Organization

For larger collections, create subdirectories:
```
images/
├── team/
├── products/
└── blog/
```

## Note

Logo files are kept in `/public/logos/` (separate directory for brand assets).
