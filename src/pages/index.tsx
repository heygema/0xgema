import { promises as fs } from "fs";
import path from "path";
import { motion } from "framer-motion";
import Link from "next/link";
import matter from "gray-matter";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();

  console.log({
    theme,
  });

  const page = query?.page || 1;

  const postPerPage = 6;

  const totalPages = Math.ceil(posts.length / postPerPage);

  //const offset =  ;

  console.log({
    page,
    totalPages,
    theme,
  });

  const renderedPosts = posts
    .slice(0, postPerPage)
    .map(({ slug, ...info }, index) => {
      const heroPath = path.join("/assets", info.hero);

      const cardStyle =
        index === 0 ? styles.accentedCardStyle[theme] : styles.card;

      const draggableProps =
        index === 0
          ? {
              dragElastic: 0.2,
              drag: true,
            }
          : {};

      return (
        <Link href={"/posts/" + slug}>
          <motion.div
            {...draggableProps}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            className={cardStyle}
            whileHover={{ scale: 1.02 }}
            key={slug}
          >
            <h3>{info.title}</h3>
            <p>{info.excerpt}</p>
          </motion.div>
        </Link>
      );
    });

  return <div className={styles.root}>{renderedPosts}</div>;
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
