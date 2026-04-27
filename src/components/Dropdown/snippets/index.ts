export const neobrutalismJsx = `const options = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange" },
];

// NeobrutalismDropdown — bold border, yellow hover, flat shadow
<NeobrutalismDropdown options={options} placeholder="Select a fruit">
  <NeobrutalismDropdown.Trigger />
  <NeobrutalismDropdown.Menu>
    {options.map((option, index) => (
      <NeobrutalismDropdown.Item key={option.id} option={option} index={index} />
    ))}
  </NeobrutalismDropdown.Menu>
</NeobrutalismDropdown>

// Trigger styles: border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] font-bold bg-white hover:bg-yellow-400
// Menu styles:   border-[3px] border-black shadow-[4px_4px_0_#000] bg-white rounded-[2px]
// Item styles:   hover:bg-yellow-400 font-medium`;

export const shadcnJsx = `const options = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange" },
];

// ShadcnDropdown — zinc border, soft shadow, subtle hover
<ShadcnDropdown options={options} placeholder="Select a fruit">
  <ShadcnDropdown.Trigger />
  <ShadcnDropdown.Menu>
    {options.map((option, index) => (
      <ShadcnDropdown.Item key={option.id} option={option} index={index} />
    ))}
  </ShadcnDropdown.Menu>
</ShadcnDropdown>

// Trigger styles: border border-zinc-200 rounded-[6px] text-sm font-medium shadow-sm bg-white hover:bg-zinc-50
// Menu styles:   border border-zinc-200 rounded-[6px] shadow-md bg-white
// Item styles:   hover:bg-zinc-100 rounded-[4px]`;

export const flowbiteJsx = `const options = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange" },
];

// FlowbiteDropdown — gray border, rounded-lg, light hover
<FlowbiteDropdown options={options} placeholder="Select a fruit">
  <FlowbiteDropdown.Trigger />
  <FlowbiteDropdown.Menu>
    {options.map((option, index) => (
      <FlowbiteDropdown.Item key={option.id} option={option} index={index} />
    ))}
  </FlowbiteDropdown.Menu>
</FlowbiteDropdown>

// Trigger styles: border border-gray-200 rounded-lg text-sm font-medium shadow-sm bg-white hover:bg-gray-50
// Menu styles:   border border-gray-200 rounded-lg shadow-md bg-white
// Item styles:   hover:bg-gray-100`;
