import {globalStyle, style, styleVariants} from '@vanilla-extract/css';
import {button} from '../components/Button/style.css';
import {BREAKPOINTS} from '../constant';

export const root = style({
  display: 'grid',
  //gridTemplateColumns: "repeat(auto-fill, minmax(3fr, 3fr))",
  gridTemplateColumns: '1fr 1fr',
  //gridTemplateRows: "minmax(100px, auto)",
  gridAutoFlow: 'dense',
  gridGap: '10px',
  '@media': {
    [`(max-width: ${BREAKPOINTS.mobile})`]: {
      gridGap: '1rem',
      gridTemplateColumns: '100px',
      gridTemplateRows: 'minmax(auto, auto)',
    },
  },
});

export const easterEggContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  height: '15rem',
  width: '15rem',
  cursor: 'pointer',
});

export const eggUnicorn = style({
  fontSize: '2rem',
});

export const pagination = style({
  paddingTop: '40px',
  gap: 2,
  display: 'flex',
  flexDirection: 'row',
});

const onHover = style({
  transition: 'opacity 0.1s ease-in',
  ':hover': {
    opacity: '0.8',
  },
});

const circle = style({
  borderRadius: '3px',
  textAlign: 'center',
});

export const paginationButtonContainer = style({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'max-content',
  width: 'max-content',
});

const buttonWrapperBase = style({
  height: 'max-content',
  width: 'max-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
  zIndex: 1,
});

export const buttonWrapper = styleVariants({
  base: [buttonWrapperBase],
  selected: [buttonWrapperBase, {background: 'var(--accentBackground)'}],
});

const buttonGlowBase = style({
  background: 'var(--accentBackground)',
  position: 'absolute',
  pointerEvents: 'none',
  boxShadow: 'var(--cmdKShadow)',
  filter: 'var(--glowFilter)',
});

export const buttonGlow = styleVariants({
  base: [
    buttonGlowBase,
    {
      transform: 'scale(1.1)',
      background: 'none',
    },
  ],
  selected: [
    buttonWrapperBase,
    buttonGlowBase,
    {
      transform: 'scale(1.1)',
    },
  ],
});

export const paginationButton = styleVariants({
  base: [button, onHover],
  selected: [
    circle,
    button,
    {
      background: 'none',
      boxShadow: 'none',
    },
    onHover,
    {
      border: 'var(--accentBorder)',
      color: 'var(--accentForeground)',
      fontWeight: 800,
      //WebkitBackgroundClip: "text",
      //WebkitTextFillColor: "transparent",
    },
  ],
});

globalStyle(`${pagination} > *`, {
  marginRight: 10,
});
