import React, { ReactNode } from "react";
import CircleMenu from "../CircleMenu";
import * as styles from "./layout.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.menuContainer}>
          <CircleMenu />
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
