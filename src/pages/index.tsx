import { useRouter } from "next/router";

import * as styles from "../styles/index.css";
//import ArticleCard from "../components/ArticleCard";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import getPosts from "../helpers/getPosts";
import { Posts } from "../data/types";
import { usePostsStore } from "../data/store";
import path from "path";
import Link from "next/link";

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

  const setPosts = usePostsStore((state) => state.setPosts);

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
      const heroPath = path.join("/assets", info.hero);

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
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <div className={styles.easterEggContainer}>
          <span className={styles.eggUnicorn}>🥚🦄</span>
        </div>
      </Link>
      <div className={styles.root}>{renderedPosts}</div>
      <div>
        1 ... {totalPages}{" "}
        <Link
          href={{
            pathname: "/",
            query: {
              page: page + 1,
            },
          }}
        >
          Next
        </Link>
      </div>
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
