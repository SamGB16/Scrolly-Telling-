import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/music-museum",
  assetPrefix: "/music-museum",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;