import React from "react";
import { promises as fs } from "fs";
import { POST_DIR } from "../../constant";
import path from "path";
import getPosts from "../../helpers/getPosts";
import { Posts } from "../../data/types";
import { useSetPosts } from "../../hooks/useSetPosts";
import Head from "next/head";
import { marked } from "marked";
import matter from "gray-matter";

interface Props {
  parsedMarkdown: matter.GrayMatterFile<string>;
  posts: Posts;
}

export default function Post({ posts }: Props) {
  // hacky way to make sure posts always available on search
  useSetPosts(posts);

  //const htmlString = marked(parsedMarkdown.content);


  return (
    <>
      <Head>
        <title>Post title</title>
      </Head>
    </>
  );
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
  let posts = await getPosts();

  const postLocation = path.join(POST_DIR, slug + `/index` + ".mdx");
  const markdownWithMetadata = await fs.readFile(postLocation, "utf-8");

  const parsedMarkdown = matter(markdownWithMetadata);

  console.log(">>>>", parsedMarkdown);

  return {
    props: {
      //parsedMarkdown: JSON.stringify(parsedMarkdown),
      posts,
    },
  };
};
