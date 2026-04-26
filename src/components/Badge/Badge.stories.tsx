import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismBadge from "./variants/NeobrutalismBadge";
import ShadcnBadge from "./variants/ShadcnBadge";
import FlowbiteBadge from "./variants/FlowbiteBadge";
import VariantShowcase from "../ui/VariantShowcase";
import type { BadgeProps } from "./types";

const meta = {
  title: "Components/Badge",
  parameters: { layout: "centered" },
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS = ["default", "success", "warning", "destructive", "outline"] as const;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {VARIANTS.map((v) => (
        <NeobrutalismBadge key={v} variant={v}>{v}</NeobrutalismBadge>
      ))}
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {VARIANTS.map((v) => (
        <ShadcnBadge key={v} variant={v}>{v}</ShadcnBadge>
      ))}
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {VARIANTS.map((v) => (
        <FlowbiteBadge key={v} variant={v}>{v}</FlowbiteBadge>
      ))}
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
