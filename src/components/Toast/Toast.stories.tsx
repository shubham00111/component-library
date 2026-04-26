import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import NeobrutalismToast from "./variants/NeobrutalismToast";
import ShadcnToast from "./variants/ShadcnToast";
import FlowbiteToast from "./variants/FlowbiteToast";
import VariantShowcase from "../ui/VariantShowcase";
import CodeSnippet from "../ui/CodeSnippet";
import type { ToastProps } from "./types";

import nbHtml from "./snippets/neobrutalism.html?raw";
import nbCss from "./snippets/neobrutalism.css?raw";
import shadcnHtml from "./snippets/shadcn.html?raw";
import shadcnCss from "./snippets/shadcn.css?raw";
import fbHtml from "./snippets/flowbite.html?raw";
import fbCss from "./snippets/flowbite.css?raw";

const meta = {
  title: "Components/Toast",
  parameters: { layout: "centered" },
  argTypes: {
    iconType: { control: "select", options: ["success", "error", "warning", "info"] },
    position: { control: "select", options: ["top-left", "top-right", "bottom-left", "bottom-right"] },
  },
} satisfies Meta<ToastProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = ({
  Component,
}: {
  Component: React.ComponentType<ToastProps>;
}) => {
  const [key, setKey] = useState(0);
  return (
    <div style={{ position: "relative", height: 80, display: "flex", alignItems: "center", gap: 8 }}>
      <button
        onClick={() => setKey((k) => k + 1)}
        style={{ padding: "6px 12px", cursor: "pointer" }}
      >
        Show toast
      </button>
      <Component key={key} iconType="success" position="top-right" timer={3000}>
        Changes saved successfully!
      </Component>
    </div>
  );
};

export const Neobrutalism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ToastDemo Component={NeobrutalismToast} />
      <CodeSnippet html={nbHtml} css={nbCss} defaultTab="html" title="Neobrutalism — HTML/CSS snippet" />
    </div>
  ),
  args: {},
};

export const Shadcn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ToastDemo Component={ShadcnToast} />
      <CodeSnippet html={shadcnHtml} css={shadcnCss} defaultTab="html" title="Shadcn — HTML/CSS snippet" />
    </div>
  ),
  args: {},
};

export const Flowbite: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ToastDemo Component={FlowbiteToast} />
      <CodeSnippet html={fbHtml} css={fbCss} defaultTab="html" title="Flowbite — HTML/CSS snippet" />
    </div>
  ),
  args: {},
};

export const CompareAll: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <VariantShowcase
      title="Toast — all design languages (static preview)"
      variants={[
        {
          label: "Neobrutalism",
          designLanguage: "neobrutalism",
          children: (
            <div style={{ position: "relative", width: 300, height: 60 }}>
              <NeobrutalismToast iconType="success" position="top-right">
                Saved!
              </NeobrutalismToast>
            </div>
          ),
        },
        {
          label: "Shadcn",
          designLanguage: "shadcn",
          children: (
            <div style={{ position: "relative", width: 300, height: 60 }}>
              <ShadcnToast iconType="success" position="top-right">
                Saved!
              </ShadcnToast>
            </div>
          ),
        },
        {
          label: "Flowbite",
          designLanguage: "flowbite",
          children: (
            <div style={{ position: "relative", width: 300, height: 60 }}>
              <FlowbiteToast iconType="success" position="top-right">
                Saved!
              </FlowbiteToast>
            </div>
          ),
        },
      ]}
    />
  ),
  args: {},
};
