import { style } from '@vanilla-extract/css';
import * as styles from '../Card/style.css';

export const root = style({
  display: 'flex',
  gridGap: '2rem',
  flexWrap: 'wrap',
  justifyContent: 'left',
  alignItems: 'center',
});

export const display = style({
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
});

export const project = style([
  styles.card,
  {
    padding: '0px',
    paddingBottom: '15px',
    placeItems: 'unset',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease',
    textAlign: 'left',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.03)',
    },
  },
]);

export const title = style({
  fontWeight: 'bold',
});

export const content = style({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
});
