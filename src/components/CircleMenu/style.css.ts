import { globalStyle, style } from "@vanilla-extract/css";

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
  borderRadius: "10px",
  borderWidth: "3.7px",
  borderStyle: "solid",
  borderColor: "var(--accentBackground)",
  backgroundColor: "var(--accentBackground)",
  filter: "brightness(120%)",
  //transform: "rotate(45deg)",
  // hmm
  //backgroundColor: "var(--foreground)",
});

export const CircleStackGlow = style([
  circleFallback,
  {
    position: "absolute",
    zIndex: -1,
    pointerEvents: "none",
    boxShadow: "var(--cmdKShadow)",
    filter: "var(--glowFilter)",
    //transform: "scale(1.01)",
    //borderColor: globalVars.colors["whiteish-transluscent"],
  },
]);

export const smiley = style({});

globalStyle(`${smiley} > path`, {
  stroke: "var(--accentForeground)",
});
