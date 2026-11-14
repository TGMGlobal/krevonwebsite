/**
 * Sub-path the site is served from. Empty for krevonstudio.com (Hostinger).
 * The GitHub Pages preview build sets NEXT_PUBLIC_BASE_PATH to "/krevonwebsite".
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** True for preview builds served from a sub-path, which should stay out of search engines. */
export const isPreview = basePath !== "";

/** Prefix a file in public/ (e.g. "/brand/logo.svg") with the sub-path. */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
