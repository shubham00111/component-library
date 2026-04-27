import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismCard from "./variants/NeobrutalismCard";
import ShadcnCard from "./variants/ShadcnCard";
import FlowbiteCard from "./variants/FlowbiteCard";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { CardProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Card",
  parameters: { layout: "centered" },
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCard = {
  title: "Card Title",
  description: "A brief description of the card content goes here.",
};

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 300 }}>
      <NeobrutalismCard {...sampleCard} footer={<span>Footer action</span>} />
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 300 }}>
      <ShadcnCard {...sampleCard} footer={<span>Footer action</span>} />
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 300 }}>
      <FlowbiteCard {...sampleCard} footer={<span>Footer action</span>} />
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Card — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: <NeobrutalismCard {...sampleCard} />,
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: <ShadcnCard {...sampleCard} />,
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: <FlowbiteCard {...sampleCard} />,
        },
      ]}
    />
  ),
  args: {},
};
