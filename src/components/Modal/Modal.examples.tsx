/**
 * Modal Component Usage Examples
 */

import Modal from "./Modal";

// Example 1: Basic Modal
export const BasicModal = () => {
  return (
    <Modal initialOpen={false}>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Overlay onClick={() => {}}>
        <Modal.Dialog>
          <Modal.Title>Welcome</Modal.Title>
          <Modal.Content>
            <p>This is a basic modal dialog.</p>
          </Modal.Content>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  );
};

// Example 2: Modal with Footer Actions
export const ModalWithFooter = () => {
  return (
    <Modal initialOpen={false}>
      <Modal.Trigger>Edit Profile</Modal.Trigger>
      <Modal.Overlay onClick={() => {}}>
        <Modal.Dialog>
          <Modal.Title>Edit Your Profile</Modal.Title>
          <Modal.Content>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </form>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex gap-2 justify-end">
            <Modal.Close className="bg-gray-200">Cancel</Modal.Close>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  );
};

// Example 3: Confirmation Modal
export const ConfirmationModal = () => {
  return (
    <Modal initialOpen={false}>
      <Modal.Trigger className="bg-red-600 hover:bg-red-700">
        Delete Account
      </Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog className="max-w-md">
          <Modal.Title>Delete Account?</Modal.Title>
          <Modal.Content>
            <p className="text-gray-600">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
          </Modal.Content>
          <div className="px-6 py-4 border-t flex gap-2 justify-end">
            <Modal.Close>Cancel</Modal.Close>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Delete
            </button>
          </div>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  );
};

// Example 4: Close on Overlay Click
export const ModalWithOverlayClose = () => {
  const handleOverlayClick = () => {
    // This will be handled by the Overlay component
  };

  return (
    <Modal initialOpen={false}>
      <Modal.Trigger>Open Settings</Modal.Trigger>
      <Modal.Overlay onClick={handleOverlayClick}>
        <Modal.Dialog>
          <Modal.Title>Settings</Modal.Title>
          <Modal.Content>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Enable notifications
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Dark mode
              </label>
            </div>
          </Modal.Content>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  );
};
