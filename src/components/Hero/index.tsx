import { useTime } from "../../hooks/useTime";
import * as styles from "./style.css";

//import Smiley from "../../.././public/assets/images/Smiley-small15.svg";
import { TIME_ZONE } from "../../constant";

export function TimezoneClock() {
  const time = useTime();

  const clock = time && `${time.hour}:${time.minute}:${time.second}`;

  const timezoneClock = (
    <span>
      ({TIME_ZONE}) {clock}
    </span>
  );

  return timezoneClock;
}

export function Hero() {
  return (
    <div className={styles.root}>
      <h4 className={styles.title}>Gema Anggada</h4>
      <p className={styles.detail}>
        Software Engineer
        <TimezoneClock />
      </p>
    </div>
  );
}
