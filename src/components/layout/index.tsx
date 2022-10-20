import React, { ReactNode } from "react";
import ThemeSwitch from "../ThemeChanger";
import * as styles from "./layout.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className={styles.navigation} />
      <main className={styles.main}>
        <ThemeSwitch />

        {children}
      </main>
    </>
  );
}
