/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  reactStrictMode: false,
};

export default nextConfig;
