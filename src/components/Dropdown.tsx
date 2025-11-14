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
  const [highlightedIndex, setHighlightedIndex] = useState<OptionItem | null>(
    options[0]
  );
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (option: OptionItem) => {
    setSelectedOption(() => option);
    setHighlightedIndex(() => option);
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
          {options.map((option) => {
            return (
              <DropDownItem
                key={option.value}
                onClick={() => handleChange(option)}
                className={`${
                  highlightedIndex &&
                  highlightedIndex.value === option.value &&
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
