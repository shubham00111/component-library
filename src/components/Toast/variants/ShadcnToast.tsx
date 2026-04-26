"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";
import "./ShadcnToast.css";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };
const ICON_CLASSES = {
  success: "shadcn-toast__icon--success",
  error: "shadcn-toast__icon--error",
  warning: "shadcn-toast__icon--warning",
  info: "shadcn-toast__icon--info",
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
      className={["shadcn-toast", `shadcn-toast--${position}`, className].filter(Boolean).join(" ")}
      role="status"
      aria-live="polite"
    >
      <div className={`shadcn-toast__icon ${ICON_CLASSES[iconType]}`}>
        <Icon size={14} />
      </div>
      <div className="shadcn-toast__body">{children}</div>
      <button
        className="shadcn-toast__close"
        aria-label="Close notification"
        onClick={() => { setShow(false); onClose?.(); }}
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default ShadcnToast;
