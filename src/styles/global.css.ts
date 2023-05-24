import {globalFontFace, globalStyle} from '@vanilla-extract/css';
import {BREAKPOINTS} from '../constant';
import {globalVars} from './theme.css';

export const readex = 'ReadexPro';
export const readexBold = 'ReadexPro-Bold';
export const jetbrains = 'JetBrains Mono';

globalFontFace(readex, {
  src: 'url(/assets/fonts/ReadexPro/ReadexPro-Light.ttf)',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(readexBold, {
  src: 'url(/assets/fonts/ReadexPro/ReadexPro-Regular.ttf)',
  fontStyle: 'bold',
  fontDisplay: 'swap',
});

globalFontFace(jetbrains, {
  src: 'url(/assets/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2)',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

const baseFontFamily = `${readex}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`;

globalStyle('html, body', {
  background: 'var(--background)',
  color: 'var(--foreground)',
  fontFamily: baseFontFamily,
  margin: 0,
  padding: 0,
  //fontSize: "15px",
  minHeight: '100vh',
  letterSpacing: '0.03rem',
  // NOTE: I like this media style, but..
  //"@media": {
  //"(prefers-color-scheme: light)": {
  //background: globalVars.colors.white,
  //color: globalVars.colors.black,
  //},
  //"(prefers-color-scheme: dark)": {
  //background: globalVars.colors.grayish,
  //color: globalVars.colors.white,
  //},
  //},
});

const getMobileFontSize = (baseNumber = 0) => ({
  '@media': {
    [`(max-width: ${BREAKPOINTS.mobile})`]: {
      fontSize: `${baseNumber - 0.3}rem`,
    },
  },
});

globalStyle('h1, h2, h3, h4, h5, h6, h7', {
  fontFamily: `${readexBold}, ${baseFontFamily}`,
  //letterSpacing: "0.025rem",
  fontWeight: 500,
});

// if you want gradient stuff
//background: globalVars.colors.gradientPastelRainbow,
//WebkitBackgroundClip: "text",
//WebkitTextFillColor: "transparent",
const typography: Array<[string, number]> = [
  ['h1', 3],
  ['h2', 2.5],
  ['h3', 1.8],
  ['h4', 1.5],
  ['h5', 1.3],
  ['h6', 1.2],
  ['h7', 1.1],
  ['p', 1],
];

for (let [element, size] of typography) {
  if (element === 'p') {
    continue;
  }
  globalStyle(element, {
    fontSize: `${size}rem`,
    ...getMobileFontSize(size),
  });
}

// following https://github.com/pacocoursey/next-themes pattern
globalStyle(':root', {
  vars: {
    //"--background": "hsla(217, 8%, 80%, 30%)",
    '--background': globalVars.colors.gray,
    '--foreground': globalVars.colors.black,

    '--accentBackground': globalVars.colors.lightThemeAccent,
    '--accentForeground': globalVars.colors.white,

    '--cardBackground': globalVars.colors['white-transluscent50'],

    // it's the glowing effect for cmd k button
    '--glowFilter': 'none',

    // it's the modal dialog menu
    '--cmdKBackground': globalVars.colors['white3-transluscent'],
    '--cmdKShadow': globalVars.shadow.mild,

    '--hoverGradient': globalVars.colors.redToPurpleGradient,

    '--url-color': globalVars.colors.blue,
  },
});

globalStyle("[data-theme='dark']", {
  vars: {
    '--background': globalVars.colors.black1,
    '--foreground': globalVars.colors.white,

    '--accentBackground': globalVars.colors.darkThemeAccent,
    '--accentForeground': globalVars.colors.black,

    '--cardBackground': globalVars.colors.transluscent,

    '--glowFilter': 'blur(3.5px)',

    '--cmdKBackground': globalVars.colors['grayish2-transluscent'],
    '--cmdKShadow': 'none',

    '--hoverGradient': globalVars.colors.hoverGradientDarkTheme,

    '--url-color': globalVars.colors.cyanBlue,
  },
});

/**
 * NOTE: to modify scrollbar
globalStyle("body::-webkit-scrollbar", {
  width: "0.75rem",
});

globalStyle("body::-webkit-scrollbar-track", {
  backgroundColor: "transparent",
});

globalStyle("body::-webkit-scrollbar-thumb", {
  background: "rgba(0,0,0,0.2)",
  borderRadius: "50px",
});
**/

globalStyle('*', {
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: '500',
});

globalStyle('.popup-content', {
  background: 'transparent !important',
  padding: 0,
  translate: '0px -220px',
  border: 'none !important',
  width: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '10px',
  pointerEvents: 'none',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.mobile})`]: {
      height: '100%',
      translate: 0,
      width: '100%',
      bottom: '0',
      alignItems: 'center',
      background: 'var(--cmdKBackground) !important',
    },
  },
});
