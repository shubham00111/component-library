"use client";
import type { CardProps } from "../types";

const FlowbiteCard = ({
  title,
  description,
  children,
  footer,
  image,
  imageAlt = "",
  className = "",
}: CardProps) => (
  <div
    className={[
      "bg-white border border-gray-200 rounded-lg shadow-sm font-sans overflow-hidden",
      "hover:shadow-md transition-shadow duration-200",
      "dark:bg-gray-800 dark:border-gray-600",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {image && (
      <img src={image} alt={imageAlt} className="w-full h-[180px] object-cover block" />
    )}
    {(title || description) && (
      <div className="p-4">
        {title && (
          <h3 className="text-base font-medium text-gray-900 dark:text-white m-0 mb-1.5 leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 m-0 leading-relaxed">{description}</p>
        )}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-gray-900 dark:text-gray-100">{children}</div>}
    {footer && (
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 flex items-center gap-2">
        {footer}
      </div>
    )}
  </div>
);

export default FlowbiteCard;
