import fs from "fs";
import path from "path";

interface SnippetPair {
  html: string;
  css: string;
}

interface ComponentSnippets {
  neobrutalism: SnippetPair;
  shadcn: SnippetPair;
  flowbite: SnippetPair;
}

function readFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

export function loadSnippets(component: string): ComponentSnippets {
  const base = path.join(
    process.cwd(),
    "..",
    "src",
    "components",
    component,
    "snippets",
  );

  return {
    neobrutalism: {
      html: readFile(path.join(base, "neobrutalism.html")),
      css: readFile(path.join(base, "neobrutalism.css")),
    },
    shadcn: {
      html: readFile(path.join(base, "shadcn.html")),
      css: readFile(path.join(base, "shadcn.css")),
    },
    flowbite: {
      html: readFile(path.join(base, "flowbite.html")),
      css: readFile(path.join(base, "flowbite.css")),
    },
  };
}
