import { useEffect, useState } from "react";

export const useTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const localtime = dateTime.toLocaleTimeString();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return { localtime };
};
