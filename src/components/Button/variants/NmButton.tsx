"use client";
import type { ButtonProps } from "../types";

const VARIANT: Record<string, string> = {
  primary:
    "bg-[#e0e5ec] text-[#6c7a9c] shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] active:shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] dark:bg-[#2d2d3a] dark:text-[#a0a8c0] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28] dark:hover:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28] dark:active:shadow-[inset_-5px_-5px_10px_#3d3d4e,_inset_5px_5px_10px_#1d1d28]",
  secondary:
    "bg-[#e0e5ec] text-[#4a5a80] shadow-[-3px_-3px_7px_#ffffff,_3px_3px_7px_rgba(163,177,198,0.5)] hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] active:shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] dark:bg-[#2d2d3a] dark:text-[#c5cde0] dark:shadow-[-3px_-3px_7px_#3d3d4e,_3px_3px_7px_#1d1d28] dark:hover:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28] dark:active:shadow-[inset_-5px_-5px_10px_#3d3d4e,_inset_5px_5px_10px_#1d1d28]",
  destructive:
    "bg-[#e0e5ec] text-red-500 shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] active:shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] dark:bg-[#2d2d3a] dark:text-red-400 dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28] dark:hover:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28] dark:active:shadow-[inset_-5px_-5px_10px_#3d3d4e,_inset_5px_5px_10px_#1d1d28]",
  ghost:
    "bg-transparent text-[#6c7a9c] hover:bg-[#e0e5ec] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] dark:text-[#a0a8c0] dark:hover:bg-[#2d2d3a] dark:hover:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28]",
  outline:
    "bg-[#e0e5ec] text-[#6c7a9c] ring-1 ring-[rgba(163,177,198,0.5)] shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.4)] hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] active:shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] dark:bg-[#2d2d3a] dark:text-[#a0a8c0] dark:ring-[#3d3d4e] dark:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28] dark:hover:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28] dark:active:shadow-[inset_-5px_-5px_10px_#3d3d4e,_inset_5px_5px_10px_#1d1d28]",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.8125rem] py-1.5 px-3",
  md: "py-2.5 px-5",
  lg: "text-lg py-3 px-7",
};

const NmButton = ({
  children = "Button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    aria-label={ariaLabel}
    className={[
      "inline-flex items-center justify-center gap-2 cursor-pointer font-semibold font-sans rounded-xl whitespace-nowrap select-none transition-all duration-150 border-none",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6c7a9c]/60 focus-visible:outline-offset-2 dark:focus-visible:outline-[#a0a8c0]/60",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-none",
      VARIANT[variant],
      SIZE[size],
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </button>
);

export default NmButton;
