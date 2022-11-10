import { keyframes, style } from "@vanilla-extract/css";

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

export const xSymbol = style({
  animation: `${shaky} 0.7s infinite ease`,
  display: "inline-block",
});
