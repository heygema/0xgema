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
  background: 'var(--menuBG)',
  color: 'var(--menuFG)',
  fontSize: '1.3rem',
  zIndex: '1',
});

export const CircleStackGlow = style([
  circleFallback,
  {
    position: 'absolute',
    pointerEvents: 'none',
    // boxShadow: 'var(--cmdKShadow)',
    filter: 'var(--glowFilter)',
    transform: 'scale(1.01)',
  },
]);

export const smiley = style({});

globalStyle(`${smiley} > path`, {
  stroke: 'var(--accentForeground)',
});
