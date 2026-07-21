import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.brharneayurved.in",
      },
      {
        protocol: "http",
        hostname: "www.brharneayurved.in",
      },
    ],
  },
};

export default nextConfig;
