/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.hashnode.com'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  reactStrictMode: false,
};

export default nextConfig;
