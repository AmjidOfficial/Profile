import type { NextConfig } from "next";
const isPages = process.env.GITHUB_ACTIONS === "true";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isPages ? "/Profile" : "",
  assetPrefix: isPages ? "/Profile/" : "",
  images: { unoptimized: true },
  reactStrictMode: true
};
export default nextConfig;