export const neobrutalismJsx = `const NeobrutalismCheckbox = ({ checked, defaultChecked = false, onChange, label, disabled = false, indeterminate = false, id }) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const inputRef = useRef(null);
  const checkboxId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") + "-checkbox" : "nb-checkbox");

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const isActive = isChecked || indeterminate;

  return (
    <label htmlFor={checkboxId} className={\`inline-flex items-center gap-2 font-sans cursor-pointer select-none\${disabled ? " cursor-not-allowed opacity-60" : ""}\`}>
      <span className="relative flex-shrink-0 w-5 h-5">
        <input
          ref={inputRef}
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={(e) => { setIsChecked(e.target.checked); onChange?.(e.target.checked); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block w-5 h-5 border-[3px] border-black rounded-[2px] shadow-[3px_3px_0_#000] transition-colors \${isActive ? "bg-yellow-400" : "bg-white"}\`}>
          {indeterminate && !isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2.5 h-0.5 bg-black rounded-full" />
            </span>
          )}
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </span>
      </span>
      {label && <span className="text-[0.9375rem] font-extrabold text-black">{label}</span>}
    </label>
  );
};`;

export const shadcnJsx = `const ShadcnCheckbox = ({ checked, defaultChecked = false, onChange, label, disabled = false, indeterminate = false, id }) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const inputRef = useRef(null);
  const checkboxId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") + "-checkbox" : "shadcn-checkbox");

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const isActive = isChecked || indeterminate;

  return (
    <label htmlFor={checkboxId} className={\`inline-flex items-center gap-2 font-sans cursor-pointer select-none\${disabled ? " cursor-not-allowed opacity-50" : ""}\`}>
      <span className="relative flex-shrink-0 w-4 h-4">
        <input
          ref={inputRef}
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={(e) => { setIsChecked(e.target.checked); onChange?.(e.target.checked); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block w-4 h-4 border rounded-[4px] transition-colors duration-150 \${isActive ? "bg-zinc-900 border-zinc-900" : "bg-white border-zinc-300"}\`}>
          {indeterminate && !isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-0.5 bg-white rounded-full" />
            </span>
          )}
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </span>
      </span>
      {label && <span className="text-sm font-medium text-zinc-900">{label}</span>}
    </label>
  );
};`;

export const flowbiteJsx = `const FlowbiteCheckbox = ({ checked, defaultChecked = false, onChange, label, disabled = false, indeterminate = false, id }) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const inputRef = useRef(null);
  const checkboxId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") + "-checkbox" : "fb-checkbox");

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const isActive = isChecked || indeterminate;

  return (
    <label htmlFor={checkboxId} className={\`inline-flex items-center gap-2 font-sans cursor-pointer select-none\${disabled ? " cursor-not-allowed opacity-65" : ""}\`}>
      <span className="relative flex-shrink-0 w-4 h-4">
        <input
          ref={inputRef}
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={(e) => { setIsChecked(e.target.checked); onChange?.(e.target.checked); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block w-4 h-4 border rounded-sm transition-all duration-200 \${isActive ? "bg-[#1c64f2] border-[#1c64f2]" : "bg-white border-gray-300"}\`}>
          {indeterminate && !isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-0.5 bg-white rounded-full" />
            </span>
          )}
          {isChecked && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </span>
      </span>
      {label && <span className="text-sm font-medium text-gray-900">{label}</span>}
    </label>
  );
};`;
