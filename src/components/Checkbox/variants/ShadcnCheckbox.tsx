"use client";
import { useEffect, useRef, useState } from "react";
import type { CheckboxProps } from "../types";

const ShadcnCheckbox = ({
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
  const checkboxId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-checkbox" : "shadcn-checkbox");

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
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      <span className="relative flex-shrink-0 w-4 h-4">
        <input
          ref={inputRef}
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="absolute opacity-0 w-0 h-0 peer"
        />
        <span
          className={[
            "block w-4 h-4 border rounded-[4px] transition-colors duration-150",
            isActive
              ? "bg-zinc-900 border-zinc-900 dark:bg-zinc-100 dark:border-zinc-100"
              : "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-600",
            !disabled ? "peer-focus-visible:shadow-[0_0_0_2px_#18181b] dark:peer-focus-visible:shadow-[0_0_0_2px_#a1a1aa]" : "",
          ].join(" ")}
        >
          {indeterminate && !isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-0.5 bg-white dark:bg-zinc-900 rounded-full" />
            </span>
          )}
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-zinc-900" />
              </svg>
            </span>
          )}
        </span>
      </span>
      {label && (
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{label}</span>
      )}
    </label>
  );
};

export default ShadcnCheckbox;
