"use client";
import { Children, isValidElement } from "react";
import type { BreadcrumbProps, BreadcrumbItemProps } from "../types";

const Item = ({ label, href, className = "" }: BreadcrumbItemProps) => {
  return href ? (
    <a
      href={href}
      className={["text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150", className].filter(Boolean).join(" ")}
    >
      {label}
    </a>
  ) : (
    <span className={["text-sm font-medium text-zinc-900 dark:text-zinc-100", className].filter(Boolean).join(" ")} aria-current="page">
      {label}
    </span>
  );
};

const ShadcnBreadcrumb = ({ children, className = "" }: BreadcrumbProps) => {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={["flex items-center flex-wrap font-sans", className].filter(Boolean).join(" ")}>
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && (
              <span className="mx-2 text-sm text-zinc-400 dark:text-zinc-600 select-none">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

ShadcnBreadcrumb.Item = Item;
export default ShadcnBreadcrumb;
