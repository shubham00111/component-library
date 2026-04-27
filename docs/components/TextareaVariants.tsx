"use client";
import { NeobrutalismTextarea, ShadcnTextarea, FlowbiteTextarea } from "@lib/components/Textarea";

export function NeobrutalismTextareaPreview() {
  return <NeobrutalismTextarea label="Message" placeholder="Write your message..." rows={3} />;
}

export function ShadcnTextareaPreview() {
  return <ShadcnTextarea label="Message" placeholder="Write your message..." rows={3} />;
}

export function FlowbiteTextareaPreview() {
  return <FlowbiteTextarea label="Message" placeholder="Write your message..." rows={3} />;
}
