"use client";
import type { CardProps } from "../types";

const NeobrutalismCard = ({
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
      "bg-white border-[3px] border-black rounded-[2px] shadow-[4px_4px_0_#000] font-sans overflow-hidden",
      "hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {image && (
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-[180px] object-cover border-b-[3px] border-b-black block"
      />
    )}
    {(title || description) && (
      <div className="p-4">
        {title && (
          <h3 className="text-lg font-extrabold text-black m-0 mb-2 leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-[0.9375rem] text-[#333] m-0 leading-relaxed">{description}</p>
        )}
      </div>
    )}
    {children && <div className="px-4 pb-4">{children}</div>}
    {footer && (
      <div className="px-4 py-2 border-t-[3px] border-t-black bg-yellow-400 flex items-center gap-2">
        {footer}
      </div>
    )}
  </div>
);

export default NeobrutalismCard;
