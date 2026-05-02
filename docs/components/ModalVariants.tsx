"use client";

import NeobrutalismModal from "@lib/components/Modal/variants/NeobrutalismModal";
import ShadcnModal from "@lib/components/Modal/variants/ShadcnModal";
import FlowbiteModal from "@lib/components/Modal/variants/FlowbiteModal";
import GlassmorphismModal from "@lib/components/Modal/variants/GlassmorphismModal";
import Md3Modal from "@lib/components/Modal/variants/Md3Modal";
import NmModal from "@lib/components/Modal/variants/NmModal";

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

export function GlassmorphismModalPreview() {
  return (
    <GlassmorphismModal>
      <GlassmorphismModal.Trigger>Open Modal</GlassmorphismModal.Trigger>
      <GlassmorphismModal.Overlay>
        <GlassmorphismModal.Dialog>
          <GlassmorphismModal.Title>Glassmorphism Modal</GlassmorphismModal.Title>
          <GlassmorphismModal.Content>
            <p className="text-sm text-white/80">Frosted glass panel with backdrop blur and subtle border.</p>
          </GlassmorphismModal.Content>
          <div className="px-6 pb-6 flex justify-end">
            <GlassmorphismModal.Close>Close</GlassmorphismModal.Close>
          </div>
        </GlassmorphismModal.Dialog>
      </GlassmorphismModal.Overlay>
    </GlassmorphismModal>
  );
}

export function Md3ModalPreview() {
  return (
    <Md3Modal>
      <Md3Modal.Trigger>Open Modal</Md3Modal.Trigger>
      <Md3Modal.Overlay>
        <Md3Modal.Dialog>
          <Md3Modal.Title>Material Design 3 Modal</Md3Modal.Title>
          <Md3Modal.Content>
            <p className="text-sm text-[#49454f]">Large radius, tonal surface, MD3 elevation shadow.</p>
          </Md3Modal.Content>
          <div className="px-6 pb-6 flex justify-end">
            <Md3Modal.Close>Close</Md3Modal.Close>
          </div>
        </Md3Modal.Dialog>
      </Md3Modal.Overlay>
    </Md3Modal>
  );
}

export function NmModalPreview() {
  return (
    <NmModal>
      <NmModal.Trigger>Open Modal</NmModal.Trigger>
      <NmModal.Overlay>
        <NmModal.Dialog>
          <NmModal.Title>Neumorphism Modal</NmModal.Title>
          <NmModal.Content>
            <p className="text-sm text-[#6c7a9c]">Soft raised panel with dual-tone shadows on base background.</p>
          </NmModal.Content>
          <div className="px-6 pb-6 flex justify-end">
            <NmModal.Close>Close</NmModal.Close>
          </div>
        </NmModal.Dialog>
      </NmModal.Overlay>
    </NmModal>
  );
}
