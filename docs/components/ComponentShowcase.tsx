"use client";

import VariantShowcase, {
  type VariantItem,
} from "@lib/components/ui/VariantShowcase";

interface ComponentShowcaseProps {
  variants: VariantItem[];
  layout?: "row" | "column";
  title?: string;
}

export function ComponentShowcase({ variants, layout, title }: ComponentShowcaseProps) {
  return <VariantShowcase variants={variants} layout={layout} title={title} />;
}
