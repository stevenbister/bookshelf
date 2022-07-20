/** @type {import('next').NextConfig} */
const path = require('path');

// Setup Sanity studio path as /studio so we don't need to navigate to seperate urls
const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
      : '/studio/dashboard',
};

module.exports = {
  reactStrictMode: true,
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ['cdn.sanity.io', 'm.media-amazon.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
