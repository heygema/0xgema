import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

import * as styles from './style.css';

type Props = {
  children: ReactNode;
  size?: number;
  href?: string;
};

export function Anchor<T extends Props>(props: T) {
  return (
    <a target="_blank" className={styles.link} {...props}>
      {props.children}
      <motion.span className={styles.arrowWrapper}>
        <ArrowUpRight size={props?.size || 16} />
      </motion.span>
    </a>
  );
}
