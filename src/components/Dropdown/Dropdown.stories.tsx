import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const fruitOptions = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange" },
  { id: "4", label: "Mango", value: "mango" },
  { id: "5", label: "Strawberry", value: "strawberry" },
];

const countryOptions = [
  { id: "1", label: "United States", value: "us" },
  { id: "2", label: "Canada", value: "ca" },
  { id: "3", label: "Mexico", value: "mx" },
  { id: "4", label: "Brazil", value: "br" },
  { id: "5", label: "Argentina", value: "ar" },
];

const singleOption = [{ id: "1", label: "Only Option", value: "only" }];

/**
 * Basic Dropdown with default styling
 */
export const Default: Story = {
  args: {
    options: fruitOptions,
    children: null,
    disabled: false,
    placeholder: "Select a fruit",
  },
  render: ({ disabled, placeholder }) => (
    <div className="w-64">
      <Dropdown
        options={fruitOptions}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(option) => console.log("Selected:", option)}
      >
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {fruitOptions.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Dropdown with multiple options - Country selector
 */
export const CountrySelector: Story = {
  args: {
    options: countryOptions,
    children: null,
    placeholder: "Select a country",
  },
  render: ({ placeholder }) => (
    <div className="w-64">
      <label className="block text-sm font-medium mb-2">Select Country</label>
      <Dropdown options={countryOptions} placeholder={placeholder}>
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {countryOptions.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Dropdown with custom styling on Trigger
 */
export const CustomTriggerStyling: Story = {
  args: { options: fruitOptions, children: null, placeholder: "Pick a fruit" },
  render: ({ placeholder }) => (
    <div className="w-64">
      <Dropdown options={fruitOptions} placeholder={placeholder}>
        <Dropdown.Trigger className="bg-blue-500 text-white border-blue-600" />
        <Dropdown.Menu>
          {fruitOptions.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Dropdown with custom styling on Menu
 */
export const CustomMenuStyling: Story = {
  args: {
    options: fruitOptions,
    children: null,
    placeholder: "Select a fruit",
  },
  render: ({ placeholder }) => (
    <div className="w-64">
      <Dropdown options={fruitOptions} placeholder={placeholder}>
        <Dropdown.Trigger />
        <Dropdown.Menu className="bg-gray-50 border-blue-300">
          {fruitOptions.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Dropdown with custom Item styling
 */
export const CustomItemStyling: Story = {
  args: {
    options: fruitOptions,
    children: null,
    placeholder: "Select a fruit",
  },
  render: ({ placeholder }) => (
    <div className="w-64">
      <Dropdown options={fruitOptions} placeholder={placeholder}>
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {fruitOptions.map((option, index) => (
            <Dropdown.Item
              key={option.id}
              option={option}
              index={index}
              className="hover:bg-blue-100 text-blue-900"
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Dropdown with single option
 */
export const SingleOption: Story = {
  args: { options: singleOption, children: null, placeholder: "Select option" },
  render: ({ placeholder }) => (
    <div className="w-64">
      <Dropdown options={singleOption} placeholder={placeholder}>
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {singleOption.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Dropdown with many options
 */
export const ManyOptions: Story = {
  args: { options: [], children: null, placeholder: "Choose an option" },
  render: ({ placeholder }) => {
    const manyOptions = Array.from({ length: 20 }, (_, i) => ({
      id: String(i + 1),
      label: `Option ${i + 1}`,
      value: `option_${i + 1}`,
    }));
    return (
      <div className="w-64">
        <Dropdown options={manyOptions} placeholder={placeholder}>
          <Dropdown.Trigger />
          <Dropdown.Menu className="max-h-64 overflow-y-auto">
            {manyOptions.map((option, index) => (
              <Dropdown.Item key={option.id} option={option} index={index} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

/**
 * Dropdown with custom Item content
 */
export const CustomItemContent: Story = {
  args: {
    options: fruitOptions,
    children: null,
    placeholder: "Pick a fruit",
    disabled: false,
  },
  render: ({ placeholder, disabled }) => (
    <div className="w-64">
      <Dropdown
        options={fruitOptions}
        placeholder={placeholder}
        disabled={disabled}
      >
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {fruitOptions.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index}>
              <div className="flex items-center gap-2">
                <span className="text-xl">🍎</span>
                <span>{option.label}</span>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Dropdown with grouped options (demonstrating flexibility)
 */
export const GroupedOptions: Story = {
  args: {
    options: fruitOptions,
    children: null,
    placeholder: "Select fruit",
    disabled: false,
  },
  render: ({ placeholder, disabled }) => (
    <div className="w-64">
      <Dropdown
        options={fruitOptions}
        placeholder={placeholder}
        disabled={disabled}
      >
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {/* Group 1 */}
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
            Fruits
          </div>
          {fruitOptions.slice(0, 3).map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Dropdown with form integration example
 */
export const WithFormLabel: Story = {
  args: {
    options: countryOptions,
    children: null,
    placeholder: "Select a country",
    disabled: false,
  },
  render: ({ placeholder, disabled }) => (
    <div className="w-64">
      <div className="flex flex-col gap-2">
        <label htmlFor="dropdown" className="text-sm font-semibold">
          Choose your country
        </label>
        <Dropdown
          options={countryOptions}
          placeholder={placeholder}
          disabled={disabled}
        >
          <Dropdown.Trigger />
          <Dropdown.Menu>
            {countryOptions.map((option, index) => (
              <Dropdown.Item key={option.id} option={option} index={index} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <p className="text-xs text-gray-500">
          This is a helper text for the dropdown field
        </p>
      </div>
    </div>
  ),
};

/**
 * Dark theme Dropdown
 */
export const DarkTheme: Story = {
  args: {
    options: fruitOptions,
    children: null,
    placeholder: "Select fruit",
    disabled: false,
  },
  render: ({ placeholder, disabled }) => (
    <div className="w-64 bg-gray-900 p-6 rounded-lg">
      <Dropdown
        options={fruitOptions}
        placeholder={placeholder}
        disabled={disabled}
      >
        <Dropdown.Trigger className="bg-gray-800 border-gray-700 text-white" />
        <Dropdown.Menu className="bg-gray-800 border-gray-600">
          {fruitOptions.map((option, index) => (
            <Dropdown.Item
              key={option.id}
              option={option}
              index={index}
              className="text-white hover:bg-gray-700"
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Keyboard Navigation Demo
 * Use arrow keys to navigate, Enter to select, Escape to close
 */
export const KeyboardNavigation: Story = {
  args: {
    options: fruitOptions,
    children: null,
    placeholder: "Use arrow keys",
    disabled: false,
  },
  render: ({ placeholder, disabled }) => (
    <div className="w-64 space-y-4">
      <div className="p-4 bg-blue-50 rounded border border-blue-200">
        <p className="text-sm font-semibold text-blue-900 mb-2">
          Keyboard Controls:
        </p>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>
            • <kbd className="px-2 py-1 bg-white border rounded">Enter</kbd> -
            Open dropdown
          </li>
          <li>
            • <kbd className="px-2 py-1 bg-white border rounded">↑/↓</kbd> -
            Navigate options
          </li>
          <li>
            • <kbd className="px-2 py-1 bg-white border rounded">Enter</kbd> -
            Select option
          </li>
          <li>
            • <kbd className="px-2 py-1 bg-white border rounded">Escape</kbd> -
            Close dropdown
          </li>
        </ul>
      </div>
      <Dropdown
        options={fruitOptions}
        placeholder={placeholder}
        disabled={disabled}
      >
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {fruitOptions.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/**
 * Multiple Dropdowns on Same Page
 */
export const MultipleDropdowns: Story = {
  args: {
    options: fruitOptions,
    children: null,
    placeholder: "Select",
    disabled: false,
  },
  render: ({ placeholder, disabled }) => (
    <div className="flex gap-8">
      <div className="w-64">
        <label className="block text-sm font-medium mb-2">Fruits</label>
        <Dropdown
          options={fruitOptions}
          placeholder={placeholder}
          disabled={disabled}
        >
          <Dropdown.Trigger />
          <Dropdown.Menu>
            {fruitOptions.map((option, index) => (
              <Dropdown.Item key={option.id} option={option} index={index} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="w-64">
        <label className="block text-sm font-medium mb-2">Countries</label>
        <Dropdown
          options={countryOptions}
          placeholder={placeholder}
          disabled={disabled}
        >
          <Dropdown.Trigger />
          <Dropdown.Menu>
            {countryOptions.map((option, index) => (
              <Dropdown.Item key={option.id} option={option} index={index} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  ),
};

/**
 * Disabled Dropdown
 */
export const Disabled: Story = {
  args: {
    options: fruitOptions,
    children: null,
    placeholder: "Disabled dropdown",
    disabled: true,
  },
  render: ({ placeholder, disabled }) => (
    <div className="w-64">
      <Dropdown
        options={fruitOptions}
        placeholder={placeholder}
        disabled={disabled}
      >
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {fruitOptions.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};
