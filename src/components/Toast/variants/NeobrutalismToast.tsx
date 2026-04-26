"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";
import "./NeobrutalismToast.css";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };
const ICON_CLASSES = {
  success: "nb-toast__icon--success",
  error: "nb-toast__icon--error",
  warning: "nb-toast__icon--warning",
  info: "nb-toast__icon--info",
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
        "nb-toast",
        `nb-toast--${position}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="status"
      aria-live="polite"
    >
      <div className={`nb-toast__icon ${ICON_CLASSES[iconType]}`}>
        <Icon size={16} />
      </div>
      <div className="nb-toast__body">{children}</div>
      <button
        className="nb-toast__close"
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
