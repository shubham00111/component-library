"use client";
import { useState } from "react";
import type { TooltipProps, TooltipPlacement } from "../types";

const PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const NmTooltip = ({
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
            "absolute z-50 px-3 py-1.5 text-xs font-semibold font-sans text-[#6c7a9c] dark:text-[#a0a8c0] bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-xl whitespace-nowrap pointer-events-none",
            "shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.6)] dark:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28]",
            PLACEMENT_CLASSES[placement],
          ].join(" ")}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default NmTooltip;
