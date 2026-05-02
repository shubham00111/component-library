"use client";

import NeobrutalismDropdown from "@lib/components/Dropdown/variants/NeobrutalismDropdown";
import ShadcnDropdown from "@lib/components/Dropdown/variants/ShadcnDropdown";
import FlowbiteDropdown from "@lib/components/Dropdown/variants/FlowbiteDropdown";
import GlassmorphismDropdown from "@lib/components/Dropdown/variants/GlassmorphismDropdown";
import Md3Dropdown from "@lib/components/Dropdown/variants/Md3Dropdown";
import NmDropdown from "@lib/components/Dropdown/variants/NmDropdown";

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

export function GlassmorphismDropdownPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismDropdown options={options} placeholder="Select a fruit">
        <GlassmorphismDropdown.Trigger />
        <GlassmorphismDropdown.Menu>
          {options.map((option, index) => (
            <GlassmorphismDropdown.Item key={option.id} option={option} index={index} />
          ))}
        </GlassmorphismDropdown.Menu>
      </GlassmorphismDropdown>
    </div>
  );
}

export function Md3DropdownPreview() {
  return (
    <Md3Dropdown options={options} placeholder="Select a fruit">
      <Md3Dropdown.Trigger />
      <Md3Dropdown.Menu>
        {options.map((option, index) => (
          <Md3Dropdown.Item key={option.id} option={option} index={index} />
        ))}
      </Md3Dropdown.Menu>
    </Md3Dropdown>
  );
}

export function NmDropdownPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmDropdown options={options} placeholder="Select a fruit">
        <NmDropdown.Trigger />
        <NmDropdown.Menu>
          {options.map((option, index) => (
            <NmDropdown.Item key={option.id} option={option} index={index} />
          ))}
        </NmDropdown.Menu>
      </NmDropdown>
    </div>
  );
}
