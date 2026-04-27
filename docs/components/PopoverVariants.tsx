"use client";
import { NeobrutalismPopover, ShadcnPopover, FlowbitePopover } from "@lib/components/Popover";

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
