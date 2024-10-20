/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "https://fakestoreapi.com/",
          },
        ],
      },
};

export default nextConfig;
