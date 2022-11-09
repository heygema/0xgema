import { globalStyle, keyframes, style } from "@vanilla-extract/css";

// NOTE: funny
export const shaky = keyframes({
  "0%": { transform: "rotate(0deg)" },

  "20%": { transform: "rotate(-15deg)" },
  "30%": { transform: "rotate(-5deg)" },
  "40%": { transform: "rotate(-10deg)" },

  "70%": { transform: "rotate(15deg)" },
  "80%": { transform: "rotate(5deg)" },
  "90%": { transform: "rotate(10deg)" },

  "100%": { transform: "rotate(0deg)" },
});

export const container = style({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "max-content",
  width: "max-content",
  borderRadius: " 8px",
});

export const circleFallback = style({
  height: "45px",
  width: "45px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  background: "var(--accentBackground)",
  color: "var(--accentForeground)",
  fontSize: "1.3rem",
  zIndex: "1",
});

export const CircleStackGlow = style([
  circleFallback,
  {
    position: "absolute",
    pointerEvents: "none",
    boxShadow: "var(--cmdKShadow)",
    filter: "var(--glowFilter)",
    transform: "scale(1.01)",
  },
]);

export const smiley = style({});

globalStyle(`${smiley} > path`, {
  stroke: "var(--accentForeground)",
});
