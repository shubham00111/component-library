"use client";
import { useState } from "react";
import type { TooltipProps, TooltipPlacement } from "../types";

const PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const NeobrutalismTooltip = ({
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
            "absolute z-50 px-2.5 py-1.5 text-xs font-extrabold font-sans text-white bg-black border-[2px] border-black shadow-[3px_3px_0_#555] whitespace-nowrap rounded-none pointer-events-none",
            PLACEMENT_CLASSES[placement],
          ].join(" ")}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default NeobrutalismTooltip;
