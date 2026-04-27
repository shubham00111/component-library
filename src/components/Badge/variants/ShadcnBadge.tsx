"use client";
import type { BadgeProps } from "../types";

const VARIANT: Record<string, string> = {
  default:     "bg-zinc-900 text-zinc-50 border-transparent",
  success:     "bg-green-50 text-green-600 border-green-200",
  warning:     "bg-amber-50 text-amber-600 border-amber-200",
  destructive: "bg-red-500 text-zinc-50 border-transparent",
  outline:     "bg-transparent text-zinc-900 border-zinc-200",
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
