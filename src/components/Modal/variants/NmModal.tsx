"use client";
import { createContext, useContext, useState } from "react";
import { CircleX } from "lucide-react";

type ModalContextType = { show: boolean; setShow: (v: boolean) => void };

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Must be used within NmModal");
  return ctx;
};

const Trigger = ({ children }: { children?: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(true)}
      className="px-5 py-2.5 bg-[#e0e5ec] dark:bg-[#2d2d3a] text-[#6c7a9c] dark:text-[#a0a8c0] font-semibold rounded-xl border-none text-sm shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28] hover:shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] dark:hover:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28] active:shadow-[inset_-5px_-5px_10px_#ffffff,_inset_5px_5px_10px_rgba(163,177,198,0.6)] dark:active:shadow-[inset_-5px_-5px_10px_#3d3d4e,_inset_5px_5px_10px_#1d1d28] transition-all duration-150"
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
      className="fixed inset-0 z-50 bg-[#e0e5ec]/80 dark:bg-[#2d2d3a]/80 flex items-center justify-center p-4"
      onClick={() => setShow(false)}
    >
      {children}
    </div>
  );
};

const Dialog = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-2xl w-full max-w-md shadow-[-8px_-8px_16px_#ffffff,_8px_8px_16px_rgba(163,177,198,0.6)] dark:shadow-[-8px_-8px_16px_#3d3d4e,_8px_8px_16px_#1d1d28]"
    onClick={(e) => e.stopPropagation()}
    role="dialog"
    aria-modal="true"
  >
    {children}
  </div>
);

const Content = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 text-[#6c7a9c] dark:text-[#a0a8c0]">{children}</div>
);

const Title = ({ children }: { children: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[rgba(163,177,198,0.3)] dark:border-[#3d3d4e]">
      <h2 className="text-lg font-semibold text-[#3d4f6e] dark:text-[#c5cde0]">{children}</h2>
      <button
        onClick={() => setShow(false)}
        className="text-[#6c7a9c] dark:text-[#a0a8c0] hover:text-[#3d4f6e] dark:hover:text-[#c5cde0] transition-colors"
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
      className="px-5 py-2 bg-[#e0e5ec] dark:bg-[#2d2d3a] text-[#6c7a9c] dark:text-[#a0a8c0] font-semibold rounded-xl border-none text-sm shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] dark:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28] hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:hover:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28] transition-all duration-150"
    >
      {children ?? "Close"}
    </button>
  );
};

const NmModal = ({
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

NmModal.Trigger = Trigger;
NmModal.Overlay = Overlay;
NmModal.Dialog = Dialog;
NmModal.Content = Content;
NmModal.Title = Title;
NmModal.Close = Close;

export default NmModal;
