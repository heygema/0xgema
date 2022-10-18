import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { globalVars } from "./theme.css";

globalFontFace("Open Sans", {
  src: 'local("Open Sans")',
});

globalStyle("html, body", {
  background: "teal",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  margin: 0,
  padding: 0,
  "@media": {
    "(prefers-color-scheme: dark)": {
      background: globalVars.colors.dark,
      color: globalVars.colors.light,
    },
  },
});

globalStyle("body::-webkit-scrollbar", {
  width: "0.5rem",
});

globalStyle("body::-webkit-scrollbar-track", {
  backgroundColor: "#1e1e24",
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
