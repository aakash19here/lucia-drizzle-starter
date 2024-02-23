/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    serverComponentsExternalPackages: ["oslo"],
  },
};

export default nextConfig;
