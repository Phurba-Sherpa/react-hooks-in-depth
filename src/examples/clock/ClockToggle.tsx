import React, { memo } from "react";

type ClockToggleProps = {
  handleToggle: () => void;
};

const ClockToggle: React.FC<ClockToggleProps> = ({ handleToggle }) => {
  return (
    <button
      className="px-9 py-3 bg-indigo-600 text-white rounded-full font-medium mb-8"
      onClick={handleToggle}
    >
      Toggle clock
    </button>
  );
};

export default memo(ClockToggle);
