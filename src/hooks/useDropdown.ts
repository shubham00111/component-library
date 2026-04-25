import { useState, useCallback, useRef, useEffect } from "react";

export interface DropdownOption {
  id: string;
  label: string;
  value: string;
}

export interface UseDropdownReturn {
  isOpen: boolean;
  selectedOption: DropdownOption | null;
  highlightedIndex: number | null;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  open: () => void;
  close: () => void;
  toggle: () => void;
  selectOption: (option: DropdownOption, index: number) => void;
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export function useDropdown(
  options: DropdownOption[],
  onChange?: (option: DropdownOption) => void,
): UseDropdownReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const selectOption = useCallback(
    (option: DropdownOption, index: number) => {
      setSelectedOption(option);
      setHighlightedIndex(index);
      setIsOpen(false);
      onChange?.(option);
    },
    [onChange],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((i) => ((i ?? -1) + 1) % options.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((i) => {
            const cur = i ?? 0;
            return cur - 1 < 0 ? options.length - 1 : cur - 1;
          });
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex !== null) {
            selectOption(options[highlightedIndex], highlightedIndex);
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, highlightedIndex, options, selectOption]);

  return {
    isOpen,
    selectedOption,
    highlightedIndex,
    dropdownRef,
    open,
    close,
    toggle,
    selectOption,
    setHighlightedIndex,
  };
}
