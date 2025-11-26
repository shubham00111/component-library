// import { ConfirmationModal } from "./components/Modal/Modal.examples";
import Accordion from "./components/Accordion/Accordion";
import Toast from "./components/Toast/Toast";

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <Toast timer={3} iconType="error">
          Hi I'am the toast message
        </Toast>
      </div>
    </div>
  );
}

export default App;
