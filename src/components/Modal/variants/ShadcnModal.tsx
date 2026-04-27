"use client";
import { createContext, useContext, useState } from "react";
import { CircleX } from "lucide-react";

type ModalContextType = { show: boolean; setShow: (v: boolean) => void };

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Must be used within ShadcnModal");
  return ctx;
};

const Trigger = ({ children }: { children?: React.ReactNode }) => {
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

const Overlay = ({ children }: { children: React.ReactNode }) => {
  const { show, setShow } = useModal();
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={() => setShow(false)}
    >
      {children}
    </div>
  );
};

const Dialog = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative bg-white border border-zinc-200 rounded-[6px] shadow-lg w-full max-w-md"
    onClick={(e) => e.stopPropagation()}
    role="dialog"
    aria-modal="true"
  >
    {children}
  </div>
);

const Content = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6">{children}</div>
);

const Title = ({ children }: { children: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-zinc-200">
      <h2 className="text-lg font-semibold text-zinc-900">{children}</h2>
      <button
        onClick={() => setShow(false)}
        className="text-zinc-400 hover:text-zinc-700 transition-colors"
        aria-label="Close modal"
      >
        <CircleX size={20} />
      </button>
    </div>
  );
};

const Close = ({ children }: { children?: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(false)}
      className="px-4 py-2 bg-zinc-100 text-zinc-900 font-medium rounded-[6px] text-sm hover:bg-zinc-200 transition-colors"
    >
      {children ?? "Close"}
    </button>
  );
};

const ShadcnModal = ({
  children,
  initialOpen = false,
}: {
  children: React.ReactNode;
  initialOpen?: boolean;
}) => {
  const [show, setShow] = useState(initialOpen);
  return (
    <ModalContext.Provider value={{ show, setShow }}>
      {children}
    </ModalContext.Provider>
  );
};

ShadcnModal.Trigger = Trigger;
ShadcnModal.Overlay = Overlay;
ShadcnModal.Dialog = Dialog;
ShadcnModal.Content = Content;
ShadcnModal.Title = Title;
ShadcnModal.Close = Close;

export default ShadcnModal;
