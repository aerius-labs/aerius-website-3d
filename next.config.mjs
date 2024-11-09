/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'letsenhance.io',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'labs.sigma.software',
        port: '',
        pathname: '/investment/**',
      },
    ],
  },
};

export default nextConfig;
