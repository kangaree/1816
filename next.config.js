/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  basePath: "/1816",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
