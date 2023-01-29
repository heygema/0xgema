import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { BREAKPOINTS } from "../../constant";
import { globalVars } from "../../styles/theme.css";

const cardBase = style({
  //background: globalVars.colors.transluscent,
  background: "var(--cardBackground)",
  //aspectRatio: "1.2 / 1",
  //aspectRatio: "1.3 / 1",
  boxShadow: globalVars.shadow.macShadow,
  backdropFilter: "blur(1.1px)",
  //border: "3px solid " + "var(--accentForeground)",
  //padding: "15px 15px 15px 30px",
  padding: "1.1rem",
  borderRadius: "16px",
  cursor: "pointer",
  ":active": {
    opacity: 0.85,
  },
  placeItems: "center",
  textAlign: "left",
  ":first-child": {},
  overflow: "hidden",
  transition: "color 350ms ease",
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
    [`(max-width: ${BREAKPOINTS.tablet})`]: {
      gridColumn: "span 3 !important",
      //aspectRatio: "1.6 / 1",
      //aspectRatio: "1 / 1",
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

export const card = style([
  cardBase,
  {
    //display: "flex",
    //justifyContent: "flex-start",
    //alignItems: "flex-start",
    //flexDirection: "column",
  },
  cardGridStyle,
]);

globalStyle(`${card}:hover`, {
  color: "var(--accentForeground)",
});

globalStyle(`${card}:before`, {
  content: "",
  height: "100%",
  width: "100%",
  left: "0px",
  top: "0px",
  position: "absolute",
  background: "var(--hoverGradient)",
  backgroundSize: "300% 300%",
  backgroundPosition: "0% 0%",
  transition: "background-position 350ms ease",
  WebkitTransition: "background-position 350ms ease",
});

globalStyle(`${card}:hover:before`, {
  backgroundPosition: "90% 90%",
  transform: "scale(1.08, 1.03)",
});

export const title = style({
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  opacity: 0.99,
  fontSize: "1.3rem",
});

export const postDate = style({
  fontSize: "0.7rem",
  opacity: 0.8,
  fontWeight: 500,
});

export const excerpt = style({
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  opacity: 0.99,
});
