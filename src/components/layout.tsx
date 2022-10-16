import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        style={{ width: "100px", height: "200px", backgroundColor: "red" }}
      />
      <main
        style={{ backgroundColor: "green", margin: "0 auto", width: "720px" }}
      >
        {children}
      </main>
    </>
  );
}
