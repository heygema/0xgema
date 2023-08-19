import { globalStyle, style } from '@vanilla-extract/css';
// import { syneBold } from '../../styles/global.css';

export const root = style({
  width: '100%',
  paddingTop: '0px',
  marginTop: '100px',
  marginBottom: '40px',
});

export const title = style({
  // fontFamily: `${syneBold}, ui-sans-serif, sans-serif`,
  fontFamily: 'inherit',
  marginTop: '1rem',
  marginBottom: '1rem',
});

export const detail = style({
  opacity: 0.6,
});

export const smiley = style({});

export const timezone = style({});

globalStyle(`${smiley} > path`, {
  stroke: 'var(--foreground)',
});
