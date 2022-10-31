import * as styles from "./style.css";

export const MDXComponents = {
  p: (props: any) => <p {...props} />,
  a: (props: any) => <a target="_blank" className={styles.link} {...props} />,
  blockquote: (props: any) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
};
