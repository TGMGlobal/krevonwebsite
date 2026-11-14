// Empty for krevonstudio.com. The GitHub Pages preview sets "/krevonwebsite".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  reactStrictMode: true,
  // Static export for Hostinger shared hosting: `npm run build` writes `out/`.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
