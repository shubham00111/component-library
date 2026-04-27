"use client";
import type { BadgeProps } from "../types";

const VARIANT: Record<string, string> = {
  default:     "bg-blue-50 text-[#1c64f2] border-blue-200",
  success:     "bg-green-100 text-emerald-900 border-transparent",
  warning:     "bg-amber-100 text-amber-800 border-transparent",
  destructive: "bg-red-100 text-red-800 border-transparent",
  outline:     "bg-transparent text-gray-900 border-gray-200",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.6875rem] px-2 py-px",
  md: "text-sm px-2.5 py-0.5",
};

const FlowbiteBadge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-medium rounded-full border whitespace-nowrap",
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

export default FlowbiteBadge;
