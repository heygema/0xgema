import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const navigation = style({
  position: "fixed",
  width: "100%",
  top: 0,
  height: "4rem",
});

const mainBase = style({
  margin: "0 auto",
  marginTop: "11rem",
  marginBottom: "10rem",
});

const mainResponsive = sprinkles({
  width: {
    desktop: "breakpoint-medium",
    tablet: "breakpoint-medium",
    mobile: "breakpoint-small",
  },
});

export const menuContainer = style([
  style({
    margin: "0 auto",
    paddingTop: 10,
    height: "5rem",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  }),
  mainResponsive,
]);

export const main = style([mainBase, mainResponsive]);