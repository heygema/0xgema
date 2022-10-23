import { globalStyle, style } from "@vanilla-extract/css";
import { globalVars } from "../../styles/theme.css";

export const modal = style({
  display: "block",
  flexDirection: "column",
  borderRadius: "18px",
  padding: "5px",
  background: "var(--cmdKBackground)",
  backdropFilter: "blur(4px)",
  minHeight: "10rem",
  maxHeight: "33rem",
  width: "100%",
});

export const inputStyle = style({
  width: "100%",
  border: "none",
  height: "64px",
  padding: "0px 50px 0px 10px",
  fontSize: "18px",
  letterSpacing: "-0.013em",
  outline: "none",
  backgroundColor: "transparent",
  borderTopRightRadius: "10px",
  borderTopLeftRadius: "10px",
});

export const menuContainer = style({
  borderTop: `1px solid ${globalVars.colors["grayish-02-transluscent"]}`,
  height: "400px",
  overflow: "scroll",
});

//globalStyle(`${menuContainer}::-webkit-scrollbar`, {
//width: "0.05rem",
//});

globalStyle(`${menuContainer}::-webkit-scrollbar-track`, {
  backgroundColor: "transparent",
});

globalStyle(`${menuContainer}::-webkit-scrollbar-thumb`, {
  background: "rgba(0,0,0,0.2)",
  borderRadius: "50px",
});

export const menuItem = style({
  padding: 15,
  marginTop: 5,
  marginBottom: 5,
  borderRadius: 8,
  borderWidth: 1,
  filter: "brightness(65%)",
  transition: "filter 0.1s ease-in",
  cursor: "pointer",
  ":hover": {
    filter: "brightness(100%)",
  },
});
