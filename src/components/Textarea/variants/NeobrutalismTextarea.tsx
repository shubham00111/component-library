"use client";
import { useState } from "react";
import type { TextareaProps } from "../types";

const NeobrutalismTextarea = ({
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
    <div className="flex flex-col gap-1 font-sans">
      {label && (
        <label htmlFor={inputId} className="text-[0.8125rem] font-extrabold text-black dark:text-white">
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
          "py-2 px-3 text-[0.9375rem] font-sans text-black dark:text-white bg-white dark:bg-zinc-800 border-[3px] border-black dark:border-white rounded-[2px] shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_rgba(255,255,255,0.25)] outline-none w-full resize-y",
          "placeholder:text-[#333] dark:placeholder:text-zinc-400 placeholder:opacity-60",
          "focus:shadow-[6px_6px_0_#000] dark:focus:shadow-[6px_6px_0_rgba(255,255,255,0.3)] focus:bg-yellow-400 dark:focus:bg-yellow-400 dark:focus:text-black focus:-translate-x-px focus:-translate-y-px",
          "disabled:bg-gray-300 dark:disabled:bg-zinc-700 disabled:text-gray-500 dark:disabled:text-zinc-500 disabled:border-gray-500 dark:disabled:border-zinc-600 disabled:shadow-none disabled:cursor-not-allowed",
          error ? "border-red-500 shadow-[4px_4px_0_#ef4444]" : "",
          className,
        ].filter(Boolean).join(" ")}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-[0.8125rem] text-red-500 dark:text-red-400 font-extrabold" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${inputId}-helper`} className="text-[0.8125rem] text-[#333] dark:text-zinc-400">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default NeobrutalismTextarea;
