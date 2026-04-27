"use client";
import { useState } from "react";
import type { InputProps } from "../types";

const ShadcnInput = ({
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
        <label htmlFor={inputId} className="text-sm font-medium text-zinc-900">
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
          "py-2 px-3 text-[0.9375rem] font-sans text-zinc-900 bg-white border border-zinc-200 rounded-[6px] outline-none w-full transition-[border-color,box-shadow] duration-150",
          "placeholder:text-zinc-500",
          "focus:border-zinc-900 focus:shadow-[0_0_0_2px_#18181b]",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-zinc-100",
          error ? "border-red-500 focus:shadow-[0_0_0_2px_#ef4444]" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${inputId}-helper`} className="text-sm text-zinc-500">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default ShadcnInput;
