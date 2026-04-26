export type ToastIconType = "success" | "error" | "warning" | "info";
export type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface ToastProps {
  iconType?: ToastIconType;
  children?: React.ReactNode;
  onClose?: () => void;
  position?: ToastPosition;
  timer?: number;
  className?: string;
}
