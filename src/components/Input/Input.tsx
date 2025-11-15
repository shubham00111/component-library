import React, { useState } from "react";
import { cn } from "../../utils/Util";
import type { InputProps } from "./type";

const Input = ({ value, onChange, placeholder }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(value || "");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };
  return (
    <input
      value={inputValue || ""}
      placeholder={placeholder}
      onChange={handleOnChange}
      className={cn(
        "text-neutral-900 outline-none",
        "border border-neutral-800 rounded-md px-4 py-2"
      )}
    />
  );
};

export default Input;
