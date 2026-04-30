import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Scrolly-Telling-",
  assetPrefix: "/Scrolly-Telling-",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
