import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

import { promises as fs } from "fs";
import { POST_DIR } from "../constant";
import Link from "next/link";
import matter from "gray-matter";
import path from "path";
import { useRouter } from "next/router";

type GrayMatterFile = matter.GrayMatterFile<string>;

type Posts = Array<
  GrayMatterFile & {
    slug: string;
    author: string;
    canonical_url: string;
    date: string;
    hero: string;
    title: string;
  }
>;

type Props = {
  posts: Posts;
};

export default function Home({ posts }: Props) {
  const { query } = useRouter();

  return (
    <div>
      {posts.map(({ slug, ...info }) => {
        const imagePath = path.join(__dirname, `${slug}/${info.hero}`);
        return (
          <div key={slug}>
            <Link href={"/posts/" + slug}>
              <a>{slug}</a>
            </Link>
            <img src={imagePath} />
            <p>{info.excerpt}</p>
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
      let targetPath = path.join(POST_DIR, slug + "/index.mdx");
      let post = await fs.readFile(targetPath, "utf-8");
      let parsedMatter = matter(post);
      posts.push({
        ...parsedMatter.data,
        date: new Date(parsedMatter.data?.date).toISOString(),
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
