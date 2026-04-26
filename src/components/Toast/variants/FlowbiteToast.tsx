"use client";
import { useEffect, useState } from "react";
import { BookOpen, Check, Info, X } from "lucide-react";
import type { ToastProps } from "../types";
import "./FlowbiteToast.css";

const ICONS = { success: Check, error: X, warning: Info, info: BookOpen };
const ICON_CLASSES = {
  success: "fb-toast__icon--success",
  error: "fb-toast__icon--error",
  warning: "fb-toast__icon--warning",
  info: "fb-toast__icon--info",
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
      className={["fb-toast", `fb-toast--${position}`, className].filter(Boolean).join(" ")}
      role="status"
      aria-live="polite"
    >
      <div className={`fb-toast__icon ${ICON_CLASSES[iconType]}`}>
        <Icon size={16} />
      </div>
      <div className="fb-toast__body">{children}</div>
      <button
        className="fb-toast__close"
        aria-label="Close notification"
        onClick={() => { setShow(false); onClose?.(); }}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default FlowbiteToast;
