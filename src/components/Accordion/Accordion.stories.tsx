import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic Accordion - Simple accordion with one item
 *
 * Shows the most basic usage of the Accordion component.
 * Click the title to toggle the content.
 */
export const Basic: Story = {
  args: { children: null },
  render: () => (
    <Accordion className="w-96">
      <Accordion.Item>
        <Accordion.Title>What is React?</Accordion.Title>
        <Accordion.Description>
          React is a JavaScript library for building user interfaces with
          reusable components.
        </Accordion.Description>
      </Accordion.Item>
    </Accordion>
  ),
};

/**
 * Multiple Items - Accordion with multiple collapsible sections
 *
 * Each item can be opened independently. Click any title to expand/collapse.
 */
export const MultipleItems: Story = {
  args: { children: null },
  render: () => (
    <Accordion className="w-96">
      <Accordion.Item>
        <Accordion.Title>What is React?</Accordion.Title>
        <Accordion.Description>
          React is a JavaScript library for building user interfaces with
          reusable components and efficient rendering.
        </Accordion.Description>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Title>What is TypeScript?</Accordion.Title>
        <Accordion.Description>
          TypeScript is a typed superset of JavaScript that compiles to plain
          JavaScript, providing better tooling and type safety.
        </Accordion.Description>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Title>What is Tailwind CSS?</Accordion.Title>
        <Accordion.Description>
          Tailwind CSS is a utility-first CSS framework for rapidly building
          custom designs.
        </Accordion.Description>
      </Accordion.Item>
    </Accordion>
  ),
};

/**
 * Default Open - Accordion item open by default
 *
 * Use the `defaultOpen` prop to set an item open initially.
 */
export const DefaultOpen: Story = {
  args: { children: null },
  render: () => (
    <Accordion className="w-96">
      <Accordion.Item defaultOpen>
        <Accordion.Title>How do I get started with React?</Accordion.Title>
        <Accordion.Description>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Install Node.js and npm</li>
            <li>Create a new React app with Create React App or Vite</li>
            <li>Learn the basics of JSX and components</li>
            <li>Build your first component</li>
            <li>Explore state and props management</li>
          </ol>
        </Accordion.Description>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Title>What are React Hooks?</Accordion.Title>
        <Accordion.Description>
          Hooks are functions that let you use state and other React features in
          functional components. Common hooks include useState, useEffect, and
          useContext.
        </Accordion.Description>
      </Accordion.Item>
    </Accordion>
  ),
};

/**
 * Disabled Item - Accordion item that cannot be toggled
 *
 * Use the `disabled` prop to prevent an item from being opened.
 */
export const DisabledItem: Story = {
  args: { children: null },
  render: () => (
    <Accordion className="w-96">
      <Accordion.Item>
        <Accordion.Title>Available Question</Accordion.Title>
        <Accordion.Description>
          This item can be opened and closed normally.
        </Accordion.Description>
      </Accordion.Item>

      <Accordion.Item disabled>
        <Accordion.Title>Disabled Question (Coming Soon)</Accordion.Title>
        <Accordion.Description>
          This content is not available yet.
        </Accordion.Description>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Title>Another Available Question</Accordion.Title>
        <Accordion.Description>
          This item is also available to view.
        </Accordion.Description>
      </Accordion.Item>
    </Accordion>
  ),
};

/**
 * FAQ Section - Real-world example with FAQ content
 *
 * Styled as a typical FAQ section for a product or service.
 */
export const FAQSection: Story = {
  args: { children: null },
  render: () => (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about our service
        </p>
      </div>

      <Accordion className="space-y-3">
        <Accordion.Item defaultOpen>
          <Accordion.Title>How do I create an account?</Accordion.Title>
          <Accordion.Description>
            To create an account, click the "Sign Up" button on our homepage,
            enter your email address, create a password, and follow the
            verification steps.
          </Accordion.Description>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>What payment methods do you accept?</Accordion.Title>
          <Accordion.Description>
            We accept all major credit cards (Visa, Mastercard, American
            Express), PayPal, and bank transfers for enterprise customers.
          </Accordion.Description>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>Can I upgrade or downgrade my plan?</Accordion.Title>
          <Accordion.Description>
            Yes! You can change your plan at any time from your account
            settings. Changes take effect immediately, and we'll prorate any
            charges or credits.
          </Accordion.Description>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>What is your refund policy?</Accordion.Title>
          <Accordion.Description>
            We offer a 30-day money-back guarantee for all new subscriptions. If
            you're not satisfied, simply contact our support team for a full
            refund.
          </Accordion.Description>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>How can I contact support?</Accordion.Title>
          <Accordion.Description>
            Our support team is available 24/7 via email (support@example.com),
            live chat on our website, or phone during business hours.
          </Accordion.Description>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

/**
 * With Toggle Callback - Accordion with onChange callback
 *
 * Demonstrates how to track when items are toggled.
 */
export const WithCallback: Story = {
  args: { children: null },
  render: () => {
    const handleToggle = (title: string, isOpen: boolean) => {
      console.log(`${title} is now ${isOpen ? "open" : "closed"}`);
    };

    return (
      <Accordion className="w-96">
        <Accordion.Item onToggle={(isOpen) => handleToggle("Item 1", isOpen)}>
          <Accordion.Title>Track This</Accordion.Title>
          <Accordion.Description>
            Open the browser console to see when this item is toggled. Check the
            console output for logs.
          </Accordion.Description>
        </Accordion.Item>

        <Accordion.Item onToggle={(isOpen) => handleToggle("Item 2", isOpen)}>
          <Accordion.Title>Track This Too</Accordion.Title>
          <Accordion.Description>
            This item also logs to the console when toggled.
          </Accordion.Description>
        </Accordion.Item>
      </Accordion>
    );
  },
};
