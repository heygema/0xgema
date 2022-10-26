import Head from "next/head";
import React, { ReactNode } from "react";
import CircleMenu from "../CircleMenu";
import * as styles from "./style.css";

export default function Layout({ children }: { children: ReactNode }) {
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
          content="Gema's Internet Corner Space, sharing personal notes and stuff."
        />
        <meta property="og:image" content="/preview.png" />
      </Head>

      <nav className={styles.navigation}>
        <div className={styles.menuContainer}>
          <CircleMenu />
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
