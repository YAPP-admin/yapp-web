/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
  images: {
    formats: ['image/webp'],
    domains: ['miro.medium.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
  },
};

module.exports = nextConfig;
