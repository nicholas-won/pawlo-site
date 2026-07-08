import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Consolidate the www mirror onto the apex domain (canonical host).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.getpawlo.app" }],
        destination: "https://getpawlo.app/:path*",
        permanent: true,
      },
      { source: "/prelaunch", destination: "/", permanent: true },
      { source: "/launch", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
