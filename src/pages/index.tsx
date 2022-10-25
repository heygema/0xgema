import { useRouter } from "next/router";

import * as styles from "../styles/index.css";
//import ArticleCard from "../components/ArticleCard";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useMemo } from "react";
import getPosts from "../helpers/getPosts";
import { Posts } from "../data/types";
import { usePostsStore } from "../data/store";
import Link from "next/link";
import Button from "../components/Button";

const ArticleCard = dynamic(() => import("../components/ArticleCard"), {
  suspense: true,
});

type Props = {
  posts: Posts;
};

export default function Home({ posts }: Props) {
  const { query, push } = useRouter();

  const page = Number(String(query?.page)) || 1;

  const postPerPage = 6;

  const offset = postPerPage * (page - 1);

  const limit = offset + postPerPage;

  const totalPages = Math.ceil(posts.length / postPerPage);

  const setPosts = usePostsStore((state) => state.setPosts);

  // TODO
  const getAvailablePagination = () => {
    let availablePaginations: Array<string> = [...Array(totalPages)].map(
      (_, index) => (index + 1).toString()
    );

    let currentPageIndex = availablePaginations.indexOf(page.toString());

    availablePaginations = availablePaginations.slice(
      currentPageIndex - 3,
      currentPageIndex + 3
    );

    const showNext = page !== totalPages;

    const showFirst = page !== 1;

    const showPrev = page !== 1;

    availablePaginations = [...availablePaginations, String(totalPages)];

    if (showPrev) {
      //availablePaginations = ["Previous", ...availablePaginations];
    }

    if (showNext) {
      //availablePaginations = [
      //...availablePaginations,
      //String(totalPages),
      //"Next",
      //];
    }

    if (showFirst) {
      //availablePaginations = ["First", ...availablePaginations];
    }

    availablePaginations = Array.from(new Set(availablePaginations));
  };

  const paginations = [...Array(totalPages)].map((_, index) =>
    String(index + 1)
  );

  const pressPagination = (page: string) => {
    push("/", {
      query: {
        page,
      },
    });
  };

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
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <div className={styles.easterEggContainer}>
          <span className={styles.eggUnicorn}>🥚🦄</span>
        </div>
      </Link>
      <div className={styles.root}>{renderedPosts}</div>
      <div className={styles.pagination}>
        {paginations.map((item, index) => {
          return (
            <Button onClick={() => pressPagination(item)} key={index}>
              {String(item)}
            </Button>
          );
        })}
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
