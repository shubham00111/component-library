import * as buttonSnippets from "../../src/components/Button/snippets";
import * as badgeSnippets from "../../src/components/Badge/snippets";
import * as cardSnippets from "../../src/components/Card/snippets";
import * as inputSnippets from "../../src/components/Input/snippets";
import * as toastSnippets from "../../src/components/Toast/snippets";
import * as toggleSnippets from "../../src/components/Toggle/snippets";

interface VariantSnippet {
  react: string;
}

interface ComponentSnippets {
  neobrutalism: VariantSnippet;
  shadcn: VariantSnippet;
  flowbite: VariantSnippet;
}

const snippetMap: Record<string, ComponentSnippets> = {
  Button: {
    neobrutalism: { react: buttonSnippets.neobrutalismJsx },
    shadcn: { react: buttonSnippets.shadcnJsx },
    flowbite: { react: buttonSnippets.flowbiteJsx },
  },
  Badge: {
    neobrutalism: { react: badgeSnippets.neobrutalismJsx },
    shadcn: { react: badgeSnippets.shadcnJsx },
    flowbite: { react: badgeSnippets.flowbiteJsx },
  },
  Card: {
    neobrutalism: { react: cardSnippets.neobrutalismJsx },
    shadcn: { react: cardSnippets.shadcnJsx },
    flowbite: { react: cardSnippets.flowbiteJsx },
  },
  Input: {
    neobrutalism: { react: inputSnippets.neobrutalismJsx },
    shadcn: { react: inputSnippets.shadcnJsx },
    flowbite: { react: inputSnippets.flowbiteJsx },
  },
  Toast: {
    neobrutalism: { react: toastSnippets.neobrutalismJsx },
    shadcn: { react: toastSnippets.shadcnJsx },
    flowbite: { react: toastSnippets.flowbiteJsx },
  },
  Toggle: {
    neobrutalism: { react: toggleSnippets.neobrutalismJsx },
    shadcn: { react: toggleSnippets.shadcnJsx },
    flowbite: { react: toggleSnippets.flowbiteJsx },
  },
};

const empty: ComponentSnippets = {
  neobrutalism: { react: "" },
  shadcn: { react: "" },
  flowbite: { react: "" },
};

export function loadSnippets(component: string): ComponentSnippets {
  return snippetMap[component] ?? empty;
}
