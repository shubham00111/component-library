"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };

const ICON_STYLE: Record<string, string> = {
  success: "bg-green-100 text-emerald-900",
  error:   "bg-red-100 text-red-800",
  warning: "bg-amber-100 text-amber-800",
  info:    "bg-blue-50 text-[#1c64f2]",
};

const POSITION: Record<string, string> = {
  "top-left":     "top-4 left-4",
  "top-right":    "top-4 right-4",
  "bottom-left":  "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const FlowbiteToast = ({
  iconType = "info",
  children,
  onClose,
  position = "bottom-right",
  timer,
  className = "",
}: ToastProps) => {
  const [show, setShow] = useState(true);
  const Icon = ICONS[iconType];

  useEffect(() => {
    if (!timer || !Number.isFinite(timer) || timer <= 0) return;
    const id = setTimeout(() => setShow(false), timer);
    return () => clearTimeout(id);
  }, [timer]);

  if (!show) return null;

  return (
    <div
      className={[
        "fixed z-50 flex items-center gap-3 py-3 px-4 min-w-[280px] max-w-[420px]",
        "bg-white border border-gray-200 rounded-lg shadow-md",
        "font-sans text-[0.9375rem] text-gray-900 hover:shadow-lg transition-shadow duration-200",
        POSITION[position],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="status"
      aria-live="polite"
    >
      <div
        className={[
          "flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0",
          ICON_STYLE[iconType],
        ].join(" ")}
      >
        <Icon size={16} />
      </div>
      <div className="flex-1 text-sm text-gray-900">{children}</div>
      <button
        className="flex items-center justify-center p-1 border-none rounded-lg bg-transparent cursor-pointer text-gray-500 flex-shrink-0 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(28,100,242,0.3)] transition-colors duration-200"
        aria-label="Close notification"
        onClick={() => {
          setShow(false);
          onClose?.();
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default FlowbiteToast;
