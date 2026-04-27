import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import NeobrutalismAccordion from "./variants/NeobrutalismAccordion";
import ShadcnAccordion from "./variants/ShadcnAccordion";
import FlowbiteAccordion from "./variants/FlowbiteAccordion";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import { neobrutalismJsx, shadcnJsx, flowbiteJsx } from "./snippets";

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

export const Neobrutalism: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 360 }}>
      <NeobrutalismAccordion>
        <NeobrutalismAccordion.Item defaultOpen>
          <NeobrutalismAccordion.Title>What is Neobrutalism?</NeobrutalismAccordion.Title>
          <NeobrutalismAccordion.Description>
            A bold design language with thick borders, flat shadows, and high contrast.
          </NeobrutalismAccordion.Description>
        </NeobrutalismAccordion.Item>
        <NeobrutalismAccordion.Item>
          <NeobrutalismAccordion.Title>How does it work?</NeobrutalismAccordion.Title>
          <NeobrutalismAccordion.Description>
            Each item manages its own open/close state with React useState.
          </NeobrutalismAccordion.Description>
        </NeobrutalismAccordion.Item>
        <NeobrutalismAccordion.Item disabled>
          <NeobrutalismAccordion.Title>Disabled Item</NeobrutalismAccordion.Title>
          <NeobrutalismAccordion.Description>Hidden.</NeobrutalismAccordion.Description>
        </NeobrutalismAccordion.Item>
      </NeobrutalismAccordion>
      <CodeSnippet react={neobrutalismJsx} defaultTab="react" title="Neobrutalism — JSX / Tailwind" />
    </div>
  ),
};

export const Shadcn: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 360 }}>
      <ShadcnAccordion>
        <ShadcnAccordion.Item defaultOpen>
          <ShadcnAccordion.Title>Is it accessible?</ShadcnAccordion.Title>
          <ShadcnAccordion.Description>
            Yes. Each button has proper aria-expanded and keyboard support.
          </ShadcnAccordion.Description>
        </ShadcnAccordion.Item>
        <ShadcnAccordion.Item>
          <ShadcnAccordion.Title>Can I use it in Next.js?</ShadcnAccordion.Title>
          <ShadcnAccordion.Description>
            Absolutely. Add "use client" and import directly.
          </ShadcnAccordion.Description>
        </ShadcnAccordion.Item>
        <ShadcnAccordion.Item disabled>
          <ShadcnAccordion.Title>Disabled Item</ShadcnAccordion.Title>
          <ShadcnAccordion.Description>Hidden.</ShadcnAccordion.Description>
        </ShadcnAccordion.Item>
      </ShadcnAccordion>
      <CodeSnippet react={shadcnJsx} defaultTab="react" title="Shadcn — JSX / Tailwind" />
    </div>
  ),
};

export const Flowbite: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 360 }}>
      <FlowbiteAccordion>
        <FlowbiteAccordion.Item defaultOpen>
          <FlowbiteAccordion.Title>What is Flowbite?</FlowbiteAccordion.Title>
          <FlowbiteAccordion.Description>
            A design system built on Tailwind CSS with clean, accessible UI components.
          </FlowbiteAccordion.Description>
        </FlowbiteAccordion.Item>
        <FlowbiteAccordion.Item>
          <FlowbiteAccordion.Title>How do I customize it?</FlowbiteAccordion.Title>
          <FlowbiteAccordion.Description>
            Override Tailwind classes via className props or extend the component.
          </FlowbiteAccordion.Description>
        </FlowbiteAccordion.Item>
        <FlowbiteAccordion.Item disabled>
          <FlowbiteAccordion.Title>Disabled Item</FlowbiteAccordion.Title>
          <FlowbiteAccordion.Description>Hidden.</FlowbiteAccordion.Description>
        </FlowbiteAccordion.Item>
      </FlowbiteAccordion>
      <CodeSnippet react={flowbiteJsx} defaultTab="react" title="Flowbite — JSX / Tailwind" />
    </div>
  ),
};

export const CompareAll: Story = {
  args: { children: null },
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Accordion — all design languages"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <NeobrutalismAccordion>
              <NeobrutalismAccordion.Item defaultOpen>
                <NeobrutalismAccordion.Title>Bold & Flat</NeobrutalismAccordion.Title>
                <NeobrutalismAccordion.Description>Thick borders, yellow hover, flat shadow.</NeobrutalismAccordion.Description>
              </NeobrutalismAccordion.Item>
              <NeobrutalismAccordion.Item>
                <NeobrutalismAccordion.Title>Another Item</NeobrutalismAccordion.Title>
                <NeobrutalismAccordion.Description>Click to expand.</NeobrutalismAccordion.Description>
              </NeobrutalismAccordion.Item>
            </NeobrutalismAccordion>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <ShadcnAccordion>
              <ShadcnAccordion.Item defaultOpen>
                <ShadcnAccordion.Title>Clean & Minimal</ShadcnAccordion.Title>
                <ShadcnAccordion.Description>Zinc border, underline hover, soft look.</ShadcnAccordion.Description>
              </ShadcnAccordion.Item>
              <ShadcnAccordion.Item>
                <ShadcnAccordion.Title>Another Item</ShadcnAccordion.Title>
                <ShadcnAccordion.Description>Click to expand.</ShadcnAccordion.Description>
              </ShadcnAccordion.Item>
            </ShadcnAccordion>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <FlowbiteAccordion>
              <FlowbiteAccordion.Item defaultOpen>
                <FlowbiteAccordion.Title>Light & Accessible</FlowbiteAccordion.Title>
                <FlowbiteAccordion.Description>Gray border, soft shadow, gray-50 panel.</FlowbiteAccordion.Description>
              </FlowbiteAccordion.Item>
              <FlowbiteAccordion.Item>
                <FlowbiteAccordion.Title>Another Item</FlowbiteAccordion.Title>
                <FlowbiteAccordion.Description>Click to expand.</FlowbiteAccordion.Description>
              </FlowbiteAccordion.Item>
            </FlowbiteAccordion>
          ),
        },
      ]}
    />
  ),
};
