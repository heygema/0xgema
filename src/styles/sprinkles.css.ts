import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { globalVars as vars } from "./theme.css";

const BREAKPOINTS = {
  mobile: { "@media": "screen and (max-width: 680px)" },
  tablet: { "@media": "screen and (min-width: 768px)" },
  desktop: { "@media": "screen and (min-width: 1024px)" },
};

const responsiveProperties = defineProperties({
  conditions: BREAKPOINTS,
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
  defaultCondition: "darkMode",
  properties: {
    color: vars.colors,
    background: vars.colors,
    // etc.
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
