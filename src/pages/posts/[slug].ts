import React from "react";
import { promises as fs } from "fs";
import { POST_DIR } from "../../constant";
import path from "path";

export default function Post({ htmlString }) {
  return htmlString;
}

export const getStaticPaths = async () => {
  const files = await fs.readdir(POST_DIR);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const postLocation = path.join(POST_DIR, slug + `/index` + ".mdx");
  const markdownWithMetadata = await fs.readFile(postLocation, "utf-8");

  //   const parsedMarkdown = matter(markdownWithMetadata);

  //   const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString: markdownWithMetadata,
    },
  };
};
