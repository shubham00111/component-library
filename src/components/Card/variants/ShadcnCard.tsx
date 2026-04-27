"use client";
import type { CardProps } from "../types";

const ShadcnCard = ({
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
      "bg-white border border-zinc-200 rounded-[6px] shadow-sm font-sans overflow-hidden",
      "hover:shadow transition-shadow duration-150",
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
          <h3 className="text-base font-semibold text-zinc-900 m-0 mb-1.5 leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-sm text-zinc-500 m-0 leading-relaxed">{description}</p>
        )}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-zinc-900">{children}</div>}
    {footer && (
      <div className="px-4 py-3 border-t border-zinc-200 flex items-center gap-2 bg-zinc-100">
        {footer}
      </div>
    )}
  </div>
);

export default ShadcnCard;
