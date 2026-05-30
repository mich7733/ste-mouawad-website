# STE. MOUAWAD Website

Single-page bilingual landing website for STE. MOUAWAD, built with Next.js 15, TypeScript, Tailwind CSS, and next-intl.

## Features

- Premium single-page landing experience
- English and Arabic routes: `/en` and `/ar`
- Automatic redirect from `/` to `/en`
- RTL Arabic layout
- Organized image assets in `public/images`
- SEO metadata for STE. MOUAWAD, شركة معوض, Marble Lebanon, Church Marble Lebanon, and Artistic Marble Work
- Floating WhatsApp CTA
- Vercel-ready configuration

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en` or `http://localhost:3000/ar`.

## Production Build

```bash
npm run build
npm run start
```

## Image Replacement

Replace the placeholder images in:

- `public/images/hero`
- `public/images/projects`
- `public/images/instagram`
- `public/images/about`
- `public/images/logo`

Keep filenames the same for direct replacement, or update the paths in `src/components/LandingPage.tsx`.

## Deployment Guide

### GitHub

1. Create a new GitHub repository.
2. Upload or push this project folder.
3. Make sure `node_modules`, `.next`, and build caches are not committed.

### Vercel

1. Sign in to Vercel.
2. Select **Add New Project**.
3. Import the GitHub repository.
4. Keep the default Next.js build settings:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Deploy.

### Domain: stemouawad.com

1. In Vercel, open the deployed project.
2. Go to **Settings > Domains**.
3. Add `stemouawad.com`.
4. Add `www.stemouawad.com` if needed.
5. Update DNS records at the domain registrar using the records Vercel provides.
6. Once DNS propagates, set the preferred production domain in Vercel.
