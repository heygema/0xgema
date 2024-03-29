import { style } from '@vanilla-extract/css';
import { globalVars } from './theme.css';

export const date = style({
  opacity: 0.8,
});

export const heading = style({
  color: 'var(--foregroundHeading)',
});

export const backButton = style({
  padding: '8px',
  WebkitTransition: 'background 0.2s ease, border 0.3s ease;',
  border: '2px solid transparent',
  borderRadius: '5px',
  ':hover': {
    background: globalVars.colors.transluscent,
  },
  ':active': {
    border: `2px solid ${globalVars.colors['grayish2-transluscent2']}`,
  },
});
