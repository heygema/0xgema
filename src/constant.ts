export const ENV = process.env.NODE_ENV;

export const IS_PROD = process.env.NODE_ENV === "production";

//export const POST_DIR = `./src/data/${
//ENV === "development" ? "_debug_posts" : "posts"
//}`;
// TODO: Temporary
export const POST_DIR = `./src/data/${"_debug_posts"}`;

export const BREAKPOINTS = {
  ["mobile-s"]: "480px",
  mobile: "680px",
  tablet: "768px",
  desktop: "1024px",
};
