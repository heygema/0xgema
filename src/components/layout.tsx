import React, { ReactNode } from "react";
import * as styles from "./layout.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        style={{ width: "100px", height: "200px", backgroundColor: "red" }}
      />
      <main className={[styles.main].join(" ")}>{children}</main>
    </>
  );
}
