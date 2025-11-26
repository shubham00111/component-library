// import { ConfirmationModal } from "./components/Modal/Modal.examples";

import Toast from "./components/Toast/Toast";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div>
        <Toast iconType="error">Hi I'am the toast message</Toast>
      </div>
    </div>
  );
}

export default App;
