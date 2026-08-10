import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  

  redirects: async () => [
    {
      source: "/",
      destination: "/pages/auth/login",
      permanent: false
    }
  ]
};

export default nextConfig;
