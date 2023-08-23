import Link from 'next/link';
import * as styles from './style.css';
import { motion } from 'framer-motion';
import { CLICKABLE_RESPONSE_PROPS } from '../../constant';

export function Avatar() {
  return (
    <Link href="/">
      <motion.div
        {...CLICKABLE_RESPONSE_PROPS}
        title="avatar"
        className={styles.root}
      />
    </Link>
  );
}
