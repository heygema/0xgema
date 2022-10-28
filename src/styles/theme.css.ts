import { createGlobalTheme } from "@vanilla-extract/css";
import { createTheme } from "@vanilla-extract/css";

const BASE_COLORS = {
    grayish: "hsl(200, 6%, 10%)",
    "grayish-02": "hsl(200, 6%, 15%)",
    "grayish-02-transluscent": "hsla(200, 6%, 10%, 97%)",
    black: "hsla(0, 0%, 7%, 87%)",
    white: "hsla(45, 17%, 91%, 87%)",
    "white-2": "hsl(0, 0%, 93.0%)",
    "whiteish-transluscent": "hsla(200, 100%, 100%, 95%)",
    light: "#ECEAE4",
    blue: "#0423F7",
    lime: "hsl(79, 100%, 58%)",
    gold: "#E8D9AC",
    purplish: "hsl(239, 86%, 55%)",
};

export const globalVars = createGlobalTheme(":root", {
    colors: {
        ...BASE_COLORS,
        transluscent: "hsla(0, 0%, 30%, 10%)",
        genericTransparent: "hsla(0, 0%, 30%, 10%)",
        thinBorder: "hsla(200, 6%, 10%, 8%)",
        lightThemeAccent: BASE_COLORS.purplish,
        darkThemeAccent: BASE_COLORS.lime,
        gradientTheme1:
            "linear-gradient(90deg, rgba(0,255,12,1) 9%, rgba(98,255,7,1) 39%, rgba(162,108,205,0.9304315476190477) 69%, rgba(255,39,236,1) 100%)",
        gradentPastelRainbow:
            "linear-gradient(to right, rgba(0,0,0,0), teal), linear-gradient(to right, rgba(255,0,100,.3), rgba(255,100,127,.2)), linear-gradient(to top right, yellow, rgba(0,0,0,0)), radial-gradient(closest-corner at 20% 80%, yellow, red)",
        // softer on the night
    },
    shadow: {
        mild: "0px 2px 5px rgba(0,0,0,0.25)",
    },
    space: {
        none: "0",
        small: "4px",
        medium: "8px",
        large: "16px",
    },
    width: {
        "breakpoint-medium": "750px",
        "breakpoint-small": "420px",
        "breakpoint-x-small": "290px",
    },
});

export const [themeClass, themeVars] = createTheme({
    background: {},
    color: {
        brand: "blue",
        white: "#fff",
    },
    space: {
        small: "4px",
        medium: "8px",
    },
});
