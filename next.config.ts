import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/prelaunch", destination: "/", permanent: true },
      { source: "/launch", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
