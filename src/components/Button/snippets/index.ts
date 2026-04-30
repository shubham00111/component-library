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

export const glassmorphismJsx = `const VARIANT = {
  primary:     "bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:bg-white/30 active:scale-[0.98]",
  secondary:   "bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 active:scale-[0.98]",
  destructive: "bg-red-400/30 backdrop-blur-md border border-red-300/40 text-white hover:bg-red-400/40 active:scale-[0.98]",
  ghost:       "bg-transparent border border-transparent text-white/80 hover:bg-white/10 active:scale-[0.98]",
  outline:     "bg-transparent backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/10 active:scale-[0.98]",
};
const SIZE = {
  sm: "text-[0.8125rem] py-1 px-3",
  md: "py-2 px-4",
  lg: "text-lg py-3 px-6",
};

// Wrap in a container with a gradient or image background for the glass effect to show
const GlassmorphismButton = ({ children = "Button", variant = "primary", size = "md", disabled = false, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={[
      "inline-flex items-center justify-center gap-2 cursor-pointer font-medium font-sans rounded-xl whitespace-nowrap select-none transition-all duration-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2",
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </button>
);`;

export const md3Jsx = `const VARIANT = {
  primary:     "bg-[#6750a4] text-white hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)]",
  secondary:   "bg-[#eaddff] text-[#21005d] hover:shadow-[0_1px_2px_rgba(0,0,0,0.15)]",
  destructive: "bg-[#b3261e] text-white hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)]",
  ghost:       "bg-transparent text-[#6750a4] hover:bg-[#6750a4]/8",
  outline:     "bg-transparent border border-[#79747e] text-[#6750a4] hover:bg-[#6750a4]/8",
};
const SIZE = {
  sm: "text-sm py-1.5 px-4",
  md: "py-2.5 px-6",
  lg: "text-base py-3 px-8",
};

const Md3Button = ({ children = "Button", variant = "primary", size = "md", disabled = false, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={[
      "inline-flex items-center justify-center gap-2 cursor-pointer font-medium font-sans rounded-[20px] whitespace-nowrap select-none transition-all duration-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6750a4] focus-visible:outline-offset-2",
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </button>
);`;

export const nmJsx = `const VARIANT = {
  primary:     "shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] active:shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] text-[#6c7a9c]",
  secondary:   "shadow-[-3px_-3px_7px_#ffffff,_3px_3px_7px_rgba(163,177,198,0.5)] hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] text-[#4a5a80]",
  destructive: "shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] text-red-500",
  ghost:       "bg-transparent text-[#6c7a9c] hover:bg-[#e0e5ec] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)]",
  outline:     "ring-1 ring-[rgba(163,177,198,0.5)] shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.4)] hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] text-[#6c7a9c]",
};
const SIZE = {
  sm: "text-[0.8125rem] py-1.5 px-3",
  md: "py-2.5 px-5",
  lg: "text-lg py-3 px-7",
};

// Wrap in a container with background #e0e5ec for the shadow effect to work
const NmButton = ({ children = "Button", variant = "primary", size = "md", disabled = false, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={[
      "inline-flex items-center justify-center gap-2 cursor-pointer font-semibold font-sans rounded-xl whitespace-nowrap select-none transition-all duration-150 border-none bg-[#e0e5ec]",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6c7a9c]/60 focus-visible:outline-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-none",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </button>
);`;
