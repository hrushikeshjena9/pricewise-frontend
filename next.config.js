/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['192.168.1.51',"dev.maastrixdemo.com", '192.168.1.41'], // Add your hostname here
  },
};

module.exports = nextConfig
// export default nextConfig;
