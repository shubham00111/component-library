"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };

const ICON_COLOR: Record<string, string> = {
  success: "text-[#057a55] dark:text-[#6ee7b7]",
  error:   "text-[#b3261e] dark:text-[#f2b8b5]",
  warning: "text-[#c27803] dark:text-[#fde68a]",
  info:    "text-[#6750a4] dark:text-[#d0bcff]",
};

const POSITION: Record<string, string> = {
  "top-left":     "top-4 left-4",
  "top-right":    "top-4 right-4",
  "bottom-left":  "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const Md3Toast = ({
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
        "fixed z-50 flex items-center gap-3 py-3.5 px-4 min-w-[280px] max-w-[420px]",
        "bg-[#2b2930] dark:bg-[#ece6f0] rounded-[4px] shadow-[0_4px_8px_rgba(0,0,0,0.3),0_8px_12px_rgba(0,0,0,0.15)]",
        "font-sans text-[0.9375rem] text-[#e6e1e5] dark:text-[#1c1b1f]",
        POSITION[position],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="status"
      aria-live="polite"
    >
      <Icon size={18} className={ICON_COLOR[iconType]} />
      <div className="flex-1 text-sm">{children}</div>
      <button
        className="flex items-center justify-center p-1 rounded-full bg-transparent cursor-pointer text-[#cac4d0] dark:text-[#49454f] flex-shrink-0 hover:bg-white/10 dark:hover:bg-black/8 hover:text-white dark:hover:text-[#1c1b1f] transition-all duration-200 border-none"
        aria-label="Close notification"
        onClick={() => { setShow(false); onClose?.(); }}
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Md3Toast;
