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
  background: "transparent",
  height: "40px",
  width: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  borderWidth: "3.7px",
  borderStyle: "solid",
  borderColor: "var(--foreground)",
  // hmm
  //backgroundColor: "var(--foreground)",
});

export const CircleStackGlow = style([
  circleFallback,
  {
    position: "absolute",
    zIndex: -1,
    pointerEvents: "none",
    boxShadow: "none",
    filter: "blur(4.5px)",
    transform: "scale(1.01)",
    borderColor: globalVars.colors["whiteish-transluscent"],
  },
]);
