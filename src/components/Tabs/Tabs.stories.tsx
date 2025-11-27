import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import Tabs from "./Tabs";
import type { TabItem } from "./types";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default items for basic stories
const basicItems: TabItem[] = [
  {
    id: "1",
    label: "Overview",
    content: (
      <div>
        <h2 className="mb-2 text-lg font-semibold">Overview</h2>
        <p>
          This is the overview content with some information about the
          component.
        </p>
      </div>
    ),
  },
  {
    id: "2",
    label: "Features",
    content: (
      <div>
        <h2 className="mb-2 text-lg font-semibold">Features</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Feature 1: Highly customizable</li>
          <li>Feature 2: Responsive design</li>
          <li>Feature 3: Accessible</li>
        </ul>
      </div>
    ),
  },
  {
    id: "3",
    label: "Documentation",
    content: (
      <div>
        <h2 className="mb-2 text-lg font-semibold">Documentation</h2>
        <p className="mb-2">
          Read the full documentation to learn how to use this component
          effectively.
        </p>
        <code className="rounded bg-neutral-100 px-2 py-1 dark:bg-neutral-800">
          npm install component-library
        </code>
      </div>
    ),
  },
];

// Extended items with disabled state
const itemsWithDisabled: TabItem[] = [
  ...basicItems,
  {
    id: "4",
    label: "Settings",
    content: (
      <div>
        <h2 className="mb-2 text-lg font-semibold">Settings</h2>
        <p>Configure your preferences here.</p>
      </div>
    ),
    disabled: true,
  },
  {
    id: "5",
    label: "About",
    content: (
      <div>
        <h2 className="mb-2 text-lg font-semibold">About</h2>
        <p>Version 1.0.0 - Built with React and TypeScript</p>
      </div>
    ),
  },
];

// Simple tabs with minimal content
const simpleItems: TabItem[] = [
  {
    id: "1",
    label: "Tab 1",
    content: <p>Content for Tab 1</p>,
  },
  {
    id: "2",
    label: "Tab 2",
    content: <p>Content for Tab 2</p>,
  },
  {
    id: "3",
    label: "Tab 3",
    content: <p>Content for Tab 3</p>,
  },
];

// Tabs with rich content
const richContentItems: TabItem[] = [
  {
    id: "1",
    label: "Profile",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="mb-1 font-semibold">Personal Information</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Name: John Doe
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Email: john.doe@example.com
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Location: New York, USA
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "2",
    label: "Activity",
    content: (
      <div className="space-y-2">
        <h3 className="font-semibold">Recent Activity</h3>
        <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
          <p>✓ Completed profile setup</p>
          <p>✓ Added profile picture</p>
          <p>✓ Connected social accounts</p>
          <p>⏳ Pending email verification</p>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    label: "Stats",
    content: (
      <div className="space-y-2">
        <h3 className="font-semibold">Statistics</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-neutral-600 dark:text-neutral-400">Projects</p>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div>
            <p className="text-neutral-600 dark:text-neutral-400">Tasks</p>
            <p className="text-2xl font-bold">47</p>
          </div>
          <div>
            <p className="text-neutral-600 dark:text-neutral-400">Completed</p>
            <p className="text-2xl font-bold">89%</p>
          </div>
          <div>
            <p className="text-neutral-600 dark:text-neutral-400">Team Size</p>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>
      </div>
    ),
  },
];

// Tabs with long labels
const longLabelItems: TabItem[] = [
  {
    id: "1",
    label: "Getting Started Guide",
    content: <p>Learn how to get started with our component library.</p>,
  },
  {
    id: "2",
    label: "Advanced Configuration",
    content: <p>Explore advanced configuration options and customization.</p>,
  },
  {
    id: "3",
    label: "API Reference Documentation",
    content: <p>Complete API reference for all components.</p>,
  },
];

// Many tabs
const manyTabs: TabItem[] = [
  { id: "1", label: "Home", content: <p>Home content</p> },
  { id: "2", label: "Products", content: <p>Products content</p> },
  { id: "3", label: "Services", content: <p>Services content</p> },
  { id: "4", label: "About", content: <p>About content</p> },
  { id: "5", label: "Contact", content: <p>Contact content</p> },
  { id: "6", label: "Blog", content: <p>Blog content</p> },
  { id: "7", label: "Careers", content: <p>Careers content</p> },
  { id: "8", label: "Support", content: <p>Support content</p> },
];

// Stories
export const Default: Story = {
  args: {
    items: basicItems,
    value: basicItems[0],
  },
};

export const Simple: Story = {
  args: {
    items: simpleItems,
    value: simpleItems[0],
  },
};

export const WithDisabledTab: Story = {
  args: {
    items: itemsWithDisabled,
    value: itemsWithDisabled[0],
  },
};

export const RichContent: Story = {
  args: {
    items: richContentItems,
    value: richContentItems[0],
  },
};

export const LongLabels: Story = {
  args: {
    items: longLabelItems,
    value: longLabelItems[0],
  },
};

export const ManyTabs: Story = {
  args: {
    items: manyTabs,
    value: manyTabs[0],
  },
};

export const TwoTabs: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "First",
        content: <p>First tab content</p>,
      },
      {
        id: "2",
        label: "Second",
        content: <p>Second tab content</p>,
      },
    ],
    value: {
      id: "1",
      label: "First",
      content: <p>First tab content</p>,
    },
  },
};

export const SingleTab: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "Only Tab",
        content: <p>This is the only tab available</p>,
      },
    ],
    value: {
      id: "1",
      label: "Only Tab",
      content: <p>This is the only tab available</p>,
    },
  },
};

export const NoContent: Story = {
  args: {
    items: [
      { id: "1", label: "Empty Tab 1" },
      { id: "2", label: "Empty Tab 2" },
      { id: "3", label: "Empty Tab 3" },
    ],
    value: { id: "1", label: "Empty Tab 1" },
  },
};

export const MixedContent: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "Short",
        content: <p>Brief content.</p>,
      },
      {
        id: "2",
        label: "Medium",
        content: (
          <div>
            <p>This tab has a moderate amount of content.</p>
            <p>
              It spans multiple paragraphs to show how the component handles
              varying content sizes.
            </p>
          </div>
        ),
      },
      {
        id: "3",
        label: "Long",
        content: (
          <div className="space-y-2">
            <p>
              This tab contains a lot of content to demonstrate how the tabs
              component handles longer content.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        ),
      },
    ],
    value: {
      id: "1",
      label: "Short",
      content: <p>Brief content.</p>,
    },
  },
};

export const AllDisabled: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "Disabled 1",
        content: <p>Content 1</p>,
        disabled: true,
      },
      {
        id: "2",
        label: "Disabled 2",
        content: <p>Content 2</p>,
        disabled: true,
      },
      {
        id: "3",
        label: "Disabled 3",
        content: <p>Content 3</p>,
        disabled: true,
      },
    ],
    value: {
      id: "1",
      label: "Disabled 1",
      content: <p>Content 1</p>,
      disabled: true,
    },
  },
};
