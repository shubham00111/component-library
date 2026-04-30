"use client";
import { useState } from "react";
import type { InputProps } from "../types";

const GlassmorphismInput = ({
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
        <label htmlFor={inputId} className="text-sm font-medium text-white/90">
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
          "py-2 px-3 text-[0.9375rem] font-sans text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl outline-none w-full transition-all duration-200",
          "placeholder:text-white/50",
          "focus:border-white/50 focus:bg-white/20 focus:shadow-[0_0_0_2px_rgba(255,255,255,0.2)]",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          error ? "border-red-400/60 focus:shadow-[0_0_0_2px_rgba(248,113,113,0.3)]" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-sm text-red-300" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${inputId}-helper`} className="text-sm text-white/60">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default GlassmorphismInput;
