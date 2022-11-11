import { motion } from "framer-motion";
import Link from "next/link";
import * as styles from "./style.css";

interface Props {
  isDraggable?: boolean;
  children?: React.ReactNode;
  slug?: string;
  title: string;
  excerpt: string;
  month: string;
  day: string;
  year: string;
  ["aria-label"]?: string;
}

export default function ArticleCard({
  isDraggable,
  children,
  slug,
  title,
  excerpt,
  month,
  day,
  year,
  ...otherProps
}: Props) {
  return (
    <Link {...otherProps} href={"/posts/" + slug}>
      <motion.div
        aria-label="article-card"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: { opacity: 1 },
        }}
        whileTap={{
          scale: 0.975,
        }}
        initial="hidden"
        animate="visible"
        className={[styles.card, isDraggable && styles.draggableCard].join(" ")}
        whileHover={{ scale: 1.01 }}
      >
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.postDate}>
          {month} {day}, {year}
        </span>
        <p className={styles.excerpt}>{excerpt}</p>
      </motion.div>
    </Link>
  );
}
