"use client";
import { useState } from "react";
import type { TextareaProps } from "../types";

const NmTextarea = ({
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
        <label htmlFor={inputId} className="text-sm font-semibold text-[#6c7a9c] dark:text-[#a0a8c0]">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        aria-invalid={Boolean(error)}
        className={[
          "py-2.5 px-4 text-[0.9375rem] font-sans text-[#3d4f6e] dark:text-[#c5cde0] rounded-xl outline-none w-full transition-all duration-150 resize-y border-none",
          "bg-[#e0e5ec] dark:bg-[#2d2d3a]",
          "shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[inset_-5px_-5px_10px_#3d3d4e,_inset_5px_5px_10px_#1d1d28]",
          "placeholder:text-[#6c7a9c]/60 dark:placeholder:text-[#a0a8c0]/60",
          "focus:shadow-[inset_-3px_-3px_7px_#ffffff,_inset_3px_3px_7px_rgba(163,177,198,0.5)] dark:focus:shadow-[inset_-3px_-3px_7px_#3d3d4e,_inset_3px_3px_7px_#1d1d28]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error ? "shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(239,68,68,0.3)]" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {error && (
        <span className="text-sm text-red-500 dark:text-red-400" role="alert">{error}</span>
      )}
      {helperText && !error && (
        <span className="text-sm text-[#6c7a9c] dark:text-[#a0a8c0]">{helperText}</span>
      )}
    </div>
  );
};

export default NmTextarea;
