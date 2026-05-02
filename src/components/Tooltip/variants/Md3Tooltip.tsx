"use client";
import { useState } from "react";
import type { TooltipProps, TooltipPlacement } from "../types";

const PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const Md3Tooltip = ({
  content,
  placement = "top",
  children,
  className = "",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={["relative inline-flex", className].filter(Boolean).join(" ")}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={[
            "absolute z-50 px-2.5 py-1.5 text-xs font-medium font-sans text-[#e6e1e5] bg-[#2b2930] dark:bg-[#e6e1e5] dark:text-[#2b2930] rounded whitespace-nowrap pointer-events-none shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)]",
            PLACEMENT_CLASSES[placement],
          ].join(" ")}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default Md3Tooltip;
