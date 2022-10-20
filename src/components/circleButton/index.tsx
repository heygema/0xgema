import { motion } from "framer-motion";
import * as styles from "./cirlceButton.css";

export default function CircleButton() {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={styles.container}
    >
      <svg height="100" width="100">
        <circle
          cx="25"
          cy="50"
          r="18"
          stroke="var(--foreground)"
          stroke-width="3"
          fill="transparent"
        />
        <div className={styles.circleFallback} />
      </svg>
    </motion.div>
  );
}
