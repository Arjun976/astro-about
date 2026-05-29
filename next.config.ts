import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "astrotrading.ae",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
