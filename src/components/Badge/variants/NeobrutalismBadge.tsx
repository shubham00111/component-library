"use client";
import type { BadgeProps } from "../types";

const VARIANT: Record<string, string> = {
  default:     "bg-yellow-400 text-black",
  success:     "bg-lime-400 text-black",
  warning:     "bg-amber-400 text-black",
  destructive: "bg-red-500 text-white",
  outline:     "bg-transparent text-black",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.6875rem] px-1.5 py-px",
  md: "text-[0.8125rem] px-2 py-0.5",
};

const NeobrutalismBadge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-extrabold rounded-[2px] border-[2px] border-black shadow-[2px_2px_0_#000] whitespace-nowrap",
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

export default NeobrutalismBadge;
