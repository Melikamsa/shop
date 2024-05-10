/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },

  images: {
    domains: ["fakestoreapi.com"],
  },
};

export default nextConfig;
