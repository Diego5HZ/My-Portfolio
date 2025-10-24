# Diego Portfolio — Astro + Tailwind Starter

Responsive, fast, and content-first portfolio for a software engineer transitioning into project management.

## Quickstart

```bash
# 1) Install deps
npm i

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview build
npm run preview
```

## Deploy

- **Cloudflare Pages** (recommended): Connect repo → Framework: Astro → Build command: `npm run build` → Output: `dist`
- Netlify / Vercel also work out-of-the-box.

## Customize

- Update navigation in `src/components/NavBar.astro`
- Edit homepage copy in `src/pages/index.astro`
- Add projects in `src/data/projects.ts` and create pages under `src/pages/projects/*`
- Case studies live under `src/pages/case-studies/*`
- Colors: `tailwind.config.cjs` (brand palette)
