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

export const glassmorphismJsx = `const GlassmorphismTooltip = ({ children, content, placement = "top" }) => {
  const [visible, setVisible] = useState(false);
  const pos = { top: "bottom-full left-1/2 -translate-x-1/2 mb-2", bottom: "top-full left-1/2 -translate-x-1/2 mt-2", left: "right-full top-1/2 -translate-y-1/2 mr-2", right: "left-full top-1/2 -translate-y-1/2 ml-2" };
  return (
    <span className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && content && (
        <span className={\`absolute z-10 whitespace-nowrap px-3 py-1.5 text-xs font-medium text-white bg-white/15 backdrop-blur-md border border-white/20 rounded-lg shadow-[0_4px_16px_rgba(31,38,135,0.15)] \${pos[placement]}\`}>
          {content}
        </span>
      )}
    </span>
  );
};`;

export const md3Jsx = `const Md3Tooltip = ({ children, content, placement = "top" }) => {
  const [visible, setVisible] = useState(false);
  const pos = { top: "bottom-full left-1/2 -translate-x-1/2 mb-2", bottom: "top-full left-1/2 -translate-x-1/2 mt-2", left: "right-full top-1/2 -translate-y-1/2 mr-2", right: "left-full top-1/2 -translate-y-1/2 ml-2" };
  return (
    <span className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && content && (
        <span className={\`absolute z-10 whitespace-nowrap px-3 py-1.5 text-xs font-medium text-[#e6e1e5] bg-[#313033] rounded-[4px] shadow-[0_1px_2px_rgba(0,0,0,0.3)] \${pos[placement]}\`}>
          {content}
        </span>
      )}
    </span>
  );
};`;

export const nmJsx = `const NmTooltip = ({ children, content, placement = "top" }) => {
  const [visible, setVisible] = useState(false);
  const pos = { top: "bottom-full left-1/2 -translate-x-1/2 mb-2", bottom: "top-full left-1/2 -translate-x-1/2 mt-2", left: "right-full top-1/2 -translate-y-1/2 mr-2", right: "left-full top-1/2 -translate-y-1/2 ml-2" };
  return (
    <span className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && content && (
        <span className={\`absolute z-10 whitespace-nowrap px-3 py-1.5 text-xs font-semibold text-[#6c7a9c] bg-[#e0e5ec] rounded-xl shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] \${pos[placement]}\`}>
          {content}
        </span>
      )}
    </span>
  );
};`;
