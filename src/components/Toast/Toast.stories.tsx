import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import { Bell } from "lucide-react";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconType: {
      control: "select",
      options: ["success", "error", "warning", "info"],
      description: "Type of toast icon to display",
    },
    className: {
      control: "text",
      description: "Custom CSS classes",
    },
    children: {
      control: "text",
      description: "Toast message content",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Success Toast - For successful operations
 *
 * Shows a green success icon with a message confirming
 * that an action completed successfully.
 */
export const Success: Story = {
  args: {
    iconType: "success",
    children: "Your changes have been saved successfully!",
  },
};

/**
 * Error Toast - For error messages
 *
 * Displays a red error icon with a message indicating
 * that something went wrong.
 */
export const Error: Story = {
  args: {
    iconType: "error",
    children:
      "An error occurred while processing your request. Please try again.",
  },
};

/**
 * Warning Toast - For warning messages
 *
 * Shows a yellow warning icon with a message alerting
 * the user about something important.
 */
export const Warning: Story = {
  args: {
    iconType: "warning",
    children: "Please review your input before proceeding.",
  },
};

/**
 * Info Toast - For informational messages
 *
 * Displays a blue info icon with general informational
 * content for the user.
 */
export const Info: Story = {
  args: {
    iconType: "info",
    children: "New features are now available. Check them out!",
  },
};

/**
 * Long Message - Toast with longer text content
 *
 * Demonstrates how toast handles longer messages while
 * maintaining its layout and styling.
 */
export const LongMessage: Story = {
  args: {
    iconType: "success",
    children:
      "Your file has been successfully uploaded and is now being processed. You will receive a notification once the processing is complete.",
  },
};

/**
 * Multiple Toasts - Stack of different toast types
 *
 * Shows how multiple toasts can be displayed together
 * in a typical notification area.
 */
export const MultipleToasts: Story = {
  args: { iconType: "success", children: "" },
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Toast iconType="success">Profile updated successfully</Toast>
      <Toast iconType="info">New message from John Doe</Toast>
      <Toast iconType="warning">Your storage is almost full</Toast>
      <Toast iconType="error">Failed to upload file. Please try again.</Toast>
    </div>
  ),
};

/**
 * Custom Close Icon - Toast with custom close button icon
 *
 * Demonstrates how to use a different close icon
 * (like Bell instead of X).
 */
export const CustomCloseIcon: Story = {
  args: {
    iconType: "info",
    children: "You have a new notification",
    CloseIcon: Bell,
  },
};

/**
 * No Message - Toast with only icon
 *
 * A minimal toast with just an icon and close button,
 * useful for quick visual feedback without text.
 */
export const NoMessage: Story = {
  args: {
    iconType: "success",
    children: "",
  },
};

/**
 * Custom Styling - Toast with custom CSS classes
 *
 * Shows how to apply custom styling to the toast component
 * for different sizes or appearances.
 */
export const CustomStyling: Story = {
  args: {
    iconType: "success",
    children: "Styled toast message",
    className: "max-w-sm shadow-lg border-l-4 border-green-500",
  },
};

/**
 * Success with Action - Success notification
 *
 * A typical success toast for confirming user actions
 * like form submission or file operations.
 */
export const SuccessAction: Story = {
  args: {
    iconType: "success",
    children: "✓ File download started. Your file will be ready shortly.",
  },
};

/**
 * Error Details - Error toast with specific error message
 *
 * Shows an error toast with detailed error information
 * that helps users understand what went wrong.
 */
export const ErrorDetails: Story = {
  args: {
    iconType: "error",
    children: "Failed to connect to server. Check your internet connection.",
  },
};

/**
 * Warning - Account expiry notification
 *
 * A warning toast informing users about upcoming events
 * or actions they need to take.
 */
export const WarningExpiry: Story = {
  args: {
    iconType: "warning",
    children:
      "Your premium subscription expires in 3 days. Renew now to continue.",
  },
};

/**
 * Info - Update available
 *
 * An informational toast notifying users about new
 * features or system updates.
 */
export const InfoUpdate: Story = {
  args: {
    iconType: "info",
    children:
      "A new version of the app is available. Update now for the latest features.",
  },
};

/**
 * Compact Toast - Minimal spacing
 *
 * A more compact variant suitable for dense UIs
 * or when space is limited.
 */
export const Compact: Story = {
  args: {
    iconType: "success",
    children: "Done",
    className: "min-w-fit p-2",
  },
};

/**
 * Dark Background - Toast on dark background
 *
 * Shows how the toast appears when placed on a
 * dark background (the toast is designed for light backgrounds).
 */
export const DarkBackground: Story = {
  args: {
    iconType: "success",
    children: "Successfully uploaded to cloud storage",
  },
  render: () => (
    <div className="rounded-lg bg-gray-900 p-8">
      <Toast iconType="success">Successfully uploaded to cloud storage</Toast>
    </div>
  ),
};

/**
 * All Types Comparison - Side by side comparison
 *
 * Shows all four toast types (success, error, warning, info)
 * side by side for easy comparison.
 */
export const AllTypesComparison: Story = {
  args: { iconType: "success", children: "" },
  render: () => (
    <div className="w-full space-y-3">
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-600">Success</p>
        <Toast iconType="success">Operation completed successfully</Toast>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-600">Error</p>
        <Toast iconType="error">An error occurred during processing</Toast>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-600">Warning</p>
        <Toast iconType="warning">Please verify your input</Toast>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-600">Info</p>
        <Toast iconType="info">New updates are available</Toast>
      </div>
    </div>
  ),
};

/**
 * Interactive - Controlled toast with different states
 *
 * Demonstrates a toast that changes based on user interactions
 * or different application states.
 */
export const Interactive: Story = {
  args: {
    iconType: "info",
    children: "Click the button above to change the toast state",
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => console.log("Success clicked")}
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Show Success
        </button>
        <button
          onClick={() => console.log("Error clicked")}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Show Error
        </button>
        <button
          onClick={() => console.log("Info clicked")}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Show Info
        </button>
      </div>
      <Toast {...args} />
    </div>
  ),
};
