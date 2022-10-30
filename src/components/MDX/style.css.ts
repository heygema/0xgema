import { globalStyle, style } from "@vanilla-extract/css";
import { globalVars } from "../../styles/theme.css";

export const link = style({
  background: "var(--accentBackground)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "opacity 0.1s ease-in",
});

export const blockquote = style({
  borderRadius: "8px",
  maxWidth: "450px",
  background: globalVars.colors.blockquote,
  fontWeight: 400,
  fontSize: "0.9rem",
  fontStyle: "italic",
  borderLeft: `10px solid ${globalVars.colors["grayish-02-transluscent-02"]}`,
  opacity: 0.6,
  margin: "1.5em 2px",
  padding: "1.5rem 2rem",
  quotes: `red`,
});

globalStyle(`${blockquote}:before`, {
  color: `${globalVars.colors["grayish-02-transluscent-02"]}`,
  content: "open-quote",
  fontSize: "4em",
  lineHeight: "0.1em",
  marginRight: "0.25em",
  verticalAlign: "-0.4em",
});

globalStyle(`${blockquote} p`, {
  display: "inline",
});
