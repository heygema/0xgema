import {createTheme, style} from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  background: {
    grain:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),\n    url(\"data:image/svg+xml,%3Csvg viewBox='0 0 224 224' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E",
  },
  color: {
    brand: 'blue',
    white: '#fff',
  },
  space: {
    small: '4px',
    medium: '8px',
  },
});

export const hero = style({
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  padding: vars.space.medium,
});
