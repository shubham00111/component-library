"use client";
import { useState } from "react";
import type { InputProps } from "../types";

const FlowbiteInput = ({
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
    <div className="flex flex-col gap-1.5 font-sans">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-900">
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
          "py-2 px-3 text-[0.9375rem] font-sans text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm outline-none w-full transition-all duration-200",
          "placeholder:text-gray-500",
          "focus:border-[#1c64f2] focus:shadow-[0_0_0_3px_rgba(28,100,242,0.3)]",
          "disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
          error ? "border-[#e02424] focus:shadow-[0_0_0_3px_rgba(224,36,36,0.3)]" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-sm text-[#e02424]" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${inputId}-helper`} className="text-sm text-gray-500">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default FlowbiteInput;
