/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: "export",
  basePath: "/next-tickets",
};

export default nextConfig;
