import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  width: '100%',
  paddingTop: '0px',
  // marginTop: '100px',
  marginBottom: '40px',
});

export const navigationContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: '40px',
});

export const title = style({
  fontWeight: 'bold',
  marginTop: '1rem',
  marginBottom: '1rem',
});

export const detail = style({
  opacity: 0.6,
});

export const smiley = style({});

globalStyle(`${smiley} > path`, {
  stroke: 'var(--foreground)',
});

export const menuContainer = style({
  display: 'inline-flex',
  gap: 10,
  justifyContent: 'space-between',
  flexDirection: 'row',
});

const menuBase = style({
  transition: 'all .3s cubic-bezier(.05,.03,.35,1)',
  cursor: 'pointer',
  ':hover': {
    opacity: 0.5,
  },
});

export const menu = styleVariants({
  base: [menuBase],
  selected: [
    menuBase,
    {
      textDecoration: 'underline',
      textDecorationStyle: 'dashed',
      color: 'var(--url-color)',
    },
  ],
});
