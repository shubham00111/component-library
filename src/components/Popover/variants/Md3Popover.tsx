"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { PopoverContextType, PopoverProps, PopoverTriggerProps, PopoverContentProps } from "../types";

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Must be used within Md3Popover");
  return ctx;
};

const Trigger = ({ children, className = "" }: PopoverTriggerProps) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className={["inline-flex items-center px-6 py-2.5 bg-[#eaddff] dark:bg-[#4a4458] text-[#21005d] dark:text-[#e8def8] rounded-[20px] font-medium hover:shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-all duration-200 cursor-pointer font-sans text-sm", className].filter(Boolean).join(" ")}
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
      className={["absolute z-50 top-full left-0 mt-2 min-w-[220px] bg-[#fffbfe] dark:bg-[#2b2930] border border-[#e7e0ec] dark:border-[#49454f] rounded-[12px] shadow-[0_4px_8px_rgba(0,0,0,0.3),0_8px_12px_rgba(0,0,0,0.15)] p-4 font-sans text-[#1c1b1f] dark:text-[#e6e1e5]", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
};

const Md3Popover = ({ children, className = "" }: PopoverProps) => {
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

Md3Popover.Trigger = Trigger;
Md3Popover.Content = Content;
export default Md3Popover;
