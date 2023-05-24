import Link from 'next/link';
import * as styles from './style.css';

export function Avatar() {
  return (
    <Link href="/">
      <div title="avatar" className={styles.root} />
    </Link>
  );
}
