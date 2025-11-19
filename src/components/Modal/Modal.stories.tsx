import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "1400px",
          height: "900px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic Modal - Simple dialog with title and content
 *
 * Shows the simplest usage of the Modal component.
 * Users can open the modal by clicking the trigger button
 * and close it by clicking the X button or the close button.
 */
export const Basic: Story = {
  args: { children: null, initialOpen: false },
  render: () => (
    <Modal initialOpen={false}>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog>
          <Modal.Title>Welcome to Modal</Modal.Title>
          <Modal.Content>
            <p className="text-gray-600">
              This is a simple modal dialog. You can close it by clicking the X
              button, the close button, or clicking outside the modal.
            </p>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex justify-end">
            <Modal.Close>Close</Modal.Close>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ),
};

/**
 * Modal with Form - A practical example showing a form inside the modal
 *
 * This story demonstrates how to use the Modal component for collecting
 * user input. It includes form fields and action buttons at the bottom.
 * Perfect for sign-up, login, or settings forms.
 */
export const FormModal: Story = {
  args: { children: null, initialOpen: false },
  render: () => (
    <Modal initialOpen={false}>
      <Modal.Trigger className="bg-blue-600 hover:bg-blue-700">
        Edit Profile
      </Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog className="max-w-lg">
          <Modal.Title>Edit Your Profile</Modal.Title>
          <Modal.Content>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  placeholder="Tell us about yourself..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex gap-2 justify-end">
            <Modal.Close className="bg-gray-200 text-gray-900 hover:bg-gray-300">
              Cancel
            </Modal.Close>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ),
};

/**
 * Confirmation Modal - For confirming destructive actions
 *
 * This story shows how to use the Modal component for confirmation dialogs.
 * Perfect for actions like deleting items, logging out, or other irreversible actions.
 * Features a warning message and destructive action button.
 */
export const ConfirmationModal: Story = {
  args: { children: null, initialOpen: false },
  render: () => (
    <Modal initialOpen={false}>
      <Modal.Trigger className="bg-red-600 hover:bg-red-700">
        Delete Account
      </Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog className="max-w-md">
          <Modal.Title>Delete Account?</Modal.Title>
          <Modal.Content>
            <div className="space-y-4">
              <p className="text-gray-600">
                Are you sure you want to delete your account? This action cannot
                be undone.
              </p>
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-800">
                  <span className="font-semibold">Warning:</span> All your data
                  will be permanently deleted.
                </p>
              </div>
            </div>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex gap-2 justify-end">
            <Modal.Close className="bg-gray-200 text-gray-900">
              Cancel
            </Modal.Close>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
              Delete Permanently
            </button>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ),
};

/**
 * Settings Modal - A modal for application settings
 *
 * Shows how to use the Modal with checkboxes and toggle options.
 * Useful for preference management, feature toggles, or configuration settings.
 */
export const SettingsModal: Story = {
  args: { children: null, initialOpen: false },
  render: () => (
    <Modal initialOpen={false}>
      <Modal.Trigger className="bg-indigo-600 hover:bg-indigo-700">
        Settings
      </Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog className="max-w-md">
          <Modal.Title>Application Settings</Modal.Title>
          <Modal.Content>
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    Enable notifications
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <span className="text-sm text-gray-700">Dark mode</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <span className="text-sm text-gray-700">Sound effects</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <span className="text-sm text-gray-700">Analytics</span>
                </label>
              </div>
            </div>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex gap-2 justify-end">
            <Modal.Close className="bg-gray-200 text-gray-900">
              Cancel
            </Modal.Close>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Save Settings
            </button>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ),
};

/**
 * Success Modal - For displaying success messages
 *
 * A modal specifically designed for showing successful operations.
 * Includes an icon, message, and acknowledgment button.
 */
export const SuccessModal: Story = {
  args: { children: null, initialOpen: false },
  render: () => (
    <Modal initialOpen={false}>
      <Modal.Trigger className="bg-green-600 hover:bg-green-700">
        Complete Action
      </Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog className="max-w-md">
          <Modal.Title>Success!</Modal.Title>
          <Modal.Content>
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-600">
                Your profile has been updated successfully! Changes will take
                effect immediately.
              </p>
            </div>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex justify-center">
            <Modal.Close className="bg-green-600 text-white hover:bg-green-700">
              Got it!
            </Modal.Close>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ),
};

/**
 * Error Modal - For displaying error messages
 *
 * A modal for showing error messages or failed operations.
 * Includes error icon and details for user awareness.
 */
export const ErrorModal: Story = {
  args: { children: null, initialOpen: false },
  render: () => (
    <Modal initialOpen={false}>
      <Modal.Trigger className="bg-red-600 hover:bg-red-700">
        Trigger Error
      </Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog className="max-w-md">
          <Modal.Title>Something went wrong</Modal.Title>
          <Modal.Content>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Upload Failed</p>
                <p className="text-sm text-gray-600 mt-1">
                  The file size exceeds the maximum allowed size of 10MB. Please
                  try with a smaller file.
                </p>
              </div>
            </div>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex justify-end">
            <Modal.Close className="bg-red-600 text-white hover:bg-red-700">
              Try Again
            </Modal.Close>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ),
};

/**
 * Multi-Step Modal - For workflows with multiple steps
 *
 * Demonstrates how to use the Modal for multi-step processes.
 * Shows step indicators and navigation buttons.
 */
export const MultiStepModal: Story = {
  args: { children: null, initialOpen: false },
  render: () => (
    <Modal initialOpen={false}>
      <Modal.Trigger className="bg-purple-600 hover:bg-purple-700">
        Start Setup
      </Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog className="max-w-lg">
          <Modal.Title>Setup Wizard</Modal.Title>
          <Modal.Content>
            <div className="space-y-6">
              {/* Step Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-semibold">
                    1
                  </div>
                  <span className="text-sm font-medium">Personal Info</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-600 text-sm font-semibold">
                    2
                  </div>
                  <span className="text-sm text-gray-500">Payment</span>
                </div>
              </div>

              {/* Step Content */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </form>
            </div>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex gap-2 justify-between">
            <Modal.Close>Cancel</Modal.Close>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Back
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Next
              </button>
            </div>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ),
};
