import * as styles from "./style.css";

export function Loading({ centered = true }) {
  const loading = (
    <div className={styles.loading}>
      <span />
      <span />
      <span />
    </div>
  );

  if (centered) {
    return <div className={styles.loadingContainer}>{loading}</div>;
  }

  return loading;
}
