const PLACEMENT_CLASSES = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export const neobrutalismJsx = `const PLACEMENT_CLASSES = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const NeobrutalismTooltip = ({ content, placement = "top", children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={\`absolute z-50 px-2.5 py-1.5 text-xs font-extrabold font-sans text-white bg-black border-[2px] border-black shadow-[3px_3px_0_#555] whitespace-nowrap rounded-none pointer-events-none \${PLACEMENT_CLASSES[placement]}\`}
        >
          {content}
        </span>
      )}
    </span>
  );
};

// Usage:
// <NeobrutalismTooltip content="This is a tooltip" placement="top">
//   <button>Hover me</button>
// </NeobrutalismTooltip>`;

export const shadcnJsx = `const ShadcnTooltip = ({ content, placement = "top", children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={\`absolute z-50 px-2.5 py-1.5 text-xs font-medium font-sans text-white bg-zinc-900 rounded-[6px] shadow-md whitespace-nowrap pointer-events-none \${PLACEMENT_CLASSES[placement]}\`}
        >
          {content}
        </span>
      )}
    </span>
  );
};`;

export const flowbiteJsx = `const FlowbiteTooltip = ({ content, placement = "top", children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={\`absolute z-50 px-3 py-2 text-xs font-medium font-sans text-white bg-gray-800 rounded-lg shadow-lg whitespace-nowrap pointer-events-none \${PLACEMENT_CLASSES[placement]}\`}
        >
          {content}
        </span>
      )}
    </span>
  );
};`;
