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
