"use client";
import type { CardProps } from "../types";

const GlassmorphismCard = ({
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
      "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] font-sans overflow-hidden",
      "hover:bg-white/15 transition-all duration-200",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {image && (
      <img src={image} alt={imageAlt} className="w-full h-[180px] object-cover block opacity-80" />
    )}
    {(title || description) && (
      <div className="p-4">
        {title && (
          <h3 className="text-base font-semibold text-white m-0 mb-1.5 leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-sm text-white/70 m-0 leading-relaxed">{description}</p>
        )}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-white/90">{children}</div>}
    {footer && (
      <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2 bg-white/5">
        {footer}
      </div>
    )}
  </div>
);

export default GlassmorphismCard;
