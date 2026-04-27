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
      "dark:bg-zinc-900 dark:border-white dark:shadow-[4px_4px_0_rgba(255,255,255,0.35)] dark:hover:shadow-[6px_6px_0_rgba(255,255,255,0.35)]",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {image && (
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-[180px] object-cover border-b-[3px] border-b-black dark:border-b-white block"
      />
    )}
    {(title || description) && (
      <div className="p-4">
        {title && (
          <h3 className="text-lg font-extrabold text-black dark:text-white m-0 mb-2 leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-[0.9375rem] text-[#333] dark:text-zinc-300 m-0 leading-relaxed">{description}</p>
        )}
      </div>
    )}
    {children && <div className="px-4 pb-4">{children}</div>}
    {footer && (
      <div className="px-4 py-2 border-t-[3px] border-t-black dark:border-t-white bg-yellow-400 flex items-center gap-2">
        {footer}
      </div>
    )}
  </div>
);

export default NeobrutalismCard;
