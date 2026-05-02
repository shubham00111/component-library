export const neobrutalismJsx = `const NeobrutalismPopover = ({ children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  );
};

NeobrutalismPopover.Trigger = ({ children }) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="inline-flex items-center px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] font-extrabold bg-white hover:bg-yellow-400 transition-colors cursor-pointer font-sans text-sm"
    >
      {children}
    </button>
  );
};

NeobrutalismPopover.Content = ({ children }) => {
  const { open } = usePopover();
  if (!open) return null;
  return (
    <div className="absolute z-50 top-full left-0 mt-2 min-w-[200px] bg-white border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] p-4 font-sans">
      {children}
    </div>
  );
};

// Usage:
// <NeobrutalismPopover>
//   <NeobrutalismPopover.Trigger>Open</NeobrutalismPopover.Trigger>
//   <NeobrutalismPopover.Content>
//     <p className="text-sm font-bold">Popover content here</p>
//   </NeobrutalismPopover.Content>
// </NeobrutalismPopover>`;

export const shadcnJsx = `const ShadcnPopover = ({ children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  );
};

ShadcnPopover.Trigger = ({ children }) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="inline-flex items-center px-3 py-2 border border-zinc-200 rounded-[6px] shadow-sm font-medium bg-white hover:bg-zinc-50 transition-colors duration-150 cursor-pointer font-sans text-sm text-zinc-900"
    >
      {children}
    </button>
  );
};

ShadcnPopover.Content = ({ children }) => {
  const { open } = usePopover();
  if (!open) return null;
  return (
    <div className="absolute z-50 top-full left-0 mt-2 min-w-[200px] bg-white border border-zinc-200 shadow-md rounded-[6px] p-4 font-sans">
      {children}
    </div>
  );
};`;

export const flowbiteJsx = `const FlowbitePopover = ({ children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  );
};

FlowbitePopover.Trigger = ({ children }) => {
  const { open, setOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="inline-flex items-center px-4 py-2 bg-[#1c64f2] hover:bg-[#1a56db] text-white border border-[#1c64f2] rounded-lg font-medium transition-all duration-200 cursor-pointer font-sans text-sm"
    >
      {children}
    </button>
  );
};

FlowbitePopover.Content = ({ children }) => {
  const { open } = usePopover();
  if (!open) return null;
  return (
    <div className="absolute z-50 top-full left-0 mt-2 min-w-[200px] bg-white border border-gray-200 shadow-lg rounded-lg p-4 font-sans">
      {children}
    </div>
  );
};`;

export const glassmorphismJsx = `const GlassmorphismPopover = ({ trigger, content, placement = "bottom" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const pos = { bottom: "top-full left-0 mt-2", top: "bottom-full left-0 mb-2", left: "right-full top-0 mr-2", right: "left-full top-0 ml-2" };
  return (
    <div ref={ref} className="relative inline-block font-sans">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">{trigger}</div>
      {open && (
        <div className={\`absolute z-10 min-w-[200px] bg-white/15 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.2)] p-4 \${pos[placement]}\`}>
          <div className="text-sm text-white/90">{content}</div>
        </div>
      )}
    </div>
  );
};`;

export const md3Jsx = `const Md3Popover = ({ trigger, content, placement = "bottom" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const pos = { bottom: "top-full left-0 mt-1", top: "bottom-full left-0 mb-1", left: "right-full top-0 mr-1", right: "left-full top-0 ml-1" };
  return (
    <div ref={ref} className="relative inline-block font-sans">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">{trigger}</div>
      {open && (
        <div className={\`absolute z-10 min-w-[200px] bg-[#fffbfe] border border-[#e7e0ec] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)] p-4 \${pos[placement]}\`}>
          <div className="text-sm text-[#1c1b1f]">{content}</div>
        </div>
      )}
    </div>
  );
};`;

export const nmJsx = `const NmPopover = ({ trigger, content, placement = "bottom" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const pos = { bottom: "top-full left-0 mt-2", top: "bottom-full left-0 mb-2", left: "right-full top-0 mr-2", right: "left-full top-0 ml-2" };
  return (
    <div ref={ref} className="relative inline-block font-sans">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">{trigger}</div>
      {open && (
        <div className={\`absolute z-10 min-w-[200px] bg-[#e0e5ec] rounded-xl shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] p-4 \${pos[placement]}\`}>
          <div className="text-sm text-[#6c7a9c]">{content}</div>
        </div>
      )}
    </div>
  );
};`;
