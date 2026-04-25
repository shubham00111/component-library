import "./VariantShowcase.css";

export interface VariantItem {
  label: string;
  designLanguage: "neobrutalism" | "shadcn" | "flowbite";
  children: React.ReactNode;
}

export interface VariantShowcaseProps {
  variants: VariantItem[];
  layout?: "row" | "column";
  title?: string;
}

const VariantShowcase = ({
  variants,
  layout = "row",
  title,
}: VariantShowcaseProps) => {
  return (
    <div className="vs-root">
      {title && <div className="vs-title">{title}</div>}
      <div className={`vs-grid vs-grid--${layout}`}>
        {variants.map((variant) => (
          <div key={variant.label} className="vs-card">
            <div className={`vs-label vs-label--${variant.designLanguage}`}>
              {variant.label}
            </div>
            <div className="vs-preview">{variant.children}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantShowcase;
