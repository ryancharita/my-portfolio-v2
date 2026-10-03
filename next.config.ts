import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/my-portfolio-v2"); empty locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages — no server features (route handlers, cookies, rewrites, etc.).
  output: "export",
  basePath,
  images: {
    // GitHub Pages can't run the image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
