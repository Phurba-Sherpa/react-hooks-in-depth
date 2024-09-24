import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const _handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", _handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", _handleMouseMove);
    };
  }, []);

  return { mousePosition };
};

export default useMousePosition;
