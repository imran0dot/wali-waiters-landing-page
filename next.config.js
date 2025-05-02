/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: 'dist',
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // output: 'export',
};

module.exports = nextConfig;
