import { cn } from "../utils/Util";
import { useState, useRef, useEffect } from "react";

interface DropdownProps {
  options: string[];
  onChange: (s: string) => void;
  className?: string;
}

const Dropdown = ({ options, onChange, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0] || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={cn("relative inline-block w-100", className)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-white bg-black rounded-md flex justify-between items-center"
      >
        <span>{selectedOption}</span>
        <span
          className={cn(
            "transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-800 first:rounded-t-md last:rounded-b-md"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
