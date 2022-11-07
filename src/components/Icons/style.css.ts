import { globalStyle, style } from "@vanilla-extract/css";

export const menuIcon = style({});

export const boldIcon = style({});

export const semiBoldIcon = style({});

globalStyle(`${menuIcon} > path`, {
  stroke: "var(--foreground)",
});

globalStyle(`${semiBoldIcon} > path`, {
  stroke: "var(--foreground)",
  strokeWidth: 0.3,
});

globalStyle(`${boldIcon} > path`, {
  stroke: "var(--foreground)",
  strokeWidth: 1.8,
});
