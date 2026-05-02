export const neobrutalismJsx = `const ICON_STYLE = {
  success: "bg-green-200 text-green-800",
  error:   "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info:    "bg-blue-100 text-blue-800",
};
const POSITION = {
  "top-left": "top-4 left-4", "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4", "bottom-right": "bottom-4 right-4",
};

const NeobrutalismToast = ({ iconType = "info", children, onClose, position = "bottom-right", timer }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (!timer) return;
    const id = setTimeout(() => setShow(false), timer);
    return () => clearTimeout(id);
  }, [timer]);
  if (!show) return null;

  return (
    <div
      className={[
        "fixed z-50 flex items-center gap-2 py-2 px-3 min-w-[280px] max-w-[420px]",
        "bg-white border-[3px] border-black rounded-[2px] shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000]",
        "font-sans text-[0.9375rem] text-black",
        POSITION[position],
      ].join(" ")}
    >
      <div className={\`flex items-center justify-center w-8 h-8 rounded-[2px] border-[2px] border-black flex-shrink-0 \${ICON_STYLE[iconType]}\`}>
        <Icon size={16} />
      </div>
      <div className="flex-1 font-normal text-black">{children}</div>
      <button
        className="flex items-center justify-center p-1 border-[2px] border-transparent rounded-[2px] bg-transparent cursor-pointer hover:bg-yellow-400 hover:border-black"
        onClick={() => { setShow(false); onClose?.(); }}
      >
        <X size={16} />
      </button>
    </div>
  );
};`;

export const shadcnJsx = `const ICON_STYLE = {
  success: "bg-green-50 text-green-600",
  error:   "bg-red-50 text-red-500",
  warning: "bg-amber-50 text-amber-600",
  info:    "bg-blue-50 text-blue-600",
};
const POSITION = {
  "top-left": "top-4 left-4", "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4", "bottom-right": "bottom-4 right-4",
};

const ShadcnToast = ({ iconType = "info", children, onClose, position = "bottom-right", timer }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (!timer) return;
    const id = setTimeout(() => setShow(false), timer);
    return () => clearTimeout(id);
  }, [timer]);
  if (!show) return null;

  return (
    <div
      className={[
        "fixed z-50 flex items-center gap-3 py-3 px-4 min-w-[280px] max-w-[420px]",
        "bg-white border border-zinc-200 rounded-[6px] shadow hover:shadow-md transition-shadow duration-150",
        "font-sans text-[0.9375rem] text-zinc-900",
        POSITION[position],
      ].join(" ")}
    >
      <div className={\`flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 \${ICON_STYLE[iconType]}\`}>
        <Icon size={14} />
      </div>
      <div className="flex-1 text-sm text-zinc-900">{children}</div>
      <button
        className="flex items-center justify-center p-1 rounded-[4px] bg-transparent cursor-pointer text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
        onClick={() => { setShow(false); onClose?.(); }}
      >
        <X size={14} />
      </button>
    </div>
  );
};`;

export const flowbiteJsx = `const ICON_STYLE = {
  success: "bg-green-100 text-emerald-900",
  error:   "bg-red-100 text-red-800",
  warning: "bg-amber-100 text-amber-800",
  info:    "bg-blue-50 text-[#1c64f2]",
};
const POSITION = {
  "top-left": "top-4 left-4", "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4", "bottom-right": "bottom-4 right-4",
};

const FlowbiteToast = ({ iconType = "info", children, onClose, position = "bottom-right", timer }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (!timer) return;
    const id = setTimeout(() => setShow(false), timer);
    return () => clearTimeout(id);
  }, [timer]);
  if (!show) return null;

  return (
    <div
      className={[
        "fixed z-50 flex items-center gap-3 py-3 px-4 min-w-[280px] max-w-[420px]",
        "bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200",
        "font-sans text-[0.9375rem] text-gray-900",
        POSITION[position],
      ].join(" ")}
    >
      <div className={\`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 \${ICON_STYLE[iconType]}\`}>
        <Icon size={16} />
      </div>
      <div className="flex-1 text-sm text-gray-900">{children}</div>
      <button
        className="flex items-center justify-center p-1 rounded-lg bg-transparent cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
        onClick={() => { setShow(false); onClose?.(); }}
      >
        <X size={16} />
      </button>
    </div>
  );
};`;

export const glassmorphismJsx = `const VARIANT = {
  default: "bg-white/15 border-white/20 text-white",
  success: "bg-emerald-400/20 border-emerald-300/30 text-white",
  warning: "bg-amber-400/20 border-amber-300/30 text-white",
  error:   "bg-red-400/20 border-red-300/30 text-white",
};

const GlassmorphismToast = ({ message, variant = "default", onClose }) => (
  <div className={\`inline-flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-[0_8px_32px_rgba(31,38,135,0.15)] font-sans text-sm font-medium \${VARIANT[variant]}\`}>
    <span className="flex-1">{message}</span>
    {onClose && <button onClick={onClose} className="text-white/60 hover:text-white transition-colors leading-none text-base">×</button>}
  </div>
);`;

export const md3Jsx = `const ICON = { default: "ℹ", success: "✓", warning: "⚠", error: "✕" };

const Md3Toast = ({ message, variant = "default", onClose }) => (
  <div className="inline-flex items-center gap-3 px-4 py-3.5 rounded-[4px] bg-[#313033] text-[#e6e1e5] font-sans text-sm shadow-[0_3px_5px_rgba(0,0,0,0.2),0_6px_10px_rgba(0,0,0,0.14)]">
    <span className="text-base">{ICON[variant]}</span>
    <span className="flex-1">{message}</span>
    {onClose && <button onClick={onClose} className="text-[#cac4d0] hover:text-white transition-colors leading-none text-base ml-2">×</button>}
  </div>
);`;

export const nmJsx = `const VARIANT = {
  default: "text-[#6c7a9c]",
  success: "text-emerald-600",
  warning: "text-amber-600",
  error:   "text-red-500",
};

const NmToast = ({ message, variant = "default", onClose }) => (
  <div className={\`inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] font-sans text-sm font-semibold \${VARIANT[variant]}\`}>
    <span className="flex-1">{message}</span>
    {onClose && <button onClick={onClose} className="text-[#6c7a9c]/60 hover:text-[#3d4f6e] transition-colors leading-none text-base">×</button>}
  </div>
);`;
