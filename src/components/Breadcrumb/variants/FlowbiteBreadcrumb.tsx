"use client";
import { Children, isValidElement } from "react";
import type { BreadcrumbProps, BreadcrumbItemProps } from "../types";

const Item = ({ label, href, className = "" }: BreadcrumbItemProps) => {
  return href ? (
    <a
      href={href}
      className={["text-sm font-medium text-[#1c64f2] hover:text-[#1a56db] transition-colors duration-200", className].filter(Boolean).join(" ")}
    >
      {label}
    </a>
  ) : (
    <span className={["text-sm font-medium text-gray-500", className].filter(Boolean).join(" ")} aria-current="page">
      {label}
    </span>
  );
};

const FlowbiteBreadcrumb = ({ children, className = "" }: BreadcrumbProps) => {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={["flex items-center flex-wrap font-sans", className].filter(Boolean).join(" ")}>
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && (
              <span className="mx-2 text-sm text-gray-400 select-none">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

FlowbiteBreadcrumb.Item = Item;
export default FlowbiteBreadcrumb;
