import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loved-books-4f94d71c4a.media.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
