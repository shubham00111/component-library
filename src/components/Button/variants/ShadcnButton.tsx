"use client";
import type { ButtonProps } from "../types";

const VARIANT: Record<string, string> = {
  primary:     "bg-zinc-900 text-zinc-50 border-transparent hover:opacity-90 hover:shadow-sm dark:bg-zinc-50 dark:text-zinc-900 dark:hover:opacity-90",
  secondary:   "bg-zinc-100 text-zinc-900 border-transparent hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-700",
  destructive: "bg-red-500 text-zinc-50 border-transparent hover:opacity-90 dark:bg-red-600",
  ghost:       "bg-transparent text-zinc-900 border-transparent hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800",
  outline:     "bg-transparent text-zinc-900 border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800",
};

const SIZE: Record<string, string> = {
  sm: "text-sm py-1.5 px-3 rounded-[4px]",
  md: "py-2 px-4",
  lg: "py-2.5 px-6 text-base",
};

const ShadcnButton = ({
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
      "inline-flex items-center justify-center gap-2 cursor-pointer font-medium font-sans rounded-[6px] border whitespace-nowrap select-none transition-all duration-150",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-900 focus-visible:outline-offset-2 dark:focus-visible:outline-zinc-300",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
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

export default ShadcnButton;
