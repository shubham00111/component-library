"use client";
import type { BadgeProps } from "../types";
import "./ShadcnBadge.css";

const ShadcnBadge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={["shadcn-badge", `shadcn-badge--${variant}`, `shadcn-badge--${size}`, className].filter(Boolean).join(" ")}
    >
      {children}
    </span>
  );
};

export default ShadcnBadge;
