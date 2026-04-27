import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismInput from "./variants/NeobrutalismInput";
import ShadcnInput from "./variants/ShadcnInput";
import FlowbiteInput from "./variants/FlowbiteInput";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { InputProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Input",
  parameters: { layout: "centered" },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 320 }}>
      <NeobrutalismInput label="Label" placeholder="Enter text…" />
      <NeobrutalismInput label="With helper" placeholder="Enter email…" helperText="We'll never share your email." />
      <NeobrutalismInput label="With error" placeholder="Enter text…" error="This field is required" />
      <NeobrutalismInput label="Disabled" placeholder="Disabled" disabled />
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 320 }}>
      <ShadcnInput label="Email" placeholder="you@example.com" type="email" />
      <ShadcnInput label="With helper" placeholder="Enter text…" helperText="Some hint text." />
      <ShadcnInput label="With error" placeholder="Enter text…" error="This field is required" />
      <ShadcnInput label="Disabled" placeholder="Disabled" disabled />
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 320 }}>
      <FlowbiteInput label="Your name" placeholder="John Doe" />
      <FlowbiteInput label="With helper" placeholder="Enter text…" helperText="Some hint text." />
      <FlowbiteInput label="With error" placeholder="Enter text…" error="This field is required" />
      <FlowbiteInput label="Disabled" placeholder="Disabled" disabled />
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Input — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: <NeobrutalismInput label="Label" placeholder="Enter text…" />,
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: <ShadcnInput label="Label" placeholder="Enter text…" />,
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: <FlowbiteInput label="Label" placeholder="Enter text…" />,
        },
      ]}
    />
  ),
  args: {},
};
