/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        hostname: "*.googleusercontent.com",
      },
      {
        hostname: "LinkHub13.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
