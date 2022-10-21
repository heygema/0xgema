import { motion } from "framer-motion";
import * as styles from "./style.css";

interface Props {
  isDraggable?: boolean;
  children?: React.ReactNode;
}

export default function ArticleCard({ isDraggable, children }: Props) {
  return (
    <motion.div
      aria-label="article-card"
      drag={isDraggable}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      className={[styles.card, isDraggable && styles.draggableCard].join(" ")}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}
