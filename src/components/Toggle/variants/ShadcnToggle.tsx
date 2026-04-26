"use client";
import { useState } from "react";
import type { ToggleProps } from "../types";
import "./ShadcnToggle.css";

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
  const toggleId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-toggle" : "shadcn-toggle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const next = e.target.checked;
    setIsChecked(next);
    onChange?.(next);
  };

  return (
    <label
      htmlFor={toggleId}
      className={["shadcn-toggle-wrapper", disabled ? "shadcn-toggle-wrapper--disabled" : "", className].filter(Boolean).join(" ")}
    >
      <span className={`shadcn-toggle shadcn-toggle--${size}`}>
        <input
          id={toggleId}
          type="checkbox"
          role="switch"
          aria-checked={isChecked}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
        />
        <span className="shadcn-toggle__track">
          <span className="shadcn-toggle__thumb" />
        </span>
      </span>
      {label && <span className="shadcn-toggle__label">{label}</span>}
    </label>
  );
};

export default ShadcnToggle;
