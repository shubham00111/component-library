import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismInput from "./variants/NeobrutalismInput";
import ShadcnInput from "./variants/ShadcnInput";
import FlowbiteInput from "./variants/FlowbiteInput";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { InputProps } from "./types";

import nbHtml from "./snippets/neobrutalism.html?raw";
import nbCss from "./snippets/neobrutalism.css?raw";
import shadcnHtml from "./snippets/shadcn.html?raw";
import shadcnCss from "./snippets/shadcn.css?raw";
import fbHtml from "./snippets/flowbite.html?raw";
import fbCss from "./snippets/flowbite.css?raw";

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
      <CodeSnippet html={nbHtml} css={nbCss} defaultTab="html" title="Neobrutalism — HTML/CSS snippet" />
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
      <CodeSnippet html={shadcnHtml} css={shadcnCss} defaultTab="html" title="Shadcn — HTML/CSS snippet" />
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
      <CodeSnippet html={fbHtml} css={fbCss} defaultTab="html" title="Flowbite — HTML/CSS snippet" />
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
