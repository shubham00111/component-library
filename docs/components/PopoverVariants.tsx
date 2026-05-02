"use client";
import { NeobrutalismPopover, ShadcnPopover, FlowbitePopover, GlassmorphismPopover, Md3Popover, NmPopover } from "@lib/components/Popover";

export function NeobrutalismPopoverPreview() {
  return (
    <NeobrutalismPopover>
      <NeobrutalismPopover.Trigger>Open Popover</NeobrutalismPopover.Trigger>
      <NeobrutalismPopover.Content>
        <p className="text-sm font-extrabold text-black mb-1">Neobrutalism Popover</p>
        <p className="text-xs text-gray-700">Bold border, yellow accent, flat shadow.</p>
      </NeobrutalismPopover.Content>
    </NeobrutalismPopover>
  );
}

export function ShadcnPopoverPreview() {
  return (
    <ShadcnPopover>
      <ShadcnPopover.Trigger>Open Popover</ShadcnPopover.Trigger>
      <ShadcnPopover.Content>
        <p className="text-sm font-semibold text-zinc-900 mb-1">Shadcn Popover</p>
        <p className="text-xs text-zinc-500">Soft shadow, zinc border, 6px radius.</p>
      </ShadcnPopover.Content>
    </ShadcnPopover>
  );
}

export function FlowbitePopoverPreview() {
  return (
    <FlowbitePopover>
      <FlowbitePopover.Trigger>Open Popover</FlowbitePopover.Trigger>
      <FlowbitePopover.Content>
        <p className="text-sm font-semibold text-gray-900 mb-1">Flowbite Popover</p>
        <p className="text-xs text-gray-500">Gray border, rounded-lg, shadow-lg.</p>
      </FlowbitePopover.Content>
    </FlowbitePopover>
  );
}

export function GlassmorphismPopoverPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismPopover>
        <GlassmorphismPopover.Trigger>Open Popover</GlassmorphismPopover.Trigger>
        <GlassmorphismPopover.Content>
          <p className="text-sm font-semibold text-white mb-1">Glassmorphism Popover</p>
          <p className="text-xs text-white/70">Frosted glass panel with backdrop blur.</p>
        </GlassmorphismPopover.Content>
      </GlassmorphismPopover>
    </div>
  );
}

export function Md3PopoverPreview() {
  return (
    <Md3Popover>
      <Md3Popover.Trigger>Open Popover</Md3Popover.Trigger>
      <Md3Popover.Content>
        <p className="text-sm font-semibold text-[#1c1b1f] mb-1">MD3 Popover</p>
        <p className="text-xs text-[#49454f]">Rounded surface, soft elevation shadow.</p>
      </Md3Popover.Content>
    </Md3Popover>
  );
}

export function NmPopoverPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmPopover>
        <NmPopover.Trigger>Open Popover</NmPopover.Trigger>
        <NmPopover.Content>
          <p className="text-sm font-semibold text-[#3d4f6e] mb-1">Neumorphism Popover</p>
          <p className="text-xs text-[#6c7a9c]">Raised card with dual-tone shadows.</p>
        </NmPopover.Content>
      </NmPopover>
    </div>
  );
}
