import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismTable from "./variants/NeobrutalismTable";
import ShadcnTable from "./variants/ShadcnTable";
import FlowbiteTable from "./variants/FlowbiteTable";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { TableProps } from "./types";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

const meta = {
  title: "Components/Table",
  parameters: { layout: "padded" },
} satisfies Meta<TableProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "role", label: "Role", sortable: true },
  { key: "status", label: "Status" },
];

const data = [
  { name: "Alice", role: "Engineer", status: "Active" },
  { name: "Bob", role: "Designer", status: "Inactive" },
  { name: "Carol", role: "Manager", status: "Active" },
];

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <NeobrutalismTable columns={columns} data={data} />
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
  args: { columns, data },
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ShadcnTable columns={columns} data={data} />
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
  args: { columns, data },
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <FlowbiteTable columns={columns} data={data} />
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
  args: { columns, data },
};

export const CompareAll: Story = {
  render: () => (
    <VariantShowcase
      title="Table — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: <NeobrutalismTable columns={columns} data={data} />,
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: <ShadcnTable columns={columns} data={data} />,
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: <FlowbiteTable columns={columns} data={data} />,
        },
      ]}
    />
  ),
  args: { columns, data },
};
