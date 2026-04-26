"use client";
import type { BadgeProps } from "../types";
import "./FlowbiteBadge.css";

const FlowbiteBadge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={["fb-badge", `fb-badge--${variant}`, `fb-badge--${size}`, className].filter(Boolean).join(" ")}
    >
      {children}
    </span>
  );
};

export default FlowbiteBadge;
