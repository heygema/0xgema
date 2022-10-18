import { createGlobalTheme } from "@vanilla-extract/css";
import { createTheme } from "@vanilla-extract/css";

export const globalVars = createGlobalTheme(":root", {
  colors: {
    dark: "#111111",
    light: "#ECEAE4",
    blue: "#0423F7",
    gold: "#E8D9AC",
  },
  space: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  width: {
    "breakpoint-medium": "720px",
    "breakpoint-small": "420px",
  },
});

export const [themeClass, themeVars] = createTheme({
  background: {},
  color: {
    brand: "blue",
    white: "#fff",
  },
  space: {
    small: "4px",
    medium: "8px",
  },
});
