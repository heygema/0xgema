import Head from 'next/head';
import React, { ReactNode } from 'react';

import { motion } from 'framer-motion';
import { REVEAL_ANIMATE_PROPS } from '../../constant';

import * as styles from './style.css';

export default function Layout({ children }: { children: ReactNode }) {
  //const backGlow = (
  //<>
  //<aside className={styles.backGlowVariant.top} />
  //<aside className={styles.backGlowVariant.bottom} />
  //</>
  //);

  return (
    <div className={styles.layout}>
      <Head>
        <title>XOR</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0xgema" />
        <meta name="twitter:creator" content="@0xgema" />
        <meta name="twitter:title" content="XOR" />
        <meta name="twitter:description" content="personal website of gema" />
        <meta
          name="twitter:image"
          content="https://0xgema.vercel.app/preview.png"
        />

        <meta property="og:url" content="https://xor.monster" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="XOR" />
        <meta property="og:description" content="personal website of gema" />
        <meta property="og:image" content="/preview.png" />
        <meta name="description" content="personal website of gema" />
      </Head>

      <motion.main {...REVEAL_ANIMATE_PROPS} className={styles.main}>
        {children}
      </motion.main>
      <footer className={styles.footer}>
        <span>{`© ${new Date().getFullYear()} Gema Anggada ・ `}</span>
        <span>
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-SA 4.0
          </a>
        </span>
      </footer>
    </div>
  );
}
