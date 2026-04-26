"use client";

import Dropdown from "@lib/components/Dropdown/Dropdown";

const OPTIONS = [
  { id: "1", label: "Neobrutalism", value: "neobrutalism" },
  { id: "2", label: "Shadcn-inspired", value: "shadcn" },
  { id: "3", label: "Flowbite-inspired", value: "flowbite" },
];

export function DropdownDemo() {
  return (
    <div style={{ padding: "24px", display: "flex", justifyContent: "center", minHeight: "200px" }}>
      <Dropdown
        options={OPTIONS}
        placeholder="Select a design language"
        onChange={(option) => console.log("selected:", option)}
      >
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {OPTIONS.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
