import React from "react";

export function StyledTitle({
  text,
  type,
}: {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5";
}) {
  //<>
  //<span className={styles.xSymbol}>×</span> {text}{" "}
  //<span className={styles.xSymbolVariant.faster}>×</span>
  //</>
  return React.createElement(type, {}, text);
}
