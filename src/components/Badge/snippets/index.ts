export const neobrutalismJsx = `const VARIANT = {
  default:     "bg-yellow-400 text-black",
  success:     "bg-lime-400 text-black",
  warning:     "bg-amber-400 text-black",
  destructive: "bg-red-500 text-white",
  outline:     "bg-transparent text-black",
};
const SIZE = {
  sm: "text-[0.6875rem] px-1.5 py-px",
  md: "text-[0.8125rem] px-2 py-0.5",
};

const NeobrutalismBadge = ({ children, variant = "default", size = "md" }) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-extrabold rounded-[2px] border-[2px] border-black shadow-[2px_2px_0_#000] whitespace-nowrap",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </span>
);`;

export const shadcnJsx = `const VARIANT = {
  default:     "bg-zinc-900 text-zinc-50 border-transparent",
  success:     "bg-green-50 text-green-600 border-green-200",
  warning:     "bg-amber-50 text-amber-600 border-amber-200",
  destructive: "bg-red-500 text-zinc-50 border-transparent",
  outline:     "bg-transparent text-zinc-900 border-zinc-200",
};
const SIZE = {
  sm: "text-[0.6875rem] px-2 py-px",
  md: "text-sm px-2.5 py-0.5",
};

const ShadcnBadge = ({ children, variant = "default", size = "md" }) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-medium rounded-full border whitespace-nowrap transition-all duration-150",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </span>
);`;

export const flowbiteJsx = `const VARIANT = {
  default:     "bg-blue-50 text-[#1c64f2] border-blue-200",
  success:     "bg-green-100 text-emerald-900 border-transparent",
  warning:     "bg-amber-100 text-amber-800 border-transparent",
  destructive: "bg-red-100 text-red-800 border-transparent",
  outline:     "bg-transparent text-gray-900 border-gray-200",
};
const SIZE = {
  sm: "text-[0.6875rem] px-2 py-px",
  md: "text-sm px-2.5 py-0.5",
};

const FlowbiteBadge = ({ children, variant = "default", size = "md" }) => (
  <span
    className={[
      "inline-flex items-center justify-center font-sans font-medium rounded-full border whitespace-nowrap",
      VARIANT[variant],
      SIZE[size],
    ].join(" ")}
  >
    {children}
  </span>
);`;

export const glassmorphismJsx = `const VARIANT = {
  default:     "bg-white/20 text-white border-white/30",
  success:     "bg-emerald-400/30 text-white border-emerald-300/40",
  warning:     "bg-amber-400/30 text-white border-amber-300/40",
  destructive: "bg-red-400/30 text-white border-red-300/40",
  outline:     "bg-transparent text-white border-white/50",
};
const SIZE = { sm: "text-[0.6875rem] px-2 py-px", md: "text-[0.8125rem] px-2.5 py-0.5" };

const GlassmorphismBadge = ({ children, variant = "default", size = "md" }) => (
  <span className={["inline-flex items-center justify-center font-sans font-medium rounded-xl border backdrop-blur-md whitespace-nowrap shadow-[0_4px_16px_rgba(31,38,135,0.12)]", VARIANT[variant], SIZE[size]].join(" ")}>
    {children}
  </span>
);`;

export const md3Jsx = `const VARIANT = {
  default:     "bg-[#eaddff] text-[#21005d]",
  success:     "bg-[#d7f8e8] text-[#065f46]",
  warning:     "bg-[#fef9c3] text-[#713f12]",
  destructive: "bg-[#fde8e8] text-[#b3261e]",
  outline:     "bg-transparent border border-[#79747e] text-[#49454f]",
};
const SIZE = { sm: "text-[0.6875rem] px-2 py-px", md: "text-[0.8125rem] px-3 py-0.5" };

const Md3Badge = ({ children, variant = "default", size = "md" }) => (
  <span className={["inline-flex items-center justify-center font-sans font-medium rounded-full whitespace-nowrap", VARIANT[variant], SIZE[size]].join(" ")}>
    {children}
  </span>
);`;

export const nmJsx = `const VARIANT = {
  default:     "text-[#6c7a9c]",
  success:     "text-emerald-600",
  warning:     "text-amber-600",
  destructive: "text-red-500",
  outline:     "text-[#4a5a80]",
};
const SIZE = { sm: "text-[0.6875rem] px-2 py-0.5", md: "text-[0.8125rem] px-3 py-1" };

const NmBadge = ({ children, variant = "default", size = "md" }) => (
  <span className={["inline-flex items-center justify-center font-sans font-semibold rounded-xl whitespace-nowrap bg-[#e0e5ec] shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)]", VARIANT[variant], SIZE[size]].join(" ")}>
    {children}
  </span>
);`;
