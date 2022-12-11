import { useTime } from "../../hooks/useTime";
import * as styles from "./style.css";

import Smiley from "../../.././public/assets/images/Smiley-small15.svg";
import { TIME_ZONE } from "../../constant";

export function Hero() {
  const time = useTime();

  const clock = time && `${time.hour}:${time.minute}:${time.second}`;

  // TODO: decide
  const _smiley = (
    <span>
      <Smiley className={styles.smiley} />
    </span>
  );

  const timer = (
    <span>
      ({TIME_ZONE}) {clock}
    </span>
  );

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>Gema Anggada</h4>
      <p className={styles.detail}>Software Engineer</p>
    </div>
  );
}
