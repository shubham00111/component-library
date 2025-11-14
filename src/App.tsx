import Dropdown from "./components/Dropdown/Dropdown";
const options = [
  { id: "1", label: "Option 1", value: "opt1" },
  { id: "2", label: "Option 2", value: "opt2" },
  { id: "3", label: "Option 3", value: "opt3" },
  { id: "4", label: "Option 4", value: "opt4" },
  { id: "5", label: "Option 5", value: "opt5" },
  { id: "6", label: "Option 6", value: "opt6" },
];
function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Dropdown options={options}>
        <Dropdown.Trigger />
        <Dropdown.Menu>
          {options.map((option, index) => (
            <Dropdown.Item key={option.id} option={option} index={index} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
