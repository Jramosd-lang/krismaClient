import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  redirects: async () => [
    {
      source: "/",
      destination: "/pages/auth/login",
      permanent: false
    }
  ],
    allowedDevOrigins: ['192.168.20.200']
};

export default nextConfig;
