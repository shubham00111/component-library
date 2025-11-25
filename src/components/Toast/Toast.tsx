import { BookOpen, Check, Info, X } from "lucide-react";
import { cn } from "../../utils/Util";

type iconType = "success" | "error" | "warning" | "info";

interface ToastProps {
  iconType: iconType;
  className?: string;
  CloseIcon?: React.FC;
  children?: React.ReactNode;
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
}: ToastProps) => {
  let Icon = getIconFromIconType(iconType);

  let iconClass = getIconClassfromIconType(iconType);
  return (
    <div
      className={cn(
        "min-w-100 rounded-xl border border-neutral-200 p-4 shadow-sm transition-shadow duration-100 hover:shadow-md",
        "flex items-center gap-2",
        className,
      )}
    >
      <div className={cn(iconClass, "shrink-0 rounded-xl p-1")}>
        <Icon />
      </div>
      <div className="ms-3 text-neutral-600">{children}</div>
      <button className="hover: ms-auto rounded-xl p-1 text-neutral-500 hover:bg-gray-100 hover:text-neutral-600">
        <CloseIcon />
      </button>
    </div>
  );
};

export default Toast;
