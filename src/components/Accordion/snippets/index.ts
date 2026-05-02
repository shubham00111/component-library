export const neobrutalismJsx = `const AccordionContext = createContext(undefined);
const useAccordion = () => useContext(AccordionContext);

const Title = ({ children }) => {
  const { show, setShow, disabled } = useAccordion();
  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && setShow(!show)}
      className="w-full flex justify-between items-center px-4 py-3 font-bold bg-white hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="text-left">{children}</span>
      <ChevronDown size={20} className={\`shrink-0 ml-2 transition-transform duration-200 \${show ? "rotate-180" : ""}\`} />
    </button>
  );
};

const Description = ({ children }) => {
  const { show } = useAccordion();
  return (
    <div className={\`overflow-hidden transition-all duration-200 \${show ? "max-h-96" : "max-h-0"}\`}>
      <div className="px-4 py-3 bg-white text-sm border-t-[3px] border-black">{children}</div>
    </div>
  );
};

const Item = ({ children, defaultOpen = false, disabled = false }) => {
  const [show, setShow] = useState(defaultOpen);
  return (
    <AccordionContext.Provider value={{ show, setShow, disabled }}>
      <div className="border-b-[3px] border-black last:border-b-0">{children}</div>
    </AccordionContext.Provider>
  );
};

const NeobrutalismAccordion = ({ children }) => (
  <div className="border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] overflow-hidden">
    {children}
  </div>
);

NeobrutalismAccordion.Item = Item;
NeobrutalismAccordion.Title = Title;
NeobrutalismAccordion.Description = Description;

// Usage
<NeobrutalismAccordion>
  <NeobrutalismAccordion.Item>
    <NeobrutalismAccordion.Title>What is Neobrutalism?</NeobrutalismAccordion.Title>
    <NeobrutalismAccordion.Description>
      A bold design language with thick borders, flat shadows, and high contrast.
    </NeobrutalismAccordion.Description>
  </NeobrutalismAccordion.Item>
  <NeobrutalismAccordion.Item>
    <NeobrutalismAccordion.Title>How does it work?</NeobrutalismAccordion.Title>
    <NeobrutalismAccordion.Description>
      Each item manages its own open/close state with React useState.
    </NeobrutalismAccordion.Description>
  </NeobrutalismAccordion.Item>
</NeobrutalismAccordion>`;

export const shadcnJsx = `const AccordionContext = createContext(undefined);
const useAccordion = () => useContext(AccordionContext);

const Title = ({ children }) => {
  const { show, setShow, disabled } = useAccordion();
  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && setShow(!show)}
      className="w-full flex justify-between items-center px-4 py-3 font-medium text-sm hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="text-left">{children}</span>
      <ChevronDown size={16} className={\`shrink-0 ml-2 transition-transform duration-200 \${show ? "rotate-180" : ""}\`} />
    </button>
  );
};

const Description = ({ children }) => {
  const { show } = useAccordion();
  return (
    <div className={\`overflow-hidden transition-all duration-200 \${show ? "max-h-96" : "max-h-0"}\`}>
      <div className="px-4 pb-3 pt-0 text-sm text-zinc-600">{children}</div>
    </div>
  );
};

const Item = ({ children, defaultOpen = false, disabled = false }) => {
  const [show, setShow] = useState(defaultOpen);
  return (
    <AccordionContext.Provider value={{ show, setShow, disabled }}>
      <div className="border-b border-zinc-200 last:border-b-0">{children}</div>
    </AccordionContext.Provider>
  );
};

const ShadcnAccordion = ({ children }) => (
  <div className="border border-zinc-200 rounded-[6px] overflow-hidden">
    {children}
  </div>
);

ShadcnAccordion.Item = Item;
ShadcnAccordion.Title = Title;
ShadcnAccordion.Description = Description;

// Usage
<ShadcnAccordion>
  <ShadcnAccordion.Item>
    <ShadcnAccordion.Title>Is it accessible?</ShadcnAccordion.Title>
    <ShadcnAccordion.Description>
      Yes. Each button has proper aria-expanded and keyboard support.
    </ShadcnAccordion.Description>
  </ShadcnAccordion.Item>
  <ShadcnAccordion.Item>
    <ShadcnAccordion.Title>Can I use it in Next.js?</ShadcnAccordion.Title>
    <ShadcnAccordion.Description>
      Absolutely. Add "use client" and import directly.
    </ShadcnAccordion.Description>
  </ShadcnAccordion.Item>
</ShadcnAccordion>`;

