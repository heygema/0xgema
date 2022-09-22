/** @type {import('next').NextConfig} */

import {createVanillaExtractPlugin} from '@vanilla-extract/next-plugin';
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  short: true,
};

module.exports = withVanillaExtract(withMDX(nextConfig));
