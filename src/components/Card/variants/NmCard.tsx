"use client";
import type { CardProps } from "../types";

const NmCard = ({
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
      "bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-xl font-sans overflow-hidden",
      "shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28]",
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
          <h3 className="text-base font-semibold text-[#3d4f6e] dark:text-[#c5cde0] m-0 mb-1.5 leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-sm text-[#6c7a9c] dark:text-[#a0a8c0] m-0 leading-relaxed">{description}</p>
        )}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-[#6c7a9c] dark:text-[#a0a8c0]">{children}</div>}
    {footer && (
      <div className="px-4 py-3 border-t border-[rgba(163,177,198,0.3)] dark:border-[#3d3d4e] flex items-center gap-2 shadow-[inset_-2px_-2px_5px_#ffffff,_inset_2px_2px_5px_rgba(163,177,198,0.4)] dark:shadow-[inset_-2px_-2px_5px_#3d3d4e,_inset_2px_2px_5px_#1d1d28]">
        {footer}
      </div>
    )}
  </div>
);

export default NmCard;
