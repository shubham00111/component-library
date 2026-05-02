"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };

const POSITION: Record<string, string> = {
  "top-left":     "top-4 left-4",
  "top-right":    "top-4 right-4",
  "bottom-left":  "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const GlassmorphismToast = ({
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
        "bg-white/15 backdrop-blur-xl border border-white/25 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.2)]",
        "font-sans text-[0.9375rem] text-white",
        POSITION[position],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 flex-shrink-0">
        <Icon size={14} className="text-white" />
      </div>
      <div className="flex-1 text-sm text-white/90">{children}</div>
      <button
        className="flex items-center justify-center p-1 rounded-lg bg-transparent cursor-pointer text-white/60 flex-shrink-0 hover:bg-white/15 hover:text-white transition-all duration-200 border-none"
        aria-label="Close notification"
        onClick={() => { setShow(false); onClose?.(); }}
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default GlassmorphismToast;
