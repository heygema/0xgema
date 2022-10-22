import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";

import { POST_DIR } from "../constant";
import * as styles from "./index.css";
//import ArticleCard from "../components/ArticleCard";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ThemeSwitch from "../components/ThemeChanger";

const ArticleCard = dynamic(() => import("../components/ArticleCard"), {
  suspense: true,
});

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
    .map(({ slug, title, excerpt, ...info }, index) => {
      const year = new Date(info.date).toLocaleString("en-US", {
        year: "numeric",
      });
      const month = new Date(info.date).toLocaleString("en-US", {
        month: "long",
      });
      const day = new Date(info.date).toLocaleString("en-US", {
        day: "2-digit",
      });

      return (
        <ArticleCard
          key={`slug_${index}`}
          slug={slug}
          isDraggable={index === 0}
          title={title}
          excerpt={excerpt}
          month={month}
          day={day}
          year={year}
        />
      );
    });

  return (
    <Suspense fallback={"..."}>
      <ThemeSwitch />
      <div className={styles.easterEggContainer}>
        <span className={styles.eggUnicorn}>🥚🦄</span>
      </div>
      <div className={styles.root}>{renderedPosts}</div>
    </Suspense>
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
