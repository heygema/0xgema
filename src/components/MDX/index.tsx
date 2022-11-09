import * as styles from "./style.css";

export const MDXComponents = {
  p: (props: any) => <p className={styles.paragraph} {...props} />,
  a: (props: any) => <a target="_blank" className={styles.link} {...props} />,
  blockquote: (props: any) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  pre: (props: any) => (
    <pre
      {...props}
      style={{
        border: "1px solid yellow",
        width: "400px",
        overflow: "scroll",
        wordWrap: "normal",
        wordBreak: "break-word",
      }}
    />
  ),
  code: (props: any) => (
    <code
      {...props}
      style={{
        wordWrap: "normal",
        wordBreak: "break-word",
        background: "red",
        width: "100px",
      }}
    />
  ),
};
