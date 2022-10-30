import { style } from "@vanilla-extract/css";
import * as stylesSocial from "../Social/style.css";
import * as stylesCard from "../../.././src/core-ui/Card/style.css";

const styles = {
  ...stylesSocial,
  ...stylesCard,
};

export const root = style([
  styles.root,
  {
    justifyContent: "normal",
  },
]);

export const display = style({
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
});

export const project = style([
  styles.card,
  {
    padding: "0px",
    paddingBottom: "15px",
    placeItems: "unset",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease",
    textAlign: "left",
    ":hover": {
      transform: "scale(1.03)",
    },
  },
]);

export const title = style({
  fontWeight: "bold",
});

export const content = style({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
});
