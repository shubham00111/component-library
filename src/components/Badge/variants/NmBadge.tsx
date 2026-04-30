"use client";
import type { BadgeProps } from "../types";

const VARIANT: Record<string, string> = {
  default:     "text-[#6c7a9c]",
  success:     "text-emerald-600 dark:text-emerald-400",
  warning:     "text-amber-600 dark:text-amber-400",
  destructive: "text-red-500 dark:text-red-400",
  outline:     "text-[#4a5a80] dark:text-[#c5cde0]",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.6875rem] px-2 py-0.5",
  md: "text-[0.8125rem] px-3 py-1",
};

const NmBadge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-semibold rounded-xl whitespace-nowrap bg-[#e0e5ec] dark:bg-[#2d2d3a]",
      "shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] dark:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28]",
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

export default NmBadge;
