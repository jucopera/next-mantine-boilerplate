/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config, options) => {
    return config;
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

module.exports = nextConfig;
