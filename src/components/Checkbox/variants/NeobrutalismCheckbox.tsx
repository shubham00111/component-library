"use client";
import { useEffect, useRef, useState } from "react";
import type { CheckboxProps } from "../types";

const NeobrutalismCheckbox = ({
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
  const checkboxId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-checkbox" : "nb-checkbox");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
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
        disabled ? "cursor-not-allowed opacity-60" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      <span className="relative flex-shrink-0 w-5 h-5">
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
            "block w-5 h-5 border-[3px] border-black dark:border-white rounded-[2px] shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_rgba(255,255,255,0.3)] transition-colors",
            isActive ? "bg-yellow-400" : "bg-white dark:bg-zinc-800",
          ].join(" ")}
        >
          {indeterminate && !isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2.5 h-0.5 bg-black rounded-full" />
            </span>
          )}
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </span>
      </span>
      {label && (
        <span className="text-[0.9375rem] font-extrabold text-black dark:text-white">{label}</span>
      )}
    </label>
  );
};

export default NeobrutalismCheckbox;
