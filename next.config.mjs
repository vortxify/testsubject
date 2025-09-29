/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Disable typedRoutes because we compute dynamic href strings for locale switching
    // which don't satisfy the Route type at build time on Vercel.
    serverActions: {
      allowedOrigins: ["*"]
    }
  }
};

export default nextConfig;
