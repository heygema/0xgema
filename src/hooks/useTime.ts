import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const getTime = () => {
  let { hour, minute, second } = DateTime.now().setZone("UTC+7");

  return { hour, minute, second };
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
