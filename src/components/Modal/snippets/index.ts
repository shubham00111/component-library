export const neobrutalismJsx = `const ModalContext = createContext(undefined);
const useModal = () => useContext(ModalContext);

const Trigger = ({ children }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(true)}
      className="px-4 py-2 bg-yellow-400 text-black font-bold border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px transition-all"
    >
      {children ?? "Open Modal"}
    </button>
  );
};

const Overlay = ({ children }) => {
  const { show, setShow } = useModal();
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setShow(false)}>
      {children}
    </div>
  );
};

const Dialog = ({ children }) => (
  <div className="relative bg-white border-[3px] border-black shadow-[6px_6px_0_#000] rounded-[2px] w-full max-w-md" onClick={(e) => e.stopPropagation()}>
    {children}
  </div>
);

const Title = ({ children }) => {
  const { setShow } = useModal();
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b-[3px] border-black">
      <h2 className="text-lg font-bold">{children}</h2>
      <button onClick={() => setShow(false)} className="text-black hover:text-yellow-600 transition-colors">
        <CircleX size={22} />
      </button>
    </div>
  );
};

const Content = ({ children }) => <div className="p-6">{children}</div>;

const Close = ({ children }) => {
  const { setShow } = useModal();
  return (
    <button onClick={() => setShow(false)} className="px-4 py-2 bg-white text-black font-bold border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] hover:bg-yellow-400 transition-colors">
      {children ?? "Close"}
    </button>
  );
};

const NeobrutalismModal = ({ children, initialOpen = false }) => {
  const [show, setShow] = useState(initialOpen);
  return <ModalContext.Provider value={{ show, setShow }}>{children}</ModalContext.Provider>;
};

NeobrutalismModal.Trigger = Trigger;
NeobrutalismModal.Overlay = Overlay;
NeobrutalismModal.Dialog = Dialog;
NeobrutalismModal.Title = Title;
NeobrutalismModal.Content = Content;
NeobrutalismModal.Close = Close;

// Usage
<NeobrutalismModal>
  <NeobrutalismModal.Trigger>Open Modal</NeobrutalismModal.Trigger>
  <NeobrutalismModal.Overlay>
    <NeobrutalismModal.Dialog>
      <NeobrutalismModal.Title>Modal Title</NeobrutalismModal.Title>
      <NeobrutalismModal.Content>
        <p>Modal content goes here.</p>
      </NeobrutalismModal.Content>
      <div className="px-6 pb-6 flex justify-end">
        <NeobrutalismModal.Close>Close</NeobrutalismModal.Close>
      </div>
    </NeobrutalismModal.Dialog>
  </NeobrutalismModal.Overlay>
</NeobrutalismModal>`;

export const shadcnJsx = `const ModalContext = createContext(undefined);
const useModal = () => useContext(ModalContext);

const Trigger = ({ children }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(true)}
      className="px-4 py-2 bg-zinc-900 text-zinc-50 font-medium rounded-[6px] border border-transparent hover:opacity-90 transition-opacity text-sm"
    >
      {children ?? "Open Modal"}
    </button>
  );
};

const Overlay = ({ children }) => {
  const { show, setShow } = useModal();
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setShow(false)}>
      {children}
    </div>
  );
};

const Dialog = ({ children }) => (
  <div className="relative bg-white border border-zinc-200 rounded-[6px] shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
    {children}
  </div>
);

const Title = ({ children }) => {
  const { setShow } = useModal();
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-zinc-200">
      <h2 className="text-lg font-semibold text-zinc-900">{children}</h2>
      <button onClick={() => setShow(false)} className="text-zinc-400 hover:text-zinc-700 transition-colors">
        <CircleX size={20} />
      </button>
    </div>
  );
};

const Content = ({ children }) => <div className="p-6">{children}</div>;

const Close = ({ children }) => {
  const { setShow } = useModal();
  return (
    <button onClick={() => setShow(false)} className="px-4 py-2 bg-zinc-100 text-zinc-900 font-medium rounded-[6px] text-sm hover:bg-zinc-200 transition-colors">
      {children ?? "Close"}
    </button>
  );
};

const ShadcnModal = ({ children, initialOpen = false }) => {
  const [show, setShow] = useState(initialOpen);
  return <ModalContext.Provider value={{ show, setShow }}>{children}</ModalContext.Provider>;
};

ShadcnModal.Trigger = Trigger;
ShadcnModal.Overlay = Overlay;
ShadcnModal.Dialog = Dialog;
ShadcnModal.Title = Title;
ShadcnModal.Content = Content;
ShadcnModal.Close = Close;

// Usage
<ShadcnModal>
  <ShadcnModal.Trigger>Open Modal</ShadcnModal.Trigger>
  <ShadcnModal.Overlay>
    <ShadcnModal.Dialog>
      <ShadcnModal.Title>Modal Title</ShadcnModal.Title>
      <ShadcnModal.Content>
        <p>Modal content goes here.</p>
      </ShadcnModal.Content>
      <div className="px-6 pb-6 flex justify-end">
        <ShadcnModal.Close>Close</ShadcnModal.Close>
      </div>
    </ShadcnModal.Dialog>
  </ShadcnModal.Overlay>
</ShadcnModal>`;

