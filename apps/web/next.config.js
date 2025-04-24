/*
  Next.js Configuration
  Purpose: Configures Next.js app settings including internationalization, React strict mode, and Webpack warnings suppression.
  Context: Used at the root of the FitPersona web app to control build and runtime behavior, and integrate next-intl for i18n support.
*/

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
