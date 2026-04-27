"use client";
import { NeobrutalismTable, ShadcnTable, FlowbiteTable } from "@lib/components/Table";

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
