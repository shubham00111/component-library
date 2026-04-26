"use client";
import type { ButtonProps } from "../types";
import "./NeobrutalismButton.css";

const NeobrutalismButton = ({
  children = "Button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={[
        "nb-button",
        `nb-button--${variant}`,
        `nb-button--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};

export default NeobrutalismButton;
