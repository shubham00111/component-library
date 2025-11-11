import { cn } from "../../utils/Util";

interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
  label?: string;
  size?: "small" | "medium" | "large";
}

const Button = ({ text = "", className = "" }: ButtonProps) => {
  return (
    <button
      className={cn(
        className,
        "border-2 border-black rounded-md cursor-pointer px-2 py-1 hover:bg-black hover:text-white transition duration-200 ease-in-out focus:outline-1 focus:outline-blue-400"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
