import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const navigation = style({
  width: "100%",
  height: "4rem",
  backgroundColor: "red",
});

const mainBase = style({
  margin: "0 auto",
  marginTop: "5rem",
});

const mainResponsive = sprinkles({
  width: {
    desktop: "breakpoint-medium",
    tablet: "breakpoint-medium",
    mobile: "breakpoint-small",
  },
});

export const main = style([mainBase, mainResponsive]);
