/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.css': [], // Remove postcss-loader from Turbopack rules
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['postcss-loader'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'placekitten.com',
      },
    ],
  },
};

module.exports = nextConfig;
