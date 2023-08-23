import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const pumpAndDump = keyframes({
  "0%": {
    height: "5px",
  },
  "50%": {
    height: "15px",
  },
  "100%": {
    height: "5px",
  },
});

export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const loading = style({});

const baseDot = {
  width: 8,
  height: 8,
  borderRadius: "20px",
  background: "var(--accentBackground)",
  animation: `${pumpAndDump} 0.7s infinite ease`,
  margin: "0 4px",
  display: "inline-block",
};

globalStyle(`${loading} span`, baseDot);

globalStyle(`${loading} span:nth-child(1)`, {
  ...baseDot,
  animation: `${pumpAndDump} 1.2s infinite ease`,
});

globalStyle(`${loading} span:nth-child(3)`, {
  ...baseDot,
  animation: `${pumpAndDump} 0.6s infinite ease`,
});
