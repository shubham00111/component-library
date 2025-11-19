import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    onChange: () => {},
    placeholder: "Write something here",
    value: "",
  },
};

export const Disabled: Story = {
  args: {
    onChange: () => {},
    placeholder: "Disabled Button",
    disabled: true,
  },
};
