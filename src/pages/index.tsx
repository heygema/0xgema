import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";

import * as styles from "../styles/index.css";
import getPosts from "../helpers/getPosts";
import { Posts } from "../data/types";
import { usePostsStore } from "../data/store";
import Button from "../components/Button";
import { Card, Loading } from "../core-ui";
import { motion } from "framer-motion";
import { Hero } from "../components";

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
    ({ slug, date, title, excerpt }, index) => {
      return (
        <ArticleCard
          key={`slug_${index}`}
          slug={slug}
          date={date}
          title={title}
          excerpt={excerpt}
        />
      );
    }
  );

  const renderedPaginations = totalPages > 1 && (
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
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            key={index}
            className={styles.paginationButtonContainer}
          >
            <div
              className={styles.buttonGlow[isCurrentPage ? "selected" : "base"]}
            />
            <div
              className={
                styles.buttonWrapper[isCurrentPage ? "selected" : "base"]
              }
            >
              <Button
                onClick={onClick}
                className={
                  styles.paginationButton[isCurrentPage ? "selected" : "base"]
                }
              >
                {String(index + 1)}
              </Button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <div className={styles.easterEggContainer}>
            <span className={styles.eggUnicorn}></span>
          </div>
        </Link>
        <div className={styles.root}>{renderedPosts}</div>
        {renderedPaginations}
      </Suspense>
    </>
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
