import { style, styleVariants } from "@vanilla-extract/css";
import { BREAKPOINTS } from "../constant";
import { globalVars } from "../styles/theme.css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(3fr, 1fr))",
  gridTemplateRows: "minmax(100px, auto)",
  gridAutoFlow: "dense",
  gridGap: "0.5rem",
  "@media": {
    [`(max-width: ${BREAKPOINTS.mobile})`]: {
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
  placeItems: "center",
  textAlign: "left",
});

const cardSystemColorStyle = style({
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
  selectors: {
    "&:nth-child(4n-2)": {
      gridColumn: "span 2",
    },
    "&:nth-child(6n)": {
      gridColumn: "span 3",
    },
  },
  "@media": {
    [`(max-width: ${BREAKPOINTS.mobile})`]: {
      gridColumn: "span 3",
    },
  },
});

const cardAccent = styleVariants({
  dark: {
    backgroundColor: globalVars.colors.darkThemeAccent,
    color: globalVars.colors.black,
  },
  light: {
    backgroundColor: globalVars.colors.lightThemeAccent,
    color: globalVars.colors.white,
  },
});

export const card = style([cardBase, cardSystemColorStyle, cardGridStyle]);

export const cardDarkAccented = style([
  cardBase,
  cardGridStyle,
  cardAccent.dark,
]);

export const cardLightAccented = style([
  cardBase,
  cardGridStyle,
  cardAccent.light,
]);

export const accentedCardStyle = {
  system: card,
  dark: cardDarkAccented,
  light: cardLightAccented,
};
