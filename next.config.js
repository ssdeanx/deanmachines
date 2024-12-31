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
};

module.exports = nextConfig;
