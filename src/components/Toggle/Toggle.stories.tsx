import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismToggle from "./variants/NeobrutalismToggle";
import ShadcnToggle from "./variants/ShadcnToggle";
import FlowbiteToggle from "./variants/FlowbiteToggle";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { ToggleProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Toggle",
  parameters: { layout: "centered" },
} satisfies Meta<ToggleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <NeobrutalismToggle label="Off by default" />
        <NeobrutalismToggle label="On by default" defaultChecked />
        <NeobrutalismToggle label="Disabled off" disabled />
        <NeobrutalismToggle label="Disabled on" defaultChecked disabled />
        <div style={{ display: "flex", gap: 12 }}>
          <NeobrutalismToggle size="sm" label="Small" />
          <NeobrutalismToggle size="md" label="Medium" />
          <NeobrutalismToggle size="lg" label="Large" />
        </div>
      </div>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <ShadcnToggle label="Off by default" />
        <ShadcnToggle label="On by default" defaultChecked />
        <ShadcnToggle label="Disabled off" disabled />
        <ShadcnToggle label="Disabled on" defaultChecked disabled />
        <div style={{ display: "flex", gap: 12 }}>
          <ShadcnToggle size="sm" label="Small" />
          <ShadcnToggle size="md" label="Medium" />
          <ShadcnToggle size="lg" label="Large" />
        </div>
      </div>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <FlowbiteToggle label="Off by default" />
        <FlowbiteToggle label="On by default" defaultChecked />
        <FlowbiteToggle label="Disabled off" disabled />
        <FlowbiteToggle label="Disabled on" defaultChecked disabled />
        <div style={{ display: "flex", gap: 12 }}>
          <FlowbiteToggle size="sm" label="Small" />
          <FlowbiteToggle size="md" label="Medium" />
          <FlowbiteToggle size="lg" label="Large" />
        </div>
      </div>
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Toggle — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <NeobrutalismToggle label="Enabled" />
              <NeobrutalismToggle label="Active" defaultChecked />
            </div>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <ShadcnToggle label="Enabled" />
              <ShadcnToggle label="Active" defaultChecked />
            </div>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <FlowbiteToggle label="Enabled" />
              <FlowbiteToggle label="Active" defaultChecked />
            </div>
          ),
        },
      ]}
    />
  ),
  args: {},
};
