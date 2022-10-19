import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { globalVars } from "./theme.css";

globalFontFace("Open Sans", {
  src: 'local("Open Sans")',
});

globalStyle("html, body", {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  margin: 0,
  padding: 0,
  background: globalVars.colors.grayish,
  color: globalVars.colors.white,
  "@media": {
    "(prefers-color-scheme: light)": {
      background: globalVars.colors.white,
      color: globalVars.colors.black,
    },
    "(prefers-color-scheme: dark)": {
      background: globalVars.colors.grayish,
      color: globalVars.colors.white,
    },
  },
});

// just in case
globalStyle("body.dark", {
  background: globalVars.colors.grayish,
  color: globalVars.colors["bg-light"],
});

globalStyle("body::-webkit-scrollbar", {
  width: "0.75rem",
});

globalStyle("body::-webkit-scrollbar-track", {
  backgroundColor: "transparent",
});

globalStyle("body::-webkit-scrollbar-thumb", {
  background: "rgba(0,0,0,0.2)",
  borderRadius: "50px",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
  fontWeight: "500",
});
