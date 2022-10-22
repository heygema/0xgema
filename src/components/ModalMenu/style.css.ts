import { style } from "@vanilla-extract/css";

export const modal = style({
  borderRadius: "18px",
  padding: "5px",
  background: "var(--cmdKBackground)",
  backdropFilter: "blur(4px)",
  minHeight: "10rem",
  maxHeight: "33rem",
  width: "100%",
});

export const inputStyle = style({
  width: "100%",
  border: "none",
  height: "64px",
  padding: "0px 50px 0px 10px",
  fontSize: "18px",
  letterSpacing: "-0.013em",
  outline: "none",
  backgroundColor: "transparent",
  borderTopRightRadius: "10px",
  borderTopLeftRadius: "10px",
});
