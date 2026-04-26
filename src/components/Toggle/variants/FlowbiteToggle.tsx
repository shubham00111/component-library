"use client";
import { useState } from "react";
import type { ToggleProps } from "../types";
import "./FlowbiteToggle.css";

const FlowbiteToggle = ({
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
  const toggleId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-toggle" : "fb-toggle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const next = e.target.checked;
    setIsChecked(next);
    onChange?.(next);
  };

  return (
    <label
      htmlFor={toggleId}
      className={["fb-toggle-wrapper", disabled ? "fb-toggle-wrapper--disabled" : "", className].filter(Boolean).join(" ")}
    >
      <span className={`fb-toggle fb-toggle--${size}`}>
        <input
          id={toggleId}
          type="checkbox"
          role="switch"
          aria-checked={isChecked}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
        />
        <span className="fb-toggle__track">
          <span className="fb-toggle__thumb" />
        </span>
      </span>
      {label && <span className="fb-toggle__label">{label}</span>}
    </label>
  );
};

export default FlowbiteToggle;
