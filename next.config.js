/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
