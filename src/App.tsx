import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Dropdown
        options={[
          { id: "1", label: "Option 1", value: "opt1" },
          { id: "2", label: "Option 2", value: "opt2" },
          { id: "3", label: "Option 3", value: "opt3" },
          { id: "4", label: "Option 4", value: "opt4" },
          { id: "5", label: "Option 5", value: "opt5" },
          { id: "6", label: "Option 6", value: "opt6" },
        ]}
      />
    </div>
  );
}

export default App;
