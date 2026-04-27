import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismButton from "./variants/NeobrutalismButton";
import ShadcnButton from "./variants/ShadcnButton";
import FlowbiteButton from "./variants/FlowbiteButton";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { ButtonProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Button",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button component implemented across three design languages. Each shares the same props interface.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "ghost", "outline"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Neobrutalism ---

export const Neobrutalism: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <NeobrutalismButton {...args} variant="primary">Primary</NeobrutalismButton>
        <NeobrutalismButton {...args} variant="secondary">Secondary</NeobrutalismButton>
        <NeobrutalismButton {...args} variant="destructive">Destructive</NeobrutalismButton>
        <NeobrutalismButton {...args} variant="ghost">Ghost</NeobrutalismButton>
        <NeobrutalismButton {...args} variant="outline">Outline</NeobrutalismButton>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <NeobrutalismButton {...args} size="sm">Small</NeobrutalismButton>
        <NeobrutalismButton {...args} size="md">Medium</NeobrutalismButton>
        <NeobrutalismButton {...args} size="lg">Large</NeobrutalismButton>
        <NeobrutalismButton {...args} disabled>Disabled</NeobrutalismButton>
      </div>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

// --- Shadcn ---

export const Shadcn: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <ShadcnButton {...args} variant="primary">Primary</ShadcnButton>
        <ShadcnButton {...args} variant="secondary">Secondary</ShadcnButton>
        <ShadcnButton {...args} variant="destructive">Destructive</ShadcnButton>
        <ShadcnButton {...args} variant="ghost">Ghost</ShadcnButton>
        <ShadcnButton {...args} variant="outline">Outline</ShadcnButton>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <ShadcnButton {...args} size="sm">Small</ShadcnButton>
        <ShadcnButton {...args} size="md">Medium</ShadcnButton>
        <ShadcnButton {...args} size="lg">Large</ShadcnButton>
        <ShadcnButton {...args} disabled>Disabled</ShadcnButton>
      </div>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

// --- Flowbite ---

export const Flowbite: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <FlowbiteButton {...args} variant="primary">Primary</FlowbiteButton>
        <FlowbiteButton {...args} variant="secondary">Secondary</FlowbiteButton>
        <FlowbiteButton {...args} variant="destructive">Destructive</FlowbiteButton>
        <FlowbiteButton {...args} variant="ghost">Ghost</FlowbiteButton>
        <FlowbiteButton {...args} variant="outline">Outline</FlowbiteButton>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <FlowbiteButton {...args} size="sm">Small</FlowbiteButton>
        <FlowbiteButton {...args} size="md">Medium</FlowbiteButton>
        <FlowbiteButton {...args} size="lg">Large</FlowbiteButton>
        <FlowbiteButton {...args} disabled>Disabled</FlowbiteButton>
      </div>
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

// --- Compare All ---

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Button — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <NeobrutalismButton variant="primary">Primary</NeobrutalismButton>
              <NeobrutalismButton variant="secondary">Secondary</NeobrutalismButton>
              <NeobrutalismButton variant="ghost">Ghost</NeobrutalismButton>
            </div>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <ShadcnButton variant="primary">Primary</ShadcnButton>
              <ShadcnButton variant="secondary">Secondary</ShadcnButton>
              <ShadcnButton variant="ghost">Ghost</ShadcnButton>
            </div>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <FlowbiteButton variant="primary">Primary</FlowbiteButton>
              <FlowbiteButton variant="secondary">Secondary</FlowbiteButton>
              <FlowbiteButton variant="ghost">Ghost</FlowbiteButton>
            </div>
          ),
        },
      ]}
    />
  ),
  args: {},
};
