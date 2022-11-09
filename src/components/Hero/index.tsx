import { useTime } from "../../hooks/useTime";
import * as styles from "./style.css";

import Smiley from "../../.././public/assets/images/Smiley-small15.svg";

export function Hero() {
  const time = useTime();

  const clock = time && `${time.hour}:${time.minute}:${time.second}`;

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>
        <span>
          <Smiley className={styles.smiley} />
        </span>
        Gema Anggada
      </h4>
      <p>
        Software Engineer, <span>(UTC+7) {clock}</span>
      </p>
    </div>
  );
}
