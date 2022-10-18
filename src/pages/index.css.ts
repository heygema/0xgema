import { style } from "@vanilla-extract/css";

export const card = style({
  background: "hsla(0, 0%, 30%, 10%)",
  boxShadow: "30px 30px 35px rgba(0,0,0,0.25)",
  backdropFilter: "blur(1.1px)",
  padding: "20px",
  margin: "0.5rem",
  //border: "2px solid rgba(255,255,255,0.1)",
});
