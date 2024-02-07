/** @type {import('next').NextConfig} */
const nextConfig = {
    /* Any other Next.js config */
  }
  
  module.exports = {
    ...nextConfig,
    basePath: process.env.NEXT_PUBLIC_BASE_URL
  }