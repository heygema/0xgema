import { Anchor } from '../Anchor';

import * as styles from './style.css';

export const MDXComponents = {
  p: (props: any) => <p className={styles.paragraph} {...props} />,
  a: (props: any) => <Anchor {...props} />,
  strong: (props: any) => <strong className={styles.strong} {...props} />,
  blockquote: (props: any) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  // pre: (props: any) => <Pre {...props} />, // wip Pre component
  code: (props: any) => {
    return <code {...props} className={styles.code} />;
  },
  h1: (props: any) => <h1 {...props} className={styles.heading} />,
  h2: (props: any) => <h2 {...props} className={styles.heading} />,
  h3: (props: any) => <h3 {...props} className={styles.heading} />,
  h4: (props: any) => <h4 {...props} className={styles.heading} />,
  h5: (props: any) => <h5 {...props} className={styles.heading} />,
  h6: (props: any) => <h6 {...props} className={styles.heading} />,
};
