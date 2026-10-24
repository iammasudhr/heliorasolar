# Heliora Solar

A complete static Next.js + TypeScript rooftop-solar website. Includes 12 content routes, a custom outlined SVG logo (no SVG text nodes), optimized local imagery, mobile glass navigation and a static export in `out/`.

## Run locally

Use Node.js 22.18+ (or Node 24).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To check the production output:

```bash
npm run build
python3 -m http.server 8080 --directory out
```

Open http://localhost:8080. Do not open index.html using file://; root-relative asset paths require an HTTP server.

## Content editing

- `src/data/site.ts`: business/contact details, navigation, services, FAQs, process and values.
- `src/data/pages.ts`: inner-page titles and descriptions.
- `src/data/copy.ts`: shared presentation copy, grouped by page/component.
- `src/app/globals.css`: palette, type scale, responsive layouts, safe areas and mobile dock.
- `public/`: SVG logo, favicon, Apple icon, 1200×630 Open Graph image and WebP images.

All application logic is TypeScript/TSX. No API, database or runtime server is required. Content changes require a new build.

## Before launch

1. Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS origin, without a trailing slash, in `.env.local` or your hosting build settings. Default is `https://example.com`.
2. Edit site.ts with real contact details, location and service scope. Set `demo: false`, and set `whatsapp` to the country code plus number, digits only (no plus or spaces).
3. Replace demo-brand statements and policies with accurate business content. Do not invent testimonials, accreditation or completed projects.
4. Update the illustrative AI image if real project photography is available. Image provenance is in ASSETS.md.
5. Run `npm run build` again. The supplied out/ is a demo build and retains the placeholder canonical domain.
6. Upload only out/ for a direct static deployment, or use the source project with Git builds.

## Deployment

### Vercel
Import the source repository, use the Next.js preset, set the real NEXT_PUBLIC_SITE_URL, and build with `npm run build`. The project uses `output: 'export'`; no server functions are required.

### Cloudflare Pages
Use the Next.js Static HTML Export preset (or no preset), build command `npm run build`, output folder `out`, Node 22.18+ or 24. For Direct Upload, upload the contents of out/. No SPA catch-all redirect is needed; route directories contain index.html and 404.html is included.

Official references:
- https://nextjs.org/docs/app/guides/static-exports
- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## Interactions

- Mobile dock: five pages, active state, hides on downward scrolling after 110px, reappears on upward scrolling. Swipe horizontally over the dock to move to adjacent pages; tap remains supported. Keyboard focus makes it visible. Reduced-motion preference is respected.
- FAQ: native accessible disclosures that also work without JavaScript.
- Estimate: illustrative capacity only, using user-adjustable bill and tariff. No guaranteed production/savings/cost claims.
- Enquiry: in demo mode, renders an on-page preview only. In live configuration, opens a prefilled WhatsApp message for the visitor to review and send. No email sending or website storage. Submission is disabled until JavaScript has initialized.

## SEO / GEO / AEO

Prerendered text, unique page titles/descriptions/canonicals, sitemap.xml, robots.txt, semantic headings, descriptive image alternatives, Organization/Service/FAQ structured data, answer-first service copy, clear internal links, and optional llms.txt. Global OG, Twitter image, theme color and viewport-fit=cover are included. See SEO_GUIDE.md. These measures do not guarantee ranking, rich results or AI citations.

## Project structure

```
src/app/                  pages, metadata routes and styles
src/app/[page]/           about/contact/guide/FAQ/legal static pages
src/app/services/[slug]/  four prebuilt service detail routes
src/components/           navigation, calculator, form and shared sections
src/data/                 centralized typed content
public/                   local assets
out/                      deployable static export
```
