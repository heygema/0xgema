import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { globalVars } from "../../styles/theme.css";

export const modal = style({
  cursor: "pointer",
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

export const searchContainer = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  padding: 18,
});

export const menuContainer = style({
  borderTop: `1px solid ${globalVars.colors.thinBorder}`,
  maxHeight: "400px",
  overflow: "scroll",
  padding: "0 10px 0 10px",
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

const menuItemBase = style({
  padding: 15,
  marginTop: 5,
  marginBottom: 5,
  borderRadius: 8,
  borderWidth: 1,
  display: "flex",
  alignItems: "center",
  filter: "brightness(65%)",
  transition: "filter 0.1s ease-in, background 0.05s ease-in",
  ":hover": {},
});

export const menuItem = styleVariants({
  default: [menuItemBase],
  highlighted: [
    menuItemBase,
    {
      filter: "brightness(100%)",
      background: globalVars.colors.genericTransparent,
    },
  ],
});

export const menuIcon = style({});

export const homeIcon = style({});

globalStyle(`${menuIcon} > path`, {
  stroke: "var(--foreground)",
});

globalStyle(`${homeIcon} > path`, {
  stroke: "var(--foreground)",
  strokeWidth: 1,
});

const baseMenu = style({
  marginLeft: "0.5rem",
  fontSize: "0.9rem",
});

export const menuTitle = styleVariants({
  withIcon: [baseMenu],
  noIcon: [baseMenu, { marginLeft: 0 }],
});
