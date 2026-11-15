# Krevon Studio website, version 2

A second, separate site built around one idea: "Yes is cheap." It lives in this `v2/` folder and shares nothing at runtime with the first site in the repository root. To move it to its own repository, copy this folder.

## Run it

```bash
npm install
```

```bash
npm run dev
```

## Edit the copy

All text is in `src/content/`:

| File | What it holds |
|---|---|
| `site.ts` | Name, email, socials, navigation, footer |
| `home.ts` | Homepage: hero wall, statement, client list, rules, quotes |
| `work.ts` | The four case studies |
| `studio.ts` | Sprints, paths, services |
| `contact.ts` | Contact page and form |

## Still needed

- **Logos** in `public/brand/` (three SVGs, same filenames as now).
- **Client logos**: add single-colour SVG or transparent PNG files to `public/clients/` and set `logo: "/clients/name.svg"` on a client in `home.ts`. Each logo is drawn in one colour so they sit together. Until then names are set in type.
- **Case study images**: Samyah, JK and the healthcare deck use real work exported from the studio's Canva files, at screen resolution. Replace them with full-resolution originals when available: add WebP files to `public/work/<slug>/` and list them, with their pixel size, under `images` in `work.ts`. The Shopify page has no images yet.
- **Agency web font**: see the comment at the top of `src/app/layout.tsx`.
- **Web3Forms key**: set `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local` before building.

## Build for Hostinger

```bash
npm run build
```

Upload the contents of `out/` to `public_html`, including the hidden `.htaccess`.
