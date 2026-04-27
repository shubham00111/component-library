"use client";
import type { BadgeProps } from "../types";

const VARIANT: Record<string, string> = {
  default:     "bg-yellow-400 text-black dark:text-black",
  success:     "bg-lime-400 text-black dark:text-black",
  warning:     "bg-amber-400 text-black dark:text-black",
  destructive: "bg-red-500 text-white",
  outline:     "bg-transparent text-black dark:text-white",
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
      "dark:border-white dark:shadow-[2px_2px_0_rgba(255,255,255,0.4)]",
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
