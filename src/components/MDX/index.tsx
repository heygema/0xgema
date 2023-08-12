// import { globalVars } from "../../styles/theme.css";
import * as styles from './style.css';

export const MDXComponents = {
  p: (props: any) => <p className={styles.paragraph} {...props} />,
  a: (props: any) => <a target="_blank" className={styles.link} {...props} />,
  strong: (props: any) => <strong className={styles.strong} {...props} />,
  blockquote: (props: any) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  //pre: (props: any) => (
  //<pre
  //{...props}
  //style={{
  //width: "100%",
  //padding: "20px",
  //overflow: "scroll",
  //wordWrap: "normal",
  //wordBreak: "break-word",
  //background: globalVars.colors.black,
  //borderRadius: "10px",
  //}}
  ///>
  //),
  code: (props: any) => {
    return <code {...props} className={styles.code} />;
  },
};
