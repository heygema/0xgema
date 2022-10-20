export const ENV = process.env.NODE_ENV;

export const POST_DIR = `./src/data/${
  ENV === "development" ? "_debug_posts" : "posts"
}`;

export const BREAKPOINTS = {
  mobile: "680px",
  tablet: "768px",
  desktop: "1024px",
};
