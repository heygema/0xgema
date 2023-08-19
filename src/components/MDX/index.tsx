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
};
