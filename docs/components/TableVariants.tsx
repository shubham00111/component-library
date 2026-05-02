"use client";
import { NeobrutalismTable, ShadcnTable, FlowbiteTable, GlassmorphismTable, Md3Table, NmTable } from "@lib/components/Table";

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

export function NeobrutalismTablePreview() {
  return <NeobrutalismTable columns={columns} data={data} />;
}

export function ShadcnTablePreview() {
  return <ShadcnTable columns={columns} data={data} />;
}

export function FlowbiteTablePreview() {
  return <FlowbiteTable columns={columns} data={data} />;
}

export function GlassmorphismTablePreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismTable columns={columns} data={data} />
    </div>
  );
}

export function Md3TablePreview() {
  return <Md3Table columns={columns} data={data} />;
}

export function NmTablePreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmTable columns={columns} data={data} />
    </div>
  );
}
