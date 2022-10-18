import { style } from "@vanilla-extract/css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(30%, 1fr))",
  gridTemplateRows: "minmax(20%, auto)",
});

export const card = style({
  background: "hsla(0, 0%, 30%, 10%)",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",
  backdropFilter: "blur(1.1px)",
  padding: "20px",
  margin: "0.5rem",
  cursor: "pointer",
  ":active": {
    opacity: 0.85,
  },
  //border: "2px solid rgba(255,255,255,0.1)",
});
