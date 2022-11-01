import { motion } from "framer-motion";
import { ReactNode } from "react";
import * as styles from "./style.css";

export type Props = {
  children: ReactNode;
  variant?: "normal" | "bio" | "empty" | "empty-left-aligned" | "emptyPadded";
};

export function Card({ children, variant = "normal" }: Props) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      className={styles.cardVariant[variant]}
    >
      {children}
    </motion.div>
  );
}
