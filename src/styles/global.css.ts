import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { BREAKPOINTS } from "../constant";
import { globalVars } from "./theme.css";

globalFontFace("Open Sans", {
  src: 'local("Open Sans")',
});

const jost = "Jost";

globalFontFace(jost, {
  src: "../.././public/assets/fonts/Jost/static/Jost-Regular.ttf",
  fontWeight: 500,
});

const baseFontFamily = `${jost}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`;

globalStyle("html, body", {
  fontFamily: baseFontFamily,
  fontWeight: 300,
  margin: 0,
  padding: 0,
  // NOTE: I like this media style, but..
  //"@media": {
  //"(prefers-color-scheme: light)": {
  //background: globalVars.colors.white,
  //color: globalVars.colors.black,
  //},
  //"(prefers-color-scheme: dark)": {
  //background: globalVars.colors.grayish,
  //color: globalVars.colors.white,
  //},
  //},
});

globalStyle("h1, h2, h3", {
  fontWeight: 600,
});
globalStyle("h1", {
  fontSize: "4rem",
});
globalStyle("h2", {
  fontSize: "3rem",
});
globalStyle("h3", {
  fontSize: "2rem",
});

// following https://github.com/pacocoursey/next-themes pattern
globalStyle(":root", {
  vars: {
    "--background": globalVars.colors.white,
    "--foreground": globalVars.colors.black,

    "--accentBackground": globalVars.colors.lightThemeAccent,
    "--accentForeground": globalVars.colors.white,

    // it's the glowing effect for cmd k button
    "--glowFilter": "none",

    // it's the modal dialog menu
    "--cmdKBackground": globalVars.colors["whiteish-transluscent"],
    "--cmdKShadow": globalVars.shadow.mild,
  },
});

globalStyle("[data-theme='dark']", {
  vars: {
    "--background": globalVars.colors.grayish,
    "--foreground": globalVars.colors.white,

    "--accentBackground": globalVars.colors.darkThemeAccent,
    "--accentForeground": globalVars.colors.black,

    "--glowFilter": "blur(3.5px)",

    "--cmdKBackground": globalVars.colors["grayish-02-transluscent"],
    "--cmdKShadow": "none",
  },
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

globalStyle(".popup-content", {
  background: "transparent !important",
  padding: 0,
  translate: "0px -220px",
  border: "none !important",
  width: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "10px",
  pointerEvents: "none",
  "@media": {
    [`screen and (max-width: ${BREAKPOINTS.mobile})`]: {
      width: "98%",
      translate: "0px -200px",
    },
  },
});
