import { style, styleVariants } from "@vanilla-extract/css";
import { BREAKPOINTS } from "../../constant";
import { globalVars } from "../../styles/theme.css";

export const card = style({
  background: globalVars.colors.transluscent,
  boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",
  backdropFilter: "blur(1.1px)",
  borderRadius: "16px",
  padding: "40px",
  placeItems: "center",
  textAlign: "left",
});

const center = style({
  flexDirection: "column",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

export const cardVariant = styleVariants({
  normal: [center, card],
  empty: [center],
  emptyPadded: [
    center,
    {
      padding: "40px",
      boxShadow: "none",
      background: "none",
    },
  ],
  bio: [
    card,
    {
      "@media": {
        [`(max-width: ${BREAKPOINTS.mobile})`]: {
          background: "none",
          boxShadow: "none",
          padding: 0,
          backdropFilter: "none",
        },
      },
    },
  ],
});
