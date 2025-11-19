import React, { createContext, useState } from "react";
import { cn } from "../../utils/Util";
import type { InputProps } from "./type";

const InputContext = createContext<InputProps | undefined>(undefined);

const Input = ({
  value,
  onChange,
  placeholder = "",
  disabled = false,
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(value || "");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  const providerValue = {
    inputValue,
    setInputValue,
    placeholder,
    handleOnChange,
    disabled,
  };
  return (
    <InputContext.Provider value={providerValue}>
      <input
        value={inputValue || ""}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={cn(
          "text-neutral-900 outline-none",
          "border border-neutral-800 rounded-md px-4 py-2",
          disabled &&
            "cursor-not-allowed bg-gray-300 border-gray-400 opacity-50 text-gray-500"
        )}
      />
    </InputContext.Provider>
  );
};

export default Input;
