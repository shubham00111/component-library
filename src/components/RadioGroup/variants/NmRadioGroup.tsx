"use client";
import { createContext, useContext, useState } from "react";
import type { RadioGroupContextType, RadioGroupProps, RadioGroupItemProps } from "../types";

let _nameCounter = 0;

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

const useRadioGroup = () => {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioGroup.Item must be used within NmRadioGroup");
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
        "inline-flex items-center gap-2.5 font-sans cursor-pointer select-none",
        isDisabled ? "cursor-not-allowed opacity-50" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      <span className="relative flex-shrink-0 w-5 h-5">
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
            "block w-5 h-5 rounded-full bg-[#e0e5ec] dark:bg-[#2d2d3a] transition-all duration-150",
            isChecked
              ? "shadow-[inset_-3px_-3px_6px_#ffffff,_inset_3px_3px_6px_rgba(163,177,198,0.6)] dark:shadow-[inset_-3px_-3px_6px_#3d3d4e,_inset_3px_3px_6px_#1d1d28]"
              : "shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] dark:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28]",
          ].join(" ")}
        >
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#6c7a9c] dark:bg-[#a0a8c0] shadow-[-1px_-1px_3px_#ffffff,_1px_1px_3px_rgba(163,177,198,0.4)] dark:shadow-[-1px_-1px_3px_#3d3d4e,_1px_1px_3px_#1d1d28]" />
            </span>
          )}
        </span>
      </span>
      <span className="text-[0.9375rem] font-semibold text-[#6c7a9c] dark:text-[#a0a8c0]">{label}</span>
    </label>
  );
};

const NmRadioGroup = ({
  value,
  defaultValue,
  onChange,
  name,
  disabled = false,
  children,
  className = "",
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(value ?? defaultValue ?? null);
  const groupName = name ?? `nm-radio-${++_nameCounter}`;

  return (
    <RadioGroupContext.Provider value={{ selectedValue, setSelectedValue, name: groupName, disabled, onChange }}>
      <div role="radiogroup" className={["flex flex-col gap-3 font-sans", className].filter(Boolean).join(" ")}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

NmRadioGroup.Item = Item;
export default NmRadioGroup;
