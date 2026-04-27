import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismCheckbox from "./variants/NeobrutalismCheckbox";
import ShadcnCheckbox from "./variants/ShadcnCheckbox";
import FlowbiteCheckbox from "./variants/FlowbiteCheckbox";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { CheckboxProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Checkbox",
  parameters: { layout: "centered" },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <NeobrutalismCheckbox label="Unchecked" />
        <NeobrutalismCheckbox label="Checked" defaultChecked />
        <NeobrutalismCheckbox label="Indeterminate" indeterminate />
        <NeobrutalismCheckbox label="Disabled" disabled />
        <NeobrutalismCheckbox label="Disabled checked" defaultChecked disabled />
      </div>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <ShadcnCheckbox label="Unchecked" />
        <ShadcnCheckbox label="Checked" defaultChecked />
        <ShadcnCheckbox label="Indeterminate" indeterminate />
        <ShadcnCheckbox label="Disabled" disabled />
        <ShadcnCheckbox label="Disabled checked" defaultChecked disabled />
      </div>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <FlowbiteCheckbox label="Unchecked" />
        <FlowbiteCheckbox label="Checked" defaultChecked />
        <FlowbiteCheckbox label="Indeterminate" indeterminate />
        <FlowbiteCheckbox label="Disabled" disabled />
        <FlowbiteCheckbox label="Disabled checked" defaultChecked disabled />
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
      title="Checkbox — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <NeobrutalismCheckbox label="Unchecked" />
              <NeobrutalismCheckbox label="Checked" defaultChecked />
            </div>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ShadcnCheckbox label="Unchecked" />
              <ShadcnCheckbox label="Checked" defaultChecked />
            </div>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <FlowbiteCheckbox label="Unchecked" />
              <FlowbiteCheckbox label="Checked" defaultChecked />
            </div>
          ),
        },
      ]}
    />
  ),
  args: {},
};
