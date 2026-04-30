"use client";
import type { CardProps } from "../types";

const Md3Card = ({
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
      "bg-[#fffbfe] dark:bg-[#1c1b1f] border border-[#e7e0ec] dark:border-[#49454f] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] font-sans overflow-hidden",
      "hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)] transition-shadow duration-200",
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
          <h3 className="text-base font-semibold text-[#1c1b1f] dark:text-[#e6e1e5] m-0 mb-1.5 leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-sm text-[#49454f] dark:text-[#cac4d0] m-0 leading-relaxed">{description}</p>
        )}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-[#1c1b1f] dark:text-[#e6e1e5]">{children}</div>}
    {footer && (
      <div className="px-4 py-3 border-t border-[#e7e0ec] dark:border-[#49454f] flex items-center gap-2 bg-[#f3edf7] dark:bg-[#2b2930]">
        {footer}
      </div>
    )}
  </div>
);

export default Md3Card;
