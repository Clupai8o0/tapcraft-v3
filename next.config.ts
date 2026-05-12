import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/pricing", destination: "/platform/pricing", permanent: true },
    ];
  },
};

export default nextConfig;
