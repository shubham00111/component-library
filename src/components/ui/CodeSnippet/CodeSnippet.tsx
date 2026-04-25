import { useState } from "react";
import "./CodeSnippet.css";

type TabKey = "react" | "html" | "css" | "js";

export interface CodeSnippetProps {
  react?: string;
  html?: string;
  css?: string;
  js?: string;
  defaultTab?: TabKey;
  title?: string;
}

const TAB_ORDER: TabKey[] = ["react", "html", "css", "js"];
const TAB_LABELS: Record<TabKey, string> = {
  react: "React",
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
};

const CodeSnippet = ({
  react,
  html,
  css,
  js,
  defaultTab,
  title,
}: CodeSnippetProps) => {
  const available = TAB_ORDER.filter((key) => {
    const map: Record<TabKey, string | undefined> = { react, html, css, js };
    return Boolean(map[key]);
  });

  const [activeTab, setActiveTab] = useState<TabKey>(
    defaultTab && available.includes(defaultTab) ? defaultTab : available[0],
  );
  const [copied, setCopied] = useState(false);

  if (available.length === 0) return null;

  const contentMap: Record<TabKey, string | undefined> = { react, html, css, js };
  const activeContent = contentMap[activeTab] ?? "";

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="cs-root">
      {title && <div className="cs-title">{title}</div>}
      <div className="cs-header">
        <div className="cs-tabs" role="tablist">
          {available.map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              className={`cs-tab${activeTab === key ? " cs-tab--active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {TAB_LABELS[key]}
            </button>
          ))}
        </div>
        <button
          className="cs-copy"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="cs-pre" role="tabpanel">
        <code className="cs-code">{activeContent}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
