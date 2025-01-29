import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Keep standalone mode for Vercel
  images: {
    unoptimized: true, // Fine if you don't need image optimization
  },
  // ❌ Remove distDir to let Vercel handle output correctly
};

export default nextConfig;
