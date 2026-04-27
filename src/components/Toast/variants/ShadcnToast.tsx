"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };

const ICON_STYLE: Record<string, string> = {
  success: "bg-green-50 text-green-600",
  error:   "bg-red-50 text-red-500",
  warning: "bg-amber-50 text-amber-600",
  info:    "bg-blue-50 text-blue-600",
};

const POSITION: Record<string, string> = {
  "top-left":     "top-4 left-4",
  "top-right":    "top-4 right-4",
  "bottom-left":  "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const ShadcnToast = ({
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
        "bg-white border border-zinc-200 rounded-[6px] shadow",
        "font-sans text-[0.9375rem] text-zinc-900 hover:shadow-md transition-shadow duration-150",
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
          "flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0",
          ICON_STYLE[iconType],
        ].join(" ")}
      >
        <Icon size={14} />
      </div>
      <div className="flex-1 text-sm text-zinc-900">{children}</div>
      <button
        className="flex items-center justify-center p-1 border-none rounded-[4px] bg-transparent cursor-pointer text-zinc-500 flex-shrink-0 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-900 focus-visible:outline-offset-2"
        aria-label="Close notification"
        onClick={() => {
          setShow(false);
          onClose?.();
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default ShadcnToast;
