/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "/api/:path*",
        },
      ];
    },
    images: {
      domains: ["github.com", "lh3.googleusercontent.com"],
    },
  };
  
  export default nextConfig;
  