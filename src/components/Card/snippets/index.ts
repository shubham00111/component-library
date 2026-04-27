export const neobrutalismJsx = `const NeobrutalismCard = ({ title, description, children, footer, image, imageAlt = "" }) => (
  <div className="bg-white border-[3px] border-black rounded-[2px] shadow-[4px_4px_0_#000] font-sans overflow-hidden hover:shadow-[6px_6px_0_#000] hover:-translate-x-px hover:-translate-y-px">
    {image && (
      <img src={image} alt={imageAlt} className="w-full h-[180px] object-cover border-b-[3px] border-b-black block" />
    )}
    {(title || description) && (
      <div className="p-4">
        {title && <h3 className="text-lg font-extrabold text-black m-0 mb-2 leading-snug">{title}</h3>}
        {description && <p className="text-[0.9375rem] text-[#333] m-0 leading-relaxed">{description}</p>}
      </div>
    )}
    {children && <div className="px-4 pb-4">{children}</div>}
    {footer && (
      <div className="px-4 py-2 border-t-[3px] border-t-black bg-yellow-400 flex items-center gap-2">
        {footer}
      </div>
    )}
  </div>
);`;

export const shadcnJsx = `const ShadcnCard = ({ title, description, children, footer, image, imageAlt = "" }) => (
  <div className="bg-white border border-zinc-200 rounded-[6px] shadow-sm font-sans overflow-hidden hover:shadow transition-shadow duration-150">
    {image && (
      <img src={image} alt={imageAlt} className="w-full h-[180px] object-cover block" />
    )}
    {(title || description) && (
      <div className="p-4">
        {title && <h3 className="text-base font-semibold text-zinc-900 m-0 mb-1.5 leading-snug">{title}</h3>}
        {description && <p className="text-sm text-zinc-500 m-0 leading-relaxed">{description}</p>}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-zinc-900">{children}</div>}
    {footer && (
      <div className="px-4 py-3 border-t border-zinc-200 flex items-center gap-2 bg-zinc-100">
        {footer}
      </div>
    )}
  </div>
);`;

export const flowbiteJsx = `const FlowbiteCard = ({ title, description, children, footer, image, imageAlt = "" }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm font-sans overflow-hidden hover:shadow-md transition-shadow duration-200">
    {image && (
      <img src={image} alt={imageAlt} className="w-full h-[180px] object-cover block" />
    )}
    {(title || description) && (
      <div className="p-4">
        {title && <h3 className="text-base font-medium text-gray-900 m-0 mb-1.5 leading-snug">{title}</h3>}
        {description && <p className="text-sm text-gray-500 m-0 leading-relaxed">{description}</p>}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-gray-900">{children}</div>}
    {footer && (
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex items-center gap-2">
        {footer}
      </div>
    )}
  </div>
);`;
