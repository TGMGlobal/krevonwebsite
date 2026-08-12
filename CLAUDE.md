# GSAP Animation Guidelines

- **Core Imports & Registration:**
  - Import `gsap` and plugins explicitly (e.g., `import { ScrollTrigger } from "gsap/ScrollTrigger";`).
  - Always call `gsap.registerPlugin(ScrollTrigger);` once per app before using them.

- **Animation Patterns:**
  - Prefer transform aliases (`x`, `y`, `rotation`, `scale`) and `autoAlpha: 1` over heavy layout properties or raw opacity toggles.
  - Use GSAP Timelines (`const tl = gsap.timeline()`) for sequencing animations instead of relying on manual or chained delays.

- **Cleanup & Frameworks (React/Vue):**
  - Always handle cleanup to prevent memory leaks. 
  - In React, use the official `@gsap/react` package with `useGSAP()` and proper scope references, or wrap standard code in `gsap.context()`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
