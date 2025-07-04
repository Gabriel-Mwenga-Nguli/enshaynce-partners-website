/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@opentelemetry/sdk-node', 'handlebars'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
