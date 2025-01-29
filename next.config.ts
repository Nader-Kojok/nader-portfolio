/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you’re using the new App Router (Next 13+),
  // you do NOT want output: 'export'.
  // That would break SSR and dynamic routes on Vercel.

  images: {
    unoptimized: true, // Only keep this if you’re sure you don’t need Next’s image optimization.
  },

  // Remove or comment out the "output" property if it’s in your config:
  // output: 'export', // <-- Remove or comment out to enable SSR on Vercel
};

module.exports = nextConfig;
