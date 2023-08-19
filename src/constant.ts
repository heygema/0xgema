export const ENV = process.env.NODE_ENV;

export const IS_PROD = process.env.NODE_ENV === 'production';

export const TIME_ZONE = 'UTC+7';

//const postToRender = !IS_PROD ? "_debug_posts" : "posts";
const postToRender = 'posts';

export const POST_DIR = `./src/data/${postToRender}`;

export const BREAKPOINTS = {
  ['mobile-s']: '479px', //max-width
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const REVEAL_ANIMATE_PROPS = {
  variants: {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: { opacity: 1, translateY: 0 },
  },
  initial: 'hidden',
  animate: 'visible',
};

export const CLICKABLE_RESPONSE_PROPS = {
  whileTap: {
    scale: 0.975,
  },
  whileHover: {
    scale: 1.05,
  },
};
