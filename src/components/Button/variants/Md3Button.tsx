"use client";
import type { ButtonProps } from "../types";

const VARIANT: Record<string, string> = {
  primary:
    "bg-[#6750a4] text-white hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)] active:scale-[0.98] dark:bg-[#d0bcff] dark:text-[#381e72]",
  secondary:
    "bg-[#eaddff] text-[#21005d] hover:shadow-[0_1px_2px_rgba(0,0,0,0.15)] active:scale-[0.98] dark:bg-[#4a4458] dark:text-[#e8def8]",
  destructive:
    "bg-[#b3261e] text-white hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)] active:scale-[0.98] dark:bg-[#f2b8b5] dark:text-[#601410]",
  ghost:
    "bg-transparent text-[#6750a4] hover:bg-[#6750a4]/8 active:bg-[#6750a4]/12 dark:text-[#d0bcff] dark:hover:bg-[#d0bcff]/8",
  outline:
    "bg-transparent border border-[#79747e] text-[#6750a4] hover:bg-[#6750a4]/8 active:bg-[#6750a4]/12 dark:border-[#938f99] dark:text-[#d0bcff] dark:hover:bg-[#d0bcff]/8",
};

const SIZE: Record<string, string> = {
  sm: "text-sm py-1.5 px-4",
  md: "py-2.5 px-6",
  lg: "text-base py-3 px-8",
};

const Md3Button = ({
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
      "inline-flex items-center justify-center gap-2 cursor-pointer font-medium font-sans rounded-[20px] whitespace-nowrap select-none transition-all duration-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6750a4] focus-visible:outline-offset-2 dark:focus-visible:outline-[#d0bcff]",
      "disabled:bg-[#1c1b1f]/12 disabled:text-[#1c1b1f]/38 disabled:shadow-none disabled:cursor-not-allowed disabled:pointer-events-none dark:disabled:bg-[#e6e1e5]/12 dark:disabled:text-[#e6e1e5]/38",
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

export default Md3Button;
