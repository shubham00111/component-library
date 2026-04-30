"use client";
import { useState } from "react";
import type { TextareaProps } from "../types";

const Md3Textarea = ({
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
  const [focused, setFocused] = useState(false);
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled) return;
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-1 font-sans">
      {label && (
        <label
          htmlFor={inputId}
          className={[
            "text-xs font-medium transition-colors duration-200",
            error
              ? "text-[#b3261e] dark:text-[#f2b8b5]"
              : focused
                ? "text-[#6750a4] dark:text-[#d0bcff]"
                : "text-[#49454f] dark:text-[#cac4d0]",
          ].join(" ")}
        >
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-invalid={Boolean(error)}
        className={[
          "py-2 px-4 text-[0.9375rem] font-sans text-[#1c1b1f] dark:text-[#e6e1e5] bg-[#fffbfe] dark:bg-[#1c1b1f] border rounded-[4px] outline-none w-full transition-all duration-200 resize-y",
          "placeholder:text-[#49454f] dark:placeholder:text-[#cac4d0]",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          error
            ? "border-[#b3261e] dark:border-[#f2b8b5] border-b-2"
            : focused
              ? "border-[#6750a4] dark:border-[#d0bcff] border-b-2"
              : "border-[#79747e] dark:border-[#938f99]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {error && (
        <span className="text-xs text-[#b3261e] dark:text-[#f2b8b5]" role="alert">{error}</span>
      )}
      {helperText && !error && (
        <span className="text-xs text-[#49454f] dark:text-[#cac4d0]">{helperText}</span>
      )}
    </div>
  );
};

export default Md3Textarea;
