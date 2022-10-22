import { createGlobalTheme } from "@vanilla-extract/css";
import { createTheme } from "@vanilla-extract/css";

const BASE_COLORS = {
  grayish: "hsl(200, 6%, 10%)",
  "grayish-02": "hsl(200, 6%, 15%)",
  "grayish-02-transluscent": "hsla(200, 6%, 10%, 97%)",
  black: "#111111",
  white: "#ECEAE4",
  "whiteish-transluscent": "hsla(200, 100%, 100%, 95%)",
  light: "#ECEAE4",
  blue: "#0423F7",
  green: "hsl(79, 100%, 58%)",
  gold: "#E8D9AC",
};

export const globalVars = createGlobalTheme(":root", {
  colors: {
    ...BASE_COLORS,
    lightThemeAccent: BASE_COLORS.grayish,
    darkThemeAccent: BASE_COLORS.green,
  },
  shadow: {
    mild: "0px 2px 5px rgba(0,0,0,0.25)",
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
