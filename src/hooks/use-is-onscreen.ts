import { useEffect, useRef, useState } from "react";

export const useIsOnscreen = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOnscreen, setIsOnscreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsOnscreen(entry.isIntersecting);
    });
    observer.observe(wrapperRef?.current as Element);

    return () => {
      observer.disconnect();
    };
  }, [wrapperRef]);

  return { isOnscreen, wrapperRef };
};
