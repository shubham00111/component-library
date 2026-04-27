import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismRadioGroup from "./variants/NeobrutalismRadioGroup";
import ShadcnRadioGroup from "./variants/ShadcnRadioGroup";
import FlowbiteRadioGroup from "./variants/FlowbiteRadioGroup";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/RadioGroup",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <NeobrutalismRadioGroup name="nb-fruit" defaultValue="apple">
        <NeobrutalismRadioGroup.Item value="apple" label="Apple" />
        <NeobrutalismRadioGroup.Item value="banana" label="Banana" />
        <NeobrutalismRadioGroup.Item value="orange" label="Orange" />
        <NeobrutalismRadioGroup.Item value="grape" label="Grape (disabled)" disabled />
      </NeobrutalismRadioGroup>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ShadcnRadioGroup name="shadcn-fruit" defaultValue="apple">
        <ShadcnRadioGroup.Item value="apple" label="Apple" />
        <ShadcnRadioGroup.Item value="banana" label="Banana" />
        <ShadcnRadioGroup.Item value="orange" label="Orange" />
        <ShadcnRadioGroup.Item value="grape" label="Grape (disabled)" disabled />
      </ShadcnRadioGroup>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <FlowbiteRadioGroup name="fb-fruit" defaultValue="apple">
        <FlowbiteRadioGroup.Item value="apple" label="Apple" />
        <FlowbiteRadioGroup.Item value="banana" label="Banana" />
        <FlowbiteRadioGroup.Item value="orange" label="Orange" />
        <FlowbiteRadioGroup.Item value="grape" label="Grape (disabled)" disabled />
      </FlowbiteRadioGroup>
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="RadioGroup — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <NeobrutalismRadioGroup name="cmp-nb" defaultValue="yes">
              <NeobrutalismRadioGroup.Item value="yes" label="Yes" />
              <NeobrutalismRadioGroup.Item value="no" label="No" />
            </NeobrutalismRadioGroup>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <ShadcnRadioGroup name="cmp-shadcn" defaultValue="yes">
              <ShadcnRadioGroup.Item value="yes" label="Yes" />
              <ShadcnRadioGroup.Item value="no" label="No" />
            </ShadcnRadioGroup>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <FlowbiteRadioGroup name="cmp-fb" defaultValue="yes">
              <FlowbiteRadioGroup.Item value="yes" label="Yes" />
              <FlowbiteRadioGroup.Item value="no" label="No" />
            </FlowbiteRadioGroup>
          ),
        },
      ]}
    />
  ),
  args: {},
};
