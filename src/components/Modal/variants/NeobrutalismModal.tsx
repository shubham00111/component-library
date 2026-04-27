"use client";
import { createContext, useContext, useState } from "react";
import { CircleX } from "lucide-react";

type ModalContextType = { show: boolean; setShow: (v: boolean) => void };

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Must be used within NeobrutalismModal");
  return ctx;
};

const Trigger = ({ children }: { children?: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(true)}
      className="px-4 py-2 bg-yellow-400 text-black font-bold border-[3px] border-black dark:border-white shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_rgba(255,255,255,0.3)] rounded-[2px] hover:shadow-[6px_6px_0_#000] dark:hover:shadow-[6px_6px_0_rgba(255,255,255,0.3)] hover:-translate-x-px hover:-translate-y-px transition-all"
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
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={() => setShow(false)}
    >
      {children}
    </div>
  );
};

const Dialog = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative bg-white dark:bg-zinc-900 border-[3px] border-black dark:border-white shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_rgba(255,255,255,0.3)] rounded-[2px] w-full max-w-md"
    onClick={(e) => e.stopPropagation()}
    role="dialog"
    aria-modal="true"
  >
    {children}
  </div>
);

const Content = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 text-black dark:text-white">{children}</div>
);

const Title = ({ children }: { children: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b-[3px] border-black dark:border-white">
      <h2 className="text-lg font-bold text-black dark:text-white">{children}</h2>
      <button
        onClick={() => setShow(false)}
        className="text-black dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
        aria-label="Close modal"
      >
        <CircleX size={22} />
      </button>
    </div>
  );
};

const Close = ({ children }: { children?: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(false)}
      className="px-4 py-2 bg-white dark:bg-zinc-800 text-black dark:text-white font-bold border-[3px] border-black dark:border-white shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] rounded-[2px] hover:bg-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black transition-colors"
    >
      {children ?? "Close"}
    </button>
  );
};

const NeobrutalismModal = ({
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

NeobrutalismModal.Trigger = Trigger;
NeobrutalismModal.Overlay = Overlay;
NeobrutalismModal.Dialog = Dialog;
NeobrutalismModal.Content = Content;
NeobrutalismModal.Title = Title;
NeobrutalismModal.Close = Close;

export default NeobrutalismModal;
