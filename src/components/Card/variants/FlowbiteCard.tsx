"use client";
import type { CardProps } from "../types";
import "./FlowbiteCard.css";

const FlowbiteCard = ({
  title,
  description,
  children,
  footer,
  image,
  imageAlt = "",
  className = "",
}: CardProps) => {
  return (
    <div className={["fb-card", className].filter(Boolean).join(" ")}>
      {image && <img src={image} alt={imageAlt} className="fb-card__image" />}
      {(title || description) && (
        <div className="fb-card__body">
          {title && <h3 className="fb-card__title">{title}</h3>}
          {description && <p className="fb-card__description">{description}</p>}
        </div>
      )}
      {children && <div className="fb-card__content">{children}</div>}
      {footer && <div className="fb-card__footer">{footer}</div>}
    </div>
  );
};

export default FlowbiteCard;
