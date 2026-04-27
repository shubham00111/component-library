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

const NeobrutalismToggle = ({
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
    id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-toggle" : "nb-toggle");

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
        disabled ? "cursor-not-allowed opacity-60" : "",
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
            "block border-[3px] border-black rounded-[2px] shadow-[4px_4px_0_#000] relative",
            isChecked ? "bg-yellow-400" : "bg-gray-300",
            TRACK_SIZE[size],
          ].join(" ")}
        >
          <span
            className={[
              "absolute top-[2px] left-[2px] bg-black border-[2px] border-black rounded-[1px]",
              isChecked ? THUMB_CHECKED[size] : "",
              THUMB_SIZE[size],
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </span>
      </span>
      {label && (
        <span className="text-[0.9375rem] font-extrabold text-black select-none">{label}</span>
      )}
    </label>
  );
};

export default NeobrutalismToggle;
