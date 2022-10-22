import { useRouter } from "next/router";

import * as styles from "../styles/index.css";
//import ArticleCard from "../components/ArticleCard";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import ThemeSwitch from "../components/ThemeChanger";
import getPosts from "../helpers/getPosts";
import { Posts } from "../data/types";
import { usePostsStore } from "../data/store";

const ArticleCard = dynamic(() => import("../components/ArticleCard"), {
  suspense: true,
});

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

  const setPosts = usePostsStore((state) => state.addPosts);

  useEffect(() => {
    setPosts(posts);
  }, []);

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
  try {
    let posts = await getPosts();
    return {
      props: {
        posts,
      },
    };
  } catch {
    return {
      props: {
        posts: [],
      },
    };
  }
}
