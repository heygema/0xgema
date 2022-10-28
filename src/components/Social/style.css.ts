import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
});

globalStyle(`${root} > *`, {
  cursor: "pointer",
  marginLeft: "0.3rem",
  marginRight: "0.3rem",
});
