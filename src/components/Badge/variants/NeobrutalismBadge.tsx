"use client";
import type { BadgeProps } from "../types";
import "./NeobrutalismBadge.css";

const NeobrutalismBadge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={["nb-badge", `nb-badge--${variant}`, `nb-badge--${size}`, className].filter(Boolean).join(" ")}
    >
      {children}
    </span>
  );
};

export default NeobrutalismBadge;
