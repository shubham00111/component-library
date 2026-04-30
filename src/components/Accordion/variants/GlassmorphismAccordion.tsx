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
  if (!ctx) throw new Error("Must be used within GlassmorphismAccordion.Item");
  return ctx;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  const { show, setShow, disabled } = useAccordion();
  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && setShow(!show)}
      className="w-full flex justify-between items-center px-4 py-3 font-medium text-sm text-white hover:bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
    >
      <span className="text-left">{children}</span>
      <ChevronDown
        size={16}
        className={`shrink-0 ml-2 text-white/70 transition-transform duration-200 ${show ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  const { show } = useAccordion();
  return (
    <div className={`overflow-hidden transition-all duration-200 ${show ? "max-h-96" : "max-h-0"}`}>
      <div className="px-4 pb-3 pt-0 text-sm text-white/70">{children}</div>
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
      <div className="border-b border-white/10 last:border-b-0">{children}</div>
    </AccordionContext.Provider>
  );
};

const GlassmorphismAccordion = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] overflow-hidden">
    {children}
  </div>
);

GlassmorphismAccordion.Item = Item;
GlassmorphismAccordion.Title = Title;
GlassmorphismAccordion.Description = Description;

export default GlassmorphismAccordion;
