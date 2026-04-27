"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { PopoverContextType, PopoverProps, PopoverTriggerProps, PopoverContentProps } from "../types";

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Must be used within NeobrutalismPopover");
  return ctx;
};

const Trigger = ({ children, className = "" }: PopoverTriggerProps) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className={["inline-flex items-center px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] font-extrabold bg-white hover:bg-yellow-400 transition-colors cursor-pointer font-sans text-sm", className].filter(Boolean).join(" ")}
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
      className={["absolute z-50 top-full left-0 mt-2 min-w-[200px] bg-white border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] p-4 font-sans", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
};

const NeobrutalismPopover = ({ children, className = "" }: PopoverProps) => {
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

NeobrutalismPopover.Trigger = Trigger;
NeobrutalismPopover.Content = Content;
export default NeobrutalismPopover;
