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
  height: "40px",
  width: "40px",
  display: "flex",
  borderRadius: "50%",
  borderWidth: "3px",
  borderStyle: "solid",
  borderColor: "var(--foreground)",
});
