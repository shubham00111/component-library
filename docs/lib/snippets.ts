import * as buttonSnippets from "../../src/components/Button/snippets";
import * as badgeSnippets from "../../src/components/Badge/snippets";
import * as cardSnippets from "../../src/components/Card/snippets";
import * as inputSnippets from "../../src/components/Input/snippets";
import * as toastSnippets from "../../src/components/Toast/snippets";
import * as toggleSnippets from "../../src/components/Toggle/snippets";
import * as accordionSnippets from "../../src/components/Accordion/snippets";
import * as modalSnippets from "../../src/components/Modal/snippets";
import * as dropdownSnippets from "../../src/components/Dropdown/snippets";
import * as tabsSnippets from "../../src/components/Tabs/snippets";
import * as checkboxSnippets from "../../src/components/Checkbox/snippets";
import * as textareaSnippets from "../../src/components/Textarea/snippets";
import * as radioGroupSnippets from "../../src/components/RadioGroup/snippets";
import * as breadcrumbSnippets from "../../src/components/Breadcrumb/snippets";
import * as tooltipSnippets from "../../src/components/Tooltip/snippets";
import * as popoverSnippets from "../../src/components/Popover/snippets";
import * as tableSnippets from "../../src/components/Table/snippets";

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
  Accordion: {
    neobrutalism: { react: accordionSnippets.neobrutalismJsx },
    shadcn: { react: accordionSnippets.shadcnJsx },
    flowbite: { react: accordionSnippets.flowbiteJsx },
  },
  Modal: {
    neobrutalism: { react: modalSnippets.neobrutalismJsx },
    shadcn: { react: modalSnippets.shadcnJsx },
    flowbite: { react: modalSnippets.flowbiteJsx },
  },
  Dropdown: {
    neobrutalism: { react: dropdownSnippets.neobrutalismJsx },
    shadcn: { react: dropdownSnippets.shadcnJsx },
    flowbite: { react: dropdownSnippets.flowbiteJsx },
  },
  Tabs: {
    neobrutalism: { react: tabsSnippets.neobrutalismJsx },
    shadcn: { react: tabsSnippets.shadcnJsx },
    flowbite: { react: tabsSnippets.flowbiteJsx },
  },
  Checkbox: {
    neobrutalism: { react: checkboxSnippets.neobrutalismJsx },
    shadcn: { react: checkboxSnippets.shadcnJsx },
    flowbite: { react: checkboxSnippets.flowbiteJsx },
  },
  Textarea: {
    neobrutalism: { react: textareaSnippets.neobrutalismJsx },
    shadcn: { react: textareaSnippets.shadcnJsx },
    flowbite: { react: textareaSnippets.flowbiteJsx },
  },
  RadioGroup: {
    neobrutalism: { react: radioGroupSnippets.neobrutalismJsx },
    shadcn: { react: radioGroupSnippets.shadcnJsx },
    flowbite: { react: radioGroupSnippets.flowbiteJsx },
  },
  Breadcrumb: {
    neobrutalism: { react: breadcrumbSnippets.neobrutalismJsx },
    shadcn: { react: breadcrumbSnippets.shadcnJsx },
    flowbite: { react: breadcrumbSnippets.flowbiteJsx },
  },
  Tooltip: {
    neobrutalism: { react: tooltipSnippets.neobrutalismJsx },
    shadcn: { react: tooltipSnippets.shadcnJsx },
    flowbite: { react: tooltipSnippets.flowbiteJsx },
  },
  Popover: {
    neobrutalism: { react: popoverSnippets.neobrutalismJsx },
    shadcn: { react: popoverSnippets.shadcnJsx },
    flowbite: { react: popoverSnippets.flowbiteJsx },
  },
  Table: {
    neobrutalism: { react: tableSnippets.neobrutalismJsx },
    shadcn: { react: tableSnippets.shadcnJsx },
    flowbite: { react: tableSnippets.flowbiteJsx },
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
