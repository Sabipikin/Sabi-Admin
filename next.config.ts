import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
};

export default config;
