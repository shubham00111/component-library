import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismCard from "./variants/NeobrutalismCard";
import ShadcnCard from "./variants/ShadcnCard";
import FlowbiteCard from "./variants/FlowbiteCard";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { CardProps } from "./types";

import nbHtml from "./snippets/neobrutalism.html?raw";
import nbCss from "./snippets/neobrutalism.css?raw";
import shadcnHtml from "./snippets/shadcn.html?raw";
import shadcnCss from "./snippets/shadcn.css?raw";
import fbHtml from "./snippets/flowbite.html?raw";
import fbCss from "./snippets/flowbite.css?raw";

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
      <CodeSnippet html={nbHtml} css={nbCss} defaultTab="html" title="Neobrutalism — HTML/CSS snippet" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 300 }}>
      <ShadcnCard {...sampleCard} footer={<span>Footer action</span>} />
      <CodeSnippet html={shadcnHtml} css={shadcnCss} defaultTab="html" title="Shadcn — HTML/CSS snippet" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 300 }}>
      <FlowbiteCard {...sampleCard} footer={<span>Footer action</span>} />
      <CodeSnippet html={fbHtml} css={fbCss} defaultTab="html" title="Flowbite — HTML/CSS snippet" />
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
