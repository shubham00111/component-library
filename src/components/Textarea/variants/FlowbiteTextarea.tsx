"use client";
import { useState } from "react";
import type { TextareaProps } from "../types";

const FlowbiteTextarea = ({
  value,
  onChange,
  placeholder = "",
  disabled = false,
  label,
  error,
  helperText,
  rows = 4,
  id,
  className = "",
}: TextareaProps) => {
  const [inputValue, setInputValue] = useState(value ?? "");
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled) return;
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-1.5 font-sans">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        onChange={handleChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        className={[
          "py-2 px-3 text-[0.9375rem] font-sans text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm outline-none w-full resize-y transition-all duration-200",
          "placeholder:text-gray-500 dark:placeholder:text-gray-400",
          "focus:border-[#1c64f2] dark:focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(28,100,242,0.3)] dark:focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]",
          "disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-400 dark:disabled:text-gray-500 disabled:cursor-not-allowed",
          error ? "border-[#e02424] focus:shadow-[0_0_0_3px_rgba(224,36,36,0.3)]" : "",
          className,
        ].filter(Boolean).join(" ")}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-sm text-[#e02424] dark:text-red-400" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${inputId}-helper`} className="text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default FlowbiteTextarea;
