/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Image Optimization API
  },
  output: 'export' // Enable static export
}

module.exports = nextConfig
