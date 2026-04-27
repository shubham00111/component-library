"use client";
import type { ButtonProps } from "../types";

const VARIANT: Record<string, string> = {
  primary:
    "bg-yellow-400 text-black border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px active:shadow-[2px_2px_0_#000] active:translate-x-0.5 active:translate-y-0.5 dark:border-white dark:shadow-[4px_4px_0_rgba(255,255,255,0.4)] dark:hover:shadow-[6px_6px_0_rgba(255,255,255,0.4)] dark:active:shadow-[2px_2px_0_rgba(255,255,255,0.4)]",
  secondary:
    "bg-lime-400 text-black border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px active:shadow-[2px_2px_0_#000] active:translate-x-0.5 active:translate-y-0.5 dark:border-white dark:shadow-[4px_4px_0_rgba(255,255,255,0.4)] dark:hover:shadow-[6px_6px_0_rgba(255,255,255,0.4)] dark:active:shadow-[2px_2px_0_rgba(255,255,255,0.4)]",
  destructive:
    "bg-red-500 text-white border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px active:shadow-[2px_2px_0_#000] active:translate-x-0.5 active:translate-y-0.5 dark:border-white dark:shadow-[4px_4px_0_rgba(255,255,255,0.4)] dark:hover:shadow-[6px_6px_0_rgba(255,255,255,0.4)] dark:active:shadow-[2px_2px_0_rgba(255,255,255,0.4)]",
  ghost:
    "bg-transparent text-black border-[3px] border-transparent hover:bg-yellow-400 hover:border-black hover:shadow-[4px_4px_0_#000] dark:text-white dark:hover:border-white dark:hover:shadow-[4px_4px_0_rgba(255,255,255,0.4)]",
  outline:
    "bg-transparent text-black border-[3px] border-black hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px dark:text-white dark:border-white dark:hover:shadow-[6px_6px_0_rgba(255,255,255,0.4)]",
};

const SIZE: Record<string, string> = {
  sm: "text-[0.8125rem] py-1 px-2",
  md: "py-2 px-4",
  lg: "text-lg py-3 px-6",
};

const NeobrutalismButton = ({
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
      "inline-flex items-center justify-center gap-1 cursor-pointer font-extrabold font-sans rounded-[2px] whitespace-nowrap select-none",
      "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-black focus-visible:outline-offset-[3px] dark:focus-visible:outline-white",
      "disabled:bg-zinc-700 disabled:text-zinc-400 disabled:border-zinc-600 disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-70 disabled:pointer-events-none",
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

export default NeobrutalismButton;
