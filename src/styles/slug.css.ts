import { style } from "@vanilla-extract/css";
import { globalVars } from "./theme.css";

export const date = style({
    opacity: 0.8,
});

export const backButton = style({
    padding: "8px",
    WebkitTransition: "background 0.2s ease",
    borderRadius: "5px",
    ":hover": {
        background: globalVars.colors.transluscent,
    },
});
