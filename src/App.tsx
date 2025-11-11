import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        onChange={(e) => console.log(e)}
      />
    </div>
  );
}

export default App;
