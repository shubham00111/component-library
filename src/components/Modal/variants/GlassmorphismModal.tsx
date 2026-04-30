"use client";
import { createContext, useContext, useState } from "react";
import { CircleX } from "lucide-react";

type ModalContextType = { show: boolean; setShow: (v: boolean) => void };

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Must be used within GlassmorphismModal");
  return ctx;
};

const Trigger = ({ children }: { children?: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(true)}
      className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium rounded-xl hover:bg-white/30 transition-all duration-200 text-sm"
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
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => setShow(false)}
    >
      {children}
    </div>
  );
};

const Dialog = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.3)] w-full max-w-md"
    onClick={(e) => e.stopPropagation()}
    role="dialog"
    aria-modal="true"
  >
    {children}
  </div>
);

const Content = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 text-white/80">{children}</div>
);

const Title = ({ children }: { children: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
      <h2 className="text-lg font-semibold text-white">{children}</h2>
      <button
        onClick={() => setShow(false)}
        className="text-white/60 hover:text-white transition-colors"
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
      className="px-4 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-xl text-sm hover:bg-white/20 transition-all duration-200"
    >
      {children ?? "Close"}
    </button>
  );
};

const GlassmorphismModal = ({
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

GlassmorphismModal.Trigger = Trigger;
GlassmorphismModal.Overlay = Overlay;
GlassmorphismModal.Dialog = Dialog;
GlassmorphismModal.Content = Content;
GlassmorphismModal.Title = Title;
GlassmorphismModal.Close = Close;

export default GlassmorphismModal;
