/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgt.multicon.co.kr',
        port: '7443',
      },
    ],
  },

  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
};

module.exports = nextConfig;
