import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismBreadcrumb from "./variants/NeobrutalismBreadcrumb";
import ShadcnBreadcrumb from "./variants/ShadcnBreadcrumb";
import FlowbiteBreadcrumb from "./variants/FlowbiteBreadcrumb";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { BreadcrumbProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Breadcrumb",
  parameters: { layout: "centered" },
} satisfies Meta<BreadcrumbProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <NeobrutalismBreadcrumb>
        <NeobrutalismBreadcrumb.Item label="Home" href="/" />
        <NeobrutalismBreadcrumb.Item label="Components" href="/components" />
        <NeobrutalismBreadcrumb.Item label="Button" />
      </NeobrutalismBreadcrumb>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ShadcnBreadcrumb>
        <ShadcnBreadcrumb.Item label="Home" href="/" />
        <ShadcnBreadcrumb.Item label="Components" href="/components" />
        <ShadcnBreadcrumb.Item label="Button" />
      </ShadcnBreadcrumb>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <FlowbiteBreadcrumb>
        <FlowbiteBreadcrumb.Item label="Home" href="/" />
        <FlowbiteBreadcrumb.Item label="Components" href="/components" />
        <FlowbiteBreadcrumb.Item label="Button" />
      </FlowbiteBreadcrumb>
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: {},
};

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Breadcrumb — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <NeobrutalismBreadcrumb>
              <NeobrutalismBreadcrumb.Item label="Home" href="/" />
              <NeobrutalismBreadcrumb.Item label="Components" href="/components" />
              <NeobrutalismBreadcrumb.Item label="Button" />
            </NeobrutalismBreadcrumb>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <ShadcnBreadcrumb>
              <ShadcnBreadcrumb.Item label="Home" href="/" />
              <ShadcnBreadcrumb.Item label="Components" href="/components" />
              <ShadcnBreadcrumb.Item label="Button" />
            </ShadcnBreadcrumb>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <FlowbiteBreadcrumb>
              <FlowbiteBreadcrumb.Item label="Home" href="/" />
              <FlowbiteBreadcrumb.Item label="Components" href="/components" />
              <FlowbiteBreadcrumb.Item label="Button" />
            </FlowbiteBreadcrumb>
          ),
        },
      ]}
    />
  ),
  args: {},
};
