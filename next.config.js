/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withVanillaExtract(withMDX(nextConfig));
