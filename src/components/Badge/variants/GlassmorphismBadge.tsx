"use client";
import type { BadgeProps } from "../types";

const VARIANT: Record<string, string> = {
  default:     "bg-white/20 text-white border-white/30",
  success:     "bg-emerald-400/30 text-white border-emerald-300/40",
  warning:     "bg-amber-400/30 text-white border-amber-300/40",
  destructive: "bg-red-400/30 text-white border-red-300/40",
  outline:     "bg-transparent text-white border-white/50",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.6875rem] px-2 py-px",
  md: "text-[0.8125rem] px-2.5 py-0.5",
};

const GlassmorphismBadge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-medium rounded-xl border backdrop-blur-md whitespace-nowrap",
      "shadow-[0_4px_16px_rgba(31,38,135,0.12)]",
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

export default GlassmorphismBadge;
