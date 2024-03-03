/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { hostname: "img.clerk.com", protocol: "https", port: "" },
    ],
  },
};

module.exports = nextConfig;
