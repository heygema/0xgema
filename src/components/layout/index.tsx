import React, { ReactNode } from "react";
import CircleButton from "../circleButton";
import * as styles from "./layout.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.menuContainer}>
          <CircleButton />
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
