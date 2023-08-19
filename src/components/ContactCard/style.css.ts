import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 10,
  marginBottom: 10,
});

const sectionBase = style({
  flexDirection: 'row',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  opacity: 0.8,
});

export const section = styleVariants({
  left: [sectionBase],
  right: [
    sectionBase,
    {
      // justifyContent: 'flex-end',
    },
  ],
});
