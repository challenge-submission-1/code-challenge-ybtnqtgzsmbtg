/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

export default nextConfig;
