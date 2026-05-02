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

export const glassmorphismJsx = `const GlassmorphismCard = ({ title, description, children, footer, className = "" }) => (
  <div className={["bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] font-sans overflow-hidden hover:bg-white/15 transition-all duration-200", className].filter(Boolean).join(" ")}>
    {(title || description) && (
      <div className="p-4">
        {title && <h3 className="text-base font-semibold text-white m-0 mb-1.5 leading-snug">{title}</h3>}
        {description && <p className="text-sm text-white/70 m-0 leading-relaxed">{description}</p>}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-white/90">{children}</div>}
    {footer && <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2 bg-white/5">{footer}</div>}
  </div>
);`;

export const md3Jsx = `const Md3Card = ({ title, description, children, footer, className = "" }) => (
  <div className={["bg-[#fffbfe] border border-[#e7e0ec] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] font-sans overflow-hidden hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)] transition-shadow duration-200", className].filter(Boolean).join(" ")}>
    {(title || description) && (
      <div className="p-4">
        {title && <h3 className="text-base font-semibold text-[#1c1b1f] m-0 mb-1.5 leading-snug">{title}</h3>}
        {description && <p className="text-sm text-[#49454f] m-0 leading-relaxed">{description}</p>}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-[#1c1b1f]">{children}</div>}
    {footer && <div className="px-4 py-3 border-t border-[#e7e0ec] flex items-center gap-2 bg-[#f3edf7]">{footer}</div>}
  </div>
);`;

export const nmJsx = `const NmCard = ({ title, description, children, footer, className = "" }) => (
  <div className={["bg-[#e0e5ec] rounded-xl font-sans overflow-hidden shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)]", className].filter(Boolean).join(" ")}>
    {(title || description) && (
      <div className="p-4">
        {title && <h3 className="text-base font-semibold text-[#3d4f6e] m-0 mb-1.5 leading-snug">{title}</h3>}
        {description && <p className="text-sm text-[#6c7a9c] m-0 leading-relaxed">{description}</p>}
      </div>
    )}
    {children && <div className="px-4 pb-4 text-[#6c7a9c]">{children}</div>}
    {footer && <div className="px-4 py-3 border-t border-[rgba(163,177,198,0.3)] flex items-center gap-2 shadow-[inset_-2px_-2px_5px_#ffffff,_inset_2px_2px_5px_rgba(163,177,198,0.4)]">{footer}</div>}
  </div>
);`;
