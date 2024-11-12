import React from "react";
import { useIsOnscreen } from "../hooks/use-is-onscreen";

const BoxVisibility = () => {
  const { isOnscreen, wrapperRef } = useIsOnscreen();

  return (
    <React.Fragment>
      <p className="fixed">Box visible: {isOnscreen ? "YES" : "NO"}</p>
      <div className="mt-[80vh]">
        <div ref={wrapperRef} className="w-64 h-64 bg-orange-700"></div>
      </div>
    </React.Fragment>
  );
};

export default BoxVisibility;
