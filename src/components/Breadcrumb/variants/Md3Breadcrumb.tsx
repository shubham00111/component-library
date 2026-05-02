"use client";
import { Children, isValidElement } from "react";
import type { BreadcrumbProps, BreadcrumbItemProps } from "../types";

const Item = ({ label, href, className = "" }: BreadcrumbItemProps) => {
  return href ? (
    <a
      href={href}
      className={["text-sm font-medium text-[#6750a4] dark:text-[#d0bcff] hover:bg-[#6750a4]/8 dark:hover:bg-[#d0bcff]/8 rounded px-1 py-0.5 transition-colors duration-200", className].filter(Boolean).join(" ")}
    >
      {label}
    </a>
  ) : (
    <span className={["text-sm font-medium text-[#1c1b1f] dark:text-[#e6e1e5]", className].filter(Boolean).join(" ")} aria-current="page">
      {label}
    </span>
  );
};

const Md3Breadcrumb = ({ children, className = "" }: BreadcrumbProps) => {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={["flex items-center flex-wrap font-sans", className].filter(Boolean).join(" ")}>
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && (
              <span className="mx-1.5 text-sm text-[#79747e] dark:text-[#938f99] select-none">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Md3Breadcrumb.Item = Item;
export default Md3Breadcrumb;
