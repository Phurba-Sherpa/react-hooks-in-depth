import React, { useState } from "react";

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
    </div>
  );
};

const MouseTracker = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const _handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", _handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", _handleMouseMove);
    };
  }, []);
  return (
    <p className="text-4xl font-lato itallic font-semibold">
      {position.x}/{position.y}
    </p>
  );
};

export default MousePosition;
