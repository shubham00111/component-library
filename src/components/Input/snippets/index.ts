export const neobrutalismJsx = `const NeobrutalismInput = ({ value, onChange, placeholder = "", disabled = false, type = "text", label, error, helperText, id }) => {
  const [inputValue, setInputValue] = useState(value ?? "");
  const inputId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1 font-sans">
      {label && (
        <label htmlFor={inputId} className="text-[0.8125rem] font-extrabold text-black">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => { setInputValue(e.target.value); onChange?.(e); }}
        className={[
          "py-2 px-3 text-[0.9375rem] font-sans text-black bg-white border-[3px] border-black rounded-[2px] shadow-[4px_4px_0_#000] outline-none w-full",
          "placeholder:text-[#333] placeholder:opacity-60",
          "focus:shadow-[6px_6px_0_#000] focus:bg-yellow-400 focus:-translate-x-px focus:-translate-y-px",
          "disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-500 disabled:shadow-none disabled:cursor-not-allowed",
          error ? "border-red-500 shadow-[4px_4px_0_#ef4444]" : "",
        ].filter(Boolean).join(" ")}
      />
      {error && <span className="text-[0.8125rem] text-red-500 font-extrabold">{error}</span>}
      {helperText && !error && <span className="text-[0.8125rem] text-[#333]">{helperText}</span>}
    </div>
  );
};`;

export const shadcnJsx = `const ShadcnInput = ({ value, onChange, placeholder = "", disabled = false, type = "text", label, error, helperText, id }) => {
  const [inputValue, setInputValue] = useState(value ?? "");
  const inputId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1.5 font-sans">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-zinc-900">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => { setInputValue(e.target.value); onChange?.(e); }}
        className={[
          "py-2 px-3 text-[0.9375rem] font-sans text-zinc-900 bg-white border border-zinc-200 rounded-[6px] outline-none w-full transition-[border-color,box-shadow] duration-150",
          "placeholder:text-zinc-500",
          "focus:border-zinc-900 focus:shadow-[0_0_0_2px_#18181b]",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-zinc-100",
          error ? "border-red-500 focus:shadow-[0_0_0_2px_#ef4444]" : "",
        ].filter(Boolean).join(" ")}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
      {helperText && !error && <span className="text-sm text-zinc-500">{helperText}</span>}
    </div>
  );
};`;

export const flowbiteJsx = `const FlowbiteInput = ({ value, onChange, placeholder = "", disabled = false, type = "text", label, error, helperText, id }) => {
  const [inputValue, setInputValue] = useState(value ?? "");
  const inputId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1.5 font-sans">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => { setInputValue(e.target.value); onChange?.(e); }}
        className={[
          "py-2 px-3 text-[0.9375rem] font-sans text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm outline-none w-full transition-all duration-200",
          "placeholder:text-gray-500",
          "focus:border-[#1c64f2] focus:shadow-[0_0_0_3px_rgba(28,100,242,0.3)]",
          "disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
          error ? "border-[#e02424] focus:shadow-[0_0_0_3px_rgba(224,36,36,0.3)]" : "",
        ].filter(Boolean).join(" ")}
      />
      {error && <span className="text-sm text-[#e02424]">{error}</span>}
      {helperText && !error && <span className="text-sm text-gray-500">{helperText}</span>}
    </div>
  );
};`;

export const glassmorphismJsx = `const GlassmorphismInput = ({ value, onChange, placeholder = "", disabled = false, type = "text", label, error, helperText, id }) => {
  const [inputValue, setInputValue] = useState(value ?? "");
  const inputId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1.5 font-sans">
      {label && <label htmlFor={inputId} className="text-sm font-medium text-white/90">{label}</label>}
      <input
        id={inputId} type={type} value={inputValue} placeholder={placeholder} disabled={disabled}
        onChange={(e) => { setInputValue(e.target.value); onChange?.(e); }}
        className={["py-2 px-3 text-[0.9375rem] text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl outline-none w-full transition-all duration-200 placeholder:text-white/50 focus:border-white/50 focus:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed", error ? "border-red-400/60" : ""].filter(Boolean).join(" ")}
      />
      {error && <span className="text-sm text-red-300">{error}</span>}
      {helperText && !error && <span className="text-sm text-white/60">{helperText}</span>}
    </div>
  );
};`;

export const md3Jsx = `const Md3Input = ({ value, onChange, placeholder = "", disabled = false, type = "text", label, error, helperText, id }) => {
  const [inputValue, setInputValue] = useState(value ?? "");
  const [focused, setFocused] = useState(false);
  const inputId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1 font-sans">
      {label && (
        <label htmlFor={inputId} className={\`text-xs font-medium \${error ? "text-[#b3261e]" : focused ? "text-[#6750a4]" : "text-[#49454f]"}\`}>{label}</label>
      )}
      <input
        id={inputId} type={type} value={inputValue} placeholder={placeholder} disabled={disabled}
        onChange={(e) => { setInputValue(e.target.value); onChange?.(e); }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={["py-2 px-4 text-[0.9375rem] text-[#1c1b1f] bg-[#fffbfe] border rounded-[4px] outline-none w-full transition-all duration-200 placeholder:text-[#49454f] disabled:opacity-40 disabled:cursor-not-allowed", error ? "border-[#b3261e] border-b-2" : focused ? "border-[#6750a4] border-b-2" : "border-[#79747e]"].join(" ")}
      />
      {error && <span className="text-xs text-[#b3261e]">{error}</span>}
      {helperText && !error && <span className="text-xs text-[#49454f]">{helperText}</span>}
    </div>
  );
};`;

export const nmJsx = `const NmInput = ({ value, onChange, placeholder = "", disabled = false, type = "text", label, error, helperText, id }) => {
  const [inputValue, setInputValue] = useState(value ?? "");
  const inputId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1.5 font-sans">
      {label && <label htmlFor={inputId} className="text-sm font-semibold text-[#6c7a9c]">{label}</label>}
      <input
        id={inputId} type={type} value={inputValue} placeholder={placeholder} disabled={disabled}
        onChange={(e) => { setInputValue(e.target.value); onChange?.(e); }}
        className="py-2.5 px-4 text-[0.9375rem] text-[#3d4f6e] rounded-xl outline-none w-full border-none bg-[#e0e5ec] shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] placeholder:text-[#6c7a9c]/60 focus:shadow-[inset_-3px_-3px_7px_#ffffff,_inset_3px_3px_7px_rgba(163,177,198,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
      {helperText && !error && <span className="text-sm text-[#6c7a9c]">{helperText}</span>}
    </div>
  );
};`;
