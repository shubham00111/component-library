import type { ButtonProps } from "../types";
import "./ShadcnButton.css";

const ShadcnButton = ({
  children = "Button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={[
        "shadcn-button",
        `shadcn-button--${variant}`,
        `shadcn-button--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};

export default ShadcnButton;
