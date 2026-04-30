"use client";
import { useEffect, useRef, useState } from "react";
import type { CheckboxProps } from "../types";

const Md3Checkbox = ({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  indeterminate = false,
  id,
  className = "",
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const inputRef = useRef<HTMLInputElement>(null);
  const checkboxId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-checkbox" : "md3-checkbox");

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const next = e.target.checked;
    setIsChecked(next);
    onChange?.(next);
  };

  const isActive = isChecked || indeterminate;

  return (
    <label
      htmlFor={checkboxId}
      className={[
        "inline-flex items-center gap-2 font-sans cursor-pointer select-none",
        disabled ? "cursor-not-allowed opacity-40" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      <span className="relative flex-shrink-0 w-[18px] h-[18px]">
        <input
          ref={inputRef}
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="absolute opacity-0 w-0 h-0"
        />
        <span
          className={[
            "block w-[18px] h-[18px] rounded transition-all duration-200",
            isActive
              ? "bg-[#6750a4] dark:bg-[#d0bcff]"
              : "bg-transparent border-2 border-[#79747e] dark:border-[#938f99]",
          ].join(" ")}
        >
          {indeterminate && !isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2.5 h-0.5 bg-white dark:bg-[#381e72] rounded-full" />
            </span>
          )}
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:[stroke:#381e72]" />
              </svg>
            </span>
          )}
        </span>
      </span>
      {label && (
        <span className="text-[0.9375rem] font-medium text-[#1c1b1f] dark:text-[#e6e1e5]">{label}</span>
      )}
    </label>
  );
};

export default Md3Checkbox;
