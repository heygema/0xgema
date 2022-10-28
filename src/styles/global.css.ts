import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { BREAKPOINTS } from "../constant";
import { globalVars } from "./theme.css";

const frauncesSB = "Fraunces Semi Bold";
const oxygen = "Oxygen";
const inter = "Inter";
const nanumPen = "Nanum Pen";

globalFontFace(frauncesSB, {
  src: "url(/assets/fonts/Fraunces/static/Fraunces_9pt_Soft/Fraunces_9pt_Soft-SemiBold.ttf)",
  fontStyle: "bold",
});

globalFontFace(inter, {
  src: "url(/assets/fonts/Inter/static/Inter-Regular.ttf)",
  fontStyle: "normal",
});

globalFontFace(oxygen, {
  src: "url(/assets/fonts/Oxygen/Oxygen-Regular.ttf)",
  fontStyle: "normal",
});

globalFontFace(nanumPen, {
  src: "url(/assets/fonts/Nanum_Pen_Script/NanumPenScript-Regular.ttf)",
});

const baseSerifFamily = `${frauncesSB}, Georgia, serif`;

const baseFontFamily = `${inter}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`;

globalStyle("html, body", {
  background: "var(--background)",
  color: "var(--foreground)",
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
  fontFamily: baseSerifFamily,
  fontWeight: 600,
});
globalStyle("h1", {
  //background: globalVars.colors.gradentPastelRainbow,
  //WebkitBackgroundClip: "text",
  //WebkitTextFillColor: "transparent",
  fontSize: "4rem",
});
globalStyle("h2", {
  fontSize: "2.5rem",
});
globalStyle("h3", {
  fontSize: "1.8rem",
});
globalStyle("a", {
  background: "var(--accentBackground)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "opacity 0.1s ease-in",
});
globalStyle("a:hover", {
  opacity: 0.8,
});

// following https://github.com/pacocoursey/next-themes pattern
globalStyle(":root", {
  vars: {
    "--background": globalVars.colors.white,
    "--foreground": globalVars.colors.black,

    "--accentBackground": globalVars.colors.blue,
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

    "--accentBackground": globalVars.colors.gradentPastelRainbow,
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
  WebkitTapHighlightColor: "transparent",
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
