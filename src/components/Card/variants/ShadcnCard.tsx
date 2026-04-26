"use client";
import type { CardProps } from "../types";
import "./ShadcnCard.css";

const ShadcnCard = ({
  title,
  description,
  children,
  footer,
  image,
  imageAlt = "",
  className = "",
}: CardProps) => {
  return (
    <div className={["shadcn-card", className].filter(Boolean).join(" ")}>
      {image && <img src={image} alt={imageAlt} className="shadcn-card__image" />}
      {(title || description) && (
        <div className="shadcn-card__body">
          {title && <h3 className="shadcn-card__title">{title}</h3>}
          {description && <p className="shadcn-card__description">{description}</p>}
        </div>
      )}
      {children && <div className="shadcn-card__content">{children}</div>}
      {footer && <div className="shadcn-card__footer">{footer}</div>}
    </div>
  );
};

export default ShadcnCard;
