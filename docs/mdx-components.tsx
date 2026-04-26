import type { MDXComponents } from "mdx/types";
import { useMDXComponents as getNextraMDXComponents } from "nextra-theme-docs";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(getNextraMDXComponents() as any),
    ...components,
  };
}
