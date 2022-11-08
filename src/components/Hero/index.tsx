import { useTime } from "../../hooks/useTime";
import * as styles from "./style.css";

export function Hero() {
  const { hour, minute, second } = useTime();

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>Gema Anggada</h4>
      <p>
        Software Engineer,{" "}
        <span>
          (UTC+7) {hour}:{minute}:{second}
        </span>
      </p>
    </div>
  );
}
