import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'max-content',
  width: 'max-content',
  borderRadius: ' 8px',
});

export const circleFallback = style({
  height: '45px',
  width: '45px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  // background: 'var(--menuBG), url(/noise.svg)',
  color: 'var(--foreground)',
  fontSize: '1.6rem',
  transition: 'all 0.2s linear',
  zIndex: '1',
  ':hover': {
    color: 'var(--menuFG)',
    backgroundImage: 'url(/noise.svg)',
  },
});

globalStyle(`${circleFallback}:before`, {
  background: 'var(--menuBG)',
});

export const CircleStackGlow = style([
  circleFallback,
  {
    background: 'var(--menuBG)',
    opacity: 0,
    position: 'absolute',
    pointerEvents: 'none',
    boxShadow: 'var(--cmdKShadow)',
    filter: 'var(--glowFilter)',
    transform: 'scale(1.01)',
  },
]);

export const smiley = style({});

globalStyle(`${smiley} > path`, {
  stroke: 'var(--accentForeground)',
});
