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
  if (!ctx) throw new Error("Must be used within FlowbiteAccordion.Item");
  return ctx;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  const { show, setShow, disabled } = useAccordion();
  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && setShow(!show)}
      className="w-full flex justify-between items-center px-4 py-3 font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="text-left">{children}</span>
      <ChevronDown
        size={16}
        className={`shrink-0 ml-2 transition-transform duration-200 ${show ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  const { show } = useAccordion();
  return (
    <div className={`overflow-hidden transition-all duration-200 ${show ? "max-h-96" : "max-h-0"}`}>
      <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">{children}</div>
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
      <div className="border-b border-gray-200 last:border-b-0">{children}</div>
    </AccordionContext.Provider>
  );
};

const FlowbiteAccordion = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
    {children}
  </div>
);

FlowbiteAccordion.Item = Item;
FlowbiteAccordion.Title = Title;
FlowbiteAccordion.Description = Description;

export default FlowbiteAccordion;
