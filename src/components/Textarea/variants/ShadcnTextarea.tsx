"use client";
import { useState } from "react";
import type { TextareaProps } from "../types";

const ShadcnTextarea = ({
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
        <label htmlFor={inputId} className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
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
          "py-2 px-3 text-[0.9375rem] font-sans text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-[6px] outline-none w-full resize-y transition-[border-color,box-shadow] duration-150",
          "placeholder:text-zinc-500 dark:placeholder:text-zinc-500",
          "focus:border-zinc-900 dark:focus:border-zinc-400 focus:shadow-[0_0_0_2px_#18181b] dark:focus:shadow-[0_0_0_2px_#a1a1aa]",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-zinc-100 dark:disabled:bg-zinc-800",
          error ? "border-red-500 focus:shadow-[0_0_0_2px_#ef4444]" : "",
          className,
        ].filter(Boolean).join(" ")}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-sm text-red-500 dark:text-red-400" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${inputId}-helper`} className="text-sm text-zinc-500 dark:text-zinc-400">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default ShadcnTextarea;
