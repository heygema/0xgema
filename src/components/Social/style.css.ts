import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
});

globalStyle(`${root} > *`, {
  cursor: "pointer",
  marginLeft: "0.3rem",
  marginRight: "0.3rem",
});
