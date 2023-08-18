import { useRouter } from 'next/router';
import Link from 'next/link';
import { Suspense, useEffect } from 'react';

import * as styles from '../styles/index.css';
import getPosts from '../helpers/getPosts';
import { Posts } from '../data/types';
import { usePostsStore } from '../data/store';
import { Card, Loading } from '../core-ui';
import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard';
import { REVEAL_ANIMATE_PROPS } from '../constant';

type Props = {
  posts: Posts;
};

export default function Home({ posts }: Props) {
  const { asPath, query, push } = useRouter();

  // tedious
  let currentActualPage: string;
  const q = String(asPath.split('?').pop()).split('&');
  const pageParamIndex = q.findIndex((value) => value.startsWith('page'));

  if (q[pageParamIndex]) {
    const [, target] = q[pageParamIndex]?.split('=');
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
    push('/', {
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
          <a key={index} onClick={onClick}>
            {String(index + 1)}
          </a>
        );
      })}
    </div>
  );

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <div className={styles.easterEggContainer}>
            <span className={styles.eggUnicorn}></span>
          </div>
        </Link>
        <motion.div {...REVEAL_ANIMATE_PROPS} className={styles.root}>
          {renderedPosts}
        </motion.div>
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
