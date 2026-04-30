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
  glassmorphism: VariantSnippet;
  md3: VariantSnippet;
  neumorphism: VariantSnippet;
}

const snippetMap: Record<string, ComponentSnippets> = {
  Button: {
    neobrutalism: { react: buttonSnippets.neobrutalismJsx },
    shadcn: { react: buttonSnippets.shadcnJsx },
    flowbite: { react: buttonSnippets.flowbiteJsx },
    glassmorphism: { react: buttonSnippets.glassmorphismJsx },
    md3: { react: buttonSnippets.md3Jsx },
    neumorphism: { react: buttonSnippets.nmJsx },
  },
  Badge: {
    neobrutalism: { react: badgeSnippets.neobrutalismJsx },
    shadcn: { react: badgeSnippets.shadcnJsx },
    flowbite: { react: badgeSnippets.flowbiteJsx },
    glassmorphism: { react: badgeSnippets.glassmorphismJsx ?? "" },
    md3: { react: badgeSnippets.md3Jsx ?? "" },
    neumorphism: { react: badgeSnippets.nmJsx ?? "" },
  },
  Card: {
    neobrutalism: { react: cardSnippets.neobrutalismJsx },
    shadcn: { react: cardSnippets.shadcnJsx },
    flowbite: { react: cardSnippets.flowbiteJsx },
    glassmorphism: { react: cardSnippets.glassmorphismJsx ?? "" },
    md3: { react: cardSnippets.md3Jsx ?? "" },
    neumorphism: { react: cardSnippets.nmJsx ?? "" },
  },
  Input: {
    neobrutalism: { react: inputSnippets.neobrutalismJsx },
    shadcn: { react: inputSnippets.shadcnJsx },
    flowbite: { react: inputSnippets.flowbiteJsx },
    glassmorphism: { react: inputSnippets.glassmorphismJsx ?? "" },
    md3: { react: inputSnippets.md3Jsx ?? "" },
    neumorphism: { react: inputSnippets.nmJsx ?? "" },
  },
  Toast: {
    neobrutalism: { react: toastSnippets.neobrutalismJsx },
    shadcn: { react: toastSnippets.shadcnJsx },
    flowbite: { react: toastSnippets.flowbiteJsx },
    glassmorphism: { react: toastSnippets.glassmorphismJsx ?? "" },
    md3: { react: toastSnippets.md3Jsx ?? "" },
    neumorphism: { react: toastSnippets.nmJsx ?? "" },
  },
  Toggle: {
    neobrutalism: { react: toggleSnippets.neobrutalismJsx },
    shadcn: { react: toggleSnippets.shadcnJsx },
    flowbite: { react: toggleSnippets.flowbiteJsx },
    glassmorphism: { react: toggleSnippets.glassmorphismJsx ?? "" },
    md3: { react: toggleSnippets.md3Jsx ?? "" },
    neumorphism: { react: toggleSnippets.nmJsx ?? "" },
  },
  Accordion: {
    neobrutalism: { react: accordionSnippets.neobrutalismJsx },
    shadcn: { react: accordionSnippets.shadcnJsx },
    flowbite: { react: accordionSnippets.flowbiteJsx },
    glassmorphism: { react: accordionSnippets.glassmorphismJsx ?? "" },
    md3: { react: accordionSnippets.md3Jsx ?? "" },
    neumorphism: { react: accordionSnippets.nmJsx ?? "" },
  },
  Modal: {
    neobrutalism: { react: modalSnippets.neobrutalismJsx },
    shadcn: { react: modalSnippets.shadcnJsx },
    flowbite: { react: modalSnippets.flowbiteJsx },
    glassmorphism: { react: modalSnippets.glassmorphismJsx ?? "" },
    md3: { react: modalSnippets.md3Jsx ?? "" },
    neumorphism: { react: modalSnippets.nmJsx ?? "" },
  },
  Dropdown: {
    neobrutalism: { react: dropdownSnippets.neobrutalismJsx },
    shadcn: { react: dropdownSnippets.shadcnJsx },
    flowbite: { react: dropdownSnippets.flowbiteJsx },
    glassmorphism: { react: dropdownSnippets.glassmorphismJsx ?? "" },
    md3: { react: dropdownSnippets.md3Jsx ?? "" },
    neumorphism: { react: dropdownSnippets.nmJsx ?? "" },
  },
  Tabs: {
    neobrutalism: { react: tabsSnippets.neobrutalismJsx },
    shadcn: { react: tabsSnippets.shadcnJsx },
    flowbite: { react: tabsSnippets.flowbiteJsx },
    glassmorphism: { react: tabsSnippets.glassmorphismJsx ?? "" },
    md3: { react: tabsSnippets.md3Jsx ?? "" },
    neumorphism: { react: tabsSnippets.nmJsx ?? "" },
  },
  Checkbox: {
    neobrutalism: { react: checkboxSnippets.neobrutalismJsx },
    shadcn: { react: checkboxSnippets.shadcnJsx },
    flowbite: { react: checkboxSnippets.flowbiteJsx },
    glassmorphism: { react: checkboxSnippets.glassmorphismJsx ?? "" },
    md3: { react: checkboxSnippets.md3Jsx ?? "" },
    neumorphism: { react: checkboxSnippets.nmJsx ?? "" },
  },
  Textarea: {
    neobrutalism: { react: textareaSnippets.neobrutalismJsx },
    shadcn: { react: textareaSnippets.shadcnJsx },
    flowbite: { react: textareaSnippets.flowbiteJsx },
    glassmorphism: { react: textareaSnippets.glassmorphismJsx ?? "" },
    md3: { react: textareaSnippets.md3Jsx ?? "" },
    neumorphism: { react: textareaSnippets.nmJsx ?? "" },
  },
  RadioGroup: {
    neobrutalism: { react: radioGroupSnippets.neobrutalismJsx },
    shadcn: { react: radioGroupSnippets.shadcnJsx },
    flowbite: { react: radioGroupSnippets.flowbiteJsx },
    glassmorphism: { react: radioGroupSnippets.glassmorphismJsx ?? "" },
    md3: { react: radioGroupSnippets.md3Jsx ?? "" },
    neumorphism: { react: radioGroupSnippets.nmJsx ?? "" },
  },
  Breadcrumb: {
    neobrutalism: { react: breadcrumbSnippets.neobrutalismJsx },
    shadcn: { react: breadcrumbSnippets.shadcnJsx },
    flowbite: { react: breadcrumbSnippets.flowbiteJsx },
    glassmorphism: { react: breadcrumbSnippets.glassmorphismJsx ?? "" },
    md3: { react: breadcrumbSnippets.md3Jsx ?? "" },
    neumorphism: { react: breadcrumbSnippets.nmJsx ?? "" },
  },
  Tooltip: {
    neobrutalism: { react: tooltipSnippets.neobrutalismJsx },
    shadcn: { react: tooltipSnippets.shadcnJsx },
    flowbite: { react: tooltipSnippets.flowbiteJsx },
    glassmorphism: { react: tooltipSnippets.glassmorphismJsx ?? "" },
    md3: { react: tooltipSnippets.md3Jsx ?? "" },
    neumorphism: { react: tooltipSnippets.nmJsx ?? "" },
  },
  Popover: {
    neobrutalism: { react: popoverSnippets.neobrutalismJsx },
    shadcn: { react: popoverSnippets.shadcnJsx },
    flowbite: { react: popoverSnippets.flowbiteJsx },
    glassmorphism: { react: popoverSnippets.glassmorphismJsx ?? "" },
    md3: { react: popoverSnippets.md3Jsx ?? "" },
    neumorphism: { react: popoverSnippets.nmJsx ?? "" },
  },
  Table: {
    neobrutalism: { react: tableSnippets.neobrutalismJsx },
    shadcn: { react: tableSnippets.shadcnJsx },
    flowbite: { react: tableSnippets.flowbiteJsx },
    glassmorphism: { react: tableSnippets.glassmorphismJsx ?? "" },
    md3: { react: tableSnippets.md3Jsx ?? "" },
    neumorphism: { react: tableSnippets.nmJsx ?? "" },
  },
};

const empty: ComponentSnippets = {
  neobrutalism: { react: "" },
  shadcn: { react: "" },
  flowbite: { react: "" },
  glassmorphism: { react: "" },
  md3: { react: "" },
  neumorphism: { react: "" },
};

export function loadSnippets(component: string): ComponentSnippets {
  return snippetMap[component] ?? empty;
}
