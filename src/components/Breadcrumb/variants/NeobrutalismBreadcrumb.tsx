"use client";
import { Children, isValidElement } from "react";
import type { BreadcrumbProps, BreadcrumbItemProps } from "../types";

const Item = ({ label, href, className = "" }: BreadcrumbItemProps) => {
  const isLast = false; // determined by Breadcrumb parent
  return href ? (
    <a
      href={href}
      className={["text-[0.9375rem] font-extrabold text-black underline decoration-2 underline-offset-2 hover:bg-yellow-400 transition-colors", className].filter(Boolean).join(" ")}
    >
      {label}
    </a>
  ) : (
    <span className={["text-[0.9375rem] font-extrabold text-black", className].filter(Boolean).join(" ")} aria-current="page">
      {label}
    </span>
  );
};

const NeobrutalismBreadcrumb = ({ children, className = "" }: BreadcrumbProps) => {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={["flex items-center flex-wrap gap-0 font-sans", className].filter(Boolean).join(" ")}>
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && (
              <span className="mx-2 text-[0.9375rem] font-extrabold text-black select-none">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

NeobrutalismBreadcrumb.Item = Item;
export default NeobrutalismBreadcrumb;
