"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { PopoverContextType, PopoverProps, PopoverTriggerProps, PopoverContentProps } from "../types";

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Must be used within NmPopover");
  return ctx;
};

const Trigger = ({ children, className = "" }: PopoverTriggerProps) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className={[
        "inline-flex items-center px-5 py-2.5 bg-[#e0e5ec] dark:bg-[#2d2d3a] text-[#6c7a9c] dark:text-[#a0a8c0] rounded-xl font-semibold cursor-pointer font-sans text-sm border-none transition-all duration-150",
        open
          ? "shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[inset_-5px_-5px_10px_#3d3d4e,_inset_5px_5px_10px_#1d1d28]"
          : "shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] dark:hover:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28]",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
};

const Content = ({ children, className = "" }: PopoverContentProps) => {
  const { open } = usePopover();
  if (!open) return null;
  return (
    <div
      className={[
        "absolute z-50 top-full left-0 mt-3 min-w-[220px] bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-xl p-4 font-sans text-[#6c7a9c] dark:text-[#a0a8c0]",
        "shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28]",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
};

const NmPopover = ({ children, className = "" }: PopoverProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className={["relative inline-block", className].filter(Boolean).join(" ")}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

NmPopover.Trigger = Trigger;
NmPopover.Content = Content;
export default NmPopover;
