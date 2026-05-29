# STE. MOUAWAD Bilingual Website

A bilingual English and Arabic Next.js website with localized routes, RTL support, SEO metadata, and editable project content.

## Tech Stack

- Next.js App Router
- next-intl
- TypeScript
- Tailwind CSS config included

## Routes

- `/`
- `/about`
- `/portfolio`
- `/projects`
- `/contact`
- `/ar`
- `/ar/about`
- `/ar/portfolio`
- `/ar/projects`
- `/ar/contact`

## Content

Translations live in:

- `messages/en.json`
- `messages/ar.json`

Project content lives in:

- `admin-content/projects.json`

Project images should be placed in:

- `admin-content/images`

Use image paths like `/content-images/example.jpg` in `admin-content/projects.json`.

## Run

```bash
npm install
npm run dev
```
