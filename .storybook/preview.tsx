import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/index.css";
import "../src/tokens/neobrutalism.css";
import "../src/tokens/shadcn.css";
import "../src/tokens/flowbite.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          minHeight: "120px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
