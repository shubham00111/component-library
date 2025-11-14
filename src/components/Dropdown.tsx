import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../utils/Util";

interface DropdownItem {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

interface OptionItem {
  label: string;
  value: string;
  id: string;
}
interface DropdownProps {
  options: OptionItem[];
}

export const DropDownItem = ({
  children,
  className,
  ...props
}: DropdownItem) => {
  return (
    <div
      className={cn(
        "hover:bg-gray-200  px-4 py-2 rounded-sm mt-1 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
const Dropdown = ({ options }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(dropdownRef, event.target);
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
            const nexIndex = prevIndex + 1;
            if (nexIndex >= options.length) {
              return 0;
            }
            return nexIndex;
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
  }, [show, highlightedIndex]);

  const handleChange = (option: OptionItem, index: number) => {
    setSelectedOption(() => option);
    setHighlightedIndex(() => index);
    setShow(false);
  };

  return (
    <div className="relative" ref={dropdownRef} tabIndex={0}>
      <div
        className="pl-4 pr-1 py-2 rounded-md w-full border border-black  flex cursor-pointer
      gap-3 justify-between"
        onClick={() => setShow(!show)}
      >
        {selectedOption.label}
        <span>{show ? <ChevronUp /> : <ChevronDown />}</span>
      </div>
      {show && (
        <div className="absolute w-full border border-gray-300 rounded-sm">
          {options.map((option, index) => {
            return (
              <DropDownItem
                key={option.value}
                onClick={() => handleChange(option, index)}
                className={`${
                  options[highlightedIndex] &&
                  options[highlightedIndex].value === option.value &&
                  "bg-gray-200"
                }`}
              >
                {option.label}
              </DropDownItem>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
