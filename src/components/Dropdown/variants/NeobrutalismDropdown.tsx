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
  if (!ctx) throw new Error("Must be used within NeobrutalismDropdown");
  return ctx;
};

const Trigger = () => {
  const { show, setShow, selectedOption, disabled, placeholder } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] font-bold bg-white cursor-pointer select-none hover:bg-yellow-400 transition-colors ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      onClick={() => !disabled && setShow(!show)}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      <span>{selectedOption ? selectedOption.label : placeholder}</span>
      {show ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </div>
  );
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { show, disabled } = useDropdown();
  if (!show || disabled) return null;
  return (
    <div className="absolute z-10 mt-1 w-full border-[3px] border-black shadow-[4px_4px_0_#000] bg-white rounded-[2px]">
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
      className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${isHighlighted ? "bg-yellow-400" : "hover:bg-yellow-400"}`}
      onClick={() => handleChange(option, index)}
      role="option"
      aria-selected={isHighlighted}
    >
      {children || option.label}
    </div>
  );
};

const NeobrutalismDropdown = ({
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      if (!dropdownRef.current?.contains(document.activeElement) && dropdownRef.current !== document.activeElement) return;
      if (!show) {
        if (e.key === "Enter") { e.preventDefault(); setShow(true); }
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((p) => p === null ? 0 : Math.min(p + 1, options.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((p) => p === null ? options.length - 1 : Math.max(p - 1, 0));
      } else if (e.key === "Enter" && highlightedIndex !== null) {
        e.preventDefault();
        handleChange(options[highlightedIndex], highlightedIndex);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, highlightedIndex, options, disabled]);

  const handleChange = (option: OptionItem, index: number) => {
    setSelectedOption(option);
    setHighlightedIndex(index);
    setShow(false);
    onChange?.(option);
  };

  return (
    <DropdownContext.Provider value={{ show, setShow, selectedOption, highlightedIndex, options, handleChange, disabled, placeholder }}>
      <div className="relative" ref={dropdownRef} tabIndex={0}>{children}</div>
    </DropdownContext.Provider>
  );
};

NeobrutalismDropdown.Trigger = Trigger;
NeobrutalismDropdown.Menu = Menu;
NeobrutalismDropdown.Item = Item;

export default NeobrutalismDropdown;
