/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/(.*)",
        destination: "https://github.com/elevenlabs/eleven.shopping",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
