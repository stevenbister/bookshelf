/** @type {import('next').NextConfig} */

// Setup Sanity studio path as /studio so we don't need to navigate to seperate urls
const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ['cdn.sanity.io']
  }
}
