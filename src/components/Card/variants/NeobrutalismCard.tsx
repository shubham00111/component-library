"use client";
import type { CardProps } from "../types";
import "./NeobrutalismCard.css";

const NeobrutalismCard = ({
  title,
  description,
  children,
  footer,
  image,
  imageAlt = "",
  className = "",
}: CardProps) => {
  return (
    <div className={["nb-card", className].filter(Boolean).join(" ")}>
      {image && <img src={image} alt={imageAlt} className="nb-card__image" />}
      {(title || description) && (
        <div className="nb-card__body">
          {title && <h3 className="nb-card__title">{title}</h3>}
          {description && <p className="nb-card__description">{description}</p>}
        </div>
      )}
      {children && <div className="nb-card__content">{children}</div>}
      {footer && <div className="nb-card__footer">{footer}</div>}
    </div>
  );
};

export default NeobrutalismCard;
