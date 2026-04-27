"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { PopoverContextType, PopoverProps, PopoverTriggerProps, PopoverContentProps } from "../types";

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Must be used within FlowbitePopover");
  return ctx;
};

const Trigger = ({ children, className = "" }: PopoverTriggerProps) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className={["inline-flex items-center px-4 py-2 bg-[#1c64f2] hover:bg-[#1a56db] text-white border border-[#1c64f2] rounded-lg font-medium transition-all duration-200 cursor-pointer font-sans text-sm focus:shadow-[0_0_0_3px_rgba(28,100,242,0.3)] outline-none", className].filter(Boolean).join(" ")}
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
      className={["absolute z-50 top-full left-0 mt-2 min-w-[200px] bg-white border border-gray-200 shadow-lg rounded-lg p-4 font-sans", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
};

const FlowbitePopover = ({ children, className = "" }: PopoverProps) => {
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

FlowbitePopover.Trigger = Trigger;
FlowbitePopover.Content = Content;
export default FlowbitePopover;
