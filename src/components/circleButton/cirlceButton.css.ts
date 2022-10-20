import { style } from "@vanilla-extract/css";

export const container = style({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "50px",
  borderRadius: " 8px",
});

export const circleFallback = style({
  height: "100%",
  width: "100%",
  display: "flex",
  flex: 1,
  borderRadius: "50%",
  background: "var(--accentBackground)",
});
