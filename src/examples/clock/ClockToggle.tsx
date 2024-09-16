import React, { memo } from "react";

const ClockToggle = ({ handleToggle }) => {
  console.log("toggle clock rendered");
  return <button onClick={handleToggle}>Toggle clock</button>;
};
export default memo(ClockToggle);
