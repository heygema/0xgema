import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { BREAKPOINTS } from '../../constant';
import { globalVars } from '../../styles/theme.css';

globalStyle('.popup-content', {
  background: 'transparent !important',
  padding: 0,
  // translate: '0px -220px',
  border: 'none !important',
  width: '600px',
  // idk really
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'flex-start',
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

export const modal = style({
  cursor: 'pointer',
  display: 'block',
  flexDirection: 'column',
  borderRadius: '18px',
  padding: '5px',
  translate: '0 -30vmin',
  background: 'var(--cmdKBackground)',
  backdropFilter: 'blur(4px)',
  width: '100%',
  minHeight: 'fit-content',
  maxHeight: '800px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.mobile})`]: {
      // idk why was this like this
      // height: "100vmin",
      translate: 'unset',
    },
  },
});

export const inputStyle = style({
  width: '100%',
  border: 'none',
  height: '64px',
  padding: '0px 50px 0px 10px',
  fontSize: '13px',
  //letterSpacing: "-0.013em",
  outline: 'none',
  backgroundColor: 'transparent',
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
});

export const searchContainer = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  padding: 18,
});

export const menuContainer = style({
  borderTop: `1px solid ${globalVars.colors.thinBorder}`,
  maxHeight: '400px',
  overflow: 'scroll',
  padding: '0 10px 0 10px',
});

//globalStyle(`${menuContainer}::-webkit-scrollbar`, {
//width: "0.05rem",
//});

globalStyle(`${menuContainer}::-webkit-scrollbar-track`, {
  backgroundColor: 'transparent',
});

globalStyle(`${menuContainer}::-webkit-scrollbar-thumb`, {
  background: 'rgba(0,0,0,0.2)',
  borderRadius: '50px',
});

const menuItemBase = style({
  padding: 15,
  marginTop: 5,
  marginBottom: 5,
  borderRadius: 8,
  borderWidth: 1,
  display: 'flex',
  alignItems: 'center',
  filter: 'brightness(65%)',
  transition: 'filter 0.1s ease-in, background 0.05s ease-in',
  ':hover': {},
});

export const menuItem = styleVariants({
  default: [menuItemBase],
  highlighted: [
    menuItemBase,
    {
      filter: 'brightness(100%)',
      background: globalVars.colors.genericTransparent,
    },
  ],
});

const baseMenu = style({
  marginLeft: '0.5rem',
  fontSize: '0.9rem',
});

export const menuTitle = styleVariants({
  withIcon: [baseMenu],
  noIcon: [baseMenu, { marginLeft: 0 }],
});
