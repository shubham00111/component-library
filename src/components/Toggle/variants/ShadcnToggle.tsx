"use client";
import { useState } from "react";
import type { ToggleProps } from "../types";

const TRACK_SIZE: Record<string, string> = {
  sm: "w-9 h-5",
  md: "w-11 h-6",
  lg: "w-14 h-[30px]",
};

const THUMB_SIZE: Record<string, string> = {
  sm: "w-[14px] h-[14px]",
  md: "w-[18px] h-[18px]",
  lg: "w-6 h-6",
};

const THUMB_CHECKED: Record<string, string> = {
  sm: "translate-x-4",
  md: "translate-x-5",
  lg: "translate-x-[26px]",
};

const ShadcnToggle = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  size = "md",
  className = "",
  id,
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const toggleId =
    id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-toggle" : "shadcn-toggle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const next = e.target.checked;
    setIsChecked(next);
    onChange?.(next);
  };

  return (
    <label
      htmlFor={toggleId}
      className={[
        "inline-flex items-center gap-2 font-sans cursor-pointer",
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="relative inline-block flex-shrink-0">
        <input
          id={toggleId}
          type="checkbox"
          role="switch"
          aria-checked={isChecked}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="absolute opacity-0 w-0 h-0"
        />
        <span
          className={[
            "block rounded-full border relative transition-colors duration-150",
            isChecked
              ? "bg-zinc-900 border-zinc-900 dark:bg-zinc-100 dark:border-zinc-100"
              : "bg-zinc-200 border-zinc-200 dark:bg-zinc-700 dark:border-zinc-700",
            TRACK_SIZE[size],
          ].join(" ")}
        >
          <span
            className={[
              "absolute top-[2px] left-[2px] bg-white dark:bg-zinc-900 rounded-full shadow-sm transition-transform duration-150",
              isChecked ? THUMB_CHECKED[size] : "",
              THUMB_SIZE[size],
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </span>
      </span>
      {label && (
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 select-none">{label}</span>
      )}
    </label>
  );
};

export default ShadcnToggle;
