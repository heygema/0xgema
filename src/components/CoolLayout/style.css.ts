import { style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { globalVars } from "../../styles/theme.css";

export const navigation = style({
  width: "100%",
  top: 0,
  height: "4rem",
});

const mainBase = style({
  margin: "0 auto",
  marginTop: "10vmin",
  marginBottom: "5rem",
});

const mainResponsive = sprinkles({
  width: {
    desktop: "breakpoint-desktop",
    tablet: "breakpoint-tablet",
    mobile: "breakpoint-mobile",
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

export const backGlow = style({
  position: "absolute",
  background: globalVars.colors.gradientPastelRainbow,
  aspectRatio: "1 / 1",
  borderRadius: "100%",
  height: "300px",
  filter: "blur(90px)",
  opacity: 0.2,
  pointerEvents: "none",
});

export const backGlowVariant = styleVariants({
  top: [backGlow, { top: 1 }],
  bottom: [
    backGlow,
    {
      height: "100px",
      bottom: 1,
      right: 1,
    },
  ],
});

export const main = style([mainBase, mainResponsive]);
