import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Optimisation pour Vercel
  compress: true,
};

export default nextConfig;
