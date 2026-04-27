export const neobrutalismJsx = `const TRACK_SIZE = { sm: "w-9 h-[18px]", md: "w-11 h-[22px]", lg: "w-14 h-7" };
const THUMB_SIZE = { sm: "w-3 h-3", md: "w-[15px] h-[15px]", lg: "w-5 h-5" };
const THUMB_CHECKED = { sm: "translate-x-[18px]", md: "translate-x-[22px]", lg: "translate-x-7" };

const NeobrutalismToggle = ({ checked, defaultChecked = false, onChange, disabled = false, label, size = "md", id }) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const toggleId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") + "-toggle" : "nb-toggle");

  return (
    <label
      htmlFor={toggleId}
      className={\`inline-flex items-center gap-2 font-sans cursor-pointer\${disabled ? " cursor-not-allowed opacity-60" : ""}\`}
    >
      <span className="relative inline-block flex-shrink-0">
        <input
          id={toggleId}
          type="checkbox"
          role="switch"
          checked={isChecked}
          disabled={disabled}
          onChange={(e) => { setIsChecked(e.target.checked); onChange?.(e.target.checked); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block border-[3px] border-black rounded-[2px] shadow-[4px_4px_0_#000] relative \${isChecked ? "bg-yellow-400" : "bg-gray-300"} \${TRACK_SIZE[size]}\`}>
          <span className={\`absolute top-[2px] left-[2px] bg-black border-[2px] border-black rounded-[1px] \${isChecked ? THUMB_CHECKED[size] : ""} \${THUMB_SIZE[size]}\`} />
        </span>
      </span>
      {label && <span className="text-[0.9375rem] font-extrabold text-black select-none">{label}</span>}
    </label>
  );
};`;

export const shadcnJsx = `const TRACK_SIZE = { sm: "w-9 h-5", md: "w-11 h-6", lg: "w-14 h-[30px]" };
const THUMB_SIZE = { sm: "w-[14px] h-[14px]", md: "w-[18px] h-[18px]", lg: "w-6 h-6" };
const THUMB_CHECKED = { sm: "translate-x-4", md: "translate-x-5", lg: "translate-x-[26px]" };

const ShadcnToggle = ({ checked, defaultChecked = false, onChange, disabled = false, label, size = "md", id }) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const toggleId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") + "-toggle" : "shadcn-toggle");

  return (
    <label
      htmlFor={toggleId}
      className={\`inline-flex items-center gap-2 font-sans cursor-pointer\${disabled ? " cursor-not-allowed opacity-50" : ""}\`}
    >
      <span className="relative inline-block flex-shrink-0">
        <input
          id={toggleId}
          type="checkbox"
          role="switch"
          checked={isChecked}
          disabled={disabled}
          onChange={(e) => { setIsChecked(e.target.checked); onChange?.(e.target.checked); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block rounded-full border relative transition-colors duration-150 \${isChecked ? "bg-zinc-900 border-zinc-900" : "bg-zinc-200 border-zinc-200"} \${TRACK_SIZE[size]}\`}>
          <span className={\`absolute top-[2px] left-[2px] bg-white rounded-full shadow-sm transition-transform duration-150 \${isChecked ? THUMB_CHECKED[size] : ""} \${THUMB_SIZE[size]}\`} />
        </span>
      </span>
      {label && <span className="text-sm font-medium text-zinc-900 select-none">{label}</span>}
    </label>
  );
};`;

export const flowbiteJsx = `const TRACK_SIZE = { sm: "w-9 h-5", md: "w-11 h-6", lg: "w-14 h-[30px]" };
const THUMB_SIZE = { sm: "w-[14px] h-[14px]", md: "w-[18px] h-[18px]", lg: "w-6 h-6" };
const THUMB_CHECKED = { sm: "translate-x-4", md: "translate-x-5", lg: "translate-x-[26px]" };

const FlowbiteToggle = ({ checked, defaultChecked = false, onChange, disabled = false, label, size = "md", id }) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const toggleId = id ?? (label ? label.toLowerCase().replace(/\\s+/g, "-") + "-toggle" : "fb-toggle");

  return (
    <label
      htmlFor={toggleId}
      className={\`inline-flex items-center gap-2 font-sans cursor-pointer\${disabled ? " cursor-not-allowed opacity-65" : ""}\`}
    >
      <span className="relative inline-block flex-shrink-0">
        <input
          id={toggleId}
          type="checkbox"
          role="switch"
          checked={isChecked}
          disabled={disabled}
          onChange={(e) => { setIsChecked(e.target.checked); onChange?.(e.target.checked); }}
          className="absolute opacity-0 w-0 h-0"
        />
        <span className={\`block rounded-full border relative transition-all duration-200 \${isChecked ? "bg-[#1c64f2] border-[#1c64f2]" : "bg-gray-200 border-gray-200"} \${TRACK_SIZE[size]}\`}>
          <span className={\`absolute top-[2px] left-[2px] bg-white rounded-full shadow-sm transition-transform duration-200 \${isChecked ? THUMB_CHECKED[size] : ""} \${THUMB_SIZE[size]}\`} />
        </span>
      </span>
      {label && <span className="text-sm font-medium text-gray-900 select-none">{label}</span>}
    </label>
  );
};`;
