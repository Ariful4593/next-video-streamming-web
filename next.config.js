/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
    reactStrictMode: false,
  },
}

module.exports = nextConfig
