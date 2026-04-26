"use client";

import Accordion from "@lib/components/Accordion/Accordion";

export function AccordionDemo() {
  return (
    <div style={{ padding: "16px", maxWidth: "560px", margin: "0 auto" }}>
      <Accordion>
        <Accordion.Item>
          <Accordion.Title>What is UI Variants?</Accordion.Title>
          <Accordion.Description>
            A component library showcasing every component across three design
            languages: Neobrutalism, Shadcn-inspired, and Flowbite-inspired.
          </Accordion.Description>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title>Is it free to use?</Accordion.Title>
          <Accordion.Description>
            Yes — all components are MIT licensed. Copy the HTML/CSS snippets
            freely into any project.
          </Accordion.Description>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title>Does it require any dependencies?</Accordion.Title>
          <Accordion.Description>
            The React variants use Tailwind CSS. The standalone HTML/CSS
            snippets have zero dependencies — just paste and go.
          </Accordion.Description>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
