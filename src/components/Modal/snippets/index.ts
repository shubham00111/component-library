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
