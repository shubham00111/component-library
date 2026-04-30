"use client";
import { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionContextType = {
  show: boolean;
  setShow: (v: boolean) => void;
  disabled: boolean;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const useAccordion = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Must be used within NmAccordion.Item");
  return ctx;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  const { show, setShow, disabled } = useAccordion();
  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && setShow(!show)}
      className="w-full flex justify-between items-center px-4 py-3 font-semibold text-sm text-[#6c7a9c] dark:text-[#a0a8c0] bg-[#e0e5ec] dark:bg-[#2d2d3a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
    >
      <span className="text-left">{children}</span>
      <ChevronDown
        size={16}
        className={`shrink-0 ml-2 text-[#6c7a9c] dark:text-[#a0a8c0] transition-transform duration-200 ${show ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  const { show } = useAccordion();
  return (
    <div className={`overflow-hidden transition-all duration-200 ${show ? "max-h-96" : "max-h-0"}`}>
      <div className="px-4 pb-3 pt-0 text-sm text-[#6c7a9c] dark:text-[#a0a8c0] bg-[#e0e5ec] dark:bg-[#2d2d3a] shadow-[inset_-2px_-2px_5px_#ffffff,_inset_2px_2px_5px_rgba(163,177,198,0.3)] dark:shadow-[inset_-2px_-2px_5px_#3d3d4e,_inset_2px_2px_5px_#1d1d28]">{children}</div>
    </div>
  );
};

const Item = ({
  children,
  defaultOpen = false,
  disabled = false,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
}) => {
  const [show, setShow] = useState(defaultOpen);
  return (
    <AccordionContext.Provider value={{ show, setShow, disabled }}>
      <div className="border-b border-[rgba(163,177,198,0.3)] dark:border-[#3d3d4e] last:border-b-0">{children}</div>
    </AccordionContext.Provider>
  );
};

const NmAccordion = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-xl overflow-hidden shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28]">
    {children}
  </div>
);

NmAccordion.Item = Item;
NmAccordion.Title = Title;
NmAccordion.Description = Description;

export default NmAccordion;
