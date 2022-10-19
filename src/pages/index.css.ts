import { style } from "@vanilla-extract/css";
import { globalVars } from "../styles/theme.css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(30%, 1fr))",
  gridTemplateRows: "minmax(100px, auto)",
  gridAutoFlow: "dense",
  gridGap: "0.5rem",
  "@media": {
    "(max-width: 680px)": {
      gridTemplateColumns: "100px",
      gridTemplateRows: "minmax(auto, auto)",
    },
  },
});

const cardBase = style({
  background: "hsla(0, 0%, 30%, 10%)",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",
  backdropFilter: "blur(1.1px)",
  borderRadius: "16px",
  padding: "20px",
  cursor: "pointer",
  ":active": {
    opacity: 0.85,
  },
  ":first-child": {
    backgroundColor: globalVars.colors.green,
    color: globalVars.colors.black,
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      ":first-child": {
        backgroundColor: globalVars.colors.green,
        color: globalVars.colors.black,
      },
    },
    "(prefers-color-scheme: light)": {
      ":first-child": {
        backgroundColor: globalVars.colors.blue,
        color: globalVars.colors.white,
      },
    },
  },
  placeItems: "center",
  textAlign: "left",
});

const cardGrid = style({
  selectors: {
    "&:nth-child(4n-2)": {
      gridColumn: "span 2",
    },
    "&:nth-child(6n)": {
      gridColumn: "span 3",
    },
  },
  "@media": {
    "(max-width: 680px)": {
      gridColumn: "span 3",
    },
  },
});

export const card = style([cardBase, cardGrid]);
