import { TIME_ZONE } from '../../constant';
import { useTime } from '../../hooks/useTime';

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
