"use client";

import NeobrutalismAccordion from "@lib/components/Accordion/variants/NeobrutalismAccordion";
import ShadcnAccordion from "@lib/components/Accordion/variants/ShadcnAccordion";
import FlowbiteAccordion from "@lib/components/Accordion/variants/FlowbiteAccordion";
import GlassmorphismAccordion from "@lib/components/Accordion/variants/GlassmorphismAccordion";
import Md3Accordion from "@lib/components/Accordion/variants/Md3Accordion";
import NmAccordion from "@lib/components/Accordion/variants/NmAccordion";

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

export function GlassmorphismAccordionPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismAccordion>
        <GlassmorphismAccordion.Item defaultOpen>
          <GlassmorphismAccordion.Title>Glass design language</GlassmorphismAccordion.Title>
          <GlassmorphismAccordion.Description>
            Translucent blur panels with subtle white borders.
          </GlassmorphismAccordion.Description>
        </GlassmorphismAccordion.Item>
        <GlassmorphismAccordion.Item>
          <GlassmorphismAccordion.Title>How does blur work?</GlassmorphismAccordion.Title>
          <GlassmorphismAccordion.Description>
            backdrop-blur-md requires a colourful background behind the element.
          </GlassmorphismAccordion.Description>
        </GlassmorphismAccordion.Item>
      </GlassmorphismAccordion>
    </div>
  );
}

export function Md3AccordionPreview() {
  return (
    <Md3Accordion>
      <Md3Accordion.Item defaultOpen>
        <Md3Accordion.Title>Material Design 3</Md3Accordion.Title>
        <Md3Accordion.Description>
          Purple tonal surfaces, pill radius, soft elevation.
        </Md3Accordion.Description>
      </Md3Accordion.Item>
      <Md3Accordion.Item>
        <Md3Accordion.Title>What is a tonal container?</Md3Accordion.Title>
        <Md3Accordion.Description>
          A lavender-tinted background derived from the primary colour.
        </Md3Accordion.Description>
      </Md3Accordion.Item>
    </Md3Accordion>
  );
}

export function NmAccordionPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmAccordion>
        <NmAccordion.Item defaultOpen>
          <NmAccordion.Title>Neumorphism</NmAccordion.Title>
          <NmAccordion.Description>
            Soft dual-tone shadows on a matching background.
          </NmAccordion.Description>
        </NmAccordion.Item>
        <NmAccordion.Item>
          <NmAccordion.Title>Why must backgrounds match?</NmAccordion.Title>
          <NmAccordion.Description>
            The shadow effect needs the component colour to blend with its container.
          </NmAccordion.Description>
        </NmAccordion.Item>
      </NmAccordion>
    </div>
  );
}
