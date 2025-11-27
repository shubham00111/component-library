// import { ConfirmationModal } from "./components/Modal/Modal.examples";
import { Sun } from "lucide-react";
import ThemeProvider from "./Provider/ThemeProvider";
import Tabs from "./components/Tabs/Tabs";
import useTheme from "./Provider/useTheme";

const items = [
  {
    id: "1",
    label: "Overview",
    content: (
      <div>
        <h2>Overview Tab</h2>
        <p>
          This is the overview content with some information about the
          component.
        </p>
      </div>
    ),
  },
  {
    id: "2",
    label: "Features",
    content: (
      <div>
        <h2>Features</h2>
        <ul>
          <li>Feature 1: Highly customizable</li>
          <li>Feature 2: Responsive design</li>
          <li>Feature 3: Accessible</li>
        </ul>
      </div>
    ),
  },
  {
    id: "3",
    label: "Documentation",
    content: (
      <div>
        <h2>Documentation</h2>
        <p>
          Read the full documentation to learn how to use this component
          effectively.
        </p>
        <code>npm install component-library</code>
      </div>
    ),
  },
  {
    id: "4",
    label: "Settings",
    content: (
      <div>
        <h2>Settings</h2>
        <p>Configure your preferences here.</p>
      </div>
    ),
    disabled: true,
  },
  {
    id: "5",
    label: "About",
    content: (
      <div>
        <h2>About</h2>
        <p>Version 1.0.0 - Built with React and TypeScript</p>
      </div>
    ),
  },
];

const renderTabs = () => {
  return (
    <div className="flex h-screen items-center justify-center dark:bg-black">
      <div className="min-h-100 min-w-200">
        <Tabs items={items} value={items[0]} />
      </div>
    </div>
  );
};
function App() {
  return <ThemeProvider defaultTheme="dark">{renderTabs()}</ThemeProvider>;
}

export default App;
