import { globalStyle, style } from '@vanilla-extract/css';

export const link = style({
  color: 'var(--url-color)',
  // background: "var(--accentBackground)",
  // WebkitBackgroundClip: "text",
  // WebkitTextFillColor: "transparent",
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all .3s cubic-bezier(.05,.03,.35,1)',
  ':hover': {
    textDecoration: 'underline',
    textDecorationStyle: 'dashed',
    opacity: 0.7,
  },
});

globalStyle(`${link}:hover span`, {
  transition: 'all .3s cubic-bezier(.05,.03,.35,1)',
  marginLeft: 4,
});

export const arrowWrapper = style({
  lineHeight: 0,
});
