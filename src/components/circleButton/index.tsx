import { motion } from "framer-motion";
import * as styles from "./cirlceButton.css";

export default function CircleButton() {
  return (
    <motion.div
      aria-label="menu-button"
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={styles.container}
    >
      <div className={styles.circleFallback} />
    </motion.div>
  );
}
