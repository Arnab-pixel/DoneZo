/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"], // Ensures Prisma works
  },
};

export default nextConfig;
