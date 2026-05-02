"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { PopoverContextType, PopoverProps, PopoverTriggerProps, PopoverContentProps } from "../types";

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Must be used within GlassmorphismPopover");
  return ctx;
};

const Trigger = ({ children, className = "" }: PopoverTriggerProps) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className={["inline-flex items-center px-3 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl font-medium text-white hover:bg-white/30 transition-all duration-200 cursor-pointer font-sans text-sm", className].filter(Boolean).join(" ")}
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
      className={["absolute z-50 top-full left-0 mt-2 min-w-[220px] bg-white/15 backdrop-blur-xl border border-white/25 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.2)] p-4 font-sans text-white", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
};

const GlassmorphismPopover = ({ children, className = "" }: PopoverProps) => {
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

GlassmorphismPopover.Trigger = Trigger;
GlassmorphismPopover.Content = Content;
export default GlassmorphismPopover;
