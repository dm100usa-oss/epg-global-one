import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Главная ведет на основную, английскую версию сайта.
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
