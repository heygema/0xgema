import { createGlobalTheme } from '@vanilla-extract/css';

const BASE_COLORS = {
  black: 'hsla(0, 0%, 7%, 87%)',
  black1: 'hsl(180deg 10.03% 5.14%)',
  // black2: 'hsla(0, 0%, 0%, 0.71)',
  gray: 'hsla(217, 8%, 80%, 30%)',
  grayish: 'hsl(200, 6%, 10%)',
  grayish2: 'hsl(200, 6%, 15%)',
  'grayish2-transluscent': 'hsla(200, 6%, 10%, 97%)',
  'grayish2-transluscent2': 'hsla(200, 6%, 10%, 37%)',
  cream: 'hsla(51, 31%, 95%, 87%)',
  //cream: "hsla(51, 31%, 90%, 17%)",
  white: 'hsla(45, 17%, 91%, 87%)',
  'white-transluscent50': 'hsla(0, 0%, 98%, 50%)',
  white2: 'hsl(0, 0%, 93.0%)',
  'white3-transluscent': 'hsla(200, 100%, 100%, 95%)',
  white3: 'hsla(200, 100%, 100%, 75%)',
  white4: 'hsla(200, 100%, 100%, 65%)',
  transluscent: 'hsla(0, 0%, 30%, 10%)',
  genericTransparent: 'hsla(0, 0%, 30%, 10%)',
  cyanBlue: 'hsl(211deg, 92%, 64%)',
  blue: '#0423F7',
  lime: 'hsl(79, 100%, 58%)',
  lime1: 'hsl(74, 85%, 69%)',
  orange: '#F78D42',
  gold: '#E8D9AC',
  purple: 'hsl(239, 86%, 55%)',
  redToPurpleGradient:
    'linear-gradient(130deg, rgba(255,0,0,0) 33%, rgba(227,88,31,1) 66%, rgba(161,44,128,1) 81%, rgba(125,22,198,1) 100%)',
  redToPurpleGradientFull:
    'linear-gradient(130deg, rgb(255, 0, 0) 33%, rgba(227,88,31,1) 66%, rgba(161,44,128,1) 81%, rgba(125,22,198,1) 100%)',
  gradientTheme1:
    'linear-gradient(90deg, rgba(0,255,12,1) 9%, rgba(98,255,7,1) 39%, rgba(162,108,205,0.9304315476190477) 69%, rgba(255,39,236,1) 100%)',
  gradientPastelRainbow:
    'linear-gradient(to right, rgba(0,0,0,0), teal), linear-gradient(to right, rgba(255,0,100,.3), rgba(255,100,127,.2)), linear-gradient(to top right, yellow, rgba(0,0,0,0)), radial-gradient(closest-corner at 20% 80%, yellow, red)',
  gradientPastelRainbowSkewed: `
    linear-gradient(130deg, rgba(0,0,0,0) 33%, yellow 83.5%, teal 100%),
    radial-gradient(closest-corner at 75%, red, transparent)
    `,
  hoverGradientDarkTheme: `
    linear-gradient(130deg, rgba(0,0,0,0) 0% 33%, #DF7B48 66%, #978560 83.5%, #24807C 100%)
    `,
  hoverGradientLightTheme: `
    linear-gradient(130deg, rgba(0,0,0,0) 0% 33%, #0423F7 66%, #3d56f7 83.5%, #1ad9e0 100%)
    `,
  gradientBlue: `
    linear-gradient(130deg, #0423F7 0% 33%, #3d56f7 66%, #1ad9e0 100%)
    `,
  hoverGradientLightThemeAllBlue: `
    linear-gradient(130deg, rgba(0,0,0,0) 0% 33%, #0423F7 66% 100%)
    `,
};

export const globalVars = createGlobalTheme(':root', {
  colors: {
    ...BASE_COLORS,
    thinBorder: 'hsla(200, 6%, 10%, 8%)',
    blockquote: 'hsla(0, 0%, 74%, 20%)',
    lightThemeAccent: BASE_COLORS.redToPurpleGradientFull,
    darkThemeAccent: BASE_COLORS.gradientPastelRainbow,
  },
  shadow: {
    mild: '0px 2px 5px rgba(0,0,0,0.25)',
    macShadow: '0 2px 7px 4px rgba(0, 0, 0, 0.1)',
  },
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  width: {
    'breakpoint-desktop': '600px',
    'breakpoint-tablet': '450px',
    'breakpoint-mobile': '350px',
    'breakpoint-x-small': '340px',
  },
});
