import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismBadge from "./variants/NeobrutalismBadge";
import ShadcnBadge from "./variants/ShadcnBadge";
import FlowbiteBadge from "./variants/FlowbiteBadge";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { BadgeProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Badge",
  parameters: { layout: "centered" },
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS = ["default", "success", "warning", "destructive", "outline"] as const;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {VARIANTS.map((v) => (
          <NeobrutalismBadge key={v} variant={v}>{v}</NeobrutalismBadge>
        ))}
      </div>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {VARIANTS.map((v) => (
          <ShadcnBadge key={v} variant={v}>{v}</ShadcnBadge>
        ))}
      </div>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {VARIANTS.map((v) => (
          <FlowbiteBadge key={v} variant={v}>{v}</FlowbiteBadge>
        ))}
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
      title="Badge — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {VARIANTS.map((v) => <NeobrutalismBadge key={v} variant={v}>{v}</NeobrutalismBadge>)}
            </div>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {VARIANTS.map((v) => <ShadcnBadge key={v} variant={v}>{v}</ShadcnBadge>)}
            </div>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {VARIANTS.map((v) => <FlowbiteBadge key={v} variant={v}>{v}</FlowbiteBadge>)}
            </div>
          ),
        },
      ]}
    />
  ),
  args: {},
};
