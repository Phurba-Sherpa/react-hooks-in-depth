import React, { useState } from "react";

const MousePosition = () => {
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

    () => {
      window.removeEventListener(_handleMouseMove);
    };
  }, []);
  return (
    <div>
      {position.x}/{position.y}
    </div>
  );
};
export default MousePosition;
