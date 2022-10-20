import { motion } from "framer-motion";
import * as styles from "./cirlceButton.css";

interface Props {
  onClick?: () => void;
}

export default function CircleButton({ onClick }: Props) {
  return (
    <motion.div
      onClick={onClick}
      aria-label="menu-button"
      whileHover={{
        scale: 1.2,
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
