import { style, styleVariants } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const root = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 10,
  marginBottom: 10,
});

const sectionBase = style({
  flexDirection: 'row',
  flex: 1,
  maxWidth: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const alignment = sprinkles({
  justifyContent: {
    tablet: 'flex-start',
    desktop: 'flex-start',
    mobile: 'flex-end',
    'mobile-s': 'flex-end',
  },
});

export const section = styleVariants({
  left: [sectionBase, { opacity: 0.8 }],
  right: [sectionBase],
});
