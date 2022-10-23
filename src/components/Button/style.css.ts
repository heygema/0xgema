import { style } from "@vanilla-extract/css";
import { globalVars } from "../../styles/theme.css";

export const button = style({
  cursor: "pointer",
  background: globalVars.colors.genericTransparent,
  boxShadow: "0px 1px 1px rgba(0,0,0,0.25)",
  borderWidth: 0,
  padding: 10,
  //padding: "12px 24px",
  borderRadius: "6px",
  //borderBottom: "4px solid hsl(241, 3%, 73%)",
  borderTop: "0px",
  transition: "transform 250ms cubic-bezier(.2,.8,.4,1)",
  ":hover": {
    borderBottomWidth: 0,
    borderTopWidth: "4px",
    //transform: "scale(1.1)",
  },
  ":active": {
    transform: "scale(0.9)",
  },
});
