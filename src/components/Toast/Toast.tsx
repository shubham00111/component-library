import { BookOpen, Check, Info, X } from "lucide-react";
import { cn } from "../../utils/Util";
import { Activity, useEffect, useState } from "react";

type iconType = "success" | "error" | "warning" | "info";
type iconPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface ToastProps {
  iconType: iconType;
  className?: string;
  CloseIcon?: React.FC;
  children?: React.ReactNode;
  onClose?: () => void;
  position?: iconPosition;
  timer?: number;
}

const getIconFromIconType = (iconType: iconType) => {
  let icon;
  switch (iconType) {
    case "success":
      icon = Check;
      break;
    case "error":
      icon = X;
      break;
    case "warning":
      icon = Info;
      break;
    case "info":
      icon = BookOpen;
      break;
  }
  return icon;
};

const getIconClassfromIconType = (iconType: iconType) => {
  let className: string;
  switch (iconType) {
    case "success":
      className = "bg-green-100 text-green-900";
      break;
    case "error":
      className = "bg-red-100 text-red-900";
      break;
    case "warning":
      className = "bg-yellow-100 text-yellow-900";
      break;
    case "info":
      className = "bg-blue-100 text-blue-900";
      break;
  }
  return className;
};

const Toast = ({
  iconType = "success",
  className = "",
  CloseIcon = X,
  children,
  onClose = () => {},
  position = "bottom-right",
  timer,
}: ToastProps) => {
  let Icon = getIconFromIconType(iconType);
  let iconClass = getIconClassfromIconType(iconType);
  let [first, second] = position.split("-");
  const [show, setShow] = useState(true);
  const positionClasses = cn(
    first === "top" ? "top-4" : "bottom-4",
    second === "right" ? "right-4" : "left-4",
  );
  useEffect(() => {
    document.documentElement.classList.add("dark");
    if (timer && Number.isFinite(timer) && timer > 0) {
      setTimeout(() => {
        setShow(false);
      }, timer);
    }
  }, []);

  return (
    <Activity mode={show ? "visible" : "hidden"}>
      <div
        className={cn(
          "fixed z-50",
          positionClasses,
          "min-w-100 rounded-xl border border-neutral-200 p-4 shadow-sm transition-all duration-100 hover:shadow-md",
          "flex items-center gap-2",
          "dark:bg-dark-bg dark:border-dark-border dark:text-dark-text",
          className,
        )}
      >
        <div className={cn(iconClass, "shrink-0 rounded-xl p-1")}>
          <Icon />
        </div>
        <div className="ms-3 text-neutral-600">{children}</div>
        <button
          className="hover: ms-auto rounded-xl p-1 text-neutral-500 hover:bg-gray-100 hover:text-neutral-600"
          onClick={() => {
            setShow(false);
            if (onClose) onClose();
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </Activity>
  );
};

export default Toast;
