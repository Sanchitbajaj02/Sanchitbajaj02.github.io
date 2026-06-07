/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  reactStrictMode: false,
};

export default nextConfig;
