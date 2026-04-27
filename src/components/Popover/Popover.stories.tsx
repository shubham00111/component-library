import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismPopover from "./variants/NeobrutalismPopover";
import ShadcnPopover from "./variants/ShadcnPopover";
import FlowbitePopover from "./variants/FlowbitePopover";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { PopoverProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Popover",
  parameters: { layout: "centered" },
} satisfies Meta<PopoverProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <NeobrutalismPopover>
        <NeobrutalismPopover.Trigger>Open Popover</NeobrutalismPopover.Trigger>
        <NeobrutalismPopover.Content>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: 14 }}>Popover heading</p>
          <p style={{ margin: "8px 0 0", fontSize: 13 }}>This is the popover content. Click outside to close.</p>
        </NeobrutalismPopover.Content>
      </NeobrutalismPopover>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: { children: null },
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ShadcnPopover>
        <ShadcnPopover.Trigger>Open Popover</ShadcnPopover.Trigger>
        <ShadcnPopover.Content>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>Popover heading</p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#71717a" }}>This is the popover content. Click outside to close.</p>
        </ShadcnPopover.Content>
      </ShadcnPopover>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: { children: null },
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <FlowbitePopover>
        <FlowbitePopover.Trigger>Open Popover</FlowbitePopover.Trigger>
        <FlowbitePopover.Content>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>Popover heading</p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#6b7280" }}>This is the popover content. Click outside to close.</p>
        </FlowbitePopover.Content>
      </FlowbitePopover>
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: { children: null },
};

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Popover — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <NeobrutalismPopover>
              <NeobrutalismPopover.Trigger>Open</NeobrutalismPopover.Trigger>
              <NeobrutalismPopover.Content>
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 13 }}>Neobrutalism popover</p>
              </NeobrutalismPopover.Content>
            </NeobrutalismPopover>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <ShadcnPopover>
              <ShadcnPopover.Trigger>Open</ShadcnPopover.Trigger>
              <ShadcnPopover.Content>
                <p style={{ margin: 0, fontWeight: 600, fontSize: 13 }}>Shadcn popover</p>
              </ShadcnPopover.Content>
            </ShadcnPopover>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <FlowbitePopover>
              <FlowbitePopover.Trigger>Open</FlowbitePopover.Trigger>
              <FlowbitePopover.Content>
                <p style={{ margin: 0, fontWeight: 600, fontSize: 13 }}>Flowbite popover</p>
              </FlowbitePopover.Content>
            </FlowbitePopover>
          ),
        },
      ]}
    />
  ),
  args: { children: null },
};
