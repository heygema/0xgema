import { style, styleVariants } from "@vanilla-extract/css";
import { BREAKPOINTS } from "../../constant";
import { globalVars } from "../../styles/theme.css";

const cardBase = style({
  background: globalVars.colors.transluscent,
  aspectRatio: "1 / 1",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",
  backdropFilter: "blur(1.1px)",
  border: "3px solid " + globalVars.colors.blue,
  borderRadius: "16px",
  padding: "20px",
  cursor: "pointer",
  ":active": {
    opacity: 0.85,
  },
  placeItems: "center",
  textAlign: "left",
  ":first-child": {},
});

export const cardSystemColorStyle = style({
  "@media": {
    "(prefers-color-scheme: dark)": {
      ":first-child": {
        backgroundColor: globalVars.colors.darkThemeAccent,
        color: globalVars.colors.black,
      },
    },
    "(prefers-color-scheme: light)": {
      ":first-child": {
        backgroundColor: globalVars.colors.lightThemeAccent,
        color: globalVars.colors.white,
      },
    },
  },
});

const cardGridStyle = style({
  "@media": {
    [`(max-width: ${BREAKPOINTS.mobile})`]: {
      gridColumn: "span 3 !important",
    },
  },
});

export const cardAccent = styleVariants({
  dark: {
    backgroundColor: globalVars.colors.darkThemeAccent,
    color: globalVars.colors.black,
  },
  light: {
    backgroundColor: globalVars.colors.lightThemeAccent,
    color: globalVars.colors.white,
  },
});

export const draggableCard = style({
  cursor: "grab",
});

export const card = style([cardBase, cardGridStyle]);

export const title = style({
  fontSize: "1.5rem",
  fontWeight: 800,
});

export const postDate = style({
  fontSize: "0.8rem",
  opacity: 0.8,
  fontWeight: 500,
});
