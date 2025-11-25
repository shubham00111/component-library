import { createContext, useContext, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/Util";
import type {
  TitleProps,
  DescriptionProps,
  AccordionContextType,
  AccordionItemProps,
  AccordionProps,
} from "./types";

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used within an Accordion component"
    );
  }
  return context;
};

/**
 * Title - Header that toggles the accordion
 */
const Title = ({ children, className }: TitleProps) => {
  const { show, setShow, disabled, id } = useAccordion();

  const handleToggle = () => {
    if (!disabled) {
      setShow(!show);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setShow(!show);
    }
  };

  return (
    <button
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={cn(
        "w-full flex items-center justify-between p-4 rounded-md",
        "border border-gray-300 bg-white hover:bg-gray-50 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        disabled && "cursor-not-allowed opacity-50 bg-gray-100",
        className
      )}
      aria-expanded={show}
      aria-controls={id}
      role="button"
      tabIndex={0}
    >
      <div className="flex-1 text-left font-medium text-gray-900">
        {children}
      </div>
      <span
        className={cn(
          "ml-2 transition-transform duration-300 shrink-0",
          show && "rotate-180"
        )}
      >
        <ChevronDown size={20} />
      </span>
    </button>
  );
};

/**
 * Description - Content area that shows/hides
 */
const Description = ({ children, className }: DescriptionProps) => {
  const { show, id } = useAccordion();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>("auto");

  // Animate height on open/close
  if (show && contentRef.current && height === "auto") {
    setHeight(contentRef.current.scrollHeight);
  }

  return (
    <div
      id={id}
      ref={contentRef}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-out",
        show ? "max-h-96" : "max-h-0"
      )}
      role="region"
      aria-hidden={!show}
    >
      <div
        className={cn(
          "p-4 bg-gray-50 border border-t-0 border-gray-300",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Item - Wrapper for a single accordion item
 */
const Item = ({
  children,
  defaultOpen = false,
  disabled = false,
  className,
  onToggle,
}: AccordionItemProps) => {
  const [show, setShow] = useState(defaultOpen);
  const id = `accordion-item-${Math.random().toString(36).slice(2, 9)}`;

  const handleSetShow = (newShow: boolean) => {
    setShow(newShow);
    onToggle?.(newShow);
  };

  const value: AccordionContextType = {
    show,
    setShow: handleSetShow,
    disabled,
    id,
  };

  return (
    <AccordionContext.Provider value={value}>
      <div className={cn("mb-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

/**
 * Accordion - Main compound component
 */
const Accordion = ({ children, className }: AccordionProps) => {
  return <div className={cn("space-y-2", className)}>{children}</div>;
};

// Attach sub-components
Accordion.Item = Item;
Accordion.Title = Title;
Accordion.Description = Description;

export default Accordion;
