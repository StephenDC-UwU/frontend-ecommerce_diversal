import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, 
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loved-books-4f94d71c4a.media.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
