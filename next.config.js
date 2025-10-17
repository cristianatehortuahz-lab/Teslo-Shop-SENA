/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ],
    // Permitir imágenes locales (sin servicios externos)
    unoptimized: false,
  }
}

module.exports = nextConfig
