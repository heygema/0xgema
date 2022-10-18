import React, { ReactNode } from "react";
import * as styles from "./layout.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className={styles.navigation} />
      <main className={styles.main}>{children}</main>
    </>
  );
}
