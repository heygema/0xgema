import { globalStyle, style } from "@vanilla-extract/css";
import { globalVars } from "../../styles/theme.css";

export const link = style({
  background: "var(--accentBackground)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "opacity 0.1s ease-in",
  ":hover": {
    textDecoration: "underline",
    textDecorationStyle: "wavy",
    textDecorationColor: "var(--accentBackground)",
  },
});

export const blockquote = style({
  borderRadius: "8px",
  maxWidth: "450px",
  background: globalVars.colors.blockquote,
  fontWeight: 400,
  fontSize: "0.8rem",
  //fontStyle: "italic",
  borderLeft: `10px solid ${globalVars.colors["grayish-02-transluscent-02"]}`,
  opacity: 0.6,
  margin: "2rem 2px 2rem 1.7vmin",
  padding: "1rem 1rem",
  quotes: `red`,
});

globalStyle(`${blockquote} > p`, {
  fontSize: "0.8rem",
});

globalStyle(`${blockquote}:before`, {
  color: `${globalVars.colors["grayish-02-transluscent-02"]}`,
  content: "open-quote",
  fontWeight: "100",
  fontSize: "4em",
  lineHeight: "0.1em",
  marginRight: "0.25em",
  verticalAlign: "-0.4em",
});

export const paragraph = style({
  lineHeight: "1.5rem",
});

globalStyle(`${blockquote} p`, {
  display: "inline",
});
