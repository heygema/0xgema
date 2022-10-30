import { globalStyle, style } from "@vanilla-extract/css";

import * as styles from "../../core-ui/Card/style.css";

export const root = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(`${root} > *`, {
  cursor: "pointer",
});
