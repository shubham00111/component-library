"use client";
import type { ButtonProps } from "../types";

const VARIANT: Record<string, string> = {
  primary:     "bg-[#1c64f2] text-white border-transparent hover:bg-[#1a56db] active:bg-[#1e429f]",
  secondary:   "bg-gray-500 text-white border-transparent hover:bg-gray-600",
  destructive: "bg-[#e02424] text-white border-transparent hover:bg-red-700",
  ghost:       "bg-transparent text-[#1c64f2] border-transparent hover:bg-blue-50",
  outline:     "bg-white text-[#1c64f2] border-[#1c64f2] hover:bg-blue-50",
};

const SIZE: Record<string, string> = {
  sm: "text-sm py-1.5 px-3",
  md: "py-2 px-4",
  lg: "text-lg py-3 px-6",
};

const FlowbiteButton = ({
  children = "Button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    aria-label={ariaLabel}
    className={[
      "inline-flex items-center justify-center gap-2 cursor-pointer font-medium font-sans rounded-lg border whitespace-nowrap select-none transition-colors duration-200",
      "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(28,100,242,0.3)]",
      "disabled:bg-gray-100 disabled:text-gray-400 disabled:border-transparent disabled:cursor-not-allowed disabled:opacity-65 disabled:pointer-events-none",
      VARIANT[variant],
      SIZE[size],
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </button>
);

export default FlowbiteButton;
