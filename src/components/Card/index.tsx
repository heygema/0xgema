import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import * as styles from './style.css';
import { REVEAL_ANIMATE_PROPS } from '../../constant';

export type Props = {
  children: ReactNode;
  variant?: 'normal' | 'bio' | 'empty' | 'empty-left-aligned' | 'emptyPadded';
};

export function Card({ children, variant = 'normal' }: Props) {
  return (
    <motion.div
      {...REVEAL_ANIMATE_PROPS}
      className={styles.cardVariant[variant]}
    >
      {children}
    </motion.div>
  );
}
