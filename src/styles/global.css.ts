import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { globalVars } from "./theme.css";

globalFontFace("Open Sans", {
  src: 'local("Open Sans")',
});

//const grainy = `linear-gradient(0deg, rgba(0,0,0,0.83), rgba(0,0,0,0.72)),
//url("data:image/svg+xml,%3Csvg viewBox='0 0 224 224' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

globalStyle("html, body", {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  margin: 0,
  padding: 0,
  "@media": {
    "(prefers-color-scheme: dark)": {
      background: globalVars.colors.grayish,
      color: globalVars.colors["bg-light"],
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
