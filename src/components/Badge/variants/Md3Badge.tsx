"use client";
import type { BadgeProps } from "../types";

const VARIANT: Record<string, string> = {
  default:
    "bg-[#eaddff] text-[#21005d] dark:bg-[#4a4458] dark:text-[#e8def8]",
  success:
    "bg-[#d7f8e8] text-[#065f46] dark:bg-[#1b4332] dark:text-[#a7f3d0]",
  warning:
    "bg-[#fef9c3] text-[#713f12] dark:bg-[#422006] dark:text-[#fde68a]",
  destructive:
    "bg-[#fde8e8] text-[#b3261e] dark:bg-[#601410] dark:text-[#f2b8b5]",
  outline:
    "bg-transparent border border-[#79747e] text-[#49454f] dark:border-[#938f99] dark:text-[#cac4d0]",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.6875rem] px-2 py-px",
  md: "text-[0.8125rem] px-3 py-0.5",
};

const Md3Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-medium rounded-full whitespace-nowrap",
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

export default Md3Badge;
