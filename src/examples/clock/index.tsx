import { useCallback, useState } from "react";
import ClockToggle from "./ClockToggle";
import { useTime } from "./useTime";

const Clock = () => {
  const { localtime } = useTime();
  const [showClock, toggleClock] = useState(true);

  const handleToggle = useCallback(() => {
    toggleClock((prev) => !prev);
  }, []);

  return (
    <div className="flex items-center flex-col mt-16">
      <ClockToggle handleToggle={handleToggle} />
      {showClock && (
        <p className="text-5xl font-lato font-medium">{localtime}</p>
      )}
      <p className="max-w-[50ch] mt-8 p-4 rounded-md bg-yellow-50 text-yellow-700">
        <span className="font-semibold  mr-2 ">Note:</span>
        When you subscribe to long running process, make sure to unsubscribe it
        before component unmounts
      </p>
    </div>
  );
};
export default Clock;
