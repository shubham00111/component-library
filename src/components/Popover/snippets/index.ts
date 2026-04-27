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
