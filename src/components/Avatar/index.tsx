import React from 'react';
import Link from 'next/link';
import { PowerGlitch } from 'powerglitch';
import * as styles from './style.css';
import { motion } from 'framer-motion';
import { CLICKABLE_RESPONSE_PROPS } from '../../constant';

export function Avatar() {

  React.useEffect(() => {
    PowerGlitch.glitch('.glitch');
  }, [])
  
  return (
    <Link href="/">
      <motion.div
        {...CLICKABLE_RESPONSE_PROPS}
        title="avatar"
        className={[styles.root, "glitch"].join(" ")}
      />
    </Link>
  );
}
