import { useCallback, useEffect, useState } from "react";
import ClockToggle from "./ClockToggle";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [showClock, toggleClock] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => setTime(new Date()), 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const handleToggle = useCallback(() => {
    toggleClock((prev) => !prev);
  }, []);

  return (
    <div>
      <ClockToggle handleToggle={handleToggle} />
      {showClock && <p>{time.toTimeString()}</p>}
    </div>
  );
};
export default Clock;
