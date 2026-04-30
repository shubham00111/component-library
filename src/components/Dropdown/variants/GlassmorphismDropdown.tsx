"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type OptionItem = { id: string; label: string; value: string };
type DropdownContextType = {
  show: boolean;
  setShow: (v: boolean) => void;
  selectedOption: OptionItem | null;
  highlightedIndex: number | null;
  options: OptionItem[];
  handleChange: (option: OptionItem, index: number) => void;
  disabled: boolean;
  placeholder: string;
};

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

const useDropdown = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("Must be used within GlassmorphismDropdown");
  return ctx;
};

const Trigger = () => {
  const { show, setShow, selectedOption, disabled, placeholder } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 backdrop-blur-md border border-white/30 rounded-xl text-white font-medium select-none cursor-pointer transition-all duration-200 ${show ? "bg-white/25" : "bg-white/15 hover:bg-white/20"} ${disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}`}
      onClick={() => !disabled && setShow(!show)}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      <span className={selectedOption ? "text-white" : "text-white/60"}>{selectedOption ? selectedOption.label : placeholder}</span>
      {show ? <ChevronUp size={18} className="text-white/70" /> : <ChevronDown size={18} className="text-white/70" />}
    </div>
  );
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { show, disabled } = useDropdown();
  if (!show || disabled) return null;
  return (
    <div className="absolute z-10 mt-1 w-full backdrop-blur-xl bg-white/15 border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.2)] overflow-hidden">
      {children}
    </div>
  );
};

const Item = ({
  option,
  index,
  children,
}: {
  option: OptionItem;
  index: number;
  children?: React.ReactNode;
}) => {
  const { highlightedIndex, handleChange } = useDropdown();
  const isHighlighted = highlightedIndex === index;
  return (
    <div
      className={`px-4 py-2 text-sm font-medium text-white cursor-pointer transition-colors duration-150 ${isHighlighted ? "bg-white/25" : "hover:bg-white/15"}`}
      onClick={() => handleChange(option, index)}
      role="option"
      aria-selected={isHighlighted}
    >
      {children || option.label}
    </div>
  );
};

const GlassmorphismDropdown = ({
  options,
  children,
  disabled = false,
  placeholder = "Select an option",
  onChange,
}: {
  options: OptionItem[];
  children: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (option: OptionItem) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionItem | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (option: OptionItem, index: number) => {
    setSelectedOption(option);
    setHighlightedIndex(index);
    setShow(false);
    onChange?.(option);
  };

  return (
    <DropdownContext.Provider value={{ show, setShow, selectedOption, highlightedIndex, options, handleChange, disabled, placeholder }}>
      <div ref={dropdownRef} className="relative font-sans w-full">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

GlassmorphismDropdown.Trigger = Trigger;
GlassmorphismDropdown.Menu = Menu;
GlassmorphismDropdown.Item = Item;
export default GlassmorphismDropdown;
