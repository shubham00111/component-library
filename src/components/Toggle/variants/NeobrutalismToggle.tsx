"use client";
import { useState } from "react";
import type { ToggleProps } from "../types";
import "./NeobrutalismToggle.css";

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
  const toggleId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") + "-toggle" : "nb-toggle");

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
        "nb-toggle-wrapper",
        disabled ? "nb-toggle-wrapper--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={`nb-toggle nb-toggle--${size}`}>
        <input
          id={toggleId}
          type="checkbox"
          role="switch"
          aria-checked={isChecked}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
        />
        <span className="nb-toggle__track">
          <span className="nb-toggle__thumb" />
        </span>
      </span>
      {label && <span className="nb-toggle__label">{label}</span>}
    </label>
  );
};

export default NeobrutalismToggle;
