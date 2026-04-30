"use client";
import type { ButtonProps } from "../types";

const VARIANT: Record<string, string> = {
  primary:
    "bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:bg-white/30 active:bg-white/25 active:scale-[0.98]",
  secondary:
    "bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 active:scale-[0.98]",
  destructive:
    "bg-red-400/30 backdrop-blur-md border border-red-300/40 text-white hover:bg-red-400/40 active:scale-[0.98]",
  ghost:
    "bg-transparent border border-transparent text-white/80 hover:bg-white/10 active:scale-[0.98]",
  outline:
    "bg-transparent backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/10 active:scale-[0.98]",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.8125rem] py-1 px-3",
  md: "py-2 px-4",
  lg: "text-lg py-3 px-6",
};

const GlassmorphismButton = ({
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
      "inline-flex items-center justify-center gap-2 cursor-pointer font-medium font-sans rounded-xl whitespace-nowrap select-none transition-all duration-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2",
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
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

export default GlassmorphismButton;
