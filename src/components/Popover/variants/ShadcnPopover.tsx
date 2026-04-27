"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { PopoverContextType, PopoverProps, PopoverTriggerProps, PopoverContentProps } from "../types";

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Must be used within ShadcnPopover");
  return ctx;
};

const Trigger = ({ children, className = "" }: PopoverTriggerProps) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className={["inline-flex items-center px-3 py-2 border border-zinc-200 rounded-[6px] shadow-sm font-medium bg-white hover:bg-zinc-50 transition-colors duration-150 cursor-pointer font-sans text-sm text-zinc-900", className].filter(Boolean).join(" ")}
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
      className={["absolute z-50 top-full left-0 mt-2 min-w-[200px] bg-white border border-zinc-200 shadow-md rounded-[6px] p-4 font-sans", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
};

const ShadcnPopover = ({ children, className = "" }: PopoverProps) => {
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

ShadcnPopover.Trigger = Trigger;
ShadcnPopover.Content = Content;
export default ShadcnPopover;
