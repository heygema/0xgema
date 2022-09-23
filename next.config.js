/** @type {import('next').NextConfig} */

const {createVanillaExtractPlugin} = require('@vanilla-extract/next-plugin');
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withVanillaExtract(withMDX(nextConfig));
