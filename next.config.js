/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    loader: 'imgix',
    path: 'http://localhost:3000/',
  },
}

module.exports = nextConfig
