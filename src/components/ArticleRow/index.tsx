import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';
import { getArticleDate } from '../../helpers/getArticleDate';
import * as styles from './style.css';

interface Props {
  slug?: string;
  title: string;
  excerpt: string;
  date: string;
  onHover?: (slug: string) => void;
  isHovered?: boolean;
  ['aria-label']?: string;
}

export function ArticleRow({
  slug,
  title,
  date,
  onHover,
  ...otherProps
}: Props) {
  const { year, month, day } = getArticleDate(date);

  return (
    <Link {...otherProps} href={'/posts/' + slug}>
      <motion.div
        onMouseEnter={() => onHover?.(slug)}
        aria-label="article-row"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: { opacity: 1 },
        }}
        whileTap={{
          scale: 0.975,
        }}
        whileHover={{
          scale: 1.05,
        }}
        initial="hidden"
        animate="visible"
      >
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.postDate}>
          {month} {day}, {year}
        </span>
        <ArrowRight />
      </motion.div>
    </Link>
  );
}
