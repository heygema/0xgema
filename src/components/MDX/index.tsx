import { globalVars } from "../../styles/theme.css";
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
        width: "100%",
        padding: "20px",
        overflow: "scroll",
        wordWrap: "normal",
        wordBreak: "break-word",
        background: globalVars.colors.transluscent,
        borderRadius: "10px",
      }}
    />
  ),

  code: (props: any) => (
    <code
      {...props}
      style={{
        padding: "2px",
        lineHeight: "1.2rem",
        borderRadius: "2px",
      }}
    />
  ),
};
