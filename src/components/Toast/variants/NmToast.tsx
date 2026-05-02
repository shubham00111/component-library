"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };

const ICON_COLOR: Record<string, string> = {
  success: "text-emerald-500 dark:text-emerald-400",
  error:   "text-red-500 dark:text-red-400",
  warning: "text-amber-500 dark:text-amber-400",
  info:    "text-[#6c7a9c] dark:text-[#a0a8c0]",
};

const POSITION: Record<string, string> = {
  "top-left":     "top-4 left-4",
  "top-right":    "top-4 right-4",
  "bottom-left":  "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const NmToast = ({
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
        "bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-xl",
        "shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28]",
        "font-sans text-[0.9375rem] text-[#6c7a9c] dark:text-[#a0a8c0]",
        POSITION[position],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="status"
      aria-live="polite"
    >
      <Icon size={18} className={ICON_COLOR[iconType]} />
      <div className="flex-1 text-sm text-[#3d4f6e] dark:text-[#c5cde0]">{children}</div>
      <button
        className="flex items-center justify-center p-1.5 rounded-lg bg-[#e0e5ec] dark:bg-[#2d2d3a] border-none cursor-pointer text-[#6c7a9c] dark:text-[#a0a8c0] flex-shrink-0 shadow-[-2px_-2px_4px_#ffffff,_2px_2px_4px_rgba(163,177,198,0.4)] dark:shadow-[-2px_-2px_4px_#3d3d4e,_2px_2px_4px_#1d1d28] hover:text-[#3d4f6e] dark:hover:text-[#c5cde0] active:shadow-[inset_-2px_-2px_4px_#ffffff,_inset_2px_2px_4px_rgba(163,177,198,0.4)] dark:active:shadow-[inset_-2px_-2px_4px_#3d3d4e,_inset_2px_2px_4px_#1d1d28] transition-all duration-150"
        aria-label="Close notification"
        onClick={() => { setShow(false); onClose?.(); }}
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default NmToast;
