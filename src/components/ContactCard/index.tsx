import { Anchor } from '../Anchor';
import * as styles from './style.css';

export function ContactCard(props: {
  url: string;
  alias: string;
  title: string;
}) {
  const { title, url, alias } = props;

  return (
    <div className={styles.root}>
      <div className={styles.section}>{title}</div>
      <div className={styles.section}>
        <Anchor href={url}>{alias}</Anchor>
      </div>
    </div>
  );
}
