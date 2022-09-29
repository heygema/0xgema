import Head from 'next/head';
import Image from 'next/image';
import {motion} from 'framer-motion';
import styles from '../styles/Home.module.css';

import {promises as fs} from 'fs';
import {POST_DIR} from '../constant';
import Link from 'next/link';
import matter from 'gray-matter';
import path, {parse} from 'path';

type Posts = Array<
  matter.GrayMatterFile<string> & {
    slug: string;
  }
>;

type Props = {
  posts: Posts;
};

export default function Home({posts}: Props) {
  console.log({
    posts,
  });
  return (
    <div>
      {posts.map(({slug}) => {
        return (
          <div key={slug}>
            <Link href={'/p/' + slug}>
              <a>{'/p/' + slug}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  let result = {
    props: {
      posts: {},
    },
  };
  try {
    let postDirs = await fs.readdir(POST_DIR);

    let posts = [];

    for (const slug of postDirs) {
      let targetPath = path.join(POST_DIR, slug + '/index.mdx');
      let post = await fs.readFile(targetPath, 'utf-8');
      let parsedMatter = matter(post);
      let parsedPost = JSON.parse(JSON.stringify(parsedMatter));
      posts.push({
        ...parsedPost,
        slug,
      });
    }

    return {
      props: {
        posts,
      },
    };
  } catch {
    return result;
  }
}
