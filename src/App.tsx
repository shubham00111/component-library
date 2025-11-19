import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import Input from "./components/Input/Input";
import Modal from "./components/Modal/Modal";
const options = [
  { id: "1", label: "Option 1", value: "opt1" },
  { id: "2", label: "Option 2", value: "opt2" },
  { id: "3", label: "Option 3", value: "opt3" },
  { id: "4", label: "Option 4", value: "opt4" },
  { id: "5", label: "Option 5", value: "opt5" },
  { id: "6", label: "Option 6", value: "opt6" },
];

const renderDropdown = () => {
  const handleOnChange = (option: {
    id: string;
    label: string;
    value: string;
  }) => {
    console.log("Selected option:", option);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Dropdown
        options={options}
        placeholder="Select an option"
        onChange={handleOnChange}
      >
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {options.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const renderInput = () => {
  return <Input placeholder="write something" />;
};

const renderModal = () => {
  return (
    <Modal>
      <Modal.Trigger>
        <button className="border-2 border-neutral-900">
          Click me to trigger
        </button>
      </Modal.Trigger>
      <Modal.Overlay>
        <Modal.Dialog>
          <Modal.Title>
            <div>This is the title of the modal</div>
          </Modal.Title>
          <Modal.Content>
            <div>fdlfjalsfljas;lf;lsaj</div>
          </Modal.Content>
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  );
};

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      {renderModal()}
    </div>
  );
}

export default App;
