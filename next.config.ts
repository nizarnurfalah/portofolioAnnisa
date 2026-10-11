import type { NextConfig } from "next";
// @ts-expect-error - next-pwa doesn't have types
import withPWA from "next-pwa";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {},
  output: "export",
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

export default pwaConfig(nextConfig);
