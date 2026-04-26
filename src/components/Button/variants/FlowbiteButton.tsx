"use client";
import type { ButtonProps } from "../types";
import "./FlowbiteButton.css";

const FlowbiteButton = ({
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
        "fb-button",
        `fb-button--${variant}`,
        `fb-button--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};

export default FlowbiteButton;
