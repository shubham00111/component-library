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
  if (!ctx) throw new Error("Must be used within Md3Dropdown");
  return ctx;
};

const Trigger = () => {
  const { show, setShow, selectedOption, disabled, placeholder } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 border rounded-[4px] font-medium select-none cursor-pointer transition-all duration-200 bg-[#fffbfe] dark:bg-[#1c1b1f] ${show ? "border-[#6750a4] dark:border-[#d0bcff] border-b-2" : "border-[#79747e] dark:border-[#938f99]"} ${disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}`}
      onClick={() => !disabled && setShow(!show)}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      <span className={selectedOption ? "text-[#1c1b1f] dark:text-[#e6e1e5] text-sm" : "text-[#49454f] dark:text-[#cac4d0] text-sm"}>{selectedOption ? selectedOption.label : placeholder}</span>
      {show
        ? <ChevronUp size={18} className="text-[#49454f] dark:text-[#cac4d0]" />
        : <ChevronDown size={18} className="text-[#49454f] dark:text-[#cac4d0]" />}
    </div>
  );
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { show, disabled } = useDropdown();
  if (!show || disabled) return null;
  return (
    <div className="absolute z-10 mt-1 w-full bg-[#fffbfe] dark:bg-[#2b2930] border border-[#e7e0ec] dark:border-[#49454f] rounded-[4px] shadow-[0_4px_8px_rgba(0,0,0,0.3),0_8px_12px_rgba(0,0,0,0.15)] overflow-hidden">
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
      className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors duration-150 ${isHighlighted ? "bg-[#eaddff] dark:bg-[#4a4458] text-[#21005d] dark:text-[#e8def8]" : "text-[#1c1b1f] dark:text-[#e6e1e5] hover:bg-[#6750a4]/8 dark:hover:bg-[#d0bcff]/8"}`}
      onClick={() => handleChange(option, index)}
      role="option"
      aria-selected={isHighlighted}
    >
      {children || option.label}
    </div>
  );
};

const Md3Dropdown = ({
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

Md3Dropdown.Trigger = Trigger;
Md3Dropdown.Menu = Menu;
Md3Dropdown.Item = Item;
export default Md3Dropdown;
