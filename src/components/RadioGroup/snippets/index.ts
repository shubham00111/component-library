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

export const glassmorphismJsx = `const GlassmorphismRadioGroup = ({ options = [], value, defaultValue, onChange, name = "glass-radio", disabled = false }) => {
  const [selected, setSelected] = useState(value ?? defaultValue ?? "");
  return (
    <fieldset className="flex flex-col gap-2 border-none p-0 m-0">
      {options.map((opt) => (
        <label key={opt.value} className={\`inline-flex items-center gap-2.5 font-sans cursor-pointer\${(disabled || opt.disabled) ? " cursor-not-allowed opacity-40" : ""}\`}>
          <span className="relative flex-shrink-0 w-5 h-5">
            <input type="radio" name={name} value={opt.value} checked={selected === opt.value} disabled={disabled || opt.disabled}
              onChange={() => { setSelected(opt.value); onChange?.(opt.value); }}
              className="absolute opacity-0 w-0 h-0" />
            <span className={\`block w-5 h-5 rounded-full border backdrop-blur-md transition-all duration-200 \${selected === opt.value ? "bg-white/40 border-white/60" : "bg-white/10 border-white/30"}\`}>
              {selected === opt.value && <span className="absolute inset-0 flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-white" /></span>}
            </span>
          </span>
          <span className="text-[0.9375rem] font-medium text-white">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
};`;

export const md3Jsx = `const Md3RadioGroup = ({ options = [], value, defaultValue, onChange, name = "md3-radio", disabled = false }) => {
  const [selected, setSelected] = useState(value ?? defaultValue ?? "");
  return (
    <fieldset className="flex flex-col gap-2 border-none p-0 m-0">
      {options.map((opt) => (
        <label key={opt.value} className={\`inline-flex items-center gap-2.5 font-sans cursor-pointer\${(disabled || opt.disabled) ? " cursor-not-allowed opacity-40" : ""}\`}>
          <span className="relative flex-shrink-0 w-5 h-5">
            <input type="radio" name={name} value={opt.value} checked={selected === opt.value} disabled={disabled || opt.disabled}
              onChange={() => { setSelected(opt.value); onChange?.(opt.value); }}
              className="absolute opacity-0 w-0 h-0" />
            <span className={\`block w-5 h-5 rounded-full border-2 transition-all duration-200 \${selected === opt.value ? "border-[#6750a4]" : "border-[#79747e]"}\`}>
              {selected === opt.value && <span className="absolute inset-0 flex items-center justify-center"><span className="w-2.5 h-2.5 rounded-full bg-[#6750a4]" /></span>}
            </span>
          </span>
          <span className="text-[0.9375rem] font-medium text-[#1c1b1f]">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
};`;

export const nmJsx = `const NmRadioGroup = ({ options = [], value, defaultValue, onChange, name = "nm-radio", disabled = false }) => {
  const [selected, setSelected] = useState(value ?? defaultValue ?? "");
  return (
    <fieldset className="flex flex-col gap-2 border-none p-0 m-0">
      {options.map((opt) => (
        <label key={opt.value} className={\`inline-flex items-center gap-2.5 font-sans cursor-pointer\${(disabled || opt.disabled) ? " cursor-not-allowed opacity-50" : ""}\`}>
          <span className="relative flex-shrink-0 w-5 h-5">
            <input type="radio" name={name} value={opt.value} checked={selected === opt.value} disabled={disabled || opt.disabled}
              onChange={() => { setSelected(opt.value); onChange?.(opt.value); }}
              className="absolute opacity-0 w-0 h-0" />
            <span className={\`block w-5 h-5 rounded-full bg-[#e0e5ec] transition-all duration-150 \${selected === opt.value ? "shadow-[inset_-3px_-3px_6px_#ffffff,_inset_3px_3px_6px_rgba(163,177,198,0.6)]" : "shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)]"}\`}>
              {selected === opt.value && <span className="absolute inset-0 flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-[#6c7a9c]" /></span>}
            </span>
          </span>
          <span className="text-[0.9375rem] font-semibold text-[#6c7a9c]">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
};`;
