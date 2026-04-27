"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };

const ICON_STYLE: Record<string, string> = {
  success: "bg-green-200 text-green-800",
  error:   "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info:    "bg-blue-100 text-blue-800",
};

const POSITION: Record<string, string> = {
  "top-left":     "top-4 left-4",
  "top-right":    "top-4 right-4",
  "bottom-left":  "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const NeobrutalismToast = ({
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
        "fixed z-50 flex items-center gap-2 py-2 px-3 min-w-[280px] max-w-[420px]",
        "bg-white border-[3px] border-black rounded-[2px] shadow-[4px_4px_0_#000]",
        "font-sans text-[0.9375rem] text-black hover:shadow-[6px_6px_0_#000]",
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
          "flex items-center justify-center w-8 h-8 rounded-[2px] border-[2px] border-black flex-shrink-0",
          ICON_STYLE[iconType],
        ].join(" ")}
      >
        <Icon size={16} />
      </div>
      <div className="flex-1 font-normal text-black">{children}</div>
      <button
        className="flex items-center justify-center p-1 border-[2px] border-transparent rounded-[2px] bg-transparent cursor-pointer text-[#333] flex-shrink-0 hover:bg-yellow-400 hover:border-black hover:text-black focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-black focus-visible:outline-offset-2"
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

export default NeobrutalismToast;
