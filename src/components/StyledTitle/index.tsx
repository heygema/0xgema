import React from "react";
import * as styles from "./style.css";

export function StyledTitle({
  text,
  type,
}: {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5";
}) {
  return React.createElement(type, {
    children: (
      <>
        <span className={styles.xSymbol}>×</span> {text}{" "}
        <span className={styles.xSymbolVariant.faster}>×</span>
      </>
    ),
  });
}
