import { style } from "@vanilla-extract/css";
import { globalVars } from "../../styles/theme.css";

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
  boxShadow: globalVars.shadow.mild,
  height: "40px",
  width: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  borderWidth: "3.7px",
  borderStyle: "solid",
  borderColor: "var(--foreground)",
});