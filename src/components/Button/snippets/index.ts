export const neobrutalismJsx = `const VARIANT = {
  primary:     "bg-yellow-400 text-black border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px",
  secondary:   "bg-lime-400 text-black border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px",
  destructive: "bg-red-500 text-white border-[3px] border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px",
  ghost:       "bg-white border-[3px] border-transparent hover:bg-yellow-400 hover:border-black hover:shadow-[4px_4px_0_#000]",
  outline:     "bg-transparent text-black border-[3px] border-black hover:shadow-[6px_6px_0_#000]",
};
const SIZE = {
  sm: "text-[0.8125rem] py-1 px-2",
  md: "py-2 px-4",
  lg: "text-lg py-3 px-6",
};

const NeobrutalismButton = ({ children = "Button", variant = "primary", size = "md", disabled = false, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={[
      "inline-flex items-center justify-center gap-1 cursor-pointer font-extrabold font-sans rounded-[2px] whitespace-nowrap select-none",
      "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-black focus-visible:outline-offset-[3px]",
      "disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-500 disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-70 disabled:pointer-events-none",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </button>
);`;

export const shadcnJsx = `const VARIANT = {
  primary:     "bg-zinc-900 text-zinc-50 border-transparent hover:opacity-90 hover:shadow-sm",
  secondary:   "bg-zinc-100 text-zinc-900 border-transparent hover:bg-zinc-200",
  destructive: "bg-red-500 text-zinc-50 border-transparent hover:opacity-90",
  ghost:       "bg-transparent text-zinc-900 border-transparent hover:bg-zinc-100",
  outline:     "bg-transparent text-zinc-900 border-zinc-200 hover:bg-zinc-100",
};
const SIZE = {
  sm: "text-sm py-1.5 px-3 rounded-[4px]",
  md: "py-2 px-4",
  lg: "py-2.5 px-6 text-base",
};

const ShadcnButton = ({ children = "Button", variant = "primary", size = "md", disabled = false, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={[
      "inline-flex items-center justify-center gap-2 cursor-pointer font-medium font-sans rounded-[6px] border whitespace-nowrap select-none transition-all duration-150",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-900 focus-visible:outline-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </button>
);`;

export const flowbiteJsx = `const VARIANT = {
  primary:     "bg-[#1c64f2] text-white border-transparent hover:bg-[#1a56db] active:bg-[#1e429f]",
  secondary:   "bg-gray-500 text-white border-transparent hover:bg-gray-600",
  destructive: "bg-[#e02424] text-white border-transparent hover:bg-red-700",
  ghost:       "bg-transparent text-[#1c64f2] border-transparent hover:bg-blue-50",
  outline:     "bg-white text-[#1c64f2] border-[#1c64f2] hover:bg-blue-50",
};
const SIZE = {
  sm: "text-sm py-1.5 px-3",
  md: "py-2 px-4",
  lg: "text-lg py-3 px-6",
};

const FlowbiteButton = ({ children = "Button", variant = "primary", size = "md", disabled = false, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={[
      "inline-flex items-center justify-center gap-2 cursor-pointer font-medium font-sans rounded-lg border whitespace-nowrap select-none transition-colors duration-200",
      "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(28,100,242,0.3)]",
      "disabled:bg-gray-100 disabled:text-gray-400 disabled:border-transparent disabled:cursor-not-allowed disabled:opacity-65 disabled:pointer-events-none",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </button>
);`;
