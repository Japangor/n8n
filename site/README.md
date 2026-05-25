# n8n.gjam.in

Static SEO site for free n8n workflows, templates, and guides. Built with Astro 5, Tailwind v4, deployed on Vercel.

## Quick start

```bash
cd site
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

Output: `dist/`

## Add a new workflow

1. Place `your-workflow.json` or `.zip` in `public/downloads/your-slug.json`
2. Create `src/content/workflows/your-slug.md` with frontmatter (see any existing file)
3. Run `npm run build` — page appears at `/workflows/your-slug`

Required frontmatter fields: `title`, `slug`, `category`, `file`, `fileSize`, `format`, `tags`, `description`, `useCases`, `requiredIntegrations`, `dateAdded`, `featured`.

Categories: `ai-agents`, `lead-gen`, `email`, `video`, `voice`, `social-media`, `onboarding`, `chat`.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import project in Vercel — **Root Directory**: `site`
3. Framework Preset: Astro (auto-detected)
4. Build command: `npm run build` · Output: `dist`
5. Add domain **n8n.gjam.in**:
   - Vercel → Project → Settings → Domains → Add `n8n.gjam.in`
   - At your DNS provider (e.g. Cloudflare), add:
     - `CNAME` `n8n` → `cname.vercel-dns.com` (or the target Vercel shows)
   - Wait for SSL provisioning

## SEO pages

Landing pages target Google Trends queries (India + worldwide): `/free-n8n-workflows`, `/n8n-ai-agents`, `/n8n-docs`, `/openclaw-vs-n8n`, etc. Sitemap: `/sitemap-index.xml` · RSS: `/rss.xml`.

## Project structure

```
site/
├── public/downloads/     # Workflow JSON/ZIP files
├── src/content/workflows/ # One .md per workflow
├── src/pages/            # Routes + SEO landings
├── src/components/
├── src/layouts/
└── src/lib/              # site.ts, schema.ts, workflows.ts
```

## Phase 2 (not in v1)

- Client-side search (Fuse.js)
- Per-workflow OG images (Satori)
- Blog / user submissions

## License

Workflow files are provided for education and productivity. n8n is a trademark of n8n GmbH; this site is not affiliated.
