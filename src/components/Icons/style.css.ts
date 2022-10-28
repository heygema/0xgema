import { globalStyle, style } from "@vanilla-extract/css";

export const menuIcon = style({});

export const boldIcon = style({});

globalStyle(`${menuIcon} > path`, {
  stroke: "var(--foreground)",
});

globalStyle(`${boldIcon} > path`, {
  stroke: "var(--foreground)",
  strokeWidth: 1.8,
});
