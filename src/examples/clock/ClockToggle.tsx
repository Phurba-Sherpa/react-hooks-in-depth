import React, { memo } from "react";

type ClockToggleProps = {
  handleToggle: () => void;
};

const ClockToggle: React.FC<ClockToggleProps> = ({ handleToggle }) => {
  return <button onClick={handleToggle}>Toggle clock</button>;
};

export default memo(ClockToggle);