export const flowbiteJsx = `const AccordionContext = createContext(undefined);
const useAccordion = () => useContext(AccordionContext);

const Title = ({ children }) => {
  const { show, setShow, disabled } = useAccordion();
  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && setShow(!show)}
      className="w-full flex justify-between items-center px-4 py-3 font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="text-left">{children}</span>
      <ChevronDown size={16} className={\`shrink-0 ml-2 transition-transform duration-200 \${show ? "rotate-180" : ""}\`} />
    </button>
  );
};

const Description = ({ children }) => {
  const { show } = useAccordion();
  return (
    <div className={\`overflow-hidden transition-all duration-200 \${show ? "max-h-96" : "max-h-0"}\`}>
      <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">{children}</div>
    </div>
  );
};

const Item = ({ children, defaultOpen = false, disabled = false }) => {
  const [show, setShow] = useState(defaultOpen);
  return (
    <AccordionContext.Provider value={{ show, setShow, disabled }}>
      <div className="border-b border-gray-200 last:border-b-0">{children}</div>
    </AccordionContext.Provider>
  );
};

const FlowbiteAccordion = ({ children }) => (
  <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
    {children}
  </div>
);

FlowbiteAccordion.Item = Item;
FlowbiteAccordion.Title = Title;
FlowbiteAccordion.Description = Description;

// Usage
<FlowbiteAccordion>
  <FlowbiteAccordion.Item>
    <FlowbiteAccordion.Title>What is Flowbite?</FlowbiteAccordion.Title>
    <FlowbiteAccordion.Description>
      A design system built on Tailwind CSS with clean, accessible UI components.
    </FlowbiteAccordion.Description>
  </FlowbiteAccordion.Item>
  <FlowbiteAccordion.Item>
    <FlowbiteAccordion.Title>How do I customize it?</FlowbiteAccordion.Title>
    <FlowbiteAccordion.Description>
      Override Tailwind classes via className props or extend the component.
    </FlowbiteAccordion.Description>
  </FlowbiteAccordion.Item>
</FlowbiteAccordion>`;

export const glassmorphismJsx = `const GlassmorphismAccordion = ({ items = [], allowMultiple = false }) => {
  const [open, setOpen] = useState(new Set());
  const toggle = (id) => setOpen((prev) => {
    const next = new Set(allowMultiple ? prev : []);
    prev.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  return (
    <div className="flex flex-col gap-2 font-sans">
      {items.map((item) => (
        <div key={item.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
          <button
            onClick={() => toggle(item.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-left text-[0.9375rem] font-medium text-white hover:bg-white/10 transition-colors duration-200"
          >
            <span>{item.title}</span>
            <span className={\`transition-transform duration-200 text-white/70 \${open.has(item.id) ? "rotate-180" : ""}\`}>▾</span>
          </button>
          {open.has(item.id) && (
            <div className="px-4 pb-4 text-sm text-white/70 border-t border-white/10 pt-3">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};`;

export const md3Jsx = `const Md3Accordion = ({ items = [], allowMultiple = false }) => {
  const [open, setOpen] = useState(new Set());
  const toggle = (id) => setOpen((prev) => {
    const next = new Set(allowMultiple ? prev : []);
    prev.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  return (
    <div className="flex flex-col font-sans border border-[#e7e0ec] rounded-[12px] overflow-hidden">
      {items.map((item, i) => (
        <div key={item.id} className={\`\${i > 0 ? "border-t border-[#e7e0ec]" : ""}\`}>
          <button
            onClick={() => toggle(item.id)}
            className={\`w-full flex items-center justify-between px-4 py-3 text-left text-[0.9375rem] font-medium transition-colors duration-200 \${open.has(item.id) ? "bg-[#f3edf7] text-[#6750a4]" : "bg-[#fffbfe] text-[#1c1b1f] hover:bg-[#f3edf7]"}\`}
          >
            <span>{item.title}</span>
            <span className={\`transition-transform duration-200 \${open.has(item.id) ? "rotate-180 text-[#6750a4]" : "text-[#49454f]"}\`}>▾</span>
          </button>
          {open.has(item.id) && (
            <div className="px-4 pb-4 text-sm text-[#49454f] bg-[#fffbfe] pt-3">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};`;

export const nmJsx = `const NmAccordion = ({ items = [], allowMultiple = false }) => {
  const [open, setOpen] = useState(new Set());
  const toggle = (id) => setOpen((prev) => {
    const next = new Set(allowMultiple ? prev : []);
    prev.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  return (
    <div className="flex flex-col gap-3 font-sans">
      {items.map((item) => (
        <div key={item.id} className="bg-[#e0e5ec] rounded-xl overflow-hidden shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)]">
          <button
            onClick={() => toggle(item.id)}
            className={\`w-full flex items-center justify-between px-4 py-3 text-left text-[0.9375rem] font-semibold text-[#6c7a9c] transition-all duration-150 \${open.has(item.id) ? "shadow-[inset_-2px_-2px_5px_#ffffff,_inset_2px_2px_5px_rgba(163,177,198,0.4)]" : ""}\`}
          >
            <span>{item.title}</span>
            <span className={\`transition-transform duration-200 text-[#6c7a9c]/60 \${open.has(item.id) ? "rotate-180" : ""}\`}>▾</span>
          </button>
          {open.has(item.id) && (
            <div className="px-4 pb-4 text-sm text-[#6c7a9c] border-t border-[rgba(163,177,198,0.3)] pt-3">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};`;
