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

const GlassmorphismToggle = ({
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
    id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-toggle" : "glass-toggle");

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
        disabled ? "cursor-not-allowed opacity-40" : "",
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
            "block backdrop-blur-md border border-white/30 rounded-full relative transition-all duration-200",
            isChecked ? "bg-white/40" : "bg-white/10",
            TRACK_SIZE[size],
          ].join(" ")}
        >
          <span
            className={[
              "absolute top-[2px] left-[2px] bg-white rounded-full shadow-[0_2px_8px_rgba(31,38,135,0.2)] transition-transform duration-200",
              isChecked ? THUMB_CHECKED[size] : "",
              THUMB_SIZE[size],
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </span>
      </span>
      {label && (
        <span className="text-[0.9375rem] font-medium text-white select-none">{label}</span>
      )}
    </label>
  );
};

export default GlassmorphismToggle;
