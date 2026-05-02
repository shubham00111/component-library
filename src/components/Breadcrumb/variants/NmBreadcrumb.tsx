"use client";
import { Children, isValidElement } from "react";
import type { BreadcrumbProps, BreadcrumbItemProps } from "../types";

const Item = ({ label, href, className = "" }: BreadcrumbItemProps) => {
  return href ? (
    <a
      href={href}
      className={["text-sm font-semibold text-[#6c7a9c] dark:text-[#a0a8c0] hover:text-[#3d4f6e] dark:hover:text-[#c5cde0] transition-colors duration-150", className].filter(Boolean).join(" ")}
    >
      {label}
    </a>
  ) : (
    <span className={["text-sm font-semibold text-[#3d4f6e] dark:text-[#c5cde0]", className].filter(Boolean).join(" ")} aria-current="page">
      {label}
    </span>
  );
};

const NmBreadcrumb = ({ children, className = "" }: BreadcrumbProps) => {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={["flex items-center flex-wrap font-sans", className].filter(Boolean).join(" ")}>
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && (
              <span className="mx-2 text-sm text-[#6c7a9c]/40 dark:text-[#a0a8c0]/40 select-none font-light">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

NmBreadcrumb.Item = Item;
export default NmBreadcrumb;
