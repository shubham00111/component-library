"use client";
import { createContext, useContext, useState } from "react";
import { CircleX } from "lucide-react";

type ModalContextType = { show: boolean; setShow: (v: boolean) => void };

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Must be used within FlowbiteModal");
  return ctx;
};

const Trigger = ({ children }: { children?: React.ReactNode }) => {
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
    className="relative bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-md"
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
    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">{children}</h2>
      <button
        onClick={() => setShow(false)}
        className="text-gray-400 hover:text-gray-600 transition-colors"
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
      className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg text-sm hover:bg-gray-200 transition-colors"
    >
      {children ?? "Close"}
    </button>
  );
};

const FlowbiteModal = ({
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

FlowbiteModal.Trigger = Trigger;
FlowbiteModal.Overlay = Overlay;
FlowbiteModal.Dialog = Dialog;
FlowbiteModal.Content = Content;
FlowbiteModal.Title = Title;
FlowbiteModal.Close = Close;

export default FlowbiteModal;
