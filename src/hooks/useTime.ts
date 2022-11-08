import { DateTime } from "luxon";
import { useEffect, useState } from "react";

// f means just format
const f = (n: number) => {
  return `0${n}`.slice(-2);
};

const getTime = () => {
  let { hour, minute, second } = DateTime.now().setZone("UTC+7");

  return { hour: f(hour), minute: f(minute), second: f(second) };
};

export function useTime() {
  const [time, setTime] = useState(() => {
    return getTime();
  });

  useEffect(() => {
    let timeout = setTimeout(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return time;
}
