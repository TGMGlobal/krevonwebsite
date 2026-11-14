# Krevon Studio website

Static website for [krevonstudio.com](https://krevonstudio.com). Next.js 16 (App Router), React 19, Tailwind v4 and GSAP, exported as plain HTML for Hostinger shared hosting.

## Run it locally

```bash
npm install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

## Edit the copy

All text lives in `src/content/`. Change the words between the quotes and rebuild.

| File | What it holds |
|---|---|
| `site.ts` | Name, email, socials, navigation, footer, 404 text |
| `home.ts` | Homepage sections, client list, testimonials |
| `work.ts` | The four case studies and the Work page |
| `approach.ts` | Sprints, services, ongoing partnership |
| `contact.ts` | Contact page and form labels |

## Handoff notes

### 1. Environment variable

The contact form needs a Web3Forms access key.

1. Create a key at web3forms.com for `hello@krevonstudio.com`.
2. Put it in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY=your-key`.
3. Rebuild. The key is baked into the build, so a new key needs a new build and upload.

Without a key the form shows its error message and sends nothing.

### 2. Missing assets

Everything below is a marked placeholder today.

**Logos** (`public/brand/`). Replace these three files and keep the filenames:

- `krevon-logo-on-black.svg`: green mark, cream wordmark
- `krevon-logo-on-offwhite.svg`: green mark, black wordmark
- `krevon-avatar.svg`: green mark in a black circle (also used as the favicon)

**Client logos** (`public/clients/`). The strip shows names as text. To use a logo, add the file and set `logo: "/clients/filename.svg"` for that client in `src/content/home.ts`. Needed: Mahindra TEQO, Samyah Wellness, JK Cookery School, Estancia, ResVenture Xperts, Nivve.

**Case study images** (`public/work/<slug>/`). Each case study needs one cover (2400x1350) and three gallery images (1600x1200), saved as WebP. Add the files, then replace `src: null` with the path in `src/content/work.ts`, for example `src: "/work/samyah-wellness/cover.webp"`. That is 16 images across:

- `jk-cookery-school`
- `us-healthcare-pitch-deck`
- `samyah-wellness`
- `shopify-catalogue-automation`

**Agency web font.** Headings use Rajdhani until a web licence for Agency is held. To swap, add the licensed `.woff2` to `src/fonts/` and follow the comment at the top of `src/app/layout.tsx`. No other file changes.

**Social share image.** `public/og.png` is brand-coloured type only. Regenerate it once the real logo exists if you want the mark on it.

### 3. Deploy to Hostinger

1. Set the key in `.env.local` (see step 1 above).
2. Build the site:

   ```bash
   npm run build
   ```

3. This creates an `out/` folder. It should contain `index.html`, `404.html`, `.htaccess`, `sitemap.xml`, `robots.txt`, `og.png` and the folders `_next`, `work`, `approach`, `contact` and `brand`.
4. In Hostinger hPanel open **Files > File Manager** and go to `public_html`.
5. Delete the old contents of `public_html` (keep any folders Hostinger created that you still need, such as `.well-known`).
6. Upload the **contents** of `out/`, not the folder itself. `index.html` must sit directly inside `public_html`.
7. Turn on **Show hidden files** in the File Manager settings and check that `.htaccess` uploaded. It handles the 404 page, the HTTPS redirect and caching.
8. Make sure the SSL certificate is active for the domain (hPanel > Security > SSL).
9. Open the site, visit a made-up address to see the 404 page, and send a test message through the contact form.

To update the site later: edit, run `npm run build`, upload the contents of `out/` again.

## Checks

```bash
npm run lint
```

```bash
npm run build
```
