/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/app',
        destination: '/page.jsx',
      },
    ];
  },
};

module.exports = nextConfig;

