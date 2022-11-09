import { DateTime } from "luxon";
import { useEffect, useState } from "react";

// f means just format
const f = (n: number) => {
  return `0${n}`.slice(-2);
};

const getTime = (hydrated?: boolean) => {
  if (hydrated) {
    let { hour, minute, second } = DateTime.now().setZone("UTC+7");
    return { hour: f(hour), minute: f(minute), second: f(second) };
  }
  return;
};

export function useTime() {
  const [hydrated, setHydrated] = useState(false);
  const [time, setTime] = useState(() => {
    return getTime(hydrated);
  });

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setTime(getTime(hydrated));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return time;
}
