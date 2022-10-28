import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";

import * as styles from "../styles/index.css";
import getPosts from "../helpers/getPosts";
import { Posts } from "../data/types";
import { usePostsStore } from "../data/store";
import Button from "../components/Button";
import { Card } from "../core-ui";

const ArticleCard = dynamic(() => import("../components/ArticleCard"), {
  suspense: true,
});

type Props = {
  posts: Posts;
};

export default function Home({ posts }: Props) {
  const { asPath, query, push } = useRouter();

  // tedious
  let currentActualPage: string;
  const q = String(asPath.split("?").pop()).split("&");
  const pageParamIndex = q.findIndex((value) => value.startsWith("page"));

  if (q[pageParamIndex]) {
    const [, target] = q[pageParamIndex]?.split("=");
    currentActualPage = target;
  }

  const currentPageNumber = Number(currentActualPage);

  const page =
    !isNaN(currentPageNumber) && currentPageNumber > 0
      ? Number(currentActualPage)
      : Number(String(query?.page)) || 1;

  const postPerPage = 6;

  const offset = postPerPage * (page - 1);

  const limit = offset + postPerPage;

  const totalPages = Math.ceil(posts.length / postPerPage);

  const setPosts = usePostsStore((state) => state.setPosts);

  // TODO: getAvailablePaginations()

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

  const availablePost = posts.slice(offset, limit);

  if (!availablePost.length) {
    return (
      <Card variant="empty">
        <h2>No Post</h2>
      </Card>
    );
  }

  const renderedPosts = availablePost.map(
    ({ slug, title, excerpt, ...info }, index) => {
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
    }
  );

  const renderedPaginations = (
    <div className={styles.pagination}>
      {paginations.map((item, index) => {
        const isCurrentPage = String(page) === item;
        const onClick = () => {
          if (isCurrentPage) {
            return;
          }
          pressPagination(item);
        };
        return (
          <Button
            className={
              styles.paginationButton[isCurrentPage ? "currentPage" : "base"]
            }
            onClick={onClick}
            key={index}
          >
            {String(item)}
          </Button>
        );
      })}
    </div>
  );

  return (
    <Suspense fallback={"..."}>
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <div className={styles.easterEggContainer}>
          <span className={styles.eggUnicorn}>🥚🦄</span>
        </div>
      </Link>
      <div className={styles.root}>{renderedPosts}</div>
      {renderedPaginations}
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
