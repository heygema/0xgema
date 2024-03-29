import { globalStyle, style } from '@vanilla-extract/css';
import { jetbrains } from '../../styles/global.css';
import { globalVars } from '../../styles/theme.css';

export const strong = style({
  fontWeight: 'bold',
  color: 'var(--foregroundHeading)',
  opacity: 1,
});

export const heading = style({
  color: 'var(--foregroundHeading)',
});

export const blockquote = style({
  borderRadius: '8px',
  maxWidth: '450px',
  background: globalVars.colors.blockquote,
  fontWeight: 400,
  fontSize: '0.8rem',
  border: '1px dashed var(--foreground)',
  opacity: 0.6,
  margin: '2rem 2px 2rem 1.7vmin',
  padding: '1rem 1rem',
  quotes: `red`,
});

globalStyle(`${blockquote} > p`, {
  fontSize: '0.8rem',
});

globalStyle(`${blockquote}:before`, {
  color: `${globalVars.colors['grayish-02-transluscent-02']}`,
  content: 'open-quote',
  fontWeight: '100',
  fontSize: '4em',
  lineHeight: '0.1em',
  marginRight: '0.25em',
  verticalAlign: '-0.4em',
});

export const paragraph = style({
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
});

globalStyle(`${blockquote} p`, {
  display: 'inline',
});

export const code = style({
  fontFamily: `${jetbrains}, monospace`,
  letterSpacing: '0px',
  padding: '3px 5px 3px 5px',
  borderRadius: '6px',
  background: globalVars.colors.black,
  color: globalVars.colors.white,
});

globalStyle(`pre code.${code}`, {
  display: 'block',
  overflowX: 'auto',
  padding: '3rem',
  marginTop: '3rem',
  marginBottom: '3rem',
  fontSize: '12px',
  background: globalVars.colors.black,
  color: globalVars.colors.white,
  borderRadius: '16px',
});
