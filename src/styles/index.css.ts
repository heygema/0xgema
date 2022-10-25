import { globalStyle, style } from "@vanilla-extract/css";
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

export const paginationButton = style({
  paddingTop: "40px",
  gap: 2,
});

globalStyle(`${pagination} > *`, {
  marginRight: 10,
});
