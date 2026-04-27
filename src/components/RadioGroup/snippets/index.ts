export const neobrutalismJsx = `const NeobrutalismRadioGroup = ({ value, defaultValue, onChange, name = "nb-radio", disabled = false, children }) => {
  const [selectedValue, setSelectedValue] = useState(value ?? defaultValue ?? null);
  return (
    <RadioGroupContext.Provider value={{ selectedValue, setSelectedValue, name, disabled, onChange }}>
      <div role="radiogroup" className="flex flex-col gap-3 font-sans">{children}</div>
    </RadioGroupContext.Provider>
  );
};

NeobrutalismRadioGroup.Item = ({ value, label, disabled: itemDisabled = false }) => {
  const { selectedValue, setSelectedValue, name, disabled: groupDisabled, onChange } = useRadioGroup();
  const isChecked = selectedValue === value;
  const isDisabled = groupDisabled || itemDisabled;
  return (
    <label htmlFor={\`\${name}-\${value}\`} className={\`inline-flex items-center gap-2.5 font-sans cursor-pointer select-none\${isDisabled ? " cursor-not-allowed opacity-60" : ""}\`}>
      <span className="relative flex-shrink-0 w-5 h-5">
        <input
          id={\`\${name}-\${value}\`}
          type="radio" name={name} value={value} checked={isChecked} disabled={isDisabled}
          onChange={() => { setSelectedValue(value); onChange?.(value); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block w-5 h-5 rounded-full border-[3px] border-black shadow-[3px_3px_0_#000] transition-colors \${isChecked ? "bg-yellow-400" : "bg-white"}\`}>
          {isChecked && <span className="absolute inset-0 flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-black" /></span>}
        </span>
      </span>
      <span className="text-[0.9375rem] font-extrabold text-black">{label}</span>
    </label>
  );
};

// Usage:
// <NeobrutalismRadioGroup name="fruit" defaultValue="apple" onChange={(v) => console.log(v)}>
//   <NeobrutalismRadioGroup.Item value="apple" label="Apple" />
//   <NeobrutalismRadioGroup.Item value="banana" label="Banana" />
//   <NeobrutalismRadioGroup.Item value="orange" label="Orange" />
// </NeobrutalismRadioGroup>`;

export const shadcnJsx = `const ShadcnRadioGroup = ({ value, defaultValue, onChange, name = "shadcn-radio", disabled = false, children }) => {
  const [selectedValue, setSelectedValue] = useState(value ?? defaultValue ?? null);
  return (
    <RadioGroupContext.Provider value={{ selectedValue, setSelectedValue, name, disabled, onChange }}>
      <div role="radiogroup" className="flex flex-col gap-2.5 font-sans">{children}</div>
    </RadioGroupContext.Provider>
  );
};

ShadcnRadioGroup.Item = ({ value, label, disabled: itemDisabled = false }) => {
  const { selectedValue, setSelectedValue, name, disabled: groupDisabled, onChange } = useRadioGroup();
  const isChecked = selectedValue === value;
  const isDisabled = groupDisabled || itemDisabled;
  return (
    <label htmlFor={\`\${name}-\${value}\`} className={\`inline-flex items-center gap-2 font-sans cursor-pointer select-none\${isDisabled ? " cursor-not-allowed opacity-50" : ""}\`}>
      <span className="relative flex-shrink-0 w-4 h-4">
        <input
          id={\`\${name}-\${value}\`}
          type="radio" name={name} value={value} checked={isChecked} disabled={isDisabled}
          onChange={() => { setSelectedValue(value); onChange?.(value); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block w-4 h-4 rounded-full border transition-colors duration-150 \${isChecked ? "bg-zinc-900 border-zinc-900" : "bg-white border-zinc-300"}\`}>
          {isChecked && <span className="absolute inset-0 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-white" /></span>}
        </span>
      </span>
      <span className="text-sm font-medium text-zinc-900">{label}</span>
    </label>
  );
};`;

export const flowbiteJsx = `const FlowbiteRadioGroup = ({ value, defaultValue, onChange, name = "fb-radio", disabled = false, children }) => {
  const [selectedValue, setSelectedValue] = useState(value ?? defaultValue ?? null);
  return (
    <RadioGroupContext.Provider value={{ selectedValue, setSelectedValue, name, disabled, onChange }}>
      <div role="radiogroup" className="flex flex-col gap-2.5 font-sans">{children}</div>
    </RadioGroupContext.Provider>
  );
};

FlowbiteRadioGroup.Item = ({ value, label, disabled: itemDisabled = false }) => {
  const { selectedValue, setSelectedValue, name, disabled: groupDisabled, onChange } = useRadioGroup();
  const isChecked = selectedValue === value;
  const isDisabled = groupDisabled || itemDisabled;
  return (
    <label htmlFor={\`\${name}-\${value}\`} className={\`inline-flex items-center gap-2 font-sans cursor-pointer select-none\${isDisabled ? " cursor-not-allowed opacity-65" : ""}\`}>
      <span className="relative flex-shrink-0 w-4 h-4">
        <input
          id={\`\${name}-\${value}\`}
          type="radio" name={name} value={value} checked={isChecked} disabled={isDisabled}
          onChange={() => { setSelectedValue(value); onChange?.(value); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block w-4 h-4 rounded-full border transition-all duration-200 \${isChecked ? "bg-[#1c64f2] border-[#1c64f2]" : "bg-white border-gray-300"}\`}>
          {isChecked && <span className="absolute inset-0 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-white" /></span>}
        </span>
      </span>
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </label>
  );
};`;
