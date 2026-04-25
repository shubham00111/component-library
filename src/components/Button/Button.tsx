import { cn } from "../../utils/Util";

interface ButtonProps {
  text?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
  size?: "small" | "medium" | "large";
}

const Button = ({
  text = "",
  label = "",
  className = "",
  onClick,
  primary,
  size,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "border-2 border-black rounded-md cursor-pointer px-2 py-1 hover:bg-black hover:text-white transition duration-200 ease-in-out focus:outline-1 focus:outline-blue-400",
        primary && "bg-black text-white",
        size === "large" && "px-6 py-3 text-lg",
        size === "small" && "px-2 py-0.5 text-sm",
        className,
      )}
    >
      {label || text}
    </button>
  );
};

export default Button;
