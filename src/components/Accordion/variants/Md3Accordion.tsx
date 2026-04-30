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
  if (!ctx) throw new Error("Must be used within Md3Accordion.Item");
  return ctx;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  const { show, setShow, disabled } = useAccordion();
  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && setShow(!show)}
      className="w-full flex justify-between items-center px-4 py-3 font-medium text-sm text-[#1c1b1f] dark:text-[#e6e1e5] hover:bg-[#6750a4]/8 dark:hover:bg-[#d0bcff]/8 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
    >
      <span className="text-left">{children}</span>
      <ChevronDown
        size={16}
        className={`shrink-0 ml-2 text-[#49454f] dark:text-[#cac4d0] transition-transform duration-200 ${show ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  const { show } = useAccordion();
  return (
    <div className={`overflow-hidden transition-all duration-200 ${show ? "max-h-96" : "max-h-0"}`}>
      <div className="px-4 pb-3 pt-0 text-sm text-[#49454f] dark:text-[#cac4d0]">{children}</div>
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
      <div className="border-b border-[#e7e0ec] dark:border-[#49454f] last:border-b-0">{children}</div>
    </AccordionContext.Provider>
  );
};

const Md3Accordion = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-[#e7e0ec] dark:border-[#49454f] rounded-[12px] overflow-hidden bg-[#fffbfe] dark:bg-[#1c1b1f] shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
    {children}
  </div>
);

Md3Accordion.Item = Item;
Md3Accordion.Title = Title;
Md3Accordion.Description = Description;

export default Md3Accordion;
