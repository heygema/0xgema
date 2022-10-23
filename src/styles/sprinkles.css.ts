import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { BREAKPOINTS } from "../constant";
import { globalVars as vars } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {
      "@media": `screen and (min-width: ${BREAKPOINTS["mobile-s"]}) and (max-width: ${BREAKPOINTS.mobile})`,
    },
    tablet: { "@media": `screen and (min-width: ${BREAKPOINTS.tablet})` },
    desktop: { "@media": `screen and (min-width: ${BREAKPOINTS.desktop})` },
    ["mobile-s"]: {
      "@media": `screen and (max-width: ${BREAKPOINTS["mobile-s"]})`,
    },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    width: vars.width,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.colors,
    background: vars.colors,
    // etc.
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
