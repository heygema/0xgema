import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import MenuButton from '../MenuButton';
import * as styles from './style.css';
import { link as linkStyle } from '../../.././src/components/MDX/style.css';
import { motion } from 'framer-motion';
import { REVEAL_ANIMATE_PROPS } from '../../constant';

export default function Layout({ children }: { children: ReactNode }) {
  //const backGlow = (
  //<>
  //<aside className={styles.backGlowVariant.top} />
  //<aside className={styles.backGlowVariant.bottom} />
  //</>
  //);

  return (
    <>
      <Head>
        <title>@0xgema</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0xgema" />
        <meta name="twitter:creator" content="@0xgema" />
        <meta name="twitter:title" content="Gema" />
        <meta
          name="twitter:description"
          content="Gema's Internet Corner Space"
        />
        <meta
          name="twitter:image"
          content="https://0xgema.vercel.app/preview.png"
        />

        <meta property="og:url" content="https://gema.monster" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gema's Internet Corner Space" />
        <meta
          property="og:description"
          content="Gema's Internet Corner, sharing personal notes and stuff."
        />
        <meta property="og:image" content="/preview.png" />
      </Head>

      <nav className={styles.navigation}>
        <div className={styles.menuContainer}>
          <MenuButton />
        </div>
      </nav>
      <motion.main {...REVEAL_ANIMATE_PROPS} className={styles.main}>
        {children}
      </motion.main>
      <footer className={styles.footer}>
        <span>
          {`© ${new Date().getFullYear()} Gema Anggada • `}
          <Link
            aria-label={'license'}
            href={'https://creativecommons.org/licenses/by-sa/4.0/'}
            target="_blank"
            passHref
          >
            <a
              className={linkStyle}
              aria-label={'license'}
              target="_blank"
              rel="noopener noreferrer"
            >
              cc-by-sa
            </a>
          </Link>
        </span>
      </footer>
    </>
  );
}
