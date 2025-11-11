/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'api.escuelajs.co'
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'placeimg.com'
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com'
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      }
    ],
    // Permitir imágenes locales (sin servicios externos)
    unoptimized: false,
  }
}

module.exports = nextConfig
