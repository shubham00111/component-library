"use client";

import NeobrutalismModal from "@lib/components/Modal/variants/NeobrutalismModal";
import ShadcnModal from "@lib/components/Modal/variants/ShadcnModal";
import FlowbiteModal from "@lib/components/Modal/variants/FlowbiteModal";

export function NeobrutalismModalPreview() {
  return (
    <NeobrutalismModal>
      <NeobrutalismModal.Trigger>Open Modal</NeobrutalismModal.Trigger>
      <NeobrutalismModal.Overlay>
        <NeobrutalismModal.Dialog>
          <NeobrutalismModal.Title>Neobrutalism Modal</NeobrutalismModal.Title>
          <NeobrutalismModal.Content>
            <p className="text-sm">Bold borders, flat shadow, and yellow accents.</p>
          </NeobrutalismModal.Content>
          <div className="px-6 pb-6 flex justify-end">
            <NeobrutalismModal.Close>Close</NeobrutalismModal.Close>
          </div>
        </NeobrutalismModal.Dialog>
      </NeobrutalismModal.Overlay>
    </NeobrutalismModal>
  );
}

export function ShadcnModalPreview() {
  return (
    <ShadcnModal>
      <ShadcnModal.Trigger>Open Modal</ShadcnModal.Trigger>
      <ShadcnModal.Overlay>
        <ShadcnModal.Dialog>
          <ShadcnModal.Title>Shadcn Modal</ShadcnModal.Title>
          <ShadcnModal.Content>
            <p className="text-sm text-zinc-600">Clean zinc palette, soft shadow, rounded corners.</p>
          </ShadcnModal.Content>
          <div className="px-6 pb-6 flex justify-end">
            <ShadcnModal.Close>Close</ShadcnModal.Close>
          </div>
        </ShadcnModal.Dialog>
      </ShadcnModal.Overlay>
    </ShadcnModal>
  );
}

export function FlowbiteModalPreview() {
  return (
    <FlowbiteModal>
      <FlowbiteModal.Trigger>Open Modal</FlowbiteModal.Trigger>
      <FlowbiteModal.Overlay>
        <FlowbiteModal.Dialog>
          <FlowbiteModal.Title>Flowbite Modal</FlowbiteModal.Title>
          <FlowbiteModal.Content>
            <p className="text-sm text-gray-600">Gray border, blue trigger, rounded-lg container.</p>
          </FlowbiteModal.Content>
          <div className="px-6 pb-6 flex justify-end">
            <FlowbiteModal.Close>Close</FlowbiteModal.Close>
          </div>
        </FlowbiteModal.Dialog>
      </FlowbiteModal.Overlay>
    </FlowbiteModal>
  );
}
