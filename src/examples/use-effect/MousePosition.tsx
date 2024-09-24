import { useState } from "react";
import { useMousePosition } from "./useMousePosition";

const MousePosition = () => {
  const [trackMouse, setTrackMouse] = useState(true);
  return (
    <div className="flex items-center flex-col mt-16">
      <button
        className="mb-12 py-3 px-9 rounded-full font-bold text-white bg-indigo-600"
        onClick={() => setTrackMouse((prev) => !prev)}
      >
        Toggle mouse tracker
      </button>
      {trackMouse && <MouseTracker />}
      <p className="max-w-[50ch] mt-4 p-4 rounded-md bg-yellow-50 text-yellow-700 ">
        <span className="font-semibold  mr-2 ">Note:</span>
        If effect's dependency changes then before remouting, it runs the
        cleanup function of the previous effect, if provided any before
        remouting a new one.
      </p>
    </div>
  );
};

const MouseTracker = () => {
  const { mousePosition } = useMousePosition();
  return (
    <p className="text-4xl font-lato itallic font-semibold">
      {mousePosition.x}/{mousePosition.y}
    </p>
  );
};

export default MousePosition;
