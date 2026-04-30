"use client";
import { createContext, useContext, useState } from "react";
import type { RadioGroupContextType, RadioGroupProps, RadioGroupItemProps } from "../types";

let _nameCounter = 0;

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

const useRadioGroup = () => {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioGroup.Item must be used within GlassmorphismRadioGroup");
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
        isDisabled ? "cursor-not-allowed opacity-40" : "",
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
            "block w-5 h-5 rounded-full border backdrop-blur-md transition-all duration-200",
            isChecked ? "bg-white/40 border-white/60" : "bg-white/10 border-white/30",
          ].join(" ")}
        >
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white" />
            </span>
          )}
        </span>
      </span>
      <span className="text-[0.9375rem] font-medium text-white">{label}</span>
    </label>
  );
};

const GlassmorphismRadioGroup = ({
  value,
  defaultValue,
  onChange,
  name,
  disabled = false,
  children,
  className = "",
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(value ?? defaultValue ?? null);
  const groupName = name ?? `glass-radio-${++_nameCounter}`;

  return (
    <RadioGroupContext.Provider value={{ selectedValue, setSelectedValue, name: groupName, disabled, onChange }}>
      <div role="radiogroup" className={["flex flex-col gap-3 font-sans", className].filter(Boolean).join(" ")}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

GlassmorphismRadioGroup.Item = Item;
export default GlassmorphismRadioGroup;
