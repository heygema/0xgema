import { globalStyle, style } from "@vanilla-extract/css";
import { globalVars } from "../../styles/theme.css";

export const root = style({
  background: "url(/assets/images/one-eye.gif)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "45px",
  aspectRatio: "1 / 1",
  cursor: "pointer",
  // margin: '0 auto',
  //borderRadius: "16px",
  borderRadius: "100%",
  transition: "box-shadow 0.2s linear",
});

globalStyle(`${root}:hover`, {
  boxShadow: globalVars.shadow.macShadow,
});