export const flowbiteJsx = `const ModalContext = createContext(undefined);
const useModal = () => useContext(ModalContext);

const Trigger = ({ children }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(true)}
      className="px-4 py-2 bg-[#1c64f2] text-white font-medium rounded-lg border border-transparent hover:bg-[#1a56db] transition-colors text-sm"
    >
      {children ?? "Open Modal"}
    </button>
  );
};

const Overlay = ({ children }) => {
  const { show, setShow } = useModal();
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setShow(false)}>
      {children}
    </div>
  );
};

const Dialog = ({ children }) => (
  <div className="relative bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-md" onClick={(e) => e.stopPropagation()}>
    {children}
  </div>
);

const Title = ({ children }) => {
  const { setShow } = useModal();
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">{children}</h2>
      <button onClick={() => setShow(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
        <CircleX size={20} />
      </button>
    </div>
  );
};

const Content = ({ children }) => <div className="p-6">{children}</div>;

const Close = ({ children }) => {
  const { setShow } = useModal();
  return (
    <button onClick={() => setShow(false)} className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg text-sm hover:bg-gray-200 transition-colors">
      {children ?? "Close"}
    </button>
  );
};

const FlowbiteModal = ({ children, initialOpen = false }) => {
  const [show, setShow] = useState(initialOpen);
  return <ModalContext.Provider value={{ show, setShow }}>{children}</ModalContext.Provider>;
};

FlowbiteModal.Trigger = Trigger;
FlowbiteModal.Overlay = Overlay;
FlowbiteModal.Dialog = Dialog;
FlowbiteModal.Title = Title;
FlowbiteModal.Content = Content;
FlowbiteModal.Close = Close;

// Usage
<FlowbiteModal>
  <FlowbiteModal.Trigger>Open Modal</FlowbiteModal.Trigger>
  <FlowbiteModal.Overlay>
    <FlowbiteModal.Dialog>
      <FlowbiteModal.Title>Modal Title</FlowbiteModal.Title>
      <FlowbiteModal.Content>
        <p>Modal content goes here.</p>
      </FlowbiteModal.Content>
      <div className="px-6 pb-6 flex justify-end">
        <FlowbiteModal.Close>Close</FlowbiteModal.Close>
      </div>
    </FlowbiteModal.Dialog>
  </FlowbiteModal.Overlay>
</FlowbiteModal>`;

export const glassmorphismJsx = `const GlassmorphismModal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative bg-white/15 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.25)] w-full max-w-md font-sans">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-base font-semibold text-white m-0">{title}</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white text-xl leading-none transition-colors">×</button>
        </div>
        <div className="px-5 py-4 text-sm text-white/80">{children}</div>
        {footer && <div className="px-5 py-4 border-t border-white/10 flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  );
};`;

export const md3Jsx = `const Md3Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-[#1c1b1f]/40" />
      <div className="relative bg-[#fffbfe] rounded-[28px] shadow-[0_6px_10px_rgba(0,0,0,0.14),0_1px_18px_rgba(0,0,0,0.12)] w-full max-w-md font-sans">
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-xl font-semibold text-[#1c1b1f] m-0 mb-2">{title}</h2>
          <div className="text-sm text-[#49454f]">{children}</div>
        </div>
        {footer && <div className="px-6 pb-6 flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  );
};`;

export const nmJsx = `const NmModal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#e0e5ec]/80" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-[#e0e5ec] rounded-xl shadow-[-10px_-10px_20px_#ffffff,_10px_10px_20px_rgba(163,177,198,0.6)] w-full max-w-md font-sans">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(163,177,198,0.3)]">
          <h2 className="text-base font-semibold text-[#3d4f6e] m-0">{title}</h2>
          <button onClick={onClose} className="text-[#6c7a9c] hover:text-[#3d4f6e] text-xl leading-none transition-colors">×</button>
        </div>
        <div className="px-5 py-4 text-sm text-[#6c7a9c]">{children}</div>
        {footer && <div className="px-5 py-4 border-t border-[rgba(163,177,198,0.3)] flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  );
};`;
