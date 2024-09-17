import { useEffect, useState } from "react";

const DarkModeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const isDarkMode = localStorage.getItem("is-dark-mode");
    const parsedDarkMode = JSON.parse(isDarkMode) || false;
    return parsedDarkMode;
  });

  useEffect(() => {
    localStorage.setItem("is-dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <button onClick={() => setIsDarkMode((prev) => !prev)}>
      {isDarkMode ? "turn on white mode" : "turn on dark mode"}
    </button>
  );
};

export default DarkModeToggler;
