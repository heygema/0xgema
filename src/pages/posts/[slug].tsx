import React from 'react';
import rehypeHighlight from 'rehype-highlight';
import { motion } from 'framer-motion';
import { DateTime } from 'luxon';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { promises as fs } from 'fs';

import {
  CLICKABLE_RESPONSE_PROPS,
  POST_DIR,
  REVEAL_ANIMATE_PROPS,
} from '../../constant';
import getPosts from '../../helpers/getPosts';
import { Posts } from '../../data/types';
import { useSetPosts } from '../../hooks/useSetPosts';
import { MDXComponents } from '../../components';
import * as styles from '../../styles/slug.css';

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
        <meta name="description" content={source?.frontmatter?.excerpt} />
      </Head>

      <motion.div {...REVEAL_ANIMATE_PROPS}>
        <Link aria-label="back-button" href="/blog" passHref>
          <motion.a {...CLICKABLE_RESPONSE_PROPS} className={styles.backButton}>
            ↩ 
          </motion.a>
        </Link>
        <h1 className={styles.heading}>{title}</h1>
        <span className={styles.date}>
          {date.day} {date.monthLong}, {date.year}
        </span>
        <MDXRemote {...source} components={MDXComponents} />
      </motion.div>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = await fs.readdir(POST_DIR);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  let posts = await getPosts();

  const postLocation = path.join(POST_DIR, slug + `/index` + '.mdx');

  const rawFile = await fs.readFile(postLocation, 'utf-8');

  const mdxSource = await serialize(rawFile, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  const sourceDate = new Date(String(mdxSource.frontmatter?.date));

  return {
    props: {
      slug,
      posts,
      source: {
        ...mdxSource,
        frontmatter: {
          ...mdxSource.frontmatter,
          date: sourceDate.toISOString(),
        },
      },
    },
  };
};
