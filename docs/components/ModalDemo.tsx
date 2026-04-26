"use client";

import Modal from "@lib/components/Modal/Modal";

export function ModalDemo() {
  return (
    <div style={{ padding: "24px", display: "flex", justifyContent: "center" }}>
      <Modal>
        <Modal.Trigger>Open Modal</Modal.Trigger>
        <Modal.Overlay>
          <Modal.Dialog>
            <Modal.Title>Example Modal</Modal.Title>
            <Modal.Content>
              <p style={{ marginBottom: "16px", color: "#6b7280" }}>
                This is a Tailwind-based modal component. Multi-design-language
                variants are planned for a future release.
              </p>
            </Modal.Content>
            <Modal.Close>Close</Modal.Close>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </div>
  );
}
