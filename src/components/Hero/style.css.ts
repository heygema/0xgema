import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
    width: "100%",
    padding: "20px",
    paddingTop: "0px",
});

export const title = style({
    marginBottom: "1rem",
});

export const detail = style({
    opacity: 0.6,
});

export const smiley = style({});

export const timezone = style({});

globalStyle(`${smiley} > path`, {
    stroke: "var(--foreground)",
});
