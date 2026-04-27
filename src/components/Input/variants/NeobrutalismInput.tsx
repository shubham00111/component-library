"use client";
import { useState } from "react";
import type { InputProps } from "../types";

const NeobrutalismInput = ({
  value,
  onChange,
  placeholder = "",
  disabled = false,
  type = "text",
  label,
  error,
  helperText,
  id,
  className = "",
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1 font-sans">
      {label && (
        <label htmlFor={inputId} className="text-[0.8125rem] font-extrabold text-black">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
        }
        className={[
          "py-2 px-3 text-[0.9375rem] font-sans text-black bg-white border-[3px] border-black rounded-[2px] shadow-[4px_4px_0_#000] outline-none w-full",
          "placeholder:text-[#333] placeholder:opacity-60",
          "focus:shadow-[6px_6px_0_#000] focus:bg-yellow-400 focus:-translate-x-px focus:-translate-y-px",
          "disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-500 disabled:shadow-none disabled:cursor-not-allowed",
          error ? "border-red-500 shadow-[4px_4px_0_#ef4444]" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-[0.8125rem] text-red-500 font-extrabold" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${inputId}-helper`} className="text-[0.8125rem] text-[#333]">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default NeobrutalismInput;
