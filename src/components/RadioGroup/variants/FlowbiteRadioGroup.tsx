"use client";
import { createContext, useContext, useState } from "react";
import type { RadioGroupContextType, RadioGroupProps, RadioGroupItemProps } from "../types";

let _nameCounter = 0;

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

const useRadioGroup = () => {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioGroup.Item must be used within FlowbiteRadioGroup");
  return ctx;
};

const Item = ({ value, label, disabled: itemDisabled = false, className = "" }: RadioGroupItemProps) => {
  const { selectedValue, setSelectedValue, name, disabled: groupDisabled, onChange } = useRadioGroup();
  const isChecked = selectedValue === value;
  const isDisabled = groupDisabled || itemDisabled;
  const inputId = `${name}-${value}`;

  return (
    <label
      htmlFor={inputId}
      className={[
        "inline-flex items-center gap-2 font-sans cursor-pointer select-none",
        isDisabled ? "cursor-not-allowed opacity-65" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      <span className="relative flex-shrink-0 w-4 h-4">
        <input
          id={inputId}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={() => { setSelectedValue(value); onChange?.(value); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span
          className={[
            "block w-4 h-4 rounded-full border transition-all duration-200",
            isChecked ? "bg-[#1c64f2] border-[#1c64f2]" : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600",
          ].join(" ")}
        >
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          )}
        </span>
      </span>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</span>
    </label>
  );
};

const FlowbiteRadioGroup = ({
  value,
  defaultValue,
  onChange,
  name,
  disabled = false,
  children,
  className = "",
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(value ?? defaultValue ?? null);
  const groupName = name ?? `fb-radio-${++_nameCounter}`;

  return (
    <RadioGroupContext.Provider value={{ selectedValue, setSelectedValue, name: groupName, disabled, onChange }}>
      <div role="radiogroup" className={["flex flex-col gap-2.5 font-sans", className].filter(Boolean).join(" ")}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

FlowbiteRadioGroup.Item = Item;
export default FlowbiteRadioGroup;
