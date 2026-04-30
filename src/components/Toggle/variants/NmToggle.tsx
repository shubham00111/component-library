"use client";
import { useState } from "react";
import type { ToggleProps } from "../types";

const TRACK_SIZE: Record<string, string> = {
  sm: "w-9 h-[18px]",
  md: "w-11 h-[22px]",
  lg: "w-14 h-7",
};

const THUMB_SIZE: Record<string, string> = {
  sm: "w-3 h-3",
  md: "w-[15px] h-[15px]",
  lg: "w-5 h-5",
};

const THUMB_CHECKED: Record<string, string> = {
  sm: "translate-x-[18px]",
  md: "translate-x-[22px]",
  lg: "translate-x-7",
};

const NmToggle = ({
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
    id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-toggle" : "nm-toggle");

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
        {/* Track: concave (inset shadow) */}
        <span
          className={[
            "block bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-full relative transition-colors duration-200",
            "shadow-[inset_-3px_-3px_6px_#ffffff,_inset_3px_3px_6px_rgba(163,177,198,0.5)] dark:shadow-[inset_-3px_-3px_6px_#3d3d4e,_inset_3px_3px_6px_#1d1d28]",
            TRACK_SIZE[size],
          ].join(" ")}
        >
          {/* Thumb: convex (outset shadow) */}
          <span
            className={[
              "absolute top-[2px] left-[2px] rounded-full transition-all duration-200",
              "shadow-[-2px_-2px_4px_#ffffff,_2px_2px_4px_rgba(163,177,198,0.5)] dark:shadow-[-2px_-2px_4px_#3d3d4e,_2px_2px_4px_#1d1d28]",
              isChecked
                ? "bg-[#6c7a9c] dark:bg-[#a0a8c0]"
                : "bg-[#e0e5ec] dark:bg-[#2d2d3a]",
              isChecked ? THUMB_CHECKED[size] : "",
              THUMB_SIZE[size],
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </span>
      </span>
      {label && (
        <span className="text-[0.9375rem] font-semibold text-[#6c7a9c] dark:text-[#a0a8c0] select-none">{label}</span>
      )}
    </label>
  );
};

export default NmToggle;
