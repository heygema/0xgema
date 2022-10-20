import { promises as fs } from "fs";
import path from "path";
import { motion } from "framer-motion";
import Link from "next/link";
import matter from "gray-matter";
import { useRouter } from "next/router";

import { POST_DIR } from "../constant";
import * as styles from "./index.css";

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

  const page = Number(String(query?.page)) || 1;

  const postPerPage = 6;

  const offset = postPerPage * (page - 1);

  const limit = offset + postPerPage;

  const totalPages = Math.ceil(posts.length / postPerPage);

  const renderedPosts = posts
    .slice(offset, limit)
    .map(({ slug, ...info }, index) => {
      return (
        <Link aria-label={`article-card-link-${index}`} href={"/posts/" + slug}>
          <motion.div
            aria-label="article-card"
            drag={index === 0}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            className={[styles.card, index === 0 && styles.draggableCard].join(
              " "
            )}
            whileHover={{ scale: 1.02 }}
            key={slug}
          >
            <h3>{info.title}</h3>
            <p>{info.excerpt}</p>
          </motion.div>
        </Link>
      );
    });

  return (
    <>
      <div className={styles.easterEggContainer} />
      <div className={styles.root}>{renderedPosts}</div>
    </>
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
