import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const navigation = style({
  width: "100%",
  top: 0,
  height: "4rem",
});

const mainBase = style({
  margin: "0 auto",
  marginTop: "20vmin",
  marginBottom: "5rem",
});

const mainResponsive = sprinkles({
  width: {
    desktop: "breakpoint-medium",
    tablet: "breakpoint-medium",
    mobile: "breakpoint-small",
    ["mobile-s"]: "breakpoint-x-small",
  },
});

export const menuContainer = style([
  style({
    margin: "0 auto",
    paddingTop: 63,
    paddingRight: "5vmin",
    height: "5rem",
    display: "flex",
    //justifyContent: "flex-end",
    // experiment on the center
    justifyContent: "flex-end",
    flexDirection: "row",
  }),
  mainResponsive,
]);

export const footer = style([
  style({
    margin: "0 auto",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  }),
  mainResponsive,
]);

export const main = style([mainBase, mainResponsive]);
