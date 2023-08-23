import { style } from '@vanilla-extract/css';

export const pre = style({
  position: 'relative',
  padding: 10,
});

export const copyButton = style({
  height: 'fit-content',
  width: 'fit-content',
  position: 'absolute',
  right: 30,
  top: 80,
});
