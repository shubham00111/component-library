"use client";
import { Children, isValidElement } from "react";
import type { BreadcrumbProps, BreadcrumbItemProps } from "../types";

const Item = ({ label, href, className = "" }: BreadcrumbItemProps) => {
  return href ? (
    <a
      href={href}
      className={["text-sm font-medium text-white/60 hover:text-white transition-colors duration-200", className].filter(Boolean).join(" ")}
    >
      {label}
    </a>
  ) : (
    <span className={["text-sm font-medium text-white", className].filter(Boolean).join(" ")} aria-current="page">
      {label}
    </span>
  );
};

const GlassmorphismBreadcrumb = ({ children, className = "" }: BreadcrumbProps) => {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={["flex items-center flex-wrap font-sans", className].filter(Boolean).join(" ")}>
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && (
              <span className="mx-2 text-sm text-white/30 select-none">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

GlassmorphismBreadcrumb.Item = Item;
export default GlassmorphismBreadcrumb;
