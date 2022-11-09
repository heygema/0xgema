import React from "react";
import { promises as fs } from "fs";
import { POST_DIR } from "../../constant";
import path from "path";
import getPosts from "../../helpers/getPosts";
import { Posts } from "../../data/types";
import { useSetPosts } from "../../hooks/useSetPosts";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { DateTime } from "luxon";
import { MDXComponents } from "../../components";

interface Props {
  slug: string;
  posts: Posts;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

export default function Post({ posts, source }: Props) {
  // hacky way to make sure posts always available on search
  useSetPosts(posts);

  const title = source?.frontmatter?.title;
  const date = DateTime.fromISO(source?.frontmatter?.date);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <span>
        {date.day} {date.monthLong}, {date.year}
      </span>
      <MDXRemote {...source} components={MDXComponents} />
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

  const rawFile = await fs.readFile(postLocation, "utf-8");

  const mdxSource = await serialize(rawFile, { parseFrontmatter: true });

  return {
    props: {
      slug,
      posts,
      source: {
        ...mdxSource,
        frontmatter: {
          ...mdxSource.frontmatter,
          date: new Date(mdxSource.frontmatter?.date).toISOString(),
        },
      },
    },
  };
};
