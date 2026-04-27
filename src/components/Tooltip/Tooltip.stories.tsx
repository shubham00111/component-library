import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismTooltip from "./variants/NeobrutalismTooltip";
import ShadcnTooltip from "./variants/ShadcnTooltip";
import FlowbiteTooltip from "./variants/FlowbiteTooltip";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { TooltipProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Tooltip",
  parameters: { layout: "centered" },
} satisfies Meta<TooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
        <NeobrutalismTooltip content="Top tooltip" placement="top">
          <button style={{ padding: "8px 16px", border: "2px solid black", fontWeight: "bold", background: "white" }}>Top</button>
        </NeobrutalismTooltip>
        <NeobrutalismTooltip content="Bottom tooltip" placement="bottom">
          <button style={{ padding: "8px 16px", border: "2px solid black", fontWeight: "bold", background: "white" }}>Bottom</button>
        </NeobrutalismTooltip>
        <NeobrutalismTooltip content="Left tooltip" placement="left">
          <button style={{ padding: "8px 16px", border: "2px solid black", fontWeight: "bold", background: "white" }}>Left</button>
        </NeobrutalismTooltip>
        <NeobrutalismTooltip content="Right tooltip" placement="right">
          <button style={{ padding: "8px 16px", border: "2px solid black", fontWeight: "bold", background: "white" }}>Right</button>
        </NeobrutalismTooltip>
      </div>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: { content: "Tooltip", children: null },
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
        <ShadcnTooltip content="Top tooltip" placement="top">
          <button style={{ padding: "8px 16px", border: "1px solid #e4e4e7", borderRadius: 6, fontWeight: 500, background: "white" }}>Top</button>
        </ShadcnTooltip>
        <ShadcnTooltip content="Bottom tooltip" placement="bottom">
          <button style={{ padding: "8px 16px", border: "1px solid #e4e4e7", borderRadius: 6, fontWeight: 500, background: "white" }}>Bottom</button>
        </ShadcnTooltip>
        <ShadcnTooltip content="Left tooltip" placement="left">
          <button style={{ padding: "8px 16px", border: "1px solid #e4e4e7", borderRadius: 6, fontWeight: 500, background: "white" }}>Left</button>
        </ShadcnTooltip>
        <ShadcnTooltip content="Right tooltip" placement="right">
          <button style={{ padding: "8px 16px", border: "1px solid #e4e4e7", borderRadius: 6, fontWeight: 500, background: "white" }}>Right</button>
        </ShadcnTooltip>
      </div>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: { content: "Tooltip", children: null },
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
        <FlowbiteTooltip content="Top tooltip" placement="top">
          <button style={{ padding: "8px 16px", background: "#1c64f2", color: "white", border: "none", borderRadius: 8, fontWeight: 500 }}>Top</button>
        </FlowbiteTooltip>
        <FlowbiteTooltip content="Bottom tooltip" placement="bottom">
          <button style={{ padding: "8px 16px", background: "#1c64f2", color: "white", border: "none", borderRadius: 8, fontWeight: 500 }}>Bottom</button>
        </FlowbiteTooltip>
        <FlowbiteTooltip content="Left tooltip" placement="left">
          <button style={{ padding: "8px 16px", background: "#1c64f2", color: "white", border: "none", borderRadius: 8, fontWeight: 500 }}>Left</button>
        </FlowbiteTooltip>
        <FlowbiteTooltip content="Right tooltip" placement="right">
          <button style={{ padding: "8px 16px", background: "#1c64f2", color: "white", border: "none", borderRadius: 8, fontWeight: 500 }}>Right</button>
        </FlowbiteTooltip>
      </div>
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: { content: "Tooltip", children: null },
};

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Tooltip — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <div style={{ display: "flex", gap: 16, padding: 16 }}>
              <NeobrutalismTooltip content="Neobrutalism tooltip" placement="top">
                <button style={{ padding: "8px 16px", border: "2px solid black", fontWeight: "bold", background: "white" }}>Hover me</button>
              </NeobrutalismTooltip>
            </div>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <div style={{ display: "flex", gap: 16, padding: 16 }}>
              <ShadcnTooltip content="Shadcn tooltip" placement="top">
                <button style={{ padding: "8px 16px", border: "1px solid #e4e4e7", borderRadius: 6, fontWeight: 500, background: "white" }}>Hover me</button>
              </ShadcnTooltip>
            </div>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <div style={{ display: "flex", gap: 16, padding: 16 }}>
              <FlowbiteTooltip content="Flowbite tooltip" placement="top">
                <button style={{ padding: "8px 16px", background: "#1c64f2", color: "white", border: "none", borderRadius: 8, fontWeight: 500 }}>Hover me</button>
              </FlowbiteTooltip>
            </div>
          ),
        },
      ]}
    />
  ),
  args: { content: "Tooltip", children: null },
};
