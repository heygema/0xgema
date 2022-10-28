import { style } from "@vanilla-extract/css";
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
