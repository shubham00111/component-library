import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismTextarea from "./variants/NeobrutalismTextarea";
import ShadcnTextarea from "./variants/ShadcnTextarea";
import FlowbiteTextarea from "./variants/FlowbiteTextarea";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { TextareaProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Textarea",
  parameters: { layout: "centered" },
} satisfies Meta<TextareaProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 320 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <NeobrutalismTextarea label="Message" placeholder="Write your message..." />
        <NeobrutalismTextarea label="With helper" placeholder="..." helperText="Max 500 characters." />
        <NeobrutalismTextarea label="With error" placeholder="..." error="This field is required." />
        <NeobrutalismTextarea label="Disabled" placeholder="..." disabled />
      </div>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 320 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <ShadcnTextarea label="Message" placeholder="Write your message..." />
        <ShadcnTextarea label="With helper" placeholder="..." helperText="Max 500 characters." />
        <ShadcnTextarea label="With error" placeholder="..." error="This field is required." />
        <ShadcnTextarea label="Disabled" placeholder="..." disabled />
      </div>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 320 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <FlowbiteTextarea label="Message" placeholder="Write your message..." />
        <FlowbiteTextarea label="With helper" placeholder="..." helperText="Max 500 characters." />
        <FlowbiteTextarea label="With error" placeholder="..." error="This field is required." />
        <FlowbiteTextarea label="Disabled" placeholder="..." disabled />
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
      title="Textarea — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: <NeobrutalismTextarea label="Message" placeholder="Write something..." rows={3} />,
        },
        {
          label: "Shadcn-inspired",
          designLanguage: "shadcn",
          children: <ShadcnTextarea label="Message" placeholder="Write something..." rows={3} />,
        },
        {
          label: "Flowbite-inspired",
          designLanguage: "flowbite",
          children: <FlowbiteTextarea label="Message" placeholder="Write something..." rows={3} />,
        },
      ]}
    />
  ),
  args: {},
};
