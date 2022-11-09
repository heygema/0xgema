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
        border: "1px solid red",
        width: "100%",
        padding: "20px",
        overflow: "scroll",
        wordWrap: "normal",
        wordBreak: "break-word",
      }}
    />
  ),
};
