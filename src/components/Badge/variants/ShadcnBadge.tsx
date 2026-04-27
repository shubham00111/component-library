"use client";
import type { BadgeProps } from "../types";

const VARIANT: Record<string, string> = {
  default:     "bg-zinc-900 text-zinc-50 border-transparent dark:bg-zinc-50 dark:text-zinc-900",
  success:     "bg-green-50 text-green-600 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800",
  warning:     "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-800",
  destructive: "bg-red-500 text-zinc-50 border-transparent dark:bg-red-600",
  outline:     "bg-transparent text-zinc-900 border-zinc-200 dark:text-zinc-100 dark:border-zinc-600",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.6875rem] px-2 py-px",
  md: "text-sm px-2.5 py-0.5",
};

const ShadcnBadge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-medium rounded-full border whitespace-nowrap transition-all duration-150",
      VARIANT[variant],
      SIZE[size],
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </span>
);

export default ShadcnBadge;
