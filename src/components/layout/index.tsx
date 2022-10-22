import React, { ReactNode, Suspense } from "react";
import CircleMenu from "../CircleMenu";
import * as styles from "./layout.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.menuContainer}>
          <Suspense fallback={"..."}>
            <CircleMenu />
          </Suspense>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
