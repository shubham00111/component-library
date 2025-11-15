import { ChevronDown, ChevronUp } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { cn } from "../../utils/Util";
import type {
  OptionItem,
  DropdownContextType,
  DropdownProps,
  TriggerProps,
  MenuProps,
  ItemProps,
} from "./types";

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "Dropdown components must be used within a Dropdown component"
    );
  }
  return context;
};

const Trigger = ({ className }: TriggerProps) => {
  const { show, setShow, selectedOption, disabled, placeholder, options } =
    useDropdown();
  const isEmpty = options.length === 0;

  return (
    <div
      className={cn(
        "pl-4 pr-1 py-2 rounded-md min-w-2xs border border-black flex cursor-pointer gap-3 justify-between",
        className,
        (disabled || isEmpty) &&
          "cursor-not-allowed bg-gray-300 border-gray-400 opacity-50 text-gray-500"
      )}
      onClick={() => {
        if (!disabled && !isEmpty) setShow(!show);
      }}
      role="button"
      aria-disabled={disabled || isEmpty}
      tabIndex={disabled || isEmpty ? -1 : 0}
    >
      {selectedOption == null ? placeholder : selectedOption.label}
      <span className={cn((disabled || isEmpty) && "opacity-50 text-gray-500")}>
        {show ? <ChevronUp /> : <ChevronDown />}
      </span>
    </div>
  );
};

const Menu = ({ children, className }: MenuProps) => {
  const { show, disabled, options } = useDropdown();

  if (!show || disabled) return null;

  // Show empty state if no options
  if (options.length === 0) {
    return (
      <div
        className={cn(
          "absolute w-full border border-gray-300 rounded-sm shadow-lg z-10",
          className
        )}
      >
        <div className="px-4 py-8 text-center text-gray-500">
          <p className="text-sm">No options available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute w-full border border-gray-300 rounded-sm shadow-lg z-10",
        className
      )}
    >
      {children}
    </div>
  );
};

const Item = ({ option, index, children, className }: ItemProps) => {
  const { highlightedIndex, handleChange } = useDropdown();
  const isHighlighted = highlightedIndex === index;

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-sm cursor-pointer transition-all duration-200 ease-out",
        "hover:bg-gray-200 hover:scale-[1.02] hover:shadow-sm",
        isHighlighted && "bg-gray-200 scale-[1.02]",
        className
      )}
      onClick={() => handleChange(option, index)}
      role="option"
      aria-selected={isHighlighted}
    >
      {children || option.label}
    </div>
  );
};

const Dropdown = ({
  options,
  children,
  disabled = false,
  placeholder = "",
  onChange = () => {},
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<null | OptionItem>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<null | number>(null);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) {
        return;
      }
      if (
        dropdownRef.current !== document.activeElement &&
        !dropdownRef.current?.contains(document.activeElement)
      ) {
        return;
      }

      if (!show) {
        if (e.key === "Enter") {
          e.preventDefault();
          setShow(!show);
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prevIndex) => {
            const currentIndex = prevIndex ?? -1;
            const nextIndex = currentIndex + 1;
            if (nextIndex >= options.length) {
              return 0;
            }
            return nextIndex;
          });
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prevIndex) => {
            const currentIndex = prevIndex ?? 0;
            const newIndex = currentIndex - 1;
            if (newIndex < 0) {
              return options.length - 1;
            }
            return newIndex;
          });
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex !== null) {
            const option = options[highlightedIndex];
            setSelectedOption(option);
            setShow(false);
          }
          break;
        case "Escape":
          e.preventDefault();
          setShow(false);
          break;
        default:
          break;
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
    if (onChange) onChange(option);
  };

  const value: DropdownContextType = {
    show,
    setShow,
    selectedOption,
    highlightedIndex,
    setHighlightedIndex,
    options,
    handleChange,
    disabled,
    placeholder,
    onChange,
  };

  return (
    <DropdownContext.Provider value={value}>
      <div className="relative" ref={dropdownRef} tabIndex={0}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
