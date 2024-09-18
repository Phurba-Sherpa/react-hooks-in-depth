import { useEffect, useRef, useState } from "react";

const InputFocus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <div>
      <h3>Google</h3>
      <div>
        <input
          ref={inputRef}
          value={searchTerm}
          name="seachTerm"
          onChange={(event) => setSearchTerm(event?.target.value)}
        />
        <span>search</span>
      </div>
    </div>
  );
};

export default InputFocus;
