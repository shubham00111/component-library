import { ChevronDown, ChevronUp } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "../../utils/Util";

interface OptionItem {
  label: string;
  value: string;
  id: string;
}

interface DropdownContextType {
  show: boolean;
  setShow: (show: boolean) => void;
  selectedOption: OptionItem;
  highlightedIndex: number;
  setHighlightedIndex: (index: number) => void;
  options: OptionItem[];
  handleChange: (option: OptionItem, index: number) => void;
}

interface DropdownProps {
  options: OptionItem[];
  children: ReactNode;
}

interface TriggerProps {
  className?: string;
}

interface MenuProps {
  children: ReactNode;
  className?: string;
}

interface ItemProps {
  option: OptionItem;
  index: number;
  children?: ReactNode;
  className?: string;
}

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
  const { show, setShow, selectedOption } = useDropdown();

  return (
    <div
      className={cn(
        "pl-4 pr-1 py-2 rounded-md w-full border border-black flex cursor-pointer gap-3 justify-between",
        className
      )}
      onClick={() => setShow(!show)}
      role="button"
      tabIndex={0}
    >
      {selectedOption.label}
      <span>{show ? <ChevronUp /> : <ChevronDown />}</span>
    </div>
  );
};

const Menu = ({ children, className }: MenuProps) => {
  const { show } = useDropdown();

  if (!show) return null;

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
        "hover:bg-gray-200 px-4 py-2 rounded-sm cursor-pointer transition-colors",
        isHighlighted && "bg-gray-200",
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

const Dropdown = ({ options, children }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
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
      if (!show) {
        if (e.key === "Enter") {
          e.preventDefault();
          setShow(true);
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex >= options.length) {
              return 0;
            }
            return nextIndex;
          });
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            if (newIndex < 0) {
              return options.length - 1;
            }
            return newIndex;
          });
          break;
        case "Enter":
          e.preventDefault();
          const option = options[highlightedIndex];
          setSelectedOption(option);
          setShow(false);
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
  }, [show, highlightedIndex, options]);

  const handleChange = (option: OptionItem, index: number) => {
    setSelectedOption(option);
    setHighlightedIndex(index);
    setShow(false);
  };

  const value: DropdownContextType = {
    show,
    setShow,
    selectedOption,
    highlightedIndex,
    setHighlightedIndex,
    options,
    handleChange,
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
