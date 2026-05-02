export const neobrutalismJsx = `const options = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange" },
];

// NeobrutalismDropdown — bold border, yellow hover, flat shadow
<NeobrutalismDropdown options={options} placeholder="Select a fruit">
  <NeobrutalismDropdown.Trigger />
  <NeobrutalismDropdown.Menu>
    {options.map((option, index) => (
      <NeobrutalismDropdown.Item key={option.id} option={option} index={index} />
    ))}
  </NeobrutalismDropdown.Menu>
</NeobrutalismDropdown>

// Trigger styles: border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] font-bold bg-white hover:bg-yellow-400
// Menu styles:   border-[3px] border-black shadow-[4px_4px_0_#000] bg-white rounded-[2px]
// Item styles:   hover:bg-yellow-400 font-medium`;

export const shadcnJsx = `const options = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange" },
];

// ShadcnDropdown — zinc border, soft shadow, subtle hover
<ShadcnDropdown options={options} placeholder="Select a fruit">
  <ShadcnDropdown.Trigger />
  <ShadcnDropdown.Menu>
    {options.map((option, index) => (
      <ShadcnDropdown.Item key={option.id} option={option} index={index} />
    ))}
  </ShadcnDropdown.Menu>
</ShadcnDropdown>

// Trigger styles: border border-zinc-200 rounded-[6px] text-sm font-medium shadow-sm bg-white hover:bg-zinc-50
// Menu styles:   border border-zinc-200 rounded-[6px] shadow-md bg-white
// Item styles:   hover:bg-zinc-100 rounded-[4px]`;

export const flowbiteJsx = `const options = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange" },
];

// FlowbiteDropdown — gray border, rounded-lg, light hover
<FlowbiteDropdown options={options} placeholder="Select a fruit">
  <FlowbiteDropdown.Trigger />
  <FlowbiteDropdown.Menu>
    {options.map((option, index) => (
      <FlowbiteDropdown.Item key={option.id} option={option} index={index} />
    ))}
  </FlowbiteDropdown.Menu>
</FlowbiteDropdown>

// Trigger styles: border border-gray-200 rounded-lg text-sm font-medium shadow-sm bg-white hover:bg-gray-50
// Menu styles:   border border-gray-200 rounded-lg shadow-md bg-white
// Item styles:   hover:bg-gray-100`;

export const glassmorphismJsx = `const GlassmorphismDropdown = ({ trigger, items = [] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div ref={ref} className="relative inline-block font-sans">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">{trigger}</div>
      {open && (
        <div className="absolute z-10 mt-2 min-w-[160px] bg-white/15 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] overflow-hidden">
          {items.map((item, i) => (
            <button key={i} onClick={() => { item.onClick?.(); setOpen(false); }} disabled={item.disabled}
              className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-white/15 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};`;

export const md3Jsx = `const Md3Dropdown = ({ trigger, items = [] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div ref={ref} className="relative inline-block font-sans">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">{trigger}</div>
      {open && (
        <div className="absolute z-10 mt-1 min-w-[160px] bg-[#fffbfe] border border-[#e7e0ec] rounded-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.14)] overflow-hidden">
          {items.map((item, i) => (
            <button key={i} onClick={() => { item.onClick?.(); setOpen(false); }} disabled={item.disabled}
              className="w-full text-left px-4 py-3 text-sm text-[#1c1b1f] hover:bg-[#6750a4]/8 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};`;

export const nmJsx = `const NmDropdown = ({ trigger, items = [] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div ref={ref} className="relative inline-block font-sans">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">{trigger}</div>
      {open && (
        <div className="absolute z-10 mt-2 min-w-[160px] bg-[#e0e5ec] rounded-xl shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] overflow-hidden">
          {items.map((item, i) => (
            <button key={i} onClick={() => { item.onClick?.(); setOpen(false); }} disabled={item.disabled}
              className="w-full text-left px-4 py-2.5 text-sm text-[#6c7a9c] hover:shadow-[inset_-2px_-2px_4px_#ffffff,_inset_2px_2px_4px_rgba(163,177,198,0.3)] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};`;
