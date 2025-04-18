const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Webpack uyarılarını gizle
    config.ignoreWarnings = [
      { module: /node_modules\/next\/dist\/client\/components/ },
      { module: /node_modules\/next\/dist\/compiled/ }
    ];
    return config;
  }
};

module.exports = withNextIntl(nextConfig);
