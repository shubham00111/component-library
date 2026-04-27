"use client";

import NeobrutalismAccordion from "@lib/components/Accordion/variants/NeobrutalismAccordion";
import ShadcnAccordion from "@lib/components/Accordion/variants/ShadcnAccordion";
import FlowbiteAccordion from "@lib/components/Accordion/variants/FlowbiteAccordion";

export function NeobrutalismAccordionPreview() {
  return (
    <NeobrutalismAccordion>
      <NeobrutalismAccordion.Item defaultOpen>
        <NeobrutalismAccordion.Title>What is Neobrutalism?</NeobrutalismAccordion.Title>
        <NeobrutalismAccordion.Description>
          A bold design language with thick borders, flat shadows, and high contrast.
        </NeobrutalismAccordion.Description>
      </NeobrutalismAccordion.Item>
      <NeobrutalismAccordion.Item>
        <NeobrutalismAccordion.Title>How does it work?</NeobrutalismAccordion.Title>
        <NeobrutalismAccordion.Description>
          Each item manages its own open/close state with React useState.
        </NeobrutalismAccordion.Description>
      </NeobrutalismAccordion.Item>
    </NeobrutalismAccordion>
  );
}

export function ShadcnAccordionPreview() {
  return (
    <ShadcnAccordion>
      <ShadcnAccordion.Item defaultOpen>
        <ShadcnAccordion.Title>Is it accessible?</ShadcnAccordion.Title>
        <ShadcnAccordion.Description>
          Yes. Each button has proper aria-expanded and keyboard support.
        </ShadcnAccordion.Description>
      </ShadcnAccordion.Item>
      <ShadcnAccordion.Item>
        <ShadcnAccordion.Title>Can I use it in Next.js?</ShadcnAccordion.Title>
        <ShadcnAccordion.Description>
          Absolutely. Add "use client" and import directly.
        </ShadcnAccordion.Description>
      </ShadcnAccordion.Item>
    </ShadcnAccordion>
  );
}

export function FlowbiteAccordionPreview() {
  return (
    <FlowbiteAccordion>
      <FlowbiteAccordion.Item defaultOpen>
        <FlowbiteAccordion.Title>What is Flowbite?</FlowbiteAccordion.Title>
        <FlowbiteAccordion.Description>
          A design system built on Tailwind CSS with clean, accessible UI components.
        </FlowbiteAccordion.Description>
      </FlowbiteAccordion.Item>
      <FlowbiteAccordion.Item>
        <FlowbiteAccordion.Title>How do I customize it?</FlowbiteAccordion.Title>
        <FlowbiteAccordion.Description>
          Override Tailwind classes via className props or extend the component.
        </FlowbiteAccordion.Description>
      </FlowbiteAccordion.Item>
    </FlowbiteAccordion>
  );
}
