/** @type {import('next').NextConfig} */

//const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const withMDX = nextMDX({
  extension: /\.mdx$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
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
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default withVanillaExtract(withMDX(nextConfig));
