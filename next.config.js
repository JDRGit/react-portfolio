/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'url-loader?name=public/resume.pdf',
    });

    return config;
  },
};

module.exports = nextConfig;