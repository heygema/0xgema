import { globalStyle, style } from "@vanilla-extract/css";

// TODO: wip
export const loading = style({
  //.exampleClass span {
  //width: 8px;
  //height: 8px;
  //border-radius: 50%;
  //background-color: white;
  //animation: flashing 1.4s infinite linear;
  //margin: 0 4px;
  //display: inline-block;
  //}
  //.exampleClass span:nth-child(2) {
  //animation-delay: 0.2s;
  //}
  //.exampleClass span:nth-child(3) {
  //animation-delay: 0.4s;
  //}
  //@keyframes flashing {
  //0% {
  //opacity: 0.2;
  //}
  //20% {
  //opacity: 1;
  //}
  //100% {
  //opacity: 0.2;
  //}
  //}
});

globalStyle(`${loading} span`, {
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "white",
  animation: "flashing 1.4s infinite linear",
  margin: "0 4px",
  display: "inline-block",
});
