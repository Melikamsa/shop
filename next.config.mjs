/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },

  images: {
    domains: ["www.irisfashion.co.uk"],
  },
};

export default nextConfig;
