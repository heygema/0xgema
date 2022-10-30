import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { button } from "../components/Button/style.css";
import { BREAKPOINTS } from "../constant";

export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(3fr, 1fr))",
  gridTemplateRows: "minmax(100px, auto)",
  gridAutoFlow: "dense",
  gridGap: "0.5rem",
  "@media": {
    [`(max-width: ${BREAKPOINTS.mobile})`]: {
      gridGap: "1rem",
      gridTemplateColumns: "100px",
      gridTemplateRows: "minmax(auto, auto)",
    },
  },
});

export const easterEggContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  height: "15rem",
  width: "15rem",
  cursor: "pointer",
});

export const eggUnicorn = style({
  fontSize: "2rem",
});

export const pagination = style({
  paddingTop: "40px",
  gap: 2,
});

const onHover = style({
  transition: "opacity 0.1s ease-in",
  ":hover": {
    opacity: "0.8",
  },
});

const circle = style({
  borderRadius: "3px",
  textAlign: "center",
});

export const paginationButton = styleVariants({
  base: [circle, button, onHover],
  currentPage: [
    circle,
    button,
    onHover,
    {
      background: "var(--accentBackground)",
      border: "var(--accentBorder)",
      color: "var(--accentForeground)",
      fontWeight: 800,
      //WebkitBackgroundClip: "text",
      //WebkitTextFillColor: "transparent",
    },
  ],
});

globalStyle(`${pagination} > *`, {
  marginRight: 10,
});
