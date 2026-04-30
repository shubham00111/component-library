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
  if (!ctx) throw new Error("Must be used within NmDropdown");
  return ctx;
};

const Trigger = () => {
  const { show, setShow, selectedOption, disabled, placeholder } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between px-4 py-2.5 bg-[#e0e5ec] dark:bg-[#2d2d3a] text-[#6c7a9c] dark:text-[#a0a8c0] font-semibold rounded-xl border-none select-none cursor-pointer transition-all duration-150 ${show ? "shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[inset_-5px_-5px_10px_#3d3d4e,_inset_5px_5px_10px_#1d1d28]" : "shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] dark:hover:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28]"} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      onClick={() => !disabled && setShow(!show)}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      <span className="text-sm">{selectedOption ? selectedOption.label : placeholder}</span>
      {show ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </div>
  );
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { show, disabled } = useDropdown();
  if (!show || disabled) return null;
  return (
    <div className="absolute z-10 mt-2 w-full bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-xl overflow-hidden shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28]">
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
      className={`px-4 py-2.5 text-sm font-medium text-[#6c7a9c] dark:text-[#a0a8c0] cursor-pointer transition-all duration-150 ${isHighlighted ? "shadow-[inset_-3px_-3px_6px_#ffffff,_inset_3px_3px_6px_rgba(163,177,198,0.5)] dark:shadow-[inset_-3px_-3px_6px_#3d3d4e,_inset_3px_3px_6px_#1d1d28] text-[#3d4f6e] dark:text-[#c5cde0]" : "hover:bg-[rgba(163,177,198,0.1)]"}`}
      onClick={() => handleChange(option, index)}
      role="option"
      aria-selected={isHighlighted}
    >
      {children || option.label}
    </div>
  );
};

const NmDropdown = ({
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

NmDropdown.Trigger = Trigger;
NmDropdown.Menu = Menu;
NmDropdown.Item = Item;
export default NmDropdown;
