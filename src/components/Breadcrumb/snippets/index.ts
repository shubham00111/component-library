export const neobrutalismJsx = `const NeobrutalismBreadcrumb = ({ children }) => {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-0 font-sans">
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && <span className="mx-2 text-[0.9375rem] font-extrabold text-black select-none">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

NeobrutalismBreadcrumb.Item = ({ label, href }) =>
  href ? (
    <a href={href} className="text-[0.9375rem] font-extrabold text-black underline decoration-2 underline-offset-2 hover:bg-yellow-400 transition-colors">{label}</a>
  ) : (
    <span className="text-[0.9375rem] font-extrabold text-black" aria-current="page">{label}</span>
  );

// Usage:
// <NeobrutalismBreadcrumb>
//   <NeobrutalismBreadcrumb.Item label="Home" href="/" />
//   <NeobrutalismBreadcrumb.Item label="Components" href="/components" />
//   <NeobrutalismBreadcrumb.Item label="Button" />
// </NeobrutalismBreadcrumb>`;

export const shadcnJsx = `const ShadcnBreadcrumb = ({ children }) => {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap font-sans">
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && <span className="mx-2 text-sm text-zinc-400 select-none">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

ShadcnBreadcrumb.Item = ({ label, href }) =>
  href ? (
    <a href={href} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-150">{label}</a>
  ) : (
    <span className="text-sm font-medium text-zinc-900" aria-current="page">{label}</span>
  );`;

export const flowbiteJsx = `const FlowbiteBreadcrumb = ({ children }) => {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap font-sans">
        {items.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < items.length - 1 && <span className="mx-2 text-sm text-gray-400 select-none">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

FlowbiteBreadcrumb.Item = ({ label, href }) =>
  href ? (
    <a href={href} className="text-sm font-medium text-[#1c64f2] hover:text-[#1a56db] transition-colors duration-200">{label}</a>
  ) : (
    <span className="text-sm font-medium text-gray-500" aria-current="page">{label}</span>
  );`;

export const glassmorphismJsx = `const GlassmorphismBreadcrumb = ({ children }) => {
  const items = React.Children.toArray(children);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap font-sans">
        {items.map((child, i) => (
          <li key={i} className="flex items-center">
            {child}
            {i < items.length - 1 && <span className="mx-2 text-sm text-white/40 select-none">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
GlassmorphismBreadcrumb.Item = ({ label, href }) => href ? (
  <a href={href} className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-150">{label}</a>
) : (
  <span className="text-sm font-medium text-white" aria-current="page">{label}</span>
);`;

export const md3Jsx = `const Md3Breadcrumb = ({ children }) => {
  const items = React.Children.toArray(children);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap font-sans">
        {items.map((child, i) => (
          <li key={i} className="flex items-center">
            {child}
            {i < items.length - 1 && <span className="mx-1.5 text-sm text-[#79747e] select-none">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
Md3Breadcrumb.Item = ({ label, href }) => href ? (
  <a href={href} className="text-sm font-medium text-[#6750a4] hover:bg-[#6750a4]/8 rounded px-1 py-0.5 transition-colors duration-200">{label}</a>
) : (
  <span className="text-sm font-medium text-[#1c1b1f]" aria-current="page">{label}</span>
);`;

export const nmJsx = `const NmBreadcrumb = ({ children }) => {
  const items = React.Children.toArray(children);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap font-sans">
        {items.map((child, i) => (
          <li key={i} className="flex items-center">
            {child}
            {i < items.length - 1 && <span className="mx-2 text-sm text-[#6c7a9c]/40 select-none font-light">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
NmBreadcrumb.Item = ({ label, href }) => href ? (
  <a href={href} className="text-sm font-semibold text-[#6c7a9c] hover:text-[#3d4f6e] transition-colors duration-150">{label}</a>
) : (
  <span className="text-sm font-semibold text-[#3d4f6e]" aria-current="page">{label}</span>
);`;
