export const ENV = process.env.NODE_ENV;

export const IS_PROD = process.env.NODE_ENV === "production";

//const postToRender = !IS_PROD ? "_debug_posts" : "posts";
const postToRender = "posts";

export const POST_DIR = `./src/data/${postToRender}`;

export const BREAKPOINTS = {
  ["mobile-s"]: "480px",
  mobile: "680px",
  tablet: "768px",
  desktop: "1024px",
};
