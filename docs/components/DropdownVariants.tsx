"use client";

import NeobrutalismDropdown from "@lib/components/Dropdown/variants/NeobrutalismDropdown";
import ShadcnDropdown from "@lib/components/Dropdown/variants/ShadcnDropdown";
import FlowbiteDropdown from "@lib/components/Dropdown/variants/FlowbiteDropdown";

const options = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange" },
];

export function NeobrutalismDropdownPreview() {
  return (
    <NeobrutalismDropdown options={options} placeholder="Select a fruit">
      <NeobrutalismDropdown.Trigger />
      <NeobrutalismDropdown.Menu>
        {options.map((option, index) => (
          <NeobrutalismDropdown.Item key={option.id} option={option} index={index} />
        ))}
      </NeobrutalismDropdown.Menu>
    </NeobrutalismDropdown>
  );
}

export function ShadcnDropdownPreview() {
  return (
    <ShadcnDropdown options={options} placeholder="Select a fruit">
      <ShadcnDropdown.Trigger />
      <ShadcnDropdown.Menu>
        {options.map((option, index) => (
          <ShadcnDropdown.Item key={option.id} option={option} index={index} />
        ))}
      </ShadcnDropdown.Menu>
    </ShadcnDropdown>
  );
}

export function FlowbiteDropdownPreview() {
  return (
    <FlowbiteDropdown options={options} placeholder="Select a fruit">
      <FlowbiteDropdown.Trigger />
      <FlowbiteDropdown.Menu>
        {options.map((option, index) => (
          <FlowbiteDropdown.Item key={option.id} option={option} index={index} />
        ))}
      </FlowbiteDropdown.Menu>
    </FlowbiteDropdown>
  );
}
