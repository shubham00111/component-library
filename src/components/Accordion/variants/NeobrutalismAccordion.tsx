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
  if (!ctx) throw new Error("Must be used within NeobrutalismAccordion.Item");
  return ctx;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  const { show, setShow, disabled } = useAccordion();
  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && setShow(!show)}
      className="w-full flex justify-between items-center px-4 py-3 font-bold bg-white hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="text-left">{children}</span>
      <ChevronDown
        size={20}
        className={`shrink-0 ml-2 transition-transform duration-200 ${show ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  const { show } = useAccordion();
  return (
    <div className={`overflow-hidden transition-all duration-200 ${show ? "max-h-96" : "max-h-0"}`}>
      <div className="px-4 py-3 bg-white text-sm border-t-[3px] border-black">{children}</div>
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
      <div className="border-b-[3px] border-black last:border-b-0">{children}</div>
    </AccordionContext.Provider>
  );
};

const NeobrutalismAccordion = ({ children }: { children: React.ReactNode }) => (
  <div className="border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] overflow-hidden">
    {children}
  </div>
);

NeobrutalismAccordion.Item = Item;
NeobrutalismAccordion.Title = Title;
NeobrutalismAccordion.Description = Description;

export default NeobrutalismAccordion;
